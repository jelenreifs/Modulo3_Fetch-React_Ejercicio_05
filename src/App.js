import { BrowserRouter, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';

import Pelicula from './Pelicula';
//import Casting from './Casting';
import "./App.css";

const API_KEY = "29072b0656302599aa87999bd81a5b27"

function App() {
  const [data, setData] = useState([]);

 useEffect(() => {
   fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
     .then(res => res.json())
       .then(res => {
         setData(res.results);

       });
 }, []);
  

  const moviesPopulares = data.map(movie => 
    <div key={movie.id} className="movie">
      <h3>{movie.original_title}</h3>
      <Link to={`/movies/${movie.id}`}>
        <img src={"https://image.tmdb.org/t/p/w200/" + movie.poster_path} alt={movie.original_title} />
        </Link>
    </div>
  )


  return (
    <BrowserRouter>
        <Route exact path="/">
        <div className="movies-wrapper">{moviesPopulares}</div>
      </Route>
     
      <Route exact path="/movies/:id">
         <Pelicula />
      </Route>

      </BrowserRouter>
  
  )
}

export default App;
