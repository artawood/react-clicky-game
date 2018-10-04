import React from "react";
import "./Card.css";

const Card = props => (
  <div className="col-4">
    <div className="card" draggable="true">
        <div className="img-container">
        <img alt={props.name} src={props.image} />
        </div>
        {/* <div className="content">
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
        </div> */}
        {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
        </span> */}
    </div>
  </div>  
  
);

export default Card;