import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

const Card = () => {
    return (
        <div className="p-5 border border-yellow-300 basis-3/12">
            <CardHeader />
            <CardBody />
        </div>
    );
}

export default Card;