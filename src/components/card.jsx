import * as React from "react";
import {
  useSpring,
  animated,
  useSpringRef,
  useChain,
  useTrail,
} from "@react-spring/web";
import { Waypoint } from "react-waypoint";
import { Box, Heading, Button, Avatar, Grid } from "@theme-ui/components";
import config from "../config";
const Card = () => {
  const pStyle = {
    textAlign: "center",
    fontSize: "10vh",
    color: "white",
    fontFamily: "Iceland, roboto",
    margin: "2rem 0",
    textShadow:
      "-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000",
  };
  const sharedStyle = {
    width: "100%",
    /*     position: "absolute",
    margin: "auto 0", */
  };
  const topRef = useSpringRef();
  const [styleTop, topApi] = useSpring(() => ({
    from: { opacity: "0", top: "0rem" },
    to: { opacity: "1", top: "3em" },
    delay: 500,
    config: config.gentle,
    ref: topRef,
    onRest: () =>
      trailApi.start({
        opacity: 1,
        width: "22%",
        height: "50%",
      }),
  }));

  const [trailStyles, trailApi] = useTrail(3, () => ({
    opacity: 0,
    width: "0%",
    height: "0%",
  }));
  const boxStyle = {
    margin: "3%",
    height: "50%",
    width: "22%",
    borderStyle: "groove",
    borderWidth: "6px",
    borderColor: config.primary,
    backgroundColor: "#000317",
    borderRadius: "10px",
    backgroundColor2: "#31333d",
  };
  console.log(trailStyles);
  return (
    <>
      <Waypoint
        onEnter={() => topApi.start()}
        onLeave={() => console.log("leave 1")}
      />
      <animated.section
        style={{
          ...sharedStyle,
          ...styleTop,
        }}
      >
        <p style={pStyle}>Personal Projects</p>
      </animated.section>
      <div
        style={{
          position: "relative",
          zIndex: "5",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "100%",
        }}
      >
        <animated.div style={{ ...boxStyle, ...trailStyles[0] }}>
          Box
        </animated.div>
        <animated.div style={{ ...boxStyle, ...trailStyles[1] }}>
          Box
        </animated.div>
        <animated.div style={{ ...boxStyle, ...trailStyles[2] }}>
          Box
        </animated.div>
      </div>
    </>
  );
};

export default Card;
