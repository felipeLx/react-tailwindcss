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
    
    
    const moviesHandle = () => (
        data.map((el: any) => (
            <div key={el.id} className='group relative bg-indigo-900 m-1 p-4 overflow-hidden w-1/6'>
                <img className='max-w-full' src={IMG_API + el.poster_path} alt={el.title} />
                <div className="flex p-4 items-center justify-between">
                    <h3 className='m-0 text-orange-500 font-semibold'>{el.title}</h3>
                    <span>Vote Average:{el.vote_average}</span>
                </div>
                <div className='absolute bg-white 
                    text-indigo-900 p-4 translate-x-full transition-transform duration-300 ease-out bottom-0 left-0 right-0 group-hover:translate-x-0'>
                    <h3>Overview:</h3>
                    <p>{el.overview}</p>
                </div>
            </div>

        ))
    )
    return(
        <div className='flex flex-wrap'>
           {moviesHandle()}
        </div>
        
    );
};

export default MoviesBuilder;