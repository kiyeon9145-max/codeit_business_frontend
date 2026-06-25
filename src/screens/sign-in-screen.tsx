import { useState, type SubmitEvent } from "react";
import InputComponent from "../components/input-component";
import ButtonComponent from "../components/button-component";
import { useNavigate } from "react-router-dom";
import useSignIn from "../hooks/use-sign-in";
import z from "zod";
import { parseZodError } from "../utils/zod-error";
import { ApiError } from "../api/auth-api";
import { toastActions } from "../store/toast-slice";
import { useDispatch } from "react-redux";

const signInDataSchema = z.object({
  email: z.email("이메일 형식이 올바르지 않습니다."),
  password: z.string().min(4, "비밀번호는 최소 4자 이상입니다."),
});

const SignInScreen = () => {
  const dispatch = useDispatch();

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
      (err: { errorCode: string }) => {
        dispatch(
          toastActions.set({
            message:
              err.errorCode === "INVALID_AUTH"
                ? "이메일 또는 비밀번호가 잘못되었어요"
                : "알 수 없는 에러가 발생했어요",
            code: err.errorCode === "INVALID_AUTH" ? 101 : 500,
          }),
        );
      },
    );
  };

  // 부수효과

  // 화면
  return (
    <div>
      <h1>메모잇</h1>

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
          errorMessage={
            zodError === null ? "" : parseZodError(zodError, "email")
          }
        />
        <InputComponent
          label="비밀번호"
          id="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={(e) => {
            setPassword(() => e.target.value);
          }}
          errorMessage={
            zodError === null ? "" : parseZodError(zodError, "password")
          }
        />
        <div style={{ height: 30 }}></div>
        <ButtonComponent
          style={{ width: "100%", marginBottom: 16 }}
          text={isPending ? "진행중..." : "로그인"}
          type="submit"
        />
      </form>
      <ButtonComponent
        style={{ width: "100%", marginBottom: 16 }}
        text={"회원가입"}
        type="button"
      />
    </div>
  );
};

export default SignInScreen;