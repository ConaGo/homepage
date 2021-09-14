import * as React from "react";
import Goo from "gooey-react";
import { useSpring, useSprings, animated, config } from "@react-spring/web";
import styleConfig from "../config";
import useWindowSize from "../hooks/useWindowSize";
const DownArrow = ({ scrollNext, enabled = true }) => {
  const [mouseOver, setMouseOver] = React.useState(false);
  const { x } = useSpring({
    config: config.stiff,
    x: enabled ? 1 : 0,
  });
  const { opacity } = useSpring({
    config: { duration: 200 },
    opacity: enabled ? 1 : 0,
  });
  const { height } = useSpring({
    height: mouseOver ? "25%" : "23%",
  });
  const animate = () => {
    const anime = document.getElementsByTagName("animate")[0];
    anime.beginElement();
  };
  window.addEventListener("wheel", () => {
    animate();
  });
  const up1 = "M 0 10 C 4 9, 4 9, 5 8 S 10 4, 15 8 C 16 9, 16 9, 20 10 ";
  const up2 = "M 0 10 C 4 9, 4 9, 5 8 S 10 3, 15 8 C 16 9, 16 9, 20 10 ";
  const down = "M 0 10 C 4 10, 4 10, 5 10 S 10 10, 15 10 C 16 10, 16 10, 20 10";
  return (
    <animated.div
      style={{
        height: height,
        width: "100%",
        /* height: "30%", */
        margin: "0 auto",
        position: "absolute",
        bottom: "0",
        //left: "500px",
        //pointerEvents: "none",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 20 9.5"
        preserveAspectRatio="xMidYMid meet"
        onMouseEnter={() => {
          //animate();
          setMouseOver(true);
        }}
        onMouseLeave={() => setMouseOver(false)}
      >
        <defs>
          {/*           <linearGradient id="Gradient-2" x1="0%" y1="30%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ffaa" />
            <stop offset="40%" stopColor="#009463" />
            <stop offset="70%" stopColor="#00003b" />
            <stop offset="100%" stopColor="#00183d" />
          </linearGradient> */}
          {/*           <linearGradient id="Gradient-1" x1="15%" y1="0%" x2="100%" y2="00%">
            <stop offset="00%" stopColor="#00003b" />
            <stop offset="15%" stopColor="#00183d" />
            <stop offset="30%" stopColor="#00ffaa" />
            <stop offset="50%" stopColor="#009463" />
            <stop offset="70%" stopColor="#00003b" />
            <stop offset="100%" stopColor="#00183d" />
          </linearGradient>
          <linearGradient id="Gradient-2" x1="15%" y1="50%" x2="100%" y2="00%">
            <stop offset="00%" stopColor="#00003b" />
            <stop offset="15%" stopColor="#00183d" />
            <stop offset="30%" stopColor="#00ffaa" />
            <stop offset="50%" stopColor="#009463" />
            <stop offset="70%" stopColor="#00003b" />
            <stop offset="100%" stopColor="#00183d" />
          </linearGradient> */}
          <linearGradient id="Gradient-4" x1="15%" y1="0%" x2="100%" y2="00%">
            <stop offset="00%" stopColor="#00003b" />
            <stop offset="15%" stopColor="#00183d" />
            <stop offset="30%" stopColor="#00ffaa" />
            <stop offset="50%" stopColor="#009463" />
            <stop offset="70%" stopColor="#00003b" />
            <stop offset="100%" stopColor="#00183d" />
          </linearGradient>
        </defs>

        <animated.path
          onClick={scrollNext}
          x="0"
          y="0"
          width="100%"
          height="100%"
          stroke="#000e36"
          strokeWidth="0.01"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="url(#Gradient-4)"
          d={x.to({
            range: [0, 0.85, 0.9, 0.95, 1],
            output: [down, up2, up1, up2, up1],
          })}
        ></animated.path>
        <animated.path
          onClick={scrollNext}
          style={{ opacity: opacity }}
          x="15"
          y="0"
          width="100%"
          height="100%"
          fill="#00183d"
          stroke="#00183d"
          strokeWidth="0.07"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 8 7, 12 7, 10 7.7, 8 7 M 8 8.3, 12 8.3, 10 9, 8 8.3 "
        >
          <animate
            attributeName="fill"
            values="#00ffaa;#00183d;#00ffaa;#00183d;#00183d"
            dur="2s"
            calcMode="spline"
            keyTimes="0 ;0.1;0.2;0.3; 1"
            keySplines="0.5 0 0.5 1 ; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
            begin="mouseover;wheel"
          ></animate>
        </animated.path>
      </svg>
    </animated.div>
  );
};
const up2 = "M 0 10 C 4 9, 4 9, 5 8 S 10 2, 15 8 C 16 9, 16 9, 20 10 ";
/* const Arrows = () => {
  const [toggle, setToggle] = React.useState(true);
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="3 3 8 13"
      preserveAspectRatio="xMidYMid meet"
      onClick={() => {
        console.log(toggle);
        setToggle(!toggle);
      }}
      style={{ transform: "rotate(180deg)" }}
    >
      <defs>
        <linearGradient id="Gradient-2" x1="0%" y1="30%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00ffaa" />
          <stop offset="40%" stopColor="#009463" />
          <stop offset="70%" stopColor="#00003b" />
          <stop offset="100%" stopColor="#00183d" />
        </linearGradient>
      </defs>
      <path
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="none"
        stroke="url(#Gradient-2)"
        strokeWidth="0.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 2 7, 7 4, 12 7, 2 7 M 2 12, 7 9, 12 12, 2 12"
      />
    </svg>
  );
}; */
export default DownArrow;
