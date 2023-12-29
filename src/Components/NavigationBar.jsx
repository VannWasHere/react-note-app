export default function NavigationBar() {
    return (
        <header className="p-8 bg-slate-700">
            <nav className="flex justify-between text-white">
                <h1 className="text-3xl font-bold">Note App</h1>
                <input type="text" className="bg-slate-400 rounded-xl w-2/12 placeholder:text-white focus:outline-none p-3" placeholder="Search Notes"/>
            </nav>
        </header>
    );
}