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
import img2 from './images/gameImages/img2.jpg';
import img3 from './images/gameImages/img3.jpg';
import img4 from './images/gameImages/img4.jpg';
import img5 from './images/gameImages/img5.jpg';
import img6 from './images/gameImages/img6.jpg';
import img7 from './images/gameImages/img7.jpg';
import img8 from './images/gameImages/img8.jpg';
import img9 from './images/gameImages/img9.jpg';
import img10 from './images/gameImages/img10.jpg';
import img11 from './images/gameImages/img11.jpg';
import img12 from './images/gameImages/img12.jpg';
// Import CSS
import './App.css';

class App extends Component {
  // Set Initial State Values
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin!'
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
        return `${img1}`;
      case "img2":
        return `${img2}`;
      case "img3":
        return `${img3}`;
      case "img4":
        return `${img4}`;
      case "img5":
        return `${img5}`;
      case "img6":
        return `${img6}`;
      case "img7":
        return `${img7}`;
      case "img8":
        return `${img8}`;
      case "img9":
        return `${img9}`;
      case "img10":
        return `${img10}`;
      case "img11":
        return `${img11}`;
      case "img12":
        return `${img12}`;
      default:
        return `${img1}`
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
