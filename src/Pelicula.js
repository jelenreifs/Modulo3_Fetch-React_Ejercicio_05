
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Casting from './Casting';
import "./App.css";

const API_KEY = "29072b0656302599aa87999bd81a5b27"

const Pelicula = () => { 
  const { id } = useParams();
  const [details, setDetails] = useState({});
  
  useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
     .then(res => res.json())
       .then(res => {
         setDetails(res);
       });

  }, []);
  
    return (
       <>
    <div>
        <h2>{ details.title}</h2>
        <p>{details.overview}</p>
            </div>
    <hr/>
    <Casting id={id}/>
    </>
  ) 
}
  
export default Pelicula;