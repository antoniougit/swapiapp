import React from 'react';

const FilmsCard = ({title,episode,director,producer,release_date}) => {
    return(
        <div className="bg-yellow shadow-5 tc grow dib pa3 ma2 br3">
            <h3>{title}</h3>
            <p>episode: {episode}</p>
            <p>director: {director}</p>
            <p>producer: {producer}</p>
            <p>release Date: {release_date}</p>
        </div>
    );
}

export default FilmsCard;