export const Planets = ({
  size1,
  size2,
  size3,
  size4,
  size5,
  size6,
  size7,
  size8,
  orbit0,
  orbit1,
  orbit2,
  orbit3,
  orbit4,
  orbit5,
  orbit6,
  orbit7,
  rotationPeriod0,
  rotationPeriod1,
  rotationPeriod2,
  rotationPeriod3,
  rotationPeriod4,
  rotationPeriod5,
  rotationPeriod6,
  rotationPeriod7,
  orbitPeriod0,
  orbitPeriod1,
  orbitPeriod2,
  orbitPeriod3,
  orbitPeriod4,
  orbitPeriod5,
  orbitPeriod6,
  orbitPeriod7,
}) => {
  return (
    <div>
      <div
        className="orbit mer"
        style={{
          width: `${orbit0}`,
          height: `${orbit0}`,
          animation: `orbetRotation ${orbitPeriod0} linear infinite`,
        }}
      >
        <img
          src="mercury.png"
          alt=""
          className="planet-position mercury"
          style={{
            width: `${size1}`,
            animation: `planetRotation ${rotationPeriod0} linear infinite`,
          }}
        />
      </div>
      <div
        className="orbit ven"
        style={{
          width: `${orbit1}`,
          height: `${orbit1}`,
          animation: `orbetRotation ${orbitPeriod1} linear infinite`,
        }}
      >
        <img
          src="venus.png"
          alt=""
          className="planet-position venus"
          style={{
            width: `${size2}`,
            animation: `planetRotation ${rotationPeriod1} linear infinite`,
          }}
        />
      </div>
      <div
        className="orbit ear"
        style={{
          width: `${orbit2}`,
          height: `${orbit2}`,
          animation: `orbetRotation ${orbitPeriod2} linear infinite`,
        }}
      >
        <img
          src="earth.png"
          alt=""
          className="planet-position earth"
          style={{
            width: `${size3}`,
            animation: `planetRotation ${rotationPeriod2} linear infinite`,
          }}
        />
      </div>
      <div
        className="orbit mar"
        style={{
          width: `${orbit3}`,
          height: `${orbit3}`,
          animation: `orbetRotation ${orbitPeriod3} linear infinite`,
        }}
      >
        <img
          src="mars.png"
          alt=""
          className="planet-position mars"
          style={{
            width: `${size4}`,
            animation: `planetRotation ${rotationPeriod3} linear infinite`,
          }}
        />
      </div>
      <div
        className="orbit jup"
        style={{
          width: `${orbit4}`,
          height: `${orbit4}`,
          animation: `orbetRotation ${orbitPeriod4} linear infinite`,
        }}
      >
        <img
          src="jupiter.png"
          alt=""
          className="planet-position jupiter"
          style={{
            width: `${size5}`,
            animation: `planetRotation ${rotationPeriod4} linear infinite`,
          }}
        />
      </div>
      <div
        className="orbit sat"
        style={{
          width: `${orbit5}`,
          height: `${orbit5}`,
          animation: `orbetRotation ${orbitPeriod5} linear infinite`,
        }}
      >
        <img
          src="saturn.png"
          alt=""
          className="planet-position saturn"
          style={{
            width: `${size6}`,
            animation: `planetRotation ${rotationPeriod5} linear infinite`,
          }}
        />
      </div>
      <div
        className="orbit ura"
        style={{
          width: `${orbit6}`,
          height: `${orbit6}`,
          animation: `orbetRotation ${orbitPeriod6} linear infinite`,
        }}
      >
        <img
          src="uranus.png"
          alt=""
          className="planet-position uranus"
          style={{
            width: `${size7}`,
            animation: `planetRotation ${rotationPeriod6} linear infinite`,
          }}
        />
      </div>
      <div
        className="orbit nep"
        style={{
          width: `${orbit7}`,
          height: `${orbit7}`,
          animation: `orbetRotation ${orbitPeriod7} linear infinite`,
        }}
      >
        <img
          src="neptune.png"
          alt=""
          className="planet-position neptune"
          style={{
            width: `${size8}`,
            animation: `planetRotation ${rotationPeriod7} linear infinite`,
          }}
        />
      </div>
    </div>
  );
};
