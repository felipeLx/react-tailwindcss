import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?api_key=24e6625853237835106f57d1ead90ba2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=24e6625853237835106f57d1ead90ba2&query=';

const MoviesBuilder: any = (props:any) => {
    const { isLoading, error, data }: any = useQuery('movies', 
        async () => await axios.get(FEATURED_API)
            .then(res => res.data.results)
    );
    
    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;
    
    const printHandler = () => (
        data.map((el: any) => (
            <div key={el.id} className='img-header'>
                <img src={IMG_API + el.poster_path} alt={el.title} />
            <div className="img-info">
                <h3>{el.title}</h3>
                <span>{el.vote_average}</span>
            </div>
            </div>

        ))
    )
    return(
        <div className='movie-container'>
            <div className='movie'>
           {printHandler()}
           </div>
        </div>
        
    );
};

export default MoviesBuilder;