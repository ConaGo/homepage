import * as React from "react";
import {
  useSpring,
  animated,
  useSpringRef,
  useChain,
  useTrail,
  config,
  useTransition,
} from "@react-spring/web";
import Capture from "../images/capture.png";
import { Waypoint } from "react-waypoint";
import LocationMarker from "../assets/locationmarker.svg";
import { Box, Heading, Button, Avatar, Grid } from "@theme-ui/components";
/* import config from "../config"; */
const Card = ({ show = false, page = 0 }) => {
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
    //width: "100%",
    /*     position: "absolute",
    margin: "auto 0", */
  };
  const topRef = useSpringRef();
  const styleTop1 = useSpring({
    opacity: page === 1 ? 1 : 0,
    top: page === 1 ? "3rem" : "30rem",
    //height: page === 1 ? "100%" : "0%",
    /*     from: { opacity: "0", top: "0rem" },
    to: { opacity: "1", top: "3em" }, */
    config: page < 1 ? config.stiff : { duration: 0 },
    onRest: () => {
      trailApi1.start({
        opacity: page === 1 ? 1 : 0,
        width: "22%",
        height: "60%",
      });
    },
  });

  const [trailStyles1, trailApi1] = useTrail(3, () => ({
    opacity: 0,
    width: "4%",
    height: "4%",
  }));

  const topRef2 = useSpringRef();
  const styleTop2 = useSpring({
    opacity: page === 2 ? 1 : 0,
    config: page < 2 ? config.stiff : { duration: 0 },
    onRest: () =>
      trailApi2.start({
        opacity: page === 2 ? 1 : 0,
        width: "22%",
        height: "60%",
      }),
  });

  const [trailStyles2, trailApi2] = useTrail(3, () => ({
    opacity: 0,
    width: "4%",
    height: "4%",
  }));

  const boxStyle = {
    margin: "3%",
    height: "50%",
    width: "22%",
    borderStyle: "groove",
    borderWidth: "2%",
    borderColor: config.primary,
    backgroundColor: "#000317",
    borderRadius: "10px",
    backgroundColor2: "#31333d",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  /*   if (show) topApi.start({ opacity: 3, top: "3rem" });
  else {
    topApi.start({ opacity: 0, top: "0rem" });
    //trailApi.start({ opacity: 0 });
  } */
  const [toggle, setToggle] = React.useState(false);
  console.log("tiggle" + toggle);
  if (page === 1 && !toggle) {
    trailApi1.start({
      opacity: 1, //page === 1 ? 1 : 0,
      width: "22%",
      height: "60%",
    });
    setToggle(true);
  }
  if (page === 2 && toggle) {
    setToggle(false);
  }
  const transitions = useTransition(toggle, {
    from: {
      position: "absolute",
      opacity: 0,
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: toggle,
    //delay: 600,
    onStart: () => {
      trailApi1.start({
        opacity: page === 1 ? 1 : 0,
        width: page === 1 ? "22%" : "0%",
        height: page === 1 ? "60%" : "0%",
      });
      trailApi2.start({
        opacity: page === 2 ? 1 : 0,
        width: page === 2 ? "22%" : "0%",
        height: page === 2 ? "60%" : "0%",
      });
    },
    config: config.molasses,
  });
  return transitions(({ opacity }, item) =>
    !(page >= 1 || page <= 3) ? null : item ? (
      <animated.div
        style={{
          position: "absolute",
          //top: "3rem",
          width: "100%",
          opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
        }}
      >
        <p style={pStyle}>About Me</p>
        <div
          style={{
            //position: "absolute",
            zIndex: "5",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            height: "100%",
            width: "100%",
          }}
        >
          <animated.div style={{ ...boxStyle, ...trailStyles1[0] }}>
            Box
          </animated.div>
          <animated.div style={{ ...boxStyle, ...trailStyles1[1] }}>
            <Avatar
              style={{
                display: "block",
                margin: "1em",
                width: "80%",
                height: "auto",
              }}
              src={Capture}
            ></Avatar>
            <Box style={{ height: "10%", width: "10%" }}>
              <LocationMarker></LocationMarker>
            </Box>
          </animated.div>
          <animated.div style={{ ...boxStyle, ...trailStyles1[2] }}>
            Box
          </animated.div>
        </div>
      </animated.div>
    ) : (
      <animated.div
        style={{
          position: "absolute",
          //top: "3rem",
          width: "100%",
          opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
        }}
      >
        <p style={pStyle}>Personal Projects</p>
        <div
          style={{
            position: "absolute",
            zIndex: "5",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            height: "100%",
            width: "100%",
          }}
        >
          <animated.div style={{ ...boxStyle, ...trailStyles2[0] }}>
            Box
          </animated.div>
          <animated.div style={{ ...boxStyle, ...trailStyles2[1] }}>
            Box
          </animated.div>
          <animated.div style={{ ...boxStyle, ...trailStyles2[2] }}>
            Box
          </animated.div>
        </div>
      </animated.div>
    )
  );
};

export default Card;
