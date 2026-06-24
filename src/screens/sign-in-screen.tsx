import ButtonComponent from "../components/button-component";
import InputComponent from "../components/input-component";

const SignInScreen = () => {
  // 상태
  
  return (<div>
    <h1>로그인</h1>
    <div style={{ height: 30}}></div>
    <InputComponent label="이메일" id="email" type="email" placeholder="이메일을 입력해주세요" />
    <InputComponent label="비밀번호" id="password" type="password" placeholder="비밀번호를 입력해주세요" />
    <ButtonComponent text="로그인"/>
    <ButtonComponent text="회원가입"/>
  </div>);
};
export default SignInScreen;
