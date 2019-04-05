import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <Link to="#" onClick="window.location.reload()">
        Reset
      </Link>
      <Link to="/">Go Back</Link>
    </div>
  );
};
