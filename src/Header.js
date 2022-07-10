import React from "react";
import Logo from "./images/Troll Face.png";

function Header() {
  return (
    <header>
      <img src={Logo} alt="Troll Face logo" />
      <h1>Meme Generator</h1>
    </header>
  );
}

export default Header;
