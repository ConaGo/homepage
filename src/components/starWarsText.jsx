import * as React from "react";
import { useSpring, useSprings, animated } from "@react-spring/web";
import useWindowSize from "../hooks/useWindowSize";
const StarWarsText = () => {
  const windowSize = useWindowSize();
  console.log(windowSize);
  const styles = useSpring({
    loop: false,
    to: {
      top: "20%",
      //transform: "rotateX(20deg) translateZ(-2500)",
    },
    from: {
      top: "300%",
      //transform: "rotateX(25deg) translateZ(0)",
    },
    config: { duration: windowSize.height },
  });
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        //position: "absolute",
      }}
    >
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          height: "800px",
          perspective: "400px",
        }}
      >
        <animated.div
          style={{
            position: "relative",
            bottom: "-100px",
            transformOrigin: "50% 100%",
            ...styles,
          }}
        >
          <div>
            <p>Episode IV</p>
            <h1>A New Hope</h1>
          </div>

          <p>
            It is a period of civil war. Rebel spaceships, striking from a
            hidden base, have won their first victory against the evil Galactic
            Empire.
          </p>
          <p>
            During the battle, Rebel spies managed to steal secret plans to the
            Empire’s ultimate weapon, the DEATH STAR, an armored space station
            with enough power to destroy an entire planet.
          </p>
          <p>
            Pursued by the Empire’s sinister agents, Princess Leia races home
            aboard her starship, custodian of the stolen plans that can save her
            people and restore freedom to the galaxy…
          </p>
        </animated.div>
      </section>
    </div>
  );
};

export default StarWarsText;
