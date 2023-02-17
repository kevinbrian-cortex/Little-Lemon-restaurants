import React from "react";

export default function Nav() {
  return (
    <React.Fragment>
      {/* Navigation */}
      <header>
        <nav>
          <img src="." alt="logo" />
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Revervations</a>
            </li>
            <li>
              <a href="#">Order Online</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}
