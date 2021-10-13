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
import Capture from "../images/me.png";
import { Waypoint } from "react-waypoint";
import LocationMarker from "../assets/locationMarker.svg";
import { Box, Heading, Button, Avatar, Grid } from "@theme-ui/components";
import { Icon } from "@iconify/react";
import styleConfig from "../config";
import Goo from "gooey-react";
import {
  PiIcon,
  SvelteIcon,
  GolangIcon,
  GodotIcon,
  RustIcon,
  ElixirIcon,
  PhoenixIcon,
  ReactIcon,
  MuiIcon,
  NestJSIcon,
  NextJSIcon,
  PostgresIcon,
  NodeIcon,
  NXIcon,
  GithubIcon,
  TechIcon,
  TechIcons,
  FrameWorkIcons1,
  FrameWorkIcons2,
  DbIcons,
  LanguageIcons1,
  LanguageIcons2,
  LibrayIcons,
  LearningIcons,
} from "./icon";

import HorizontalArrow from "../components/horizontalArrow";
/* import config from "../config"; */
const Card = ({ show = false, page = 0, isBig, horizontalScroll }) => {
  const pStyle = {
    textAlign: "center",
    fontSize: "10vh",
    color: "white",
    fontFamily: "Iceland, roboto",
    margin: isBig ? "1rem 0" : "0",
    textShadow:
      "-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000",
    textShadow: "0 0 10px " + styleConfig.primary,
  };
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
        width: mainWidth(),
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
        width: mainWidth(),
        height: "60%",
      }),
  });
  const mainWidth = () => (isBig ? "22%" : "80%");
  const [trailStyles2, trailApi2] = useTrail(3, () => ({
    opacity: 0,
    width: "4%",
    height: "4%",
  }));
  const boxStyle = {
    margin: "0 3% 3% 3%",
    height: "50%",
    //width: "22%",
    borderStyle: "groove",
    borderWidth: "2%",
    borderColor: config.primary,
    backgroundColor: "rgba(0, 3, 23, 0.8)", //#000317",
    //backdropFilter: "blur(49px)",
    borderRadius: "10px",
    backgroundColor2: "#31333d",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    boxShadow: "0 0 10px " + styleConfig.primary,
    paddingBottom: "1em",
  };
  /*   if (show) topApi.start({ opacity: 3, top: "3rem" });
  else {
    topApi.start({ opacity: 0, top: "0rem" });
    //trailApi.start({ opacity: 0 });
  } */

  const [toggle, setToggle] = React.useState(false);
  if (page === 1 && !toggle) {
    trailApi1.start({
      opacity: 1, //page === 1 ? 1 : 0,
      width: mainWidth(),
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
        width: page === 1 ? mainWidth() : "0%",
        height: page === 1 ? "60%" : "0%",
      });
      trailApi2.start({
        opacity: page === 2 ? 1 : 0,
        width: page === 2 ? mainWidth() : "0%",
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
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            height: "100%",
            width: "100%",
          }}
        >
          {/* {!isBig && <HorizontalArrow onClick={scrollHorizontal} />} */}
          {isBig ? (
            <>
              <animated.div style={{ ...boxStyle, ...trailStyles1[0] }}>
                <AboutMe1 isBig={isBig}></AboutMe1>
              </animated.div>
              <animated.div style={{ ...boxStyle, ...trailStyles1[1] }}>
                <AboutMe2 isBig={isBig}></AboutMe2>
              </animated.div>
              <animated.div style={{ ...boxStyle, ...trailStyles1[2] }}>
                <AboutMe3 isBig={isBig}></AboutMe3>
              </animated.div>
            </>
          ) : horizontalScroll === 0 ? (
            <animated.div style={{ ...boxStyle, ...trailStyles1[0] }}>
              <AboutMe1 isBig={isBig}></AboutMe1>
            </animated.div>
          ) : horizontalScroll === 1 ? (
            <animated.div style={{ ...boxStyle, ...trailStyles1[1] }}>
              <AboutMe2 isBig={isBig}></AboutMe2>
            </animated.div>
          ) : (
            <animated.div style={{ ...boxStyle, ...trailStyles1[2] }}>
              <AboutMe3 isBig={isBig}></AboutMe3>
            </animated.div>
          )}
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
        <p style={pStyle}>Projects</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            height: "100%",
            width: "100%",
          }}
        >
          {/* {!isBig && <HorizontalArrow onClick={scrollHorizontal} />} */}
          {isBig ? (
            <>
              <animated.div style={{ ...boxStyle, ...trailStyles2[0] }}>
                <Project1 isBig={isBig}></Project1>
              </animated.div>
              <animated.div style={{ ...boxStyle, ...trailStyles2[1] }}>
                <Project2 isBig={isBig}></Project2>
              </animated.div>
              <animated.div style={{ ...boxStyle, ...trailStyles2[2] }}>
                <Project3 isBig={isBig}></Project3>
              </animated.div>
            </>
          ) : horizontalScroll === 0 ? (
            <animated.div style={{ ...boxStyle, ...trailStyles2[0] }}>
              <Project1 isBig={isBig}></Project1>
            </animated.div>
          ) : horizontalScroll === 1 ? (
            <animated.div style={{ ...boxStyle, ...trailStyles2[1] }}>
              <Project2 isBig={isBig}></Project2>
            </animated.div>
          ) : (
            <animated.div style={{ ...boxStyle, ...trailStyles2[2] }}>
              <Project3 isBig={isBig}></Project3>
            </animated.div>
          )}
        </div>
      </animated.div>
    )
  );
};

