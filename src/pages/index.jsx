import { Planets } from "@/components/Planets";
import { SolarBackground } from "@/components/SolarBackground";

export const solarSystem = [
  {
    name: "Mercury",
    orbit: "150px",
    planetSize: "15px",
    orbitPeriod: "8.8s",
    rotationPeriod: "5.86s",
    imageUrl: "/mercury.png",
  },
  {
    name: "Venus",
    orbit: "200px",
    orbitPeriod: "22.5s",
    planetSize: "20px",
    imageUrl: "/venus.png",
    rotationPeriod: "24.3s",
  },
  {
    name: "Earth",
    orbit: "300px",
    orbitPeriod: "36.5s",
    planetSize: "23px",
    imageUrl: "/earth.png",
    rotationPeriod: "1s",
  },
  {
    name: "Mars",
    orbit: "400px",
    orbitPeriod: "68.7s",
    planetSize: "17px",
    imageUrl: "/mars.png",
    rotationPeriod: "1.025s",
  },
  {
    name: "Jupiter",
    orbit: "550px",
    orbitPeriod: "118.6s",
    planetSize: "45px",
    imageUrl: "/jupiter.png",
    rotationPeriod: "0.41s",
  },
  {
    name: "Saturn",
    orbit: "650px",
    orbitPeriod: "294.6s",
    planetSize: "40px",
    imageUrl: "/saturn.png",
    rotationPeriod: "0.445s",
  },
  {
    name: "Uranus",
    orbit: "750px",
    orbitPeriod: "840s",
    planetSize: "35px",
    imageUrl: "/uranus.png",
    rotationPeriod: "0.717s",
  },
  {
    name: "Neptune",
    orbit: "850px",
    orbitPeriod: "1648s",
    planetSize: "33px",
    imageUrl: "/neptune.png",
    rotationPeriod: "0.671s",
  },
];

const HomePage = () => {
  return (
    <div>
      <Planets
        size1={solarSystem[0].planetSize}
        size2={solarSystem[1].planetSize}
        size3={solarSystem[2].planetSize}
        size4={solarSystem[3].planetSize}
        size5={solarSystem[4].planetSize}
        size6={solarSystem[5].planetSize}
        size7={solarSystem[6].planetSize}
        size8={solarSystem[7].planetSize}
        orbit0={solarSystem[0].orbit}
        orbit1={solarSystem[1].orbit}
        orbit2={solarSystem[2].orbit}
        orbit3={solarSystem[3].orbit}
        orbit4={solarSystem[4].orbit}
        orbit5={solarSystem[5].orbit}
        orbit6={solarSystem[6].orbit}
        orbit7={solarSystem[7].orbit}
        rotationPeriod0={solarSystem[0].rotationPeriod}
        rotationPeriod1={solarSystem[1].rotationPeriod}
        rotationPeriod2={solarSystem[2].rotationPeriod}
        rotationPeriod3={solarSystem[3].rotationPeriod}
        rotationPeriod4={solarSystem[4].rotationPeriod}
        rotationPeriod5={solarSystem[5].rotationPeriod}
        rotationPeriod6={solarSystem[6].rotationPeriod}
        rotationPeriod7={solarSystem[7].rotationPeriod}
        orbitPeriod0={solarSystem[0].orbitPeriod}
        orbitPeriod1={solarSystem[1].orbitPeriod}
        orbitPeriod2={solarSystem[2].orbitPeriod}
        orbitPeriod3={solarSystem[3].orbitPeriod}
        orbitPeriod4={solarSystem[4].orbitPeriod}
        orbitPeriod5={solarSystem[5].orbitPeriod}
        orbitPeriod6={solarSystem[6].orbitPeriod}
        orbitPeriod7={solarSystem[7].orbitPeriod}
      />
      <SolarBackground />
    </div>
  );
};

export default HomePage;
