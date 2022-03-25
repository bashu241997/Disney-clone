import axios from "axios";
import React, { useState, useEffect } from "react";
import "./List.css";
import { Wallpaper } from "./movies";

export default function Originals() {
  const [Movies, setMovies] = useState([]);

  const api = process.env.REACT_APP_API_KEY
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${api}`
      )
      .then((e) => {
        setMovies(e.data.results);
      });
  }, []);
  const Display =
    Movies && Movies.length > 0
      ? Movies.map((e) => {
          return <div key={e.id}><Wallpaper movie={e} /></div>
        })
      : null;
  return (
    <main className="home">
      <div className="mcontent">{Display}</div>
    </main>
  );
}
