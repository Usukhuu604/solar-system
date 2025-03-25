import React from "react";

export const Mercury = () => {
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        border: "1px dashed white",
        borderRadius: "50%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <img
        src="mercury.png"
        alt=""
        style={{
          width: "50px",
          position: "relative",
          top: "0%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};
