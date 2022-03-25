import React from "react";
import "./viewer.css";

export default function Viewer() {
  return (
    <div className="viewer">
      <div className="viewerimg">
        <img alt="disney" src="/images/viewers-disney.png" />
      </div>
      <div className="viewerimg">
        <img alt="disney" src="/images/viewers-pixar.png" />
      </div>
      <div className="viewerimg">
        <img alt="disney" src="/images/viewers-marvel.png" />
      </div>
      <div className="viewerimg">
        <img alt="disney" src="/images/viewers-starwars.png" />
      </div>
      <div className="viewerimg">
        <img alt="disney" src="/images/viewers-national.png" />
      </div>
    </div>
  );
}
