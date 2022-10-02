import React from "react";
import "./layout.scss";
const Layout1 = () => {
  return (
    <div className="layout">
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing..</h2>
      <div className="input_layout">
        <form action="">
          <div className="search_input">
            <label htmlFor="">Lorem Ipsum </label>
            <input type="text" />
          </div>
          <div className="location_input">
            <label htmlFor="">Lorem Ipsum dolor </label>
            <input type="text" />
          </div>
          <div className="submit_button">
            <button>Lorem Ipsum</button>
          </div>
        </form>
      </div>
      <div className="buttons">
        <button>Lorem</button>
        <button>Lorem ipsum dolor sit amet</button>
        <button>consectetuer adipisicing</button>
        <button>Lorem ipsum</button>
      </div>
    </div>
  );
};

export default Layout1;
