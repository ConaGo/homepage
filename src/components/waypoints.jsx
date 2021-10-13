import * as React from "react";
import { Waypoint } from "react-waypoint";
import { ParallaxLayer } from "@react-spring/parallax";
import WithAbsolutePosition from "./withAbsolutePosition";
const Waypoints = ({ setPage, setHorizontalScroll }) => {
  return (
    <>
      <ParallaxLayer offset={0}>
        <WithAbsolutePosition top={50} left={50}>
          <Waypoint
            onEnter={() => {
              setPage(0);
            }}
          ></Waypoint>
        </WithAbsolutePosition>
      </ParallaxLayer>
      <ParallaxLayer offset={1}>
        <WithAbsolutePosition top={50} left={50}>
          <Waypoint
            onEnter={() => {
              setPage(1);
              setHorizontalScroll(0);
            }}
          ></Waypoint>
        </WithAbsolutePosition>
      </ParallaxLayer>
      <ParallaxLayer offset={2}>
        <WithAbsolutePosition top={50} left={50}>
          <Waypoint
            onEnter={() => {
              setPage(2);

              setHorizontalScroll(0);
            }}
          ></Waypoint>
        </WithAbsolutePosition>
      </ParallaxLayer>
      <ParallaxLayer offset={3}>
        <WithAbsolutePosition top={50} left={50}>
          <Waypoint
            onEnter={() => {
              setPage(3);
            }}
          ></Waypoint>
        </WithAbsolutePosition>
      </ParallaxLayer>
      <ParallaxLayer offset={4}>
        <WithAbsolutePosition top={70} left={50}>
          <Waypoint
            onEnter={() => {
              setPage(4);
            }}
            onLeave={() => setPage(3)}
          ></Waypoint>
        </WithAbsolutePosition>
      </ParallaxLayer>
    </>
  );
};
export default Waypoints;
