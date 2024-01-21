import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <p>Valdos</p>
    </header>
  );
};

export default Header;
