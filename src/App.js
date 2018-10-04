import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron';
import Card from './components/Main/Card';
// import './App.css';

class App extends Component {
  render() {
    return (
      <main role="main">
      <Navbar/>
      <Jumbotron/>
      <Card/>
      </main>
      
    );
  }
}

export default App;
