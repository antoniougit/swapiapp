import React from 'react';
import FilmsCard from './filmsCard';

const FilmsList = ({ films }) => {
    return(
        <div>
            {films.map((user,i) => {
                return (
                    <FilmsCard
                    key={i} 
                    title={films[i].title.toLowerCase()} 
                    episode={films[i].episode_id}
                    director={films[i].director.toLowerCase()}
                    producer={films[i].producer.toLowerCase()}
                    release_date={films[i].release_date} 
                    />
                );
            })}
        </div>
    );
}

export default FilmsList;