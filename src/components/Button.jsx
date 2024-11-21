const Button = ({ text, type, style, data, icon }) => {
    return <button
        type={`${type}`}
        // onClick={event(data)}
        className={`${style}`}
    >
        {icon && <>{icon}&nbsp;</>}
        {text}
    </button>
}

export default Button