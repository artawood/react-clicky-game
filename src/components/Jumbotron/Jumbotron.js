import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
    <div className="jumbotron">
        <div className="container text-center">
          <h1>Clicky Game</h1>
          <p>Click on an image to earn points, but don't click on any more than once!</p>
          <h2>Current score:</h2> {props.score}
          <h2>Top score:</h2> {props.topScore}
        </div>
    </div>
);

export default Jumbotron;