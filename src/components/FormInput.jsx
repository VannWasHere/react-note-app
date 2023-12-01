import Button from "./Button";
import { useState } from "react";

const FormInput = (props) => {
    
    const [getCounter, setCounter] = useState(50);
    const [getData, setData] = useState(props);

    const handleInputChange = (event) => {
        const value = event.target.value;
        const maxValue = event.target.maxLength;
        const remainingChar = maxValue-value.length;
        setCounter(remainingChar)
    }

    return (
        <div className="w-3/4 p-5">
            <h1 className="text-4xl text-center uppercase tracking-wider font-bold">Input Notes</h1>
            <form method="post" required className="mt-4 flex flex-col justify-center">
                <p id="title-length" className="flex justify-end mb-2 text-gray-400">{getCounter} Chars Left</p>
                <input 
                type="text"
                className="bg-yellow-200 p-3 rounded-xl focus:outline-none"
                maxLength={50}
                onChange={handleInputChange}
                placeholder="Note Title"/> 
                <br />
                
                <textarea 
                type="text"
                draggable="false" 
                rows={8}
                className="bg-yellow-200 p-3 rounded-xl mb-3 focus:outline-none resize-none"
                placeholder="Note Title"/>  

                <Button text={"Submit Form"}/>
            </form>
        </div>
    );
}
export default FormInput;