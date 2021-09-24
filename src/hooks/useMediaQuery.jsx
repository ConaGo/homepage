import * as React from "react";
import { useMediaQuery } from "react-responsive";

const useMedia = () => {
  const isBig = useMediaQuery({ query: "(min-width: 1000px)" });
  return { isBig };
};

export default useMedia;
