import AddNotes from "./AddNotes";
import Card from "../Components/ItemCard"

const NoteApp = () => {
    
    const data = [
        {
            id: +new Date(),
            title: "Learn React",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptates autem! Architecto, totam non. Doloremque minus praesentium delectus dolor odio!",
            archived: false,
            createdAt: '2022-04-14T04:27:34.572Z',
        }
    ]
    
    return (
        <>
            <AddNotes />
            {data.map((note, key) => (
                <Card key={key} title={note.title} body={note.body} createdAt={note.createdAt}/>
            ))}
        </>
    );
}

export default NoteApp;