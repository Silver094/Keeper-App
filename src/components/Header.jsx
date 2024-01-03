import React from "react";


function Header() {
  return (
    <header>
       <img src={ require('../assests/logo.png') } alt="logo" />
      <h1>Keeper</h1>
    </header>
  );
}

export default Header;
