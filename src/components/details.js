import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./details.css";

export default function Detail() {
  const _api = process.env.REACT_APP_API_KEY;
  const location = useLocation();
  const [DEtails, setDEtails] = useState({});
  useEffect(() => {
    const { api, _movie } = location.state;
    axios
      .get(`https://api.themoviedb.org/3${api}/${_movie.id}?api_key=${_api}`)
      .then((e) => {
        setDEtails(e.data);
      });
  }, [location]);
  const displaygen = DEtails?.genres?.reduce(function (prevVal, currVal, idx) {
    return idx == 0 ? currVal.name : prevVal + " . " + currVal.name;
  }, "");
  const backgrounddatapai =
    DEtails?.backdrop_path?.length > 0
      ? `https://image.tmdb.org/t/p/w500${DEtails?.backdrop_path}`
      : `/images/home-background.png`;

  return (
    <div className="detail">
      <div className="detailimg">
        <img alt="image" src={backgrounddatapai} />
      </div>

      <div className="imgtitledetail">
        {DEtails?.original_title?.length > 0 ? DEtails.original_title : ""}
      </div>

      <div className="controls">
        <button className="play">
          <img alt="image" src="/images/play-icon-black.png" />
          <span>play</span>
        </button>
        <button className="trailer">
          <img alt="image" src="/images/play-icon-white.png" />
          <span>trailer</span>
        </button>
        <button className="addbutton">
          <span> + </span>
        </button>
        <button className="addbutton groupwatch">
          <img alt="image" src="/images/group-icon.png" />
        </button>
      </div>
      <div className="subtitle">
        {DEtails?.release_date?.length > 2
          ? DEtails?.release_date?.split("-")[0]
          : ""}{" "}
        . {DEtails?.status?.length > 2 ? DEtails?.status : ""} .{" "}
        {DEtails?.runtime ? `${DEtails?.runtime} min` : ""} . {displaygen} 
      </div>
      <div className="descrip">
        {DEtails?.tagline?.length > 0 ? DEtails.tagline : ""}{" "}
      </div>
      <div className="descrip">
        {DEtails?.overview?.length > 0 ? DEtails.overview : ""}{" "}
      </div>
    </div>
  );
}
