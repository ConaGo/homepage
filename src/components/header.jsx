import React from "react";
import {
  useSpring,
  animated,
  config,
  useSpringRef,
  useChain,
} from "@react-spring/web";
import Astronaut from "../images/astronaut1.png";
import styleConfig from "../config";
const Header = ({ topRef, bottomRef, widthRef, setDone }) => {
  //TEXT
  const pStyle = {
    textAlign: "center",
    fontSize: "5vh",
    color: "white",
    fontFamily: "Iceland, roboto",
    margin: "2rem 0",
    textShadow:
      "-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000",
    textShadow: "0 0 6px " + styleConfig.primary,
  };

  const styleTop = useSpring({
    from: { opacity: "0", top: "0rem" },
    to: { opacity: "1", top: "3em" },
    config: config.gentle,
    ref: topRef,
  });

  const styleBottom = useSpring({
    from: { opacity: "0", bottom: "0rem" },
    to: { opacity: "1", bottom: "7rem" },
    config: config.gentle,
    ref: bottomRef,
    onRest: () => setDone(true),
  });

  //ASTRONAUT
  const { o } = useSpring({
    from: { o: 0 },
    o: 1,
    loop: true,
    config: { duration: 25000 },
  });
  const [clicked, setClicked] = React.useState(false);

  const { width } = useSpring({
    from: { width: clicked ? "20%" : "0%" },
    to: { width: clicked ? "0%" : "20%" },
    reverse: clicked,
    config: { duration: 700 },
    ref: widthRef,
  });

  const sharedStyle = {
    width: "100%",
    position: "absolute",
    margin: "auto 0",
  };
  const imageStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90%",
  };
  return (
    <>
      <div style={imageStyle}>
        <animated.img
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
          src={Astronaut}
        ></animated.img>
      </div>
      <animated.section
        style={{
          ...sharedStyle,
          ...styleTop,
        }}
      >
        <p style={pStyle}>Hi, My Name Is </p>
        <p style={pStyle}>Lennart</p>
      </animated.section>
      <animated.section
        style={{
          ...sharedStyle,
          ...styleBottom,
        }} /* style={{ marginTop: "30%" }} */
      >
        <p style={pStyle}>
          And I{" "}
          <span style={{ textShadow: "0 0 40px " + styleConfig.primary }}>
            🖤
          </span>
        </p>
        <p style={pStyle}>Software</p>
      </animated.section>
    </>
  );
};
export default Header;
