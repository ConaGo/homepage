import * as React from "react";
import { Box, Flex, Heading, Button, Avatar, Grid } from "@theme-ui/components";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Test from "../assets/test.svg";
import TwoArrows from "../assets/twoArrows.svg";
import Triangle from "../assets/triangle.svg";
import TwoCircle from "../assets/twoCircle.svg";
import SideBar from "../components/sidebar";
import Capture from "../images/Capture.png";

const IndexPage = () => {
  return (
    <>
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={0}
          sticky={{ start: 0, end: 2 }}
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

          <Heading as="h5">Lennart Jasper</Heading>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TwoCircle></TwoCircle>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
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
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default IndexPage;
