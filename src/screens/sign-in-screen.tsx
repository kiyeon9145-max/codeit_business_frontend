import { useState, type SubmitEvent } from "react";
import InputComponent from "../components/input-component";
import ButtonComponent from "../components/button-component";
import { useNavigate } from "react-router-dom";
import useSignIn from "../hooks/use-sign-in";
import z from "zod";
import { parseZodError } from "../utils/zod-error";

const signInDataSchema = z.object({
  email: z.email("이메일 형식이 올바르지 않습니다."),
  password: z.string().min(4, "비밀번호는 최소 4자 이상입니다."),
});

const SignInScreen = () => {
  // 상태
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [zodError, setZodError] = useState<z.ZodError | null>(null);

  // 함수
  const navigate = useNavigate();
  const { isPending, mutate: signInMutate } = useSignIn();

  const onSubmitSignInForm = async (e: SubmitEvent) => {
    e.preventDefault();

    const { success, data, error } = signInDataSchema.safeParse({
      email,
      password,
    });
    if (success === false) {
      setZodError(error);
      return;
    }

    signInMutate(
      data,
      () => {
        navigate("/memo");
      },
      (err) => {
        console.log(err);
      },
    );
  };

  // 부수효과

  // 화면
  return (
    <div>
      <h1>로그인</h1>

      <div style={{ height: 30 }}></div>

      <form onSubmit={onSubmitSignInForm}>
        <InputComponent
          label="이메일"
          id="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={(e) => {
            setEmail(() => e.target.value);
          }}
        />
        {zodError === null ? null : (
          <span>{parseZodError(zodError, "email")}</span>
        )}
        <InputComponent
          label="비밀번호"
          id="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={(e) => {
            setPassword(() => e.target.value);
          }}
        />
        {zodError === null ? null : (
          <span>{parseZodError(zodError, "password")}</span>
        )}
        <div style={{ height: 30 }}></div>
        <ButtonComponent
          text={isPending ? "진행중..." : "로그인"}
          type="submit"
        />
      </form>
      <ButtonComponent text={"회원가입"} type="button" />
    </div>
  );
};

export default SignInScreen;