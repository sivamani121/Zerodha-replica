import React, { useEffect, useState } from "react";
import style from "./../styles/graph1.module.css";
import icon from "./../images/icons8-info-18.png";
import image1 from "./../images/image1.svg";
import image2 from "./../images/image2.svg";
import image3 from "./../images/image3.svg";
import image4 from "./../images/image4.svg";
import pointer1 from "./../images/pointer1.svg";
import pointer2 from "./../images/pointer2.svg";
import { LowerType1, LowerType2 } from "./lowerTestimonial";

const images = [image1, image2, image3, image4];

export default function Graph({
  headings,
  id,
  barPos,
  colors,
  cats,
  lowerContent,
}) {
  const { color1, tcolor1, color2, tcolor2, color3, tcolor3 } = colors;

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(barPos);
  return (
    <div id={`${id}`} className={`${style.outercomp}`}>
      <div className={`${style.summary}`}>
        <p style={{ fontWeight: 600, fontSize: "13px" }}>{headings[id]}</p>
        <div>
          <img src={icon} alt="icon"></img>
        </div>
      </div>
      <div
        className={`${style.graphbox}`}
        style={{
          justifyContent: id === 0 || id === 1 ? "space-between" : "normal",
        }}
      >
        <div
          className={`${style.imageboxouter}`}
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "8px",
          }}
        >
          <div
            className={`${style.imageboxinner}`}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <img
              src={images[id]}
              style={{ maxHeight: "100px", padding: "8px" }}
              alt="testimonial"
            ></img>
            <img
              src={id === 1 ? pointer2 : pointer1}
              style={{
                height: "20%",
                width: "10%",
                position: "absolute",
                left:
                  windowSize.width > 1500
                    ? -4+(barPos - 1) * 17.45
                    : windowSize.width > 400
                    ? -4 + (barPos - 1) * 17.45
                    : 2 + (barPos - 1) * 15.5,
                transition: "left 0.3s ease-in-out", // Use transition on the left property
              }}
              alt="pointer"
            />
          </div>
          {id === 1 ? (
            <></>
          ) : (
            <div className={`${style.catcontainer}`}>
              <div className={`${style.catbox}`}>
                <p className={`${style.catag}`}>2</p>
                <p
                  className={`${style.catagtext}`}
                  style={{ backgroundColor: color1, color: tcolor1 }}
                >
                  {cats[0]}
                </p>
              </div>
              <div className={`${style.catbox}`}>
                <p className={`${style.catag}`}>2</p>
                <p
                  className={`${style.catagtext}`}
                  style={{ backgroundColor: color2, color: tcolor2 }}
                >
                  {cats[1]}
                </p>
              </div>
              <div className={`${style.catbox}`}>
                <p className={`${style.catag}`}>2</p>
                <p
                  className={`${style.catagtext}`}
                  style={{ backgroundColor: color3, color: tcolor3 }}
                >
                  {cats[2]}
                </p>
              </div>
            </div>
          )}
        </div>

        {id === 1 || id === 0 ? (
          <LowerType1 Content={lowerContent} />
        ) : (
          <LowerType2 Content={lowerContent} />
        )}
      </div>
    </div>
  );
}
