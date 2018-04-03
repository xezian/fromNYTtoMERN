import React from "react";

export const FormBtnLeft = props => (
  <button {...props} style={{ float: "left" }} className="btn btn-success">
    {props.children}
  </button>
);
