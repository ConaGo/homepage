import * as React from "react";
import { Icon } from "@iconify/react";
import styleConfig from "../config";

const TechIcon = ({ name, tooltip, size = 4, color }) => {
  const style = () => {
    return {
      height: size + "rem",
      width: size + "rem",
      backgroundColor: styleConfig.secondary,
      borderRadius: "999999px",
      boxShadow: "0 0 17px " + styleConfig.primary,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 1em",
      opacity: 0.8,
      //display: "inline",
    };
  };
  const iconStyle = { height: size - 1 + "rem", width: size - 1 + "rem" };

  return (
    <div style={style()}>
      <Icon inline={true} style={iconStyle} icon={name} color={color}></Icon>
    </div>
  );
};
const languages = [
  {
    name: "vscode-icons:file-type-typescript-official",
    tooltip: "Typescript",
  },
  { name: "logos:c-sharp", tooltip: "C#" },

  { name: "vscode-icons:file-type-go", tooltip: "Golang" },
  { name: "logos:java", tooltip: "Java" },
  { name: "logos:python", tooltip: "Python" },
  /*   { name: "vscode-icons:file-type-html", tooltip: "Html5" },
   */
];
const dbs = [
  { name: "logos:postgresql", tooltip: "PostgreSQL" },
  { name: "vscode-icons:file-type-mongo", tooltip: "MongoDB" },
  { name: "logos:ubuntu", tooltip: "Ubuntu Server" },
];
const frameworks = [
  { name: "logos:react", tooltip: "ReactJs" },
  { name: "logos:vue", tooltip: "VueJs" },
  { name: "logos:nestjs", tooltip: "NestJs" },
  { name: "vscode-icons:file-type-node", tooltip: "NodeJs" },

  { name: "logos:pytorch", tooltip: "PyTorch" },
  { name: "logos:nextjs", tooltip: "NextJs" },
];
const libraries = [
  { name: "logos:material-ui", tooltip: "Material UI" },
  { name: "logos:react-spring", tooltip: "React Spring" },
  { name: "file-icons:nx", tooltip: "NX", color: "lightblue" },
];
const learning = [
  {
    name: "vscode-icons:file-type-rust",
    tooltip: "Rust",
  },
  { name: "vscode-icons:file-type-elixir", tooltip: "Elixir" },
  { name: "logos:phoenix", tooltip: "Phoenix" },
];
const TechIcons = ({ data, size, color }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {data.map((tech) => (
        <TechIcon
          name={tech.name}
          tooltip={tech.tooltip}
          size={size}
          color={tech.color}
        />
      ))}
    </div>
  );
};
const FrameWorkIcons1 = (size) =>
  TechIcons({ data: frameworks.slice(0, 3), size: size });
const FrameWorkIcons2 = (size) =>
  TechIcons({ data: frameworks.slice(3, 5), size: size });
const DbIcons = (size) => TechIcons({ data: dbs, size: size });
const LanguageIcons1 = (size) =>
  TechIcons({ data: languages.slice(0, 3), size: size });
const LanguageIcons2 = (size) =>
  TechIcons({ data: languages.slice(3, 6), size: size });
const LibrayIcons = (size) => TechIcons({ data: libraries, size: size });
const LearningIcons = (size) => TechIcons({ data: learning, size: size });
const GithubIcon = () => {
  return (
    <TechIcons
      data={[
        {
          name: "akar-icons:github-fill",
          tooltip: "Github",
          color: styleConfig.primaryLess,
        },
      ]}
      size={2.6}
    ></TechIcons>
  );
};
const NXIcon = () => {
  return (
    <TechIcons
      data={[{ name: "file-icons:nx", tooltip: "NX", color: "lightblue" }]}
      size={2.6}
    ></TechIcons>
  );
};
const NestJSIcon = () => {
  return (
    <TechIcons
      data={[{ name: "logos:nestjs", tooltip: "NestJs" }]}
      size={2.6}
    ></TechIcons>
  );
};
const PostgresIcon = () => {
  return (
    <TechIcons
      data={[{ name: "logos:postgresql", tooltip: "PostgreSQL" }]}
      size={2.6}
    ></TechIcons>
  );
};
const NextJSIcon = () => {
  return (
    <TechIcons
      data={[{ name: "logos:nextjs", tooltip: "NextJs" }]}
      size={2.6}
    ></TechIcons>
  );
};
const ReactIcon = () => {
  return (
    <TechIcons
      data={[{ name: "logos:react", tooltip: "ReactJs" }]}
      size={2.6}
    ></TechIcons>
  );
};
const MuiIcon = () => {
  return (
    <TechIcons
      data={[{ name: "logos:material-ui", tooltip: "Material UI" }]}
      size={2.6}
    ></TechIcons>
  );
};
const NodeIcon = () => {
  return (
    <TechIcons
      data={[{ name: "file-icons:nx", tooltip: "NX", color: "lightblue" }]}
      size={2.6}
    ></TechIcons>
  );
};
export {
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
};
