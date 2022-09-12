import Card from '../card-component/Card'
import { Robot } from '../../App'
import './CardList.css';

type CardListProps = {
    robots: Robot[];
};

const CardList = ({robots}: CardListProps) => {

    return (

        <div className="card-list">
            {robots.map((robot) => { return <Card key={robot.id} robot={robot}/>})}
        </div>

    )
}

export default CardList;

