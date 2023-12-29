import Button from "./Button";

const ItemCard = ({ title, body, createdAt }) => {

    return (
        <section className="bg-slate-800 text-white p-4 rounded-lg">
            <div>
                <h1 className="text-xl">{title}</h1>
                <h3 className="text-slate-400 mb-2">{createdAt}</h3>
                <p className="text-sm">{body}</p>
            </div>
            <div className="flex gap-5 mt-4">
                <Button Text={"Delete"}/>
                <Button Text={"Archive"}/>
            </div>
        </section>   
    );

}

export default ItemCard;