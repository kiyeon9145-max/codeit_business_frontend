type ButtonComponentProps = {
  text: string;
  type: "submit" | "reset" | "button";
  style?: React.CSSProperties;
};

const ButtonComponent = (props: ButtonComponentProps) => {
  const { text, type, style } = props;
  return (
    <button
      style={{
        padding: 12,
        cursor: "pointer",
        borderRadius: 8,
        border: "0",
        backgroundColor: "#3a6bfe",
        color: "#fff",
        fontSize: 16,
        ...style,
      }}
      type={type}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
