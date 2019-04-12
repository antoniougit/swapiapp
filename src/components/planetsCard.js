import React from 'react';

const PlanetsCard = ({name,rotation_period,orbital_period,diameter,climate,gravity,terrain,population}) => {
    return(
        <div className="bg-yellow shadow-5 tc grow dib pa3 ma2 br3">
            <h3>{name}</h3>
            <p>Rotation Period: {rotation_period} hours</p>
            <p>orbital Period: {orbital_period} days</p>
            <p>Diameter: {diameter}</p>
            <p>Climate: {climate}</p>
            <p>Gravity: {gravity}</p>
            <p>Terrain: {terrain}</p>
            <p>Population: {population}</p>
        </div>
    );
}

export default PlanetsCard;