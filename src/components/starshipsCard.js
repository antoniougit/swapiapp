import React from 'react';

const StarshipsCard = ({name,model,manufacturer,cost_in_credits,length,max_atmosphering_speed,crew,passengers,cargo_capacity,consumables,hyperdrive_rating, MGLT,starship_class}) => {
    return(
        <div className="bg-yellow shadow-5 tc grow dib pa3 ma2 br3">
            <h3>{name}</h3>
            <p>model: {model}</p>
            <p>manufacturer: {manufacturer}</p>
            <p>cost: {cost_in_credits>0 ? `${cost_in_credits} credits` : `unknown`}</p>
            <p>length: {length} meters</p>
            <p>max atmosphering speed: {max_atmosphering_speed}</p>
            <p>crew: {crew}</p>
            <p>passengers: {passengers}</p>
            <p>cargo capacity: {cargo_capacity}</p>
            <p>consumables: {consumables}</p>
            <p>hyperdrive rating: {hyperdrive_rating}</p>
            <p>mglt: {MGLT}</p>
            <p>starship class: {starship_class}</p>
        </div>
    );
}

export default StarshipsCard;