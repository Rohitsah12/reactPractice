function searchMovie(term){
    return `https://www.omdbapi.com/?apikey=6d433134&s=${term}`;
}
export default searchMovie;