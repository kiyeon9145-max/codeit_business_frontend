type ButtonComponentProps = {
    text: string
}

const ButtonComponent = (props: ButtonComponentProps) => {
    const {text} = props;
    return(
        < button style={{
            width: "100%",
            padding: 12,
            cursor: "pointer",
            borderRadius: 8,
            border: "0",
            backgroundColor: "#3a6bfe",
            color: "#fff",
            fontSize: 16,
            marginBottom: 16,
            
          }}>{text}</button>
    )
};

export default ButtonComponent;