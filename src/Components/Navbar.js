import React from "react";
import logo from "./../images/logo.jpg";
import styles from "./../styles/NavBar.module.css";
export default function NavBar() {
  return (
    <header className={`${styles.NavBar}`}>
      <div className={`${styles.main}`}>
        <div>
          <img
            src={logo}
            style={{ height: "40px", cursor: "pointer" }}
            alt="Zerodha"
          />
        </div>
        <div className={`${styles.button}`}>
          <button className={`${styles.Home}`}>
            <p
              style={{
                fontWeight: 500,
                fontSize: "12px",
                color: "rgb(0, 0, 0)",
              }}
            >
              Home
            </p>
          </button>
          <button className={`${styles.Sign}`}>
            <p
              style={{
                fontWeight: 500,
                fontSize: "12px",
                color: "#fff",
              }}
            >
              Sign Up
            </p>
          </button>
        </div>
      </div>
    </header>
  );
}
