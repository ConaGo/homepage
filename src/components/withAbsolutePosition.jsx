import * as React from "react";
const WithAbsolutePosition = ({
  children,
  width = 20,
  left = 40,
  top = 40,
  rotation,
}) => {
  return (
    <div
      style={{
        zIndex: 1,
        transform: `rotate(${rotation}deg)`,
        width: width + "%",
        position: "absolute",
        left: left + "%",
        top: top + "%",
      }}
    >
      {children}
    </div>
  );
};
export default WithAbsolutePosition;
