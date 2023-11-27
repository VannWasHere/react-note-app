import Button from "./Button";

const FormInput = () => {
    return (
        <div className="w-full p-5 border rounded-lg">
            <h1 className="text-3xl font-bold">Input Notes</h1>
            <form method="post" required className="mt-4 flex flex-col justify-center">
                <p maxLength="50" id="title-length" className="flex justify-end mb-2 text-gray-400">50 Chars Left</p>
                <input 
                type="text" 
                className="bg-yellow-200 p-2 rounded-xl"
                placeholder="Note Title"/> <br />
                
                <textarea 
                type="text"
                draggable="false" 
                rows={8}
                className="bg-yellow-200 p-2 rounded-xl resize-none"
                placeholder="Note Title"/>  

                <Button text={"Submit Form"}/>
            </form>
        </div>
    );
}
export default FormInput;