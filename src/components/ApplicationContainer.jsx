import FormInput from "./FormInput";
import NotesContainer from "./NotesContainer";
const ApplicationContainer = () => {
    const notesData = [
        {
            id: 123,
            title: "Halo-halo Bandung",
            body: "Saya suka sekali belajar di bandung sambil bermain game",
            archived: false,
            createdAt: '2022-04-14T04:27:34.572Z'
        }
    ]
    return (
        <div className="flex flex-col w-4/5 mt-3 h-full items-center gap-5">
            <FormInput />
            <NotesContainer props={notesData}/>
        </div>
    );
}

export default ApplicationContainer;