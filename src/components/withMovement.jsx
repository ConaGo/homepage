import * as React from "react";
import { useSpring, animated } from "@react-spring/web";

const WithMovement = ({
  children,
  width = 20,
  left = 40,
  top = 40,
  rotation,
}) => {
  const { o } = useSpring({
    from: { o: 0 },
    o: 1,
    loop: true,
    config: { duration: 1500 * (100 - width) },
  });
  return (
    <animated.div
      style={{
        zIndex: 4,
        transform: o
          .to({
            range: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            output: [0, 20, 37, 50, 37, 20, 0, -18, -30, -18, 0],
          })
          .to(
            (o) =>
              `translate(${0 * 0.1}%, ${o}%) rotate(${rotation}deg) scale(${
                1 + 0.005 * o
              })`
          ),
        width: width + "%",
        position: "absolute",
        left: left + "%",
        top: top + "%",
      }}
    >
      {children}
    </animated.div>
  );
};

export default WithMovement;

//E07E50; hell
//B75B32
//6C3015

//dots
//C93F1A hell
//A12E0F
//601908
