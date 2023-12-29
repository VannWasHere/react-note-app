import { useEffect, useState } from "react";
import Button from "./Button";

const ItemCard = ({ notes, onNotesUpdate }) => {

    const [ongoingNotes, setOnGoingNotes] = useState([]);
    const [archivedNotes, setArchivedNotes] = useState([]);

    useEffect(() => {
        if(notes) {
            setArchivedNotes(notes.filter((n) => n.archived == true))
            setOnGoingNotes(notes.filter((n) => n.archived !== true))
        }
    }, [notes])

    const deleteNotes = (id) => {
        const filteredArr = notes.filter((note) => note.id !== id);
        onNotesUpdate(filteredArr);
    }

    const moveNotes = (id) => {
        const editedData = notes.map((note) => {
            if(note.id == id) {
                return {
                    ...note,
                    archived: !note.archived
                };
            }
            return note;
        });
        onNotesUpdate(editedData);
    }
    return (
        <>
            <h1 className="mt-2 text-2xl font-bold uppercase">OnGoing Notes</h1>
            <div className="mt-2 grid grid-cols-3 gap-8">
                {
                    ongoingNotes.map((note, key) =>(
                        <section key={key} className="bg-slate-800 text-white p-4 rounded-lg">
                            <div>
                                <h1 className="text-xl">{note.title}</h1>
                                <h3 className="text-slate-400 mb-2">{note.createdAt}</h3>
                                <p className="text-sm">{note.body}</p>
                            </div>
                            <div className="flex gap-5 mt-4">
                                <Button clickStatement={() => {deleteNotes(note.id)}} Text={"Delete"}/>
                                <Button clickStatement={() => {moveNotes(note.id)}} Text={"Archive"}/>
                            </div>
                        </section>
                    ))
                }
            </div>
            <h1 className="mt-8 text-2xl text-indigo-700 font-bold uppercase">Archived Notes</h1>
            <div className="mt-2 grid grid-cols-3 gap-8">
                {
                    archivedNotes.map((note, key) =>(
                        <section key={key} className="bg-indigo-900 text-white p-4 rounded-lg">
                            <div>
                                <h1 className="text-xl">{note.title}</h1>
                                <h3 className="text-slate-400 mb-2">{note.createdAt}</h3>
                                <p className="text-sm">{note.body}</p>
                            </div>
                            <div className="flex gap-5 mt-4">
                                <Button clickStatement={() => {deleteNotes(note.id)}} Text={"Delete"}/>
                                <Button clickStatement={() => {moveNotes(note.id)}} Text={"Open Notes"}/>
                            </div>
                        </section>
                    ))
                }
            </div>
        </>
    );

}

export default ItemCard;