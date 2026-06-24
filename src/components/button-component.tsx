type ButtonComponentProps = {
  text: string;
  type: "submit" | "reset" | "button";
};

const ButtonComponent = (props: ButtonComponentProps) => {
  const { text, type } = props;
  return (
    <button
      style={{
        width: "100%",
        padding: 12,
        cursor: "pointer",
        borderRadius: 8,
        border: "0",
        backgroundColor: "#3a6bfe",
        color: "#fff",
        fontSize: 16,
        marginBottom: 16,
      }}
      type={type}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
