import Button from "./Button";

const CardBody = () => {
    return (
        <>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam omnis, quibusdam eos obcaecati, porro dignissimos, natus repellat excepturi inventore ipsam rem praesentium temporibus maxime magni officiis sapiente amet impedit? Eaque, iste quo. Modi facilis aliquid maiores ex doloremque omnis at ipsa, maxime cumque quas deleniti accusamus ipsam. Numquam, quasi!</p>
            <div className="flex">
                <Button text={"Delete"}/>
                <span className="mr-3" />
                <Button text={"Archived"}/>
            </div>
        </>
    );
}

export default CardBody;