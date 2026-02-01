import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav style={styles.navbar}>
      {/* LEFT SIDE */}
      <div style={styles.left}>
        <h2 style={styles.logo}>MyStore</h2>

        <ul style={styles.navLinks}>
          <li>
            <Link to="/" style={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" style={styles.link}>
              About
            </Link>
          </li>
          <li>
            <Link to="/product" style={styles.link}>
              Product
            </Link>
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div style={styles.right}>
        <span style={styles.icon}>❤️</span>

        {/* CART ICON WITH BADGE */}
        <div style={styles.cartWrapper}>
          <Link to="/cart" style={styles.icon}>
            🛒
          </Link>

          {cart.length > 0 && (
            <span style={styles.cartBadge}>{cart.length}</span>
          )}
        </div>

        <Link to='/login'>
          <button style={styles.loginBtn}>Login</button>
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 30px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#fff",
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "30px",
  },

  logo: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "bold",
  },

  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    margin: 0,
    padding: 0,
  },

  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  icon: {
    fontSize: "22px",
    cursor: "pointer",
    textDecoration: "none",
    color: "#333",
  },

  cartWrapper: {
    position: "relative",
  },

  cartBadge: {
    position: "absolute",
    top: "-6px",
    right: "-10px",
    backgroundColor: "red",
    color: "#fff",
    fontSize: "12px",
    padding: "2px 6px",
    borderRadius: "50%",
    fontWeight: "bold",
  },

  loginBtn: {
    padding: "6px 14px",
    border: "1px solid #007bff",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Navbar;
