import React, { useEffect, useState } from "react";
import styles from "./../styles/MiddlePart.module.css";
import Nse from "./../images/NSe.jpg";
import upGreen from "./../images/UpGreen.jpg";
import backarrow from "./../images/backArrow.jpg";

export default function MiddlePart({ setIndex }) {
  const Times = ["5min", "10min", "15min", "30min", "Hour", "Day"];
  const [selected, setSelected] = useState("Day");
  // console.log(selected);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition === 0 || window.innerWidth >= 786);
    };

    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsVisible(windowWidth < 786);
    };

    handleResize(); // Call once on initial render

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={`${styles.outerbox}`}>
      <div className={`${styles.logobox}`}>
        <div>
          <img
            src={backarrow}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "15px",
            }}
            alt="back icon"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={Nse} alt="NSElogo" style={{ width: "25px" }} />
            <p
              style={{
                fontWeight: 600,
                fontSize: "20px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                color: "#000",
              }}
            >
              NIFTY 50
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              className="jss163"
              style={{
                fontWeight: 400,
                fontSize: "13px",
                color: "#000",
              }}
            >
              <span style={{ fontFamily: "sans-serif" }}>₹{`${0.0}`}</span>
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={upGreen}
                style={{ height: "15px" }}
                alt="geen up arrow "
              ></img>
              <p
                className="jss162 jss132"
                style={{
                  fontWeight: 400,
                  fontSize: "11px",
                  color: "#3CBB00", // Assuming --green is a CSS variable defined elsewhere
                }}
              >
                (0.00%)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.selctorbox}`}
        style={{ display: isVisible ? "block" : "none" }}
      >
        {Times.map((item, index) => {
          return (
            <button
              key={item}
              id={item}
              name={item}
              type="button"
              className={`${styles.mybutton} ${
                item === selected ? styles.selected : ""
              }`}
              onClick={(e) => {
                setSelected(e.target.textContent);
                setIndex(index);
              }}
            >
              <p
                className={`${styles.timestamps}`}
                style={{
                  color: item === selected ? "#FFF" : "#9babc6",
                }}
              >
                {item}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
