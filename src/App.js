import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron';
import Card from './components/Main/Card';
import characters from "./characters.json";
import update from 'react-addons-update';
// import './App.css';

class App extends Component {
  // Initial state
  state = {
    score: 0,
    topScore: 0,
    characters
  }

  //When the character is clicked, the value of 'clicked' property is set to 'true'
  charactersClicked = (key, name, clicked) => {
      // alert(`You clicked ${name}`) // test for ensuring the right card is clicked
      if(!clicked) {
      alert(`You clicked ${name} once`) 
      this.setState({
        score: this.state.score + 1,
        topScore: this.state.topScore + 1,
        characters: update(this.state.character, {key: {clicked: {$set: true}}})
      });
    } else if (clicked) {
      alert(`You clicked ${name} already! Game over!`)
      this.setState({
        score: 0
      })
    }
  };

  render() {
    return (
      <div>
          <Navbar/>
          <Jumbotron
            score ={this.state.score}
            topScore ={this.state.topScore}
          />
        <div className="container">
          <div className="row">
            {this.state.characters.map(character => (
              <Card
              charactersClicked={this.charactersClicked}
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              occupation={character.occupation}
              location={character.location}
              clicked={character.clicked}
              />
            ))}
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
