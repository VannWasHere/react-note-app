import Button from "./Button";
import { useState, useEffect } from "react";

const Form = ({notes, onChangeData}) => {
    const [getNotes, setNotes] = useState(notes) 
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");

    useEffect(() => {
        setNotes(notes);
    }, [notes]);

    const onFormSubmit = () => {
        const insertedNotes = {
            id: +new Date(),
            title: title,
            body: description,
            archived: false,
            createdAt: new Date().getTime(),
        }
        setTitle("");
        setdescription("");
        setNotes([...getNotes, insertedNotes]);
        onChangeData([...getNotes, insertedNotes]);
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