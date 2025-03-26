export const SolarBackground = () => {
  return (
    <div>
      <img
        src="galaxy.webp"
        alt=""
        style={{ width: "100vw", height: "100vh" }}
      />
      <img
        src="sun.png"
        alt=""
        style={{
          width: "100px",
          height: "100px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};
