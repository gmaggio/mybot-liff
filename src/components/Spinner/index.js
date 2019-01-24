import React from "react";
import "./styles.css";

const Spinner = () => {
  return (
    <div class="spinner">
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Spinner;
