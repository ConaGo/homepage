import * as React from "react";
import "../assets/css/progressbar.css";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Waypoints from "../components/waypoints";
import Stars from "../assets/starfield.svg";
import Planet from "../components/planet";
import useWindowSize from "../hooks/useWindowSize";
import NavMenu from "../components/navMenu";
import { useSpring, config, useSpringRef, useChain } from "@react-spring/web";
import "@fontsource/iceland";
import "@fontsource/raleway";
import Header from "../components/header";
import DownArrow from "../components/downArrow";
import Card from "../components/card";
import AsteroidField from "../components/asteroidField";
import ContactForm from "../components/contactForm";
import Field from "../images/field.png";
import { Helmet } from "react-helmet";
import useMedia from "../hooks/useMediaQuery";

import HorizontalArrow from "../components/horizontalArrow";
const IndexPage = () => {
  const { isBig } = useMedia();
  const scrollRef = React.useRef(null);
  const [currentPage, setCurrentPage] = React.useState(0);
  const scrollTo = (page) => {
    setCurrentPage(page);
    scrollRef.current.scrollTo(page);
  };
  const pages = 5;
  const scrollNext = () => {
    const nextPage = (currentPage + 1) % pages;
    setCurrentPage(nextPage);
    scrollRef.current.scrollTo(nextPage);
  };
  const [reachedPage, setReachedPage] = React.useState(0);
  if (currentPage > reachedPage) setReachedPage(currentPage);
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
  useChain([widthRef, topRef, bottomRef, navRef], [0, 0.3, 0.5, 0.8]);
  const [horizontalScroll, setHorizontalScroll] = React.useState(0);
  return (
    <div style={{ backgroundColor: "black" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Conago</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        ></meta>
      </Helmet>
      <Parallax
        enabled={true}
        config={config.gentle}
        ref={scrollRef}
        pages={5}
        style={{ top: "0", left: "0" }}
        current={2}
        update={(e) => console.log(e)}
        backgroundColor="black"
      >
        <Waypoints
          setHorizontalScroll={setHorizontalScroll}
          setPage={setCurrentPage}
        />

        {/* Background */}
        <ParallaxLayer
          factor={5.5}
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
              height: "100%",
              backgroundImage:
                "linear-gradient(to bottom, rgba(255,255,255, 0), rgba(0,255,255, 1) 100%)",
            }}
          ></div>
          <Stars style={{ width: "100%", position: "relative" }}></Stars>
        </ParallaxLayer>
        {/* Header */}
        <ParallaxLayer offset={0} speed={1.3} factor={1}>
          <Header
            widthRef={widthRef}
            topRef={topRef}
            bottomRef={bottomRef}
            setDone={setIsHeaderDone}
          />
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 1, end: 3 }}>
          {currentPage >= 1 && currentPage <= 3 && (
            <Card
              horizontalScroll={horizontalScroll}
              show={currentPage >= 1}
              page={currentPage}
              isBig={isBig}
            ></Card>
          )}
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0}>
          <img src={Field} />
        </ParallaxLayer>
        <ParallaxLayer offset={0}>
          <AsteroidField />
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={1.1}>
          <Planet posX={0} rotation={47} diameter={2}></Planet>
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
        <ParallaxLayer
          id={"toplayer"}
          onClick={(e) => {
            document.getElementById("toplayer").style.visibility = "hidden";
            if (document.elementFromPoint(e.clientX, e.clientY).click) {
              document.elementFromPoint(e.clientX, e.clientY).click();
            }
            document.getElementById("toplayer").style.visibility = "visible";
          }}
          offset={0}
          sticky={{ start: 0, end: 4 }}
          speed={0.01}
        >
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
          <ContactForm show={currentPage === 4} />
          {!isBig && (
            <HorizontalArrow
              onClick={() => setHorizontalScroll((horizontalScroll + 1) % 3)}
              isVisible={currentPage > 0 && currentPage < 4}
            />
          )}
          <DownArrow
            enabled={navEnabled}
            page={currentPage}
            scrollNext={scrollNext}
          />
          <NavMenu
            enabled={navEnabled}
            page={currentPage}
            setPage={scrollTo}
            isBig={isBig}
          ></NavMenu>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default IndexPage;
