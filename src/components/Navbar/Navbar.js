import React from "react";
import Link from "next/link";
import "bulma/css/bulma.min.css";

12;
function Navbar() {
  return (
    <nav
    className="navbar navbar-transparent =" // Add "navbar-transparent" class
    role="navigation"
    aria-label="main navigation"
    
    >
      <div className="navbar-brand">
        <div className="navbar-start">
          <div className="navbar-item">
            <div className="buttons">
                <div href="/">
                  <span>
                    <h1 className="has-text-white is-size-5">Fylo</h1>
                  </span>
                </div>
            </div>
          </div> 
        </div>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          href="#"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link href="/features" passHref>
                <span className="navbar-item has-text-white is-size-5 mr-3" >Features</span>
              </Link>
              <Link href="/team" passHref>
                <span className="navbar-item has-text-white is-size-5 mr-3">Team</span>
              </Link>
              <Link href="/sign-in" passHref>
                <span className="navbar-item has-text-white is-size-5">Sign In</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
