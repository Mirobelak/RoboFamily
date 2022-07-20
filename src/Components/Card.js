import React from 'react';


const Card = ({name, email, id }) => {
    return (
        <div className= "card d-inline-flex p-1 bd-highlight text-center " >
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

