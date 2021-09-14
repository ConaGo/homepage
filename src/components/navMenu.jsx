import * as React from "react";
import Goo from "gooey-react";
import { useSpring, useSprings, animated } from "@react-spring/web";
import config from "../config";

const NavMenu = ({ page, setPage, enabled }) => {
  const [lastPage, setLastPage] = React.useState(0);
  const points = [
    { position: "10%" },
    { position: "30%" },
    { position: "50%" },
    { position: "70%" },
    { position: "90%" },
  ];
  //const radiusSmall = 20;
  const styles = useSpring({
    from: { cy: points[lastPage].position },
    to: { cy: points[page].position },
  });
  const { x, y } = useSpring({ x: 0, y: 0 });
  const springs = useSprings(
    points.length,
    points.map((item) => ({ opacity: item.opacity }))
  );
  const { right } = useSpring({
    right: enabled ? "-100px" : "-300px",
  });
  console.log(enabled);
  const radius = 22;
  //const fill = config.primary;
  const height = 350;
  return (
    <Goo
      style={{
        position: "absolute",
        right: "0",
        top: "30%",
        width: "0%",
      }}
    >
      <animated.svg
        style={{
          position: "absolute",
          right: right,
          height: height + "px",
        }}
      >
        {points.map((p, i) => (
          <React.Fragment key={"menuButtonContainer" + i}>
            <circle
              key={"menuButton" + p}
              cx="50%"
              cy={p.position}
              r={"16"}
              fill={config.secondary}
              stroke={config.primary}
              strokeWidth="2"
            />
            <circle
              key={"menuButtonClickWidener" + p}
              cx="50%"
              cy={p.position}
              r={"30"}
              fill={"transparent"}
              onClick={() => {
                setLastPage(page);
                setPage(i);
              }}
            />
          </React.Fragment>
        ))}
        <animated.circle
          cx="50%"
          cy={styles.cy}
          r={radius}
          fill={config.primary}
          styles={styles}
          stroke={config.secondary}
          strokeWidth="3"
        />
      </animated.svg>
    </Goo>
  );
};
export default NavMenu;
