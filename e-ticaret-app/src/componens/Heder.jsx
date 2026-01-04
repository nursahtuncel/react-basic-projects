import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>Context Store</h2>

      <nav style={styles.nav}>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/basket"
          style={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Basket {3}
        </NavLink>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 32px",
    backgroundColor: "#111",
    color: "#fff",
  },
  logo: {
    margin: 0,
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#ccc",
    textDecoration: "none",
    fontSize: "16px",
  },
  activeLink: {
    color: "#fff",
    textDecoration:"none",
    fontSize:"19px",
  },
};

export default Header;
