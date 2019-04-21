import React, { Component } from "react";
import "./resources/styles.css";
import Header from "./components/Header_and_footer/Header";
import Featured from './components/Featured/index';
import VenueNfo from './components/VenueNfo/index';

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: "1500px", background: "cornflowerblue" }}
      >
        <Header />
        <Featured/>
        <VenueNfo/>
      </div>
    );
  }
}

export default App;
