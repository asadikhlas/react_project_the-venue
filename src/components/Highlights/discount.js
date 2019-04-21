import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

class Discount extends Component {
  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
        <Fade>
        <div className="discount_porcentage">
            <span>23 %</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide right>
        <div className="discount_description">
            <h3>Purchase tickets before 20th JUNE</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>

            <div>
                button
            </div>
          </div>
        </Slide>
          
        </div>
      </div>
    );
  }
}

export default Discount;
