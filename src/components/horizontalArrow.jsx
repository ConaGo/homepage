import * as React from "react";
import { useSpring, animated } from "@react-spring/web";
const HorizontalArrow = ({ isVisible, onClick = () => {} }) => {
  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    width: isVisible ? "40%" : "0%",
  });
  return (
    <animated.div
      style={{
        position: "absolute",
        top: "40%",
        left: "0px",
        zIndex: 10,
        height: "30%",
        ...styles,
      }}
    >
      <svg
        onClick={() => {
          onClick();
        }}
        width="40%"
        height="100%"
        viewBox="0 0 10 10"
        preserveAspectRatio="xMidYMid meet"
        style={{
          position: "absolute",
          left: "0px",
          zIndex: 10,
        }}
      >
        <defs>
          <linearGradient
            id="Gradient-5"
            x1="15%"
            y1="50%"
            x2="100%"
            y2="50%"
            gradientTransform="rotate(90)"
          >
            <stop offset="0%" stopColor="#004433" />

            <stop offset="50%" stopColor="#00ffaa" />

            <stop offset="100%" stopColor="#004433" />
          </linearGradient>
        </defs>
        <path
          width="100%"
          height="100%"
          fill="none"
          stroke="url(#Gradient-5)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 5 0, 2 5, 5 10 M 9 0, 6 5, 9 10"
        ></path>
      </svg>
    </animated.div>
  );
};

export default HorizontalArrow;
