type MemoCardComponentProps = {
  title: string;
  content: string;
  createdAt?: string;
  onEdit?: () => void;
};

const MemoCardComponent = (props: MemoCardComponentProps) => {
  const { title, content, createdAt, onEdit,} = props;

  return (
    <div
      style={{
        padding: "20px 24px",
        marginBottom: 12,
        borderRadius: 12,
        border: "1px solid #e5e7eb",
        backgroundColor: "#fff",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {/* 상단 강조 바 */}
      <div
        style={{
          width: 36,
          height: 4,
          borderRadius: 4,
          backgroundColor: "#3a6bfe",
        }}
      />

      {/* 제목 */}
      <h2
        style={{
          margin: 0,
          fontSize: 17,
          fontWeight: 700,
          color: "#111827",
          lineHeight: 1.4,
        }}
      >
        {title}
      </h2>

      {/* 이야기 */}
      <p
        style={{
          margin: 0,
          fontSize: 14,
          color: "#6b7280",
          lineHeight: 1.7,
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      >
        {content}
      </p>

      {/* 하단 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 4,
          paddingTop: 12,
          borderTop: "1px solid #f3f4f6",
        }}
      >
        {createdAt && (
          <span style={{ fontSize: 12, color: "#9ca3af" }}>{createdAt}</span>
        )}
        <span
          onClick={onEdit}
          style={{
            marginLeft: "auto",
            fontSize: 13,
            color: "#3a6bfe",
            cursor: "pointer",
            fontWeight: 500,
          }}
        >
          수정하기
        </span>
      </div>
    </div>
  );
};

export default MemoCardComponent;
