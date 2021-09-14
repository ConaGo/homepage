import * as React from "react";
import { Box, Heading, Button, Avatar } from "@theme-ui/components";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
/* import Test from "../assets/test.svg";
import TwoArrows from "../assets/twoArrows.svg";
import Triangle from "../assets/triangle.svg";
import TwoCircle from "../assets/twoCircle.svg";
import SideBar from "../components/sidebar";
import StarWarsText from "../components/starWarsText";

import MorphText from "../components/morphText"; */
import Asteroid1 from "../assets/asteroids/asteroidBot.svg";
import Asteroid2 from "../assets/asteroids/asteroidBotRight.svg";
import Asteroid3 from "../assets/asteroids/asteroidBotRight2.svg";
import Asteroid4 from "../assets/asteroids/asteroidTopRight.svg";
import Stars from "../assets/starfield.svg";
import Planet from "../components/planet";
import useWindowSize from "../hooks/useWindowSize";
import NavMenu from "../components/navMenu";
import {
  useSpring,
  animated,
  config,
  useSpringRef,
  useChain,
} from "@react-spring/web";
import "@fontsource/iceland";
import Header from "../components/header";
import DownArrow from "../components/downArrow";
import WithMovement from "../components/withMovement";
import Card from "../components/card";

import { Waypoint } from "react-waypoint";
const IndexPage = () => {
  const scrollRef = React.useRef(null);
  const [currentPage, setCurrentPage] = React.useState(0);
  const scrollTo = (page) => {
    setCurrentPage(page);
    scrollRef.current.scrollTo(page);
  };
  const pages = 5;
  const scrollNext = () => {
    const nextPage = (currentPage + 1) % pages;
    console.log(nextPage);
    setCurrentPage(nextPage);
    scrollRef.current.scrollTo(nextPage);
  };
  const [isheaderDone, setIsHeaderDone] = React.useState(false);
  const windowSize = useWindowSize();
  const topRef = useSpringRef();
  const bottomRef = useSpringRef();
  const widthRef = useSpringRef();
  const [navEnabled, setnavEnabled] = React.useState(false);
  const navRef = useSpringRef();
  useSpring({
    from: { x: 0 },
    to: { x: 1 },
    onStart: () => setnavEnabled(true),
    ref: navRef,
  });
  useChain([widthRef, topRef, bottomRef, navRef], [0, 0.1, 0.2, 0.5]);
  return (
    <>
      <Parallax
        enabled={false}
        config={config.gentle}
        ref={scrollRef}
        pages={5}
        style={{ top: "0", left: "0" }}
        current={2}
        update={(e) => console.log(e)}
      >
        <ParallaxLayer
          factor={2}
          offset={0}
          speed={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              zIndex: "1",
              top: windowSize.height * 1 + "px",
              left: "0",
              width: "100%",
              height: "50.1%",
              backgroundImage:
                "linear-gradient(to bottom, rgba(255,255,255, 0), rgba(0,255,255, 0.5) 100%)",
            }}
          ></div>
          <Stars style={{ width: "100%", position: "relative" }}></Stars>
          {/* <StarWarsText></StarWarsText> */}
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <Header
            widthRef={widthRef}
            topRef={topRef}
            bottomRef={bottomRef}
            setDone={setIsHeaderDone}
          />
        </ParallaxLayer>
        {/*         <ParallaxLayer offset={1} speed={3}>
          <Asteroid1></Asteroid1>
        </ParallaxLayer> */}
        {/* <ParallaxLayer offset={1} speed={5}>
          <div style={{ display: "grid" }}>
            <Asteroid1 style={{ position: "absolute", top: "0%" }} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={3}>
          <div style={{ display: "grid" }}>
            <Asteroid1
              style={{ height: "50%", position: "absolute", bottom: "0%" }}
            />
          </div>
          <Card></Card>
        </ParallaxLayer> */}
        <ParallaxLayer offset={1} speed={2}>
          <Card></Card>
          <WithMovement Child={Asteroid1}>
            <Asteroid1
            /* style={{ height: "30%", position: "absolute", bottom: "0%" }} */
            />
          </WithMovement>
        </ParallaxLayer>
        {/*         <ParallaxLayer offset={1} speed={1}>
          <div style={{ display: "grid" }}>
            <Asteroid2
              style={{ height: "10%", position: "absolute", bottom: "0%" }}
            />
          </div>
        </ParallaxLayer> */}
        {/*         <ParallaxLayer offset={1} speed={3}>
          <Asteroid1></Asteroid1>
        </ParallaxLayer> */}
        <ParallaxLayer
          factor={2}
          offset={2}
          speed={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stars style={{ width: "100%", position: "relative" }}></Stars>
          <div
            style={{
              position: "absolute",
              zIndex: "1",
              top: "0px",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundImage:
                "linear-gradient(to bottom, rgba(0,255,255, 0.5), rgba(0,255,255, 1) 100%)",
            }}
          ></div>
          <Planet></Planet>
        </ParallaxLayer>
        <ParallaxLayer
          factor={1}
          offset={1}
          speed={1.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></ParallaxLayer>

        {/* StickyLayer */}
        <ParallaxLayer offset={0} sticky={{ start: 0, end: 4 }}>
          {/* <div
            style={{
              background: "rgba(000,011,28,0.8)", //"rgba(000,041,83,0.15)",
              display: "flex",
              //justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              backdropFilter: "blur(5px)",
              width: "20%",
              minWidth: "300px",
              height: "100%",
            }}
          >
            <Box style={{}}>
              <Avatar src={Capture}></Avatar>
            </Box>
            <Button onClick={() => scrollNext()} />
            <Heading as="h5">Lennart Jasper</Heading>
          </div> */}
          <DownArrow enabled={navEnabled} scrollNext={scrollNext} />
          <NavMenu
            enabled={navEnabled}
            page={currentPage}
            setPage={scrollTo}
          ></NavMenu>
        </ParallaxLayer>

        {/*         <ParallaxLayer
          offset={5}
          speed={2}
          style={{ backgroundColor: "#ff6d6d" }}
        />

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <p>Scroll up</p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <Test></Test>
        </ParallaxLayer> */}
      </Parallax>
    </>
  );
};

export default IndexPage;
