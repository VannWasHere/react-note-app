const Button = ({clickStatement, Text}) => {
    return (
        <button className="w-full bg-slate-500 p-2 text-white rounded-lg" onClick={clickStatement}>{Text}</button>
    );
}

export default Button;