export default Card;
const Hr = ({ isBig }) => {
  return (
    <div
      style={{
        width: !isBig ? "50%" : "80%",
        position: "relative",
        margin: "0 auto",
      }}
    >
      <hr
        style={{
          position: "absolute",
          width: "100%",
          border: "1px solid white",
          borderRadius: "20px",
          boxShadow: "0 0 6px " + styleConfig.primary,

          /*           borderTop: "1px solid " + styleConfig.secondary, */
        }}
      ></hr>
      <hr
        style={{
          position: "relative",
          width: "1%",
          border: "1px solid " + styleConfig.primary,
          borderRadius: "20px",

          /*           borderTop: "1px solid " + styleConfig.secondary, */
        }}
      ></hr>
    </div>
  );
};
const AboutMe1 = ({ isBig }) => {
  const fontStyle = {
    fontSize: !isBig ? "1.8rem" : "2.3rem",
    fontFamily: "iceland, roboto",
    color: "white",
    margin: "0em  0.4em",
  };
  return (
    <>
      <Avatar
        style={{
          display: "block",
          margin: "1em",
          width: "80%",
          height: "auto",
          //boxShadow: "0 0 17px " + styleConfig.primary,
        }}
        src={Capture}
      ></Avatar>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr",
          rowGap: " 0.5em",
          marginBottom: "1rem",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LocationMarker
            style={{
              height: !isBig ? "1.8rem" : "2.3rem",
            }}
          ></LocationMarker>

          {/* <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: !isBig ? "1.8rem" : "2.3rem",
              height: "42px",
              textShadow: "0 0 5px " + styleConfig.primary,
            }}
          >
            🏠
          </Box> */}
        </Box>
        <Box style={{ display: "flex", alignItems: "center", ...fontStyle }}>
          Berlin
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: !isBig ? "1.8rem" : "2.3rem",
            height: "42px",
            textShadow: "0 0 5px " + styleConfig.primary,
          }}
        >
          💼
        </Box>
        <Box style={fontStyle}> Freelancer</Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: !isBig ? "1.8rem" : "2.3rem",
            height: "42px",
            textShadow: "0 0 5px " + styleConfig.primary,
          }}
        >
          🎓
        </Box>
        <Box style={fontStyle}> TU Berlin</Box>
        <Box
          style={{
            marginTop: "3px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: !isBig ? "1.8rem" : "2.3rem",
            height: "42px",
            textShadow: "0 0 5px " + styleConfig.primary,
          }}
          onClick={() => openInNewTab("https://www.github.com/conago")}
        >
          <GithubIcon />
        </Box>
        <Box
          onClick={() => openInNewTab("https://www.github.com/conago")}
          style={{ ...fontStyle, textShadow: "0 0 5px " + styleConfig.primary }}
        >
          ConaGo
        </Box>
      </Box>
    </>
  );
};

