import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
    <div className="jumbotron">
        <div className="container text-center">
          <h1 className="display-3">Clicky Game</h1>
          <p>Click on an image to earn points, but don't click on any more than once!</p>
        </div>
    </div>
);

export default Jumbotron;