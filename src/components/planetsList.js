import React from 'react';
import PlanetsCard from './planetsCard';

const PlanetsList = ({ planets }) => {
    return(
        <div>
            {planets.map((user,i) => {
                return (
                    <PlanetsCard
                    key={i} 
                    name={planets[i].name.toLowerCase()}
                    rotation_period={planets[i].rotation_period} 
                    orbital_period={planets[i].orbital_period}
                    diameter={planets[i].diameter}
                    climate={planets[i].climate.toLowerCase()} 
                    gravity={planets[i].gravity.toLowerCase()} 
                    terrain={planets[i].terrain.toLowerCase()}
                    population={planets[i].population}
                    />
                );
            })}
        </div>
    );
}

export default PlanetsList;