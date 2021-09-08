import * as React from "react";
import Circle from "../assets/twoCircle.svg";
import useWindowSize from "../hooks/useWindowSize";
const Planet = ({
  diameter = 1,
  rotation = 0,
  gradientSteps = [0, 20, 40, 100],
  gradientColors = ["#00ffaa", "#009463", "#00003b", "#00183d"],
  posX = 12,
  posY = 6,
}) => {
  const windowSize = useWindowSize();
  const size = windowSize.width * diameter;
  return (
    <div
      style={{
        width: size + "px",
        position: "absolute",
        top: (windowSize.height / 12) * posX + "px",
        left: ((windowSize.width - size) / 12) * posY + "px",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="Gradient-1" x1="0%" y1="50%" x2="100%" y2="0%">
            <stop
              offset={String(gradientSteps[0]) + "%"}
              stopColor={gradientColors[0]}
            />
            <stop
              offset={String(gradientSteps[1]) + "%"}
              stopColor={gradientColors[1]}
            />
            <stop
              offset={String(gradientSteps[2]) + "%"}
              stopColor={gradientColors[2]}
            />
            <stop
              offset={String(gradientSteps[3]) + "%"}
              stopColor={gradientColors[3]}
            />
          </linearGradient>
        </defs>
        <g fill="grey" transform={"rotate(" + String(rotation) + " 0 0)"}>
          <circle
            cx="0"
            cy="0"
            r="40"
            width="100%"
            height="100%"
            fill="url(#Gradient-1)"
          />
        </g>
      </svg>
    </div>
  );
};
export default Planet;
