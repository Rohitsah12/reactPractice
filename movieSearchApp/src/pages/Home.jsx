import { useEffect, useState } from "react";

import searchMovie from '../apis/omdb'
import MovieCard from "../components/MovieCard/MovieCard";
import './Home.css'
import axios from "axios";

function Home(){
    const [movieList,setMovieList]=useState([]);
    async function downloaddefaultMovies(...args){
        // console.log(response.data);
        // setMovieList(response.data.Search);
        // console.log(args);
        const urls=args.map((name)=>searchMovie(name));
        const response=await axios.all(urls.map(url =>axios.get(url)));
        const movies=response.map((movieResponse)=>movieResponse.data.Search);
        setMovieList([].concat(...movies))

        
    }
    useEffect(()=>{
        downloaddefaultMovies('harry','avengers');
    },[]);

    return(
        <>
            <div className="movie-card-wrapper">
                {movieList.map(movie=> <MovieCard key={movie.imdbID}
                    {...movie}
                />)}
            </div>
            
        </>
    )
}

export default Home;