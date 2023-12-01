const Input = () => {
    return (
        <>
            <div className="mt-3 p-3">
                <input 
                type="text"
                placeholder="Input Title"
                className="w-1/5 p-2 outline"
                />
            </div>

            <div className="mt-3 p-3">
                <textarea
                    type="text"
                    placeholder="Input Title"
                    className="w-1/5 p-2 outline"
                    />
            </div>
        </>
    );
}

export default Input;