import React from "react";
import "./Card.css";

const Card = props => (
  <div className="col-4">
    <div className="card" draggable="true" onClick={() => props.charactersClicked(props.id, props.name, props.clicked)}>
        <div className="img-container">
        <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div>
        
    </div>
  </div>  
  
);

export default Card;