const AboutMe2 = ({ isBig }) => {
  const fontStyle = {
    fontSize: !isBig ? "1.8rem" : "2.3rem",
    fontFamily: "iceland, roboto",
    color: "white",
    margin: "0em  0.4em",
    whiteSpace: "nowrap",
  };
  const fontStyleBody = {
    fontSize: !isBig ? "1.8rem" : "2.3rem",
    fontFamily: "raleway, roboto",
    color: "white",
    margin: "0em  0.4em",
  };
  const boxStyle = {
    margin: "0 3em",
  };
  const getSize = () => (isBig ? 4 : 2.3);
  return (
    <>
      <Box style={fontStyle}>Favourite Tech</Box>
      <Hr isBig={isBig} />
      <Box style={boxStyle}>
        {LanguageIcons1(getSize())}
        {LanguageIcons2(getSize())}
      </Box>

      <Hr isBig={isBig} />
      {FrameWorkIcons1(getSize())}
      {FrameWorkIcons2(getSize())}
      <Hr isBig={isBig} />
      {DbIcons(getSize())}
      <Hr isBig={isBig} />
      {LibrayIcons(getSize())}
    </>
  );
};
function openInNewTab(url) {
  console.log("clicked");
  window.open(url, "_blank");
}
const AboutMe3 = ({ isBig }) => {
  const fontStyle = {
    fontSize: !isBig ? "1.8rem" : "2.3rem",
    fontFamily: "iceland, roboto",
    color: "white",
    margin: "0em  0.4em",
    whiteSpace: "nowrap",
  };
  const getSize = () => (isBig ? 4 : 2.3);
  return (
    <>
      <Box style={fontStyle}>Currently learning</Box>
      <Hr></Hr>
      {LearningIcons(getSize())}
      <Box style={{ height: "2rem" }}>
        {TechIcon({
          size: 2.3,
          name: "dashicons:book",
          color: styleConfig.primaryLess,
        })}
      </Box>
    </>
  );
};

