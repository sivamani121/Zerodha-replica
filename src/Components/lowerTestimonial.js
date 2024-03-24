import React, { useState } from "react";
import styles from "./../styles/lowerTesti.module.css";
import downarrow from "./../images/icons8-down-arrow-50.png";
import uparrow from "./../images/icons8-up-arrow-25.png";
export function LowerType1({ Content }) {
  // console.log(Content);
  return (
    <div className={`${styles.testi1}`}>
      {Content.map((item, index) => {
        return (
          <div
            key={index + 21}
            style={{
              flex: "1 0 33.33%",
              paddingBottom: "3px",
              marginBottom: "16px",
            }}
          >
            <p
              style={{
                fontWeight: 400,
                fontSize: "13px",
                color: "#000",
                margin: 0,
              }}
            >
              {item.a}
            </p>
            <p
              style={{
                fontWeight: 400,
                fontSize: "12px",
                color: "#9BABC6",
                margin: 0,
              }}
            >
              {item.b}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export function LowerType2({ Content }) {
  const [showall, setShowall] = useState(false);
  return (
    <div className={`${styles.testi2}`} style={{boxSizing:"border-box"}}>
      {Content.map((item, index) =>
        showall === false && index >= 2 ? null : (
          <div
            key={index + 100}
            style={{
              display: "flex",
              paddingBottom: "5px",
              justifyContent: "space-between",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <p
              className={`${styles.lower2a}`}
              style={{
                color:
                  item.a === "B"
                    ? "#387ED1"
                    : item.a === "N"
                    ? "#000"
                    : "#EB1D54",
                backgroundColor:item.a === "B"
                ? "rgb(224, 243, 255)"
                : item.a === "N"
                ? "#ECECEC"
                : "#FFE2EB",
              }}
            >
              {item.a}
            </p>
            <p className={`${styles.lower2b}`}>{item.b}</p>
            <p className={`${styles.lower2c}`}>{item.c}</p>
          </div>
        )
      )}
      <button
        type="button"
        onClick={() => {
          setShowall(!showall);
        }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={`${styles.myb}`}
      >
        {showall ? "View Less" : "View Details"}
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={showall ? uparrow : downarrow}
            alt={showall ? "uparrow" : "downarrow"}
            style={{ height: "13px", width: "13px", marginLeft: "5px" }}
          ></img>
        </span>
      </button>
    </div>
  );
}
