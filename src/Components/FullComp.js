import React from "react";
import Graph from "./graph1";
import styles from "./../styles/FullComp.module.css";

export default function FullComp({ indexs, headings, Content, colors, cats }) {
  return (
    <div className={`${styles.mycontainer}`}>
      {[...Array(4)].map((_, index) => (
        <Graph
          headings={headings}
          key={index}
          id={index}
          barPos={indexs[index]}
          colors={colors[index]}
          cats={cats[index]}
          lowerContent={Content[index]}
        />
      ))}
    </div>
  );
}
