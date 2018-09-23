import React, { Component } from 'react';
import './App.css';
import Drumpad from './DrumPad/DrumPad';


class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      drumpads: [
        { id: "hi-hat-cymbal", innerText: "Q", src:"https://res.cloudinary.com/dny80spwx/video/upload/v1537573648/FCC-drum-machine/HHOPEN1.wav"},
        { id: "ride-cymbal", innerText: "W", src:"https://res.cloudinary.com/dny80spwx/video/upload/v1537573648/FCC-drum-machine/RIDEMID.wav"},
        { id: "crash-cymbal", innerText: "E", src:"https://res.cloudinary.com/dny80spwx/video/upload/v1537573648/FCC-drum-machine/CRASH1.wav"},
        { id: "floor-tomtom",innerText: "A", src:"https://res.cloudinary.com/dny80spwx/video/upload/v1537573648/FCC-drum-machine/TOMLOW1.wav"},
        { id: "high-tomtom", innerText: "S", src:"https://res.cloudinary.com/dny80spwx/video/upload/v1537573648/FCC-drum-machine/TOMHI3.wav"},
        { id: "snare-drum", innerText: "D", src:"https://res.cloudinary.com/dny80spwx/video/upload/v1537573648/FCC-drum-machine/SNARE12.wav"},
        { id: "bass-drum1", innerText: "Z", src:"https://res.cloudinary.com/dny80spwx/video/upload/v1537573648/FCC-drum-machine/BDRUM13.wav"},
        { id: "bass-drum2", innerText: "X", src:"https://res.cloudinary.com/dny80spwx/video/upload/v1537573648/FCC-drum-machine/BDRUM13.wav"},
        { id: "middle-tomtom", innerText: "C", src:"https://res.cloudinary.com/dny80spwx/video/upload/v1537573648/FCC-drum-machine/TOMLOW2.wav"}
      ],
    }
    this.makeSound = this.makeSound.bind(this)
  }

  componentDidMount() {
    document.body.addEventListener('keydown', this.keySound);
  }

  makeSound(e) {
    const sound = document.getElementById(e.target.innerText);
    sound.currentTime = 0;
    sound.play();
    e.target.className = 'drum-pad-pressed';
    setTimeout(() => sound.parentElement.className = 'drum-pad', 150)
    document.getElementById('display').innerHTML = e.target.id;
  }

  keySound(keypressed) {
    let key = keypressed.key;
    switch (key) {
      case "Q":
      case "q":
      let soundq = document.getElementById("Q");
      soundq.currentTime = 0;
      soundq.play();
      document.getElementById('display').innerHTML = soundq.parentElement.id;
      soundq.parentElement.className = 'drum-pad-pressed';
      setTimeout(() => soundq.parentElement.className = 'drum-pad', 150)
      break;
      case "W":
      case "w":
      let soundw = document.getElementById("W");
      soundw.currentTime = 0;
      soundw.play();
      document.getElementById('display').innerHTML = soundw.parentElement.id;
      soundw.parentElement.className = 'drum-pad-pressed';
      setTimeout(() => soundw.parentElement.className = 'drum-pad', 150)
      break;
      case "E":
      case "e":
      let sounde = document.getElementById("E");
      sounde.currentTime = 0;
      sounde.play();
      document.getElementById('display').innerHTML = sounde.parentElement.id;
      sounde.parentElement.className = 'drum-pad-pressed';
      setTimeout(() => sounde.parentElement.className = 'drum-pad', 150)
      break;
      case "A":
      case "a":
      let sounda = document.getElementById("A");
      sounda.currentTime = 0;
      sounda.play();
      document.getElementById('display').innerHTML = sounda.parentElement.id;
      sounda.parentElement.className = 'drum-pad-pressed';
      setTimeout(() => sounda.parentElement.className = 'drum-pad', 150)
      break;
      case "S":
      case "s":
      let sounds = document.getElementById("S");
      sounds.currentTime = 0;
      sounds.play();
      document.getElementById('display').innerHTML = sounds.parentElement.id;
      sounds.parentElement.className = 'drum-pad-pressed';
      setTimeout(() => sounds.parentElement.className = 'drum-pad', 150)
      break;
      case "D":
      case "d":
      let soundd = document.getElementById("D");
      soundd.currentTime = 0;
      soundd.play();
      document.getElementById('display').innerHTML = soundd.parentElement.id;
      soundd.parentElement.className = 'drum-pad-pressed';
      setTimeout(() => soundd.parentElement.className = 'drum-pad', 150)
      break;
      case "Z":
      case "z":
     let soundz = document.getElementById("Z");
      soundz.currentTime = 0;
      soundz.play();
      document.getElementById('display').innerHTML = soundz.parentElement.id;
      soundz.parentElement.className = 'drum-pad-pressed';
      setTimeout(() => soundz.parentElement.className = 'drum-pad', 150)
      break;
      case "X":
      case "x":
      let soundx = document.getElementById("X");
      soundx.currentTime = 0;
      soundx.play();
      document.getElementById('display').innerHTML = soundx.parentElement.id;
      soundx.parentElement.className = 'drum-pad-pressed';
      setTimeout(() => soundx.parentElement.className = 'drum-pad', 150)
      break;
      case "C":
      case "c":
      let soundc = document.getElementById("C");
      soundc.currentTime = 0;
      soundc.play();
      document.getElementById('display').innerHTML = soundc.parentElement.id;
      soundc.parentElement.className = 'drum-pad-pressed';
      setTimeout(() => soundc.parentElement.className = 'drum-pad', 150)
      break;
      default:
      break;
    }
  }

  render() {
    return (
      <div className="App">
        <div id="drum-machine">
          <div id="display"></div>
          {this.state.drumpads.map(pad => {
            return <Drumpad id={pad.id} key={pad.id} innerText={pad.innerText} click={this.makeSound} audio={pad.src}/>
          })}
        </div>
      </div>
    );
  }
}

export default App;
