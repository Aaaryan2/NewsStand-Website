import React, { Component } from "react";
import loading from "./Loader1.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="loading" />
        <h3>Loading Top Headlines...</h3>
      </div>
    );
  }
}

export default Spinner;
