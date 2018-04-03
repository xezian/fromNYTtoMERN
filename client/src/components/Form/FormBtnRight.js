import React from "react";

export const FormBtnRight = props => (
  <button {...props} style={{ float: "right" }} className="btn btn-success">
    {props.children}
  </button>
);
