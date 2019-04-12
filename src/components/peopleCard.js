import React from 'react';

const PeopleCard = ({name,gender,height,mass,hair_color,skin_color,eye_color,birth_year}) => {
    return(
        <div className="bg-yellow shadow-5 tc grow dib pa3 ma2 br3">
            <h3>{name}</h3>
            <p>gender: {gender}</p>
            <p>height: {height} cm</p>
            <p>weight: {mass} kg</p>
            <p>hair colour: {hair_color}</p>
            <p>skin colour: {skin_color}</p>
            <p>eye colour: {eye_color}</p>
            <p>birth year: {birth_year}</p>
        </div>
    );
}

export default PeopleCard;