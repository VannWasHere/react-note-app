const Button = ({clickStatement}) => {
    return (
        <button className="w-1/5 bg-slate-500 p-2 ml-2 text-white" onClick={clickStatement}>Submit</button>
    );
}

export default Button;