const ItemCard = ({ title, body, createdAt }) => {
    return (
        <div className="mt-5">
            <p>{title}</p>
            <p>{body}</p>
            <p>{createdAt}</p>
        </div>   
    );
}

export default ItemCard;