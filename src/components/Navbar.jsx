import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Redux Form
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/page1">Form 1</Link>
          </li>
          <li>
            <Link to="/page2">Form 2</Link>
          </li>
          <li>
            <Link to="/page3">Form 3</Link>
          </li>
          <li>
            <Link to="/final">Final Page</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
