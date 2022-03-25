import React, { useState, useEffect } from "react";
import "./movies.css";
import axios from "axios";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Movies({ _movie, title }) {
  const [Movies, setMovies] = useState([]);

  const api = process.env.REACT_APP_API_KEY
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3${_movie}?api_key=${api}`
      )
      .then((e) => {
        setMovies(e.data.results);
      });
  }, [_movie]);
  const Display =
    Movies && Movies.length > 0
      ? Movies.map((e) => {
          if (e.poster_path && e.poster_path.length > 5) {
            return <div key={e.id}><Wallpaper movie={e} /></div>
          }
        })
      : null;
  return (
    <div className="movies">
      <h4>{title}</h4>
      <div className="content">{Display}</div>
    </div>
  );
}
export const Wallpaper = ({ movie }) => {
  let navigate = useNavigate();
  let loca = useLocation()
  const api_data = loca?.pathname && loca.pathname !== "/series" ? "/movie": "/tv"
  let Image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  let data = {
    _movie: movie,
    api : api_data
  }
  return (
    <>
      <div
       onClick={()=>{navigate(`/details/${movie.id}`,{state:data})}}
        key={movie.id}
        className="moviewrap"
      >
        <img alt="disney" src={Image} alt="poster" />
      </div>
    </>
  );
};