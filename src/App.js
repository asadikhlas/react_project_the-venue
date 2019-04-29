import React, { Component } from "react";
import "./resources/styles.css";
import Header from "./components/Header_and_footer/Header";
import Featured from "./components/Featured/index";
import VenueNfo from "./components/VenueNfo/index";
import Highlights from "./components/Highlights/index";
import Pricing from "./components/Pricing";
import Location from "./components/Location/index";
import Footer from "./components/Header_and_footer/Footer";
import { Element } from "react-scroll";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px", background: "" }}>
        <Header />
        <Element name="featured">
          <Featured />
        </Element>


          <Element name="venuenfo">
          <VenueNfo />
            </Element>
         
        <Element name="highlights">
          <Highlights />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>

        <Element name="location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
