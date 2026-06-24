import { useState } from "react";
import { useSelector } from "react-redux";
import InputComponent from "../components/input-component";
import ButtonComponent from "../components/button-component";

const SignInScreen = () => {
  // 상태
  const [email, setEmail] = useState("asd");
  const [password, setPassword] = useState("111");

  // 함수
  const onSubmitSignInForm = () => {
    console.log(email, password, "를 서버에 제출해서 로그인을 시도합니다");
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

        <ButtonComponent text={"로그인"} type="submit" />
      </form>
      <ButtonComponent text={"회원가입"} type="button" />
    </div>
  );
};

export default SignInScreen;
