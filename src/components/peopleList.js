import React from 'react';
import PeopleCard from './peopleCard';

const PeopleList = ({ people }) => {
    return(
        <div>
            {people.map((user,i) => {
                return (
                    <PeopleCard
                    key={i} 
                    name={people[i].name.toLowerCase()} 
                    gender={people[i].gender} 
                    height={people[i].height}
                    mass={people[i].mass} 
                    hair_color={people[i].hair_color.toLowerCase()} 
                    skin_color={people[i].skin_color.toLowerCase()} 
                    eye_color={people[i].eye_color.toLowerCase()} 
                    birth_year={people[i].birth_year} 

                    />
                );
            })}
        </div>
    );
}

export default PeopleList;