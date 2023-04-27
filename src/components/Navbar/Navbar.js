import React, { useState } from "react";
import Link from "next/link";
import "bulma/css/bulma.min.css";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <nav
      className={`navbar ${styles.navbarTransparent}`}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <div className="navbar-start">
          <div className="navbar-item">
            <Link href="/" passHref>
              <h1 className="has-text-white is-size-5">Fylo</h1>
            </Link>
          </div>
        </div>

        <a
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""} ${styles.burgerWhite}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          href="#"
          onClick={toggleMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${
          isActive ? "is-active" : ""
        } ${styles.transparentNavbarMenu}`}
      >
        <div className="navbar-end is-flex is-justify-content-center">
          <div className="navbar-item">
            <div className="buttons">
              <Link href="/features" passHref>
                <span className="navbar-item has-text-white is-size-5 mr-5">
                  Features
                </span>
              </Link>
              <Link href="/team" passHref>
                <span className="navbar-item has-text-white is-size-5 mr-5">
                  Team
                </span>
              </Link>
              <Link href="/sign-in" passHref>
                <span className="navbar-item has-text-white is-size-5 mr-5">
                  Sign in
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;