import React, { Component } from "react";
import "./resources/styles.css";
import Header from "./components/Header_and_footer/Header";
import Featured from './components/Featured/index';
import VenueNfo from './components/VenueNfo/index';
import Highlights from './components/Highlights/index';

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: "1500px", background: "" }}
      >
        <Header />
        <Featured/>
        <VenueNfo/>
        <Highlights/>
      </div>
    );
  }
}

export default App;
