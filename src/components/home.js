
import React from "react";
import "./home.css";
import Imageslider from "./imageslider";
import Movies from "./movies";
import Viewer from "./viewer";

 function Home(props) {
  return (
    <main className="home">
      <Imageslider />
      <Viewer />
      <Movies _movie={"/movie/top_rated"} title={"Recomended for you"} />
      <Movies _movie={"/movie/now_playing"} title={"ON air Today"} />
      <Movies _movie={"/movie/popular"} title={"most popular"} />
    </main>
  );
}
export default Home