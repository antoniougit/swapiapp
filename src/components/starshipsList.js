import React from 'react';
import StarshipsCard from './starshipsCard';

const StarshipsList = ({ starships }) => {
    return(
        <div>
            {starships.map((user,i) => {
                return (
                    <StarshipsCard
                    key={i} 
                    name={starships[i].name.toLowerCase()} 
                    model={starships[i].model.toLowerCase()}
                    manufacturer={starships[i].manufacturer.toLowerCase()}
                    cost_in_credits={starships[i].cost_in_credits} 
                    length={starships[i].length} 
                    max_atmosphering_speed={starships[i].max_atmosphering_speed}
                    crew={starships[i].crew} 
                    passengers={starships[i].passengers} 
                    cargo_capacity={starships[i].cargo_capacity} 
                    consumables={starships[i].consumables} 
                    hyperdrive_rating={starships[i].hyperdrive_rating}
                    MGLT={starships[i].MGLT} 
                    starship_class={starships[i].starship_class.toLowerCase()} 
                    />
                );
            })}
        </div>
    );
}

export default StarshipsList;