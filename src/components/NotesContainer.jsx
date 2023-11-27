import ActiveNotes from "./ActiveNotes";
import ArchivedNotes from "./ArchivedNotes";

const NotesContainer = () => {
    return (
        <div className="w-full">
            <ActiveNotes />
            <ArchivedNotes />
        </div>
    );
}
export default NotesContainer;