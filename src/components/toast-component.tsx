const ToastComponent = () => {
    return (
        <div style={{
            minWidth: 100,
            position: "fixed",
            bottom: 30,
            left: 16,
            backgroundColor: "#e74c3c",
            padding: 12,
            borderRadius: 8,
            fontSize: 12,
            color: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
        }}>
            서버에 알 수 없는 에러가 발생했어요
        </div>
    )
}

export default ToastComponent;