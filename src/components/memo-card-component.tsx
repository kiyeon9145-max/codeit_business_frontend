type MemoCardComponentProps = {
  title: string;
  content: string;
  date: string;
};

const MemoCardComponent = (props: MemoCardComponentProps) => {
  const { title, content, date } = props;

  return (
    <div
      style={{
        padding: 16,
        marginBottom: 12,
        borderRadius: 8,
        border: "1px solid #e5e7eb",
        backgroundColor: "#fff",
      }}
    >
      <h2 style={{ margin: 0, fontSize: 18 }}>{title}</h2>
      <p style={{ margin: "8px 0 0", color: "#6b7280" }}>{content}</p>
      <div
        style={{
          marginTop: 12,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 12, color: "#9ca3af" }}>{date}</span>
        <p
          style={{
            margin: 0,
            color: "#3a6bfe",
            cursor: "pointer",
            fontSize: 14,
          }}
        >
          수정하기
        </p>
      </div>
    </div>
  );
};

export default MemoCardComponent;