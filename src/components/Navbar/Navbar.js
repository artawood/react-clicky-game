import React from "react";
import "./Navbar.css"

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        
      <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Start Game</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">New Game</a>
          </li>
        </ul>
      </div>
    </nav>
    // <nav class="navbar">
    //     <ul class="navbar-nav">
    //         <li class="brand">
    //         Clicky Game
    //         </li>
    //         <li>
    //         You guessed correctly!
    //         </li>
    //         <li>
    //         Score {props.score} | Top Score {props.topScore}
    //         </li>
    //     </ul>
    // </nav>
)

export default Navbar;