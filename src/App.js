import { useState,useEffect } from 'react';
import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.png';

// a7a7fed8
const API_URL = 'https://www.omdbapi.com?apikey=a7a7fed8';
const movie1 = {
        "Title": "Amazing Spiderman Syndrome",
        "Year": "2012",
        "imdbID": "tt2586634",
        "Type": "movie",
        "Poster": "N/A"
}


const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setsearchTerm] = useState('');


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);

    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className='app'>
            <h1> Filmx</h1>

            <div className='search'>
                <input 
                    placeholder= "Film, Dizi yada TV Şovu"
                    value={searchTerm}
                    onChange={(e) => setsearchTerm(e.target.value)}
                />
                <img
                src={SearchIcon}
                alt="search" 
                onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0 
                ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie = {movie}/>
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>Aramanız ile eşleşen bir sonuç bulunamadı.</h2>
                    </div>
                )
            }
        </div>
    );
}

export default App;