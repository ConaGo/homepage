import * as React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import WithAbsolutePosition from "./withAbsolutePosition";
//import Asteroid1 from "../assets/asteroids/asteroidBot.svg";
//import Asteroid2 from "../assets/asteroids/asteroidBotRight.svg";
//import Asteroid3 from "../assets/asteroids/asteroidBotRight2.svg";
//import Asteroid4 from "../assets/asteroids/asteroidTopRight.svg";
import { Asteroid1, Asteroid2, Asteroid3, Asteroid4 } from "./asteroids";
const randomAsteroid = () => {
  const rand = Math.floor(Math.random() * 4);
  switch (rand) {
    case 0:
      return <Asteroid1 />;
    case 1:
      return <Asteroid2 />;
    case 2:
      return <Asteroid3 />;
    default:
      return <Asteroid4 />;
  }
};
const getRandomPosition = () => {
  const randTop = Math.random() * 80;
  const randLeft = Math.random() * 80;
  return [randTop, randLeft];
};
const AsteroidField = React.memo(() => {
  const size = 15,
    layers = 3,
    offset = 1;
  let fields = [];
  for (let layer = layers; layer > 0; layer--) {
    console.log(layer + "layer");
    let field = [];
    for (let y = Math.floor(size / layer); y > 0; y--) {
      const [top, left] = getRandomPosition();
      const randWidth = Math.random() * layer * 14;
      field.push({
        layer: layer,
        top: top,
        left: left,
        width: randWidth,
        rotation: Math.random() * 360,
      });
      console.log(field + "sateroid");
    }
    fields.push(field);
  }
  console.log(fields);
  console.log("hea");
  const a = fields[0][0];
  const b = fields[0][1];
  const c = fields[0][2];
  const d = fields[0][3];
  const e = fields[0][4];
  const f = fields[1][0];
  const g = fields[1][1];
  const h = fields[1][2];
  const i = fields[1][3];
  const j = fields[2][0];
  return (
    <>
      <ParallaxLayer offset={1} speed={0.1}>
        <WithAbsolutePosition
          width={5}
          left={3}
          top={-5}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
        <WithAbsolutePosition
          width={6}
          left={30}
          top={-10}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
        <WithAbsolutePosition
          width={7}
          left={40}
          top={-6}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
        <WithAbsolutePosition
          width={10}
          left={70}
          top={-8}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
        <WithAbsolutePosition
          width={2}
          left={90}
          top={-10}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>

        <WithAbsolutePosition
          width={5}
          left={3}
          top={5}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
        <WithAbsolutePosition
          width={6}
          left={20}
          top={10}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
        <WithAbsolutePosition
          width={7}
          left={10}
          top={6}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
        <WithAbsolutePosition
          width={10}
          left={65}
          top={8}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
        <WithAbsolutePosition
          width={2}
          left={80}
          top={10}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>

        <WithAbsolutePosition
          width={3}
          left={5}
          top={20}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
        <WithAbsolutePosition
          width={2}
          left={15}
          top={25}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
        <WithAbsolutePosition
          width={10}
          left={20}
          top={25}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
        <WithAbsolutePosition
          width={4}
          left={60}
          top={46}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>

        <WithAbsolutePosition
          width={3}
          left={5}
          top={50}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
        <WithAbsolutePosition
          width={2}
          left={15}
          top={45}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
        <WithAbsolutePosition
          width={10}
          left={20}
          top={55}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
        <WithAbsolutePosition
          width={4}
          left={60}
          top={66}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>

        <WithAbsolutePosition
          width={3}
          left={5}
          top={70}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
        <WithAbsolutePosition
          width={2}
          left={15}
          top={85}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
        <WithAbsolutePosition
          width={10}
          left={20}
          top={65}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
        <WithAbsolutePosition
          width={4}
          left={60}
          top={76}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
      </ParallaxLayer>
      <ParallaxLayer offset={offset} speed={0.5}>
        <WithAbsolutePosition
          width={23}
          left={5}
          top={20}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
        <WithAbsolutePosition
          width={12}
          left={15}
          top={25}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
        <WithAbsolutePosition
          width={19}
          left={20}
          top={25}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
        <WithAbsolutePosition
          width={25}
          left={60}
          top={26}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
      </ParallaxLayer>
      <ParallaxLayer offset={offset} speed={1.5}>
        <WithAbsolutePosition
          width={13}
          left={25}
          top={350}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
        <WithAbsolutePosition
          width={17}
          left={0}
          top={62}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
        <WithAbsolutePosition
          width={10}
          left={45}
          top={58}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
        <WithAbsolutePosition
          width={24}
          left={83}
          top={37}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
        <WithAbsolutePosition
          width={13}
          left={8}
          top={40}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
        <WithAbsolutePosition
          width={17}
          left={43}
          top={68}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
        <WithAbsolutePosition
          width={24}
          left={10}
          top={10}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
        <WithAbsolutePosition
          width={14}
          left={58}
          top={41}
          rotation={Math.random() * 360}
        >
          {randomAsteroid()}
        </WithAbsolutePosition>
      </ParallaxLayer>
    </>
  );
});

export default AsteroidField;
