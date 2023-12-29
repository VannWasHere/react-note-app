import Button from "./Button";
import { useState, useEffect } from "react";

const Form = ({notes, onChangeData}) => {
    const [getNotes, setNotes] = useState(notes);
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");
    const [limitTitle, setLimit] = useState(0);

    useEffect(() => {
        setNotes(notes);
    }, [notes]);

    const onFormSubmit = () => {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString();
        if(title != "" && description != "") {
            const insertedNotes = {
                id: +new Date(),
                title: title,
                body: description,
                archived: false,
                createdAt: formattedDate,
            }
            setTitle("");
            setdescription("");
            setNotes([...getNotes, insertedNotes]);
            onChangeData([...getNotes, insertedNotes]);
        } else {
            alert("The Form Can't Be Null");
        }
    }

    const disableInput = (e) => {
        if(limitTitle >= 50) {
            const userInput = e.target.value;
            const truncatedValue = userInput.slice(0,50);
            setTitle(truncatedValue);
            setLimit(truncatedValue.length);
        }
    }

    return (
        <section className="w-full flex justify-center">
            <div className="w-1/2">
                <div className="mt-3 p-3">
                    <input 
                    type="text"
                    value={title}
                    placeholder="Input Title"
                    className="w-full p-2"
                    onChange={(e) => [setTitle(e.target.value), setLimit(e.target.value.length), disableInput(e)]}
                    />
                </div>

                <p className="flex justify-end">Limit Character: {limitTitle}/50</p>

                <div className="mt-3 p-3">
                    <textarea
                        type="text"
                        value={description}
                        placeholder="Description Notes"
                        className="w-full h-32 p-2"
                        onChange={(e) => setdescription(e.target.value)}
                        />
                </div>
                <Button clickStatement={onFormSubmit} Text={"Add Notes"}/>
            </div>
        </section>
    );
}

export default Form;