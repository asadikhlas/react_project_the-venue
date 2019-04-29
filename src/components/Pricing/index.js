import React, { Component } from "react";
import MyButton from "../utils/MyButton";
import { Zoom } from "react-reveal";
import { keys } from "@material-ui/core/styles/createBreakpoints";

class Pricing extends Component {
  state = {
    price: [100, 150, 200],
    position: ["Balcony", "medium", "star"],
    desc: [
      "lorem epsum lorol cetamat setasma vansne using Lorem Ipsum is that it has a more-or-less normal distribution of the world",
      "lorem epsum lorol cetamat setasma vansne using Lorem Ipsum is that it has a more-or-less normal distribution of the world",
      "lorem epsum lorol cetamat setasma vansne using Lorem Ipsum is that it has a more-or-less normal distribution of the world"
    ],
    linkTo: ["http://sales/b", "http://sales/m", "http://sales/s"],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.price.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.price[i]}</span>
              <span>{this.state.position[i]}</span>
            </div>

            <div className="pricing_description"> {this.state.desc[i]} </div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchase"
                bck="#ffa800"
                color="#ffffff"
                link={this.state.linkTo[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>

          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
