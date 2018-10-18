// Imports React
import React, { Component } from 'react';
// Imports Components
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Image from './components/Images';
import Img from './components/images.json';
import Footer from './components/Footer';
// Imports CSS
import './App.css';

class App extends Component {
  // Sets Initial State Values
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin!'
  };

  // Shuffles Images
  shuffleArray = (array) => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  // Handles image clickes
  pickImg = (name) => {
    // console.log("image clicked");
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct: Good choice!" 
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "Incorrect: Play again?",
        correct: 0,
        picked: []
      })
    }
  }

  // Renders DOM
  render() {
    return (
      <div className="App">
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>
          {this.shuffleArray(Img).map(image => (
            <Image src={image.url} name={image.name} key={image.name} pickImg={this.pickImg}  />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
