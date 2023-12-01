import Button from "./Button";
import { useState } from "react";

const Form = () => {
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");

    const onFormSubmit = () => {
        const insertedNotes = {
            id: +new Date(),
            title: title,
            body: description,
            archived: false,
            createdAt: new Date().getTime(),
        }
        console.log(insertedNotes);
    }

    return (
        <>
            <div className="mt-3 p-3">
                <input 
                type="text"
                value={title}
                placeholder="Input Title"
                className="w-1/5 p-2 outline"
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="mt-3 p-3">
                <textarea
                    type="text"
                    value={description}
                    placeholder="Description Notes"
                    className="w-1/5 p-2 outline"
                    onChange={(e) => setdescription(e.target.value)}
                    />
            </div>
            <Button clickStatement={onFormSubmit}/>
        </>
    );
}

export default Form;