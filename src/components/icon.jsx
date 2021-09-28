import * as React from "react";
import { Icon } from "@iconify/react";
import styleConfig from "../config";

const TechIcon = ({ name, tooltip }) => {
  const size = 4;
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
      <Icon inline={true} style={iconStyle} icon={name}></Icon>
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
];
const TechIcons = ({ data }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {data.map((tech) => (
        <TechIcon name={tech.name} tooltip={tech.tooltip} />
      ))}
    </div>
  );
};
const FrameWorkIcons1 = TechIcons({ data: frameworks.slice(0, 3) });
const FrameWorkIcons2 = TechIcons({ data: frameworks.slice(3, 5) });
const DbIcons = TechIcons({ data: dbs });
const LanguageIcons1 = TechIcons({ data: languages.slice(0, 3) });
const LanguageIcons2 = TechIcons({ data: languages.slice(3, 6) });
const LibrayIcons = TechIcons({ data: libraries });
export {
  FrameWorkIcons1,
  FrameWorkIcons2,
  DbIcons,
  LanguageIcons1,
  LanguageIcons2,
  LibrayIcons,
};
