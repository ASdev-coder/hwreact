import React from 'react';
import { NavLink } from "react-router";

const MainMenu = () => {
    return (
      <nav>
        <NavLink to="/">Mini Quiz</NavLink>
        <NavLink to="/shoppinglist">Shopping List</NavLink>
        <NavLink to="/magicball">Magic Ball</NavLink>
      </nav>
    );
}

export default MainMenu;
