import ButtonComponent from "../components/button-component";
import MemoCardComponent from "../components/memo-card-component";
import useMe from "../hooks/use-me";
import useMemoService from "../hooks/use-memo";

const MemoScreen = () => {
  const { data: me, isLoading, error } = useMe();
  const { memos } = useMemoService();
  // 1. 내 정보를 불러오자
  // 2. 내가 작성한 메모를 불러오자
  if (me === null) {
    return <div>잠시만 기다려 주세요...</div>;
  }

  const avatarUrl = `https://ui-avatars.com/api/?name=${me.username}&background=random`;

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
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
      />
      <div style={{ height: 30 }}></div>

      {memos.map((memo) => (
        <MemoCardComponent
          key={memo.id}
          title={memo.title}
          content={memo.content}
          createdAt={memo.createdAt}
          onEdit={() => alert(`"${memo.title}" 수정 중...`)}
        />
      ))}
    </div>
  );
};

export default MemoScreen;
