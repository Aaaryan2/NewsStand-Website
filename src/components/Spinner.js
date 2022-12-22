import React from "react";
import loading from "./Loader1.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img className="my-3" src={loading} alt="loading" />
      <h3>Loading Top Headlines...</h3>
    </div>
  );
};

export default Spinner;
