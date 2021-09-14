import * as React from "react";
import { useSpring, animated } from "@react-spring/web";

const WithMovement = ({ children, width = 20, left = 40, top = 40 }) => {
  const { o } = useSpring({
    from: { o: 0 },
    o: 1,
    loop: true,
    config: { duration: 1500 * (100 - width) },
  });
  return (
    <animated.div
      style={{
        transform: o
          .to({
            range: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            output: [0, 20, 37, 50, 37, 20, 0, -18, -30, -18, 0],
          })
          .to(
            (o) =>
              `translate(${0 * 0.1}%, ${o}%) rotate(${o * 0.2}deg) scale(${
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

const WithMovement2 = ({ Child, width = "20%" }) => {
  const { o } = useSpring({
    from: { o: 0 },
    o: 1,
    loop: true,
    config: { duration: 250 },
  });
  return (
    <div>
      <animated.Child
        style={{
          transform: o
            .to({
              range: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
              output: [0, 20, 37, 50, 37, 20, 0, -18, -30, -18, 0],
            })
            .to(
              (o) =>
                `translate(${o}%, ${0}%) rotate(${o * 0.2}deg) scale(${
                  1 + 0.005 * o
                })`
            ),
          width: width,
          margin: "auto",
        }}
      ></animated.Child>
    </div>
  );
};
