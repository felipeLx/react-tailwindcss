import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { FEATURED_API, SEARCH_API, IMG_API} from '../../keys';

const MoviesBuilder: any = (props:any) => {
    const [movies, setMovies] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const { isLoading, error, data }: any = useQuery('movies', 
        async() => await axios.get(FEATURED_API)
            .then(res => res.data.results)
    );

    const { data: selectedData }: any = useQuery(['search', movies],  
       async() => await axios.get(SEARCH_API + movies)
       .then(res => res.data.results)
    );

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;
    
    const searchConfig = (char:string) => {
        setIsSearching(true);
        setMovies(char);
    };

    const searchHandler = () => {
        return (
            <section>
                <nav className='flex flex-row space-between align-center w-full h-16 p-2 m-2'>
                    <div>
                        <input onChange={(e) => searchConfig(e.target.value)} className='border-2 font-semibold text-black m-0' type='text' value={movies} placeholder='Search' />
                    </div>
                </nav>
            </section>
        )
    };

    const moviesHandler = () => {
        if(!isSearching) {
            return data.map((el: any) => (
                <div key={el.id} className='videos'>
                    <img className='max-w-full' src={IMG_API + el.poster_path} alt={el.title} />
                    <div className="flex p-4 items-center justify-between">
                        <h3 className='m-0 text-orange-500 font-semibold'>{el.title}</h3>
                        <span>Vote Average:{el.vote_average}</span>
                    </div>
                    <div className='videos-over absolute bg-white text-indigo-900 p-4 translate-x-full transition-transform duration-300 ease-out bottom-0 left-0 right-0'>
                        <h3>Overview:</h3>
                        <p>{el.overview}</p>
                    </div>
                </div>
            ))
        } else {
            return selectedData?.map((el: any) => (
                <div key={el?.id} className='videos'>
                    <img className='max-w-full' src={IMG_API + el?.poster_path} alt={el?.title} />
                    <div className="flex p-4 items-center justify-between">
                        <h3 className='m-0 text-orange-500 font-semibold'>{el?.title}</h3>
                        <span>Vote Average:{el?.vote_average}</span>
                    </div>
                    <div className='videos-over absolute bg-white text-indigo-900 p-4 translate-x-full transition-transform duration-300 ease-out bottom-0 left-0 right-0'>
                        <h3>Overview:</h3>
                        <p>{el?.overview}</p>
                    </div>
                </div>
            ))
        }
    };
        
        

    
    return(
        <>
        <header className='flex flex-end bg-indigo-900'>
           {searchHandler()}
        </header>
        <div className='flex flex-wrap overflow-hidden '>
           {moviesHandler()}
        </div>
        </>
    );
};

export default MoviesBuilder;