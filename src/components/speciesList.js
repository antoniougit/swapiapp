import React from 'react';
import SpeciesCard from './speciesCard';

const SpeciesList = ({ species }) => {
    return(
        <div>
            {species.map((user,i) => {
                return (
                    <SpeciesCard
                    key={i} 
                    name={species[i].name.toLowerCase()} 
                    classification={species[i].classification.toLowerCase()}
                    designation={species[i].designation.toLowerCase()} 
                    average_height={species[i].average_height} 
                    skin_colors={species[i].skin_colors.toLowerCase()} 
                    hair_colors={species[i].hair_colors.toLowerCase()} 
                    eye_colors={species[i].eye_colors.toLowerCase()} 
                    average_lifespan={species[i].average_lifespan} 
                    language={species[i].language.toLowerCase()} 
                    />
                );
            })}
        </div>
    );
}

export default SpeciesList;