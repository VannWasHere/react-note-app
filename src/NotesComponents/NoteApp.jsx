import Form from "../Components/Form";
import ItemCard from "../Components/ItemCard";
import { useEffect, useMemo, useState } from "react";

const NoteApp = ({ input }) => {
    
    // Using memo because "This" data is dependencies in useEffect
    const data = useMemo(() => [
        {
            id: +new Date() + 1,
            title: "Learn React",
            body: "If you're looking to dive into the world of modern web development, one of the key skills you should consider acquiring is learning React. React, developed and maintained by Facebook, has become a powerhouse in building user interfaces for web applications. Known for its component-based architecture and virtual DOM, React allows developers to create interactive and dynamic user interfaces with ease.",
            archived: false,
            createdAt: '2022-12-14T04:27:34.572Z',
        },
        {
            id: +new Date() + 2,
            title: "Cloud Computing",
            body: "In the rapidly evolving landscape of information technology, cloud computing stands as a transformative force, reshaping the way businesses and individuals leverage computing resources. By providing on-demand access to a shared pool of configurable computing resources—such as servers, storage, and applications—over the internet, cloud computing offers unprecedented scalability, flexibility, and cost efficiency.",
            archived: false,
            createdAt: '2022-08-14T04:27:34.572Z',
        },
        {
            id: +new Date() + 3,
            title: "Node JS",
            body: "Node.js, an open-source, cross-platform JavaScript runtime, has emerged as a game-changer in server-side development. Built on the V8 JavaScript runtime engine, Node.js enables developers to execute JavaScript code outside of a browser, facilitating the development of scalable and high-performance web applications. Its non-blocking, event-driven architecture allows for asynchronous handling of requests, making it particularly well-suited for building real-time applications and APIs.",
            archived: true,
            createdAt: '2022-03-14T04:27:34.572Z',
        }
    ], []);

    const [rawNotes, setRawNotes] = useState(data);
    const [filterNotes, setFilterNotes] = useState(data);

    const onChangeData = (updateData) => {
        setRawNotes(updateData);
        setFilterNotes(updateData);
    }

    useEffect(() => {
        if(input.trim() !== "") {
            const searchData = filterNotes.filter(data => data.title.toLowerCase().includes(input.toLowerCase()));
            setFilterNotes(searchData)
        } else {
            setFilterNotes(rawNotes);
        }
    }, [filterNotes, input, rawNotes])

    return (
        <main className="w-2/3 m-auto">
            <Form notes={rawNotes} onChangeData={onChangeData}/>
            <section className="mb-5">
                <ItemCard onNotesUpdate={onChangeData} notes={filterNotes} />
            </section>
        </main>
    );
}

export default NoteApp;