const Project1 = ({ isBig }) => {
  const fontStyle = {
    fontSize: !isBig ? "2.8rem" : "3.3rem",
    fontFamily: "iceland, roboto",
    color: "white",
    margin: "0em  0.4em",
    whiteSpace: "nowrap",
    textAlign: "center",
  };
  const fontStyleBody = {
    fontSize: !isBig ? "1.3rem" : "1.3rem",
    fontFamily: "raleway, roboto",
    color: "white",
    wordWrap: "break-word",
    textAlign: "center",
    margin: "0.5em",
  };
  const boxStyle = {
    margin: "0 3em",
  };
  return (
    <>
      <Box style={fontStyle}>Quizflip.de</Box>
      <Box style={fontStyleBody}>Digital learning and Quiz app</Box>
      <Hr />

      <Box
        style={fontStyleBody}
        onClick={() => openInNewTab("https://www.github.com/conago/Quizflip")}
      >
        Backend
        <Box
          onClick={() => openInNewTab("https://www.github.com/conago/Quizflip")}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <NodeIcon />
          <NestJSIcon />
        </Box>
      </Box>
      <Hr />
      <Box
        style={fontStyleBody}
        onClick={() => openInNewTab("https://www.github.com/conago/Quizflip")}
      >
        Frontend
        <Box
          onClick={() => openInNewTab("https://www.github.com/conago/Quizflip")}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ReactIcon />
          <MuiIcon />
          <NextJSIcon />
        </Box>
      </Box>
      <Box style={fontStyleBody}>Progress to first iteration</Box>
      <div style={{ margin: "0 auto", width: "90%" }} class="meter animate">
        <span style={{ width: "70%" }}>
          <span></span>
        </span>
      </div>
    </>
  );
};
const Project2 = ({ isBig }) => {
  const fontStyle = {
    fontSize: !isBig ? "2.8rem" : "3.3rem",
    fontFamily: "iceland, roboto",
    color: "white",
    margin: "0em  0em",
    whiteSpace: "nowrap",
    textAlign: "center",
  };
  const fontStyleBody = {
    fontSize: !isBig ? "1.3rem" : "1.3rem",
    fontFamily: "raleway, roboto",
    color: "white",
    wordWrap: "break-word",
    textAlign: "center",
    margin: "0.2em",
  };
  const boxStyle = {
    margin: "0 3em",
  };
  return (
    <>
      <Box style={fontStyle}>Solana Game</Box>
      <Hr />
      <Box style={fontStyleBody}>
        Tower defense inspired game with NFTs and smart Contracts on the Solana
        Blockchain
      </Box>
      <Hr />
      <Box
        style={fontStyleBody}
        onClick={() => openInNewTab("https://github.com/ConaGo/SolanaGame")}
      >
        Server
        <Box
          onClick={() => openInNewTab("https://github.com/ConaGo/SolanaGame")}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ElixirIcon />
          <PhoenixIcon />
        </Box>
      </Box>
      <Hr />

      <Box
        style={fontStyleBody}
        onClick={() => openInNewTab("https://github.com/ConaGo/SolanaEscrow")}
      >
        Game
        <Box
          onClick={() => openInNewTab("https://github.com/ConaGo/SolanaEscrow")}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ReactIcon />
          <GodotIcon />
        </Box>
      </Box>
      <Hr />
      <Box
        style={fontStyleBody}
        onClick={() => openInNewTab("https://github.com/ConaGo/SolanaEscrow")}
      >
        Smart Contracts
        <Box
          onClick={() => openInNewTab("https://github.com/ConaGo/SolanaEscrow")}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RustIcon />
        </Box>
      </Box>
      {isBig && (
        <>
          <Box style={fontStyleBody}>Progress to first iteration</Box>
          <div style={{ margin: "0 auto", width: "90%" }} class="meter animate">
            <span style={{ width: "10%" }}>
              <span></span>
            </span>
          </div>
        </>
      )}
    </>
  );
};
const Project3 = ({ isBig }) => {
  const fontStyle = {
    fontSize: !isBig ? "2.8rem" : "3.3rem",
    fontFamily: "iceland, roboto",
    color: "white",
    margin: "0em  0.4em",
    whiteSpace: "nowrap",
    textAlign: "center",
  };
  const fontStyleBody = {
    fontSize: !isBig ? "1.3rem" : "1.3rem",
    fontFamily: "raleway, roboto",
    color: "white",
    textAlign: "center",
    margin: "0.5em",
  };
  const boxStyle = {
    margin: "0 3em",
  };
  return (
    <>
      <Box style={fontStyle}>Tech Con</Box>
      <Box style={fontStyleBody}>Search for your next Tech Conference</Box>
      <Hr />

      <Box
        style={fontStyleBody}
        onClick={() => openInNewTab("https://github.com/ConaGo/backend-golang")}
      >
        Backend
        <Box
          onClick={() =>
            openInNewTab("https://github.com/ConaGo/backend-golang")
          }
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PiIcon />
          <GolangIcon />
        </Box>
      </Box>
      <Hr />
      <Box
        style={fontStyleBody}
        onClick={() => openInNewTab("https://www.github.com/conago/Quizflip")}
      >
        Frontend
        <Box
          onClick={() => openInNewTab("https://www.github.com/conago/Quizflip")}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SvelteIcon />
        </Box>
      </Box>
      <Box style={fontStyleBody}>Progress to first iteration</Box>
      <div style={{ margin: "0 auto", width: "90%" }} class="meter animate">
        <span style={{ width: "90%" }}>
          <span></span>
        </span>
      </div>
    </>
  );
};
