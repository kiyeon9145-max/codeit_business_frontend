type InputComponentProps = {
    label: string,
    id: string,
    type: React.HTMLInputTypeAttribute,
    placeholder: string,
}

const InputComponent = (props: InputComponentProps) => {
    const { label, id, type, placeholder } = props
return (
<div style={{ marginBottom: 30 }}>
      <label style={{ display: "block", marginBottom: 4 }} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        style={{
          width: "100%",
          padding: 12,
          borderRadius: 8,
          fontSize: 14,
          border: "1px solid #ccc",
        }}
        type={type}
        placeholder={placeholder}
        />
        </div>
    );
}

export default InputComponent;