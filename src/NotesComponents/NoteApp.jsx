import Form from "../Components/Form";
import ItemCard from "../Components/ItemCard";
import { useEffect, useMemo, useState } from "react";

const NoteApp = ({ input }) => {
    
    // Using memo because "This" data is dependencies in useEffect
    const data = useMemo(() => [
        {
            id: 1,
            title: "Babel",
            body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
            createdAt: '2022-04-14T04:27:34.572Z',
            archived: false,
          },
          {
            id: 2,
            title: "Functional Component",
            body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
            createdAt: '2022-04-14T04:27:34.572Z',
            archived: false,
          },
          {
            id: 3,
            title: "Modularization",
            body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
            createdAt: '2022-04-14T04:27:34.572Z',
            archived: false,
          },
          {
            id: 4,
            title: "Lifecycle",
            body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
            createdAt: '2022-04-14T04:27:34.572Z',
            archived: false,
          },
          {
            id: 5,
            title: "ESM",
            body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
            createdAt: '2022-04-14T04:27:34.572Z',
            archived: false,
          },
          {
            id: 6,
            title: "Module Bundler",
            body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
            createdAt: '2022-04-14T04:27:34.572Z',
            archived: false,
          },
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