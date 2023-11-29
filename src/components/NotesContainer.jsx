import ActiveNotes from "./ActiveNotes";
import ArchivedNotes from "./ArchivedNotes";

const NotesContainer = (props) => {
    console.log(props);
    return (
        <div className="w-full">
            <ActiveNotes />
            <ArchivedNotes />
        </div>
    );
}
export default NotesContainer;