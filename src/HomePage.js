import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="container">
      <h1>Welcome, Choose your game</h1>
      <div className="game-menu">
        <Link to="/2x2" className="menu game-2">
          2x2
        </Link>
        <Link to="/3x3" className="menu game-3">
          3x3
        </Link>
        <Link to="/4x4" className="menu game-4">
          4x4
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
