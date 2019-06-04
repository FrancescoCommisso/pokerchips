import React, { Component } from "react";
import "./footer.css";
const linkedInIcon = require("../assets/linkedin.svg");
const githubIcon = require("../assets/githubGrey.svg");

class Footer extends Component {
  footerClick = () => {
    return <a href="https://www.github.com/FrancescoCommisso" />;
  };
  state = {};
  render() {
    return (
      <div
        className="text-center container-fluid "
        style={{
          position: "relative",
          padding: "2px",
          color: "#ffffff"
        }}
      >
        <div>
          <div className="my-2 mx-2 d-inline align-middle">
            <a href="https://www.FrancescoCommisso.com">
              <div
                onClick={this.footerClick}
                className="my-2 mx-2 text1 footimg d-inline align-middle"
              >
                <p className="d-inline">Francesco Commisso © 2019</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
