// rafce
import React from "react";
import Navbar from "../component/Navbar/MovieNavbar.Component";

const DefaultLayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <Navbar />
        <Component {...props} />
        <div>Footer</div>
        <h2> {props.name}</h2>
      </div>
    );
  };

export default DefaultLayoutHoc;
