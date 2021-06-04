import React, { Link } from "react-router-dom";

import logo from "../../Assets/images/logo.png";
import styles from "../Nav/Nav.module.css";

const Nav = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="https://www.finalfantasyxiv.com/" target="blank">
          <img
            title="Offical website"
            className={styles.logo}
            src={logo}
            alt="logo"
          />
        </a>
        <ul className={styles.menu}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/createAccount">Create an Account</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
