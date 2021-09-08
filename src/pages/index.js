import * as React from "react";
import { Box, Flex, Heading, Button, Avatar, Grid } from "@theme-ui/components";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Test from "../assets/test.svg";
import TwoArrows from "../assets/twoArrows.svg";
import Triangle from "../assets/triangle.svg";
import TwoCircle from "../assets/twoCircle.svg";
import SideBar from "../components/sidebar";
import Capture from "../images/Capture.png";
import MorphText from "../components/morphText";
import Stars from "../assets/starfield.svg";
import Planet from "../components/planet";
import useWindowSize from "../hooks/useWindowSize";
const IndexPage = () => {
  const scrollRef = React.useRef(null);
  const [currentPage, setCurrentPage] = React.useState(0);
  const pages = 5;
  const scrollNext = () => {
    const nextPage = (currentPage + 1) % pages;
    console.log(nextPage);
    setCurrentPage(nextPage);
    scrollRef.current.scrollTo(nextPage);
  };
  const windowSize = useWindowSize();
  return (
    <>
      <Parallax ref={scrollRef} pages={5} style={{ top: "0", left: "0" }}>
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
        </ParallaxLayer>
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
        >
          <Planet></Planet>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          sticky={{ start: 0, end: 4 }}
          style={{
            background: "rgba(000,011,28,0.8)", //"rgba(000,041,83,0.15)",
            display: "flex",
            //justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backdropFilter: "blur(5px)",
            width: "7em",
          }}
        >
          <Box style={{}}>
            <Avatar src={Capture}></Avatar>
          </Box>
          <Button onClick={() => scrollNext()} />
          <Heading as="h5">Lennart Jasper</Heading>
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
