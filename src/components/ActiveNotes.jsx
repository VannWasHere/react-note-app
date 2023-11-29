import Card from "./Card";

const ActiveNotes = () => {
    return (
        <div className="mt-5">
            <h1 className="text-3xl font-bold">Active Notes</h1>
            <div className="flex flex-wrap gap-3 w-full">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}
export default ActiveNotes;