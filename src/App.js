import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron';
import Card from './components/Main/Card';
import characters from "./characters.json";
// import './App.css';

class App extends Component {
  state = {
    characters
  }
  render() {
    return (
      <div>
        <Navbar/>
        <Jumbotron/>
        <main role="main" class="container">
          <div className="row">
            {this.state.characters.map(character => (
              <Card
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              occupation={character.occupation}
              location={character.location}
              />
            ))}
          </div>
          
        </main>
      </div>
    );
  }
}

export default App;
