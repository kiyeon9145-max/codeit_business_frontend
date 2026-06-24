import { useState, type SubmitEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputComponent from "../components/input-component";
import ButtonComponent from "../components/button-component";
import { signInRequest } from "../api/auth-api";
import { authActions } from "../store/auth-slice";
import { useNavigate } from "react-router-dom";

const SignInScreen = () => {
  // 상태
  const [email, setEmail] = useState("asd");
  const [password, setPassword] = useState("111");

  const [isPending, setIsPending] = useState(false);

  // 함수
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmitSignInForm = async (e: SubmitEvent) => {
    e.preventDefault();

    setIsPending(true);
    const { token } = await signInRequest({ email, password });
    console.log(token);
    dispatch(authActions.signIn({ token }));
    navigate("/memo");
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
            setEmail(() => {
              return e.target.value;
            });
          }}
        />
        <InputComponent
          label="비밀번호"
          id="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={(e) => {
            setPassword(() => {
              return e.target.value;
            });
          }}
        />
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
