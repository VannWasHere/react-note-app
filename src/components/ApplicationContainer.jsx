import FormInput from "./FormInput";
import NotesContainer from "./NotesContainer";
const ApplicationContainer = () => {
    const notesData = [];
    return (
        <div className="flex flex-col w-4/5 mt-3 h-full items-center gap-5">
            <FormInput props={notesData}/>
            <NotesContainer props={notesData}/>
        </div>
    );
}

export default ApplicationContainer;