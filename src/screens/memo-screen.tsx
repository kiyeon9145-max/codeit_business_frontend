import { useNavigate } from "react-router-dom";
import ButtonComponent from "../components/button-component";

import useMe from "../hooks/use-me";
import useMemoService from "../hooks/use-memo";
import MemoCardComponent from "../components/memo-card-component";


const MemoScreen = () => {
  const navigate = useNavigate();
  const { data: me, isLoading, error } = useMe();
  const { memos } = useMemoService();
  console.log(me);

  if (isLoading === true || me === undefined) {
    return <div>잠시만 기다려주세요...</div>;
  }

  const avatarUrl = `https://ui-avatars.com/api/?name=${me.username}&background=random`;

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
        }}
      >
        <img
          src={avatarUrl}
          alt=""
          style={{ width: 50, height: 50, borderRadius: 100 }}
        />
        <h1>{me.username}</h1>
      </div>

      <div style={{ height: 30 }}></div>

      <ButtonComponent
        text="+ 메모 추가하기"
        type="button"
        style={{ width: "100%" }}
        onClick={() => navigate("/memo/write")}
      ></ButtonComponent>
      <div style={{ height: 30 }}></div>

      {memos.map((memo) => (
        <MemoCardComponent
          key={memo.title}
          title={memo.title}
          content={memo.content}
          date={memo.date}
        ></MemoCardComponent>
      ))}
    </div>
  );
};

export default MemoScreen;