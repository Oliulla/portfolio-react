import React from "react";
import Snowfall from "react-snowfall";

const SnowfallAnimation = () => {
  return (
    <div
    //   style={{
    //     height: "100vw",
    //     width: "400vh",
    //     // background: "#282c34",
    //     position: "relative",
    //   }}
    >
      <Snowfall 
       snowflakeCount={180}
       />
    </div>
  );
};

export default SnowfallAnimation;
