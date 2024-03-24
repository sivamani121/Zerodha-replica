import React from "react";
import styles from "./../styles/Footer.module.css";
import streak from "./../images/streaklogo.png";
import Zerodha from "./../images/Zerodha.svg";
export default function Footer({}) {
  return (
    <div className={`${styles.Footer}`}>
      <a
        href="#"
        style={{
          display: "flex",
          gap: "5px",
          color: "#387ED1",
          textDecoration: "none",
        }}
      >
        <p
          className={`${styles.streak}`}
          style={{
            fontWeight: 400,
            fontSize: "12px",
            color: "#9BABC6", // Assuming --textSecondary is a CSS variable defined elsewhere
            whiteSpace: "pre-line",
          }}
        >
          © Powered by
        </p>
        <img src={streak} style={{ width: "50Px" }} alt="streak" />
      </a>
      <div
        style={{
          display: "flex",

          flexDirection: "column",
        }}
      >
        <img
          src={Zerodha}
          alt="Zerodha"
          style={{
            width: "120px",
            filter: "grayscale(100%)",
            marginBottom: "5px",
          }}
        ></img>
        <p
          style={{
            fontWeight: 400,
            fontSize: "12px",
            color: "#9BABC6", // Assuming --textSecondary is a CSS variable defined elsewhere
          }}
        >
          NSE &BSE-SEBI Registration No: INZO00031633 CDSL SEBI Registration No:
          IN-DP-431-2019
        </p>
      </div>
      <div></div>
    </div>
  );
}
