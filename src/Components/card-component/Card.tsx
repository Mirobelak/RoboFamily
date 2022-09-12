import { Robot } from "../../App";
import "./Card.css"

type Cardprops = {
    robot: Robot;
}

const Card = ({robot}: Cardprops) => {
    const {name, email, id } = robot
    return (
        <div className= "card-container" >
            <img alt="roboti" src={`https://robohash.org/${id}?180x180`}>
            </img>
            <div>
               <h2>{name}</h2>
               <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;

