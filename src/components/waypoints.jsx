import * as React from "react";
import { Waypoint } from "react-waypoint";
import { ParallaxLayer } from "@react-spring/parallax";
import WithAbsolutePosition from "./withAbsolutePosition";
const Waypoints = ({ setPage }) => {
  return (
    <>
      <ParallaxLayer offset={0}>
        <WithAbsolutePosition top={50} left={50}>
          <Waypoint
            onEnter={() => {
              setPage(0);
              console.log("1");
            }}
            onLeave={() => {
              console.log("leave 1");
            }}
          ></Waypoint>
        </WithAbsolutePosition>
      </ParallaxLayer>
      <ParallaxLayer offset={1}>
        <WithAbsolutePosition top={50} left={50}>
          <Waypoint
            onEnter={() => {
              setPage(1);
              console.log("2");
            }}
            onLeave={() => console.log("leave 2")}
          ></Waypoint>
        </WithAbsolutePosition>
      </ParallaxLayer>
      <ParallaxLayer offset={2}>
        <WithAbsolutePosition top={50} left={50}>
          <Waypoint
            onEnter={() => {
              setPage(2);
              console.log("leave 3");
            }}
            onLeave={() => console.log("leave 3")}
          ></Waypoint>
        </WithAbsolutePosition>
      </ParallaxLayer>
      <ParallaxLayer offset={3}>
        <WithAbsolutePosition top={50} left={50}>
          <Waypoint
            onEnter={() => {
              setPage(3);
              console.log("4");
            }}
            onLeave={() => console.log("leave 4")}
          ></Waypoint>
        </WithAbsolutePosition>
      </ParallaxLayer>
      <ParallaxLayer offset={4}>
        <WithAbsolutePosition top={90} left={50}>
          <Waypoint
            onEnter={() => {
              setPage(4);
              console.log("5");
            }}
            onLeave={() => setPage(3)}
          ></Waypoint>
        </WithAbsolutePosition>
      </ParallaxLayer>
    </>
  );
};
export default Waypoints;
