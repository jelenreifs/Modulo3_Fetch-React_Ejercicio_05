
import { useState, useEffect } from 'react';
import "./App.css";

const API_KEY = "29072b0656302599aa87999bd81a5b27"


const Casting = (props) => { 
  const [casting, setCasting] = useState([]);
  
  useEffect(() => {
   fetch(`https://api.themoviedb.org/3/movie/${props.id}/credits?api_key=${API_KEY}`)
     .then(res => res.json())
       .then(res => {
         setCasting(res.cast);
       });
  }, [props.id]);
  

  const mostrarCastingMovie = casting.map(item => {
    return (
      <div key={ item.id}>
        <p>Actor/Actriz:{item.name} --- Personaje: {item.character }</p>
      </div>)
  })

   return  mostrarCastingMovie
}


export default Casting;


