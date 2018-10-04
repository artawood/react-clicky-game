import React from "react";
import "./Navbar.css"

const Navbar = props => (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Clicky Game</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
        <ul class="navbar-nav">
          <li class="nav-item active">
          You guessed correctly!
          </li>
          <li class="nav-item">
          The scores here
          </li>
        </ul>
      </div>
    </nav>
)

export default Navbar;