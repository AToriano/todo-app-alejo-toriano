import React from "react";
import "./Header.css";
import moonicon from "../images/icon-moon.svg";

function Header() {
  return (
    <div className="todo">
      <p> T O D O</p>
      <img src={moonicon} alt="sunicon" />
    </div>
  );
}

export default Header;
