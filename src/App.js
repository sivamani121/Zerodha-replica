import "./App.css";

import FullComp from "./Components/FullComp";
import NavBar from "./Components/Navbar";
import MiddlePart from "./Components/MiddlePart";
import { useState } from "react";
import Footer from "./Components/Footer";
const colors = [
  {
    tcolor1: "rgb(235, 29, 84)",
    color1: "#FFE2EB",
    tcolor2: "rgb(123, 130, 139)",
    color2: "rgb(235, 239, 245)",
    tcolor3: "rgb(60, 187, 0)",
    color3: "rgb(226, 255, 213)",
  },
  {
    tcolor1: "rgb(235, 29, 84)",
    color1: "#FFE2EB",
    tcolor2: "rgb(123, 130, 139)",
    color2: "rgb(235, 239, 245)",
    tcolor3: "rgb(60, 187, 0)",
    color3: "rgb(226, 255, 213)",
  },
  {
    tcolor1: "rgb(254, 152, 1)",
    color1: "rgb(255, 245, 230)",
    tcolor2: "rgb(123, 130, 139)",
    color2: "rgb(235, 239, 245)",
    tcolor3: "rgb(224, 243, 255)",
    color3: "rgb(1, 142, 232)",
  },
  {
    tcolor1: "rgb(235, 29, 84)",
    color1: "#FFE2EB",
    tcolor2: "rgb(123, 130, 139)",
    color2: "rgb(235, 239, 245)",
    tcolor3: "rgb(224, 243, 255)",
    color3: "rgb(1, 142, 232)",
  },
];

const Content = [
  [
    {
      a: "22076.49",

      b: "EMA (20)",
    },

    {
      a: "22159.61",

      b: "SMA(20)",
    },
    {
      a: "51.48",

      b: "RSI(14)",
    },
    {
      a: "-96.92",

      b: "Awesome Osc.",
    },
    {
      a: "14.42",

      b: "Macd (12, 26, 9)",
    },
    {
      a: "-43.90",

      b: "CCI (20)",
    },
  ],
  [
    {
      a: "21576.17",

      b: "S1",
    },

    {
      a: "21169.53",

      b: "S2",
    },
    {
      a: "20402.23",

      b: "S3",
    },
    {
      a: "22343.47",

      b: "R1",
    },

    {
      a: "22704.13",

      b: "R2",
    },
    {
      a: "23471.43",

      b: "R3",
    },
  ],
  [
    { a: "B", b: "EMA (5)", c: "22016.03" },
    { a: "B", b: "SMA (5)", c: "21964.19" },
    { a: "B", b: "EMA (10)", c: "22056.57" },
    { a: "B", b: "SMA (10)", c: "22065.70" },
    { a: "B", b: "EMA (20)", c: "22076.49" },
    { a: "S", b: "SMA (20)", c: "22159.61" },
    { a: "B", b: "EMA (30)", c: "22031.16" },
    { a: "B", b: "SMA (30)", c: "22090.58" },
    { a: "B", b: "EMA (50)", c: "21857.60" },
    { a: "B", b: "SMA (50)", c: "21931.91" },
    { a: "B", b: "EMA (100)", c: "21332.67" },
    { a: "B", b: "SMA (100)", c: "21205.93" },
    { a: "B", b: "EMA (200)", c: "20486.04" },
    { a: "B", b: "SMA (200)", c: "20312.01" },
    { a: "B", b: "Ichimoku Base line (9, 26, 52, 26)", c: "22118.40" },
    { a: "N", b: "Volume Weighted MA (20)", c: "0.00" },
    { a: "B", b: "Hull MA (9)", c: "21909.50" },
  ],
  [
    { a: "N", b: "RSI (14)", c: "51.48" },
    { a: "N", b: "Stoch.%K (14, 3, 3)", c: "47.35" },
    { a: "N", b: "CCI (20)", c: "-43.90" },
    { a: "N", b: "ADX (14)", c: "16.19" },
    { a: "S", b: "Awesome Osc.", c: "-96.92" },
    { a: "N", b: "Momentum (10)", c: "-396.80" },
    { a: "N", b: "Macd (12, 26, 9)", c: "14.42" },
    { a: "N", b: "Stoch. RSI Fast (3, 3, 14, 14)", c: "10.72" },
    { a: "N", b: "Williams %Range (14)", c: "-52.65" },
    { a: "N", b: "Ultimate Osc. (7, 14, 28)", c: "55.75" },
  ],
];
const cats = [
  ["Bearish", "Neutral", "Bullish"],
  [],
  ["Bearish", "Neutral", "Bullish"],
  ["Bearish", "Neutral", "Bullish"],
];

const headings = [
  "Summary",
  "Support & Resistance",
  "Moving averages",
  "Oscillators",
];

const indexes = [
  [1, 4, 8, 12],
  [1, 5, 9, 13],
  [2, 6, 10, 14],
  [3, 7, 11, 15],
  [4, 8, 12, 17],
  [5, 9, 13, 14],
];
function App() {
  const [index, setIndex] = useState(5);
  return (
    <div className="App">
      <NavBar />
      <MiddlePart setIndex={setIndex} />
      <FullComp
        indexs={indexes[index]}
        headings={headings}
        Content={Content}
        colors={colors}
        cats={cats}
      />
      <Footer />
    </div>
  );
}

export default App;
