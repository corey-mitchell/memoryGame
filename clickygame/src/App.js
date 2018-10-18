// Import React
import React, { Component } from 'react';
// Import Components
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Image from './components/Images';
import Img from './components/images.json';
import Footer from './components/Footer';
// Import Images
import img1 from './images/gameImages/img1.jpg';
// Import CSS
import './App.css';

class App extends Component {
  // Set Initial State Values
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };

  // Shuffle Images
  shuffleArray = (array) => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  // Takes image name and returns image url
  imgSwitch = (name) => {
    switch (name) {
      case "img1":
        console.log(Img[0]);
        return `${img1}`;
      default:
        return `${Img[0]}`
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
            <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg}  />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
