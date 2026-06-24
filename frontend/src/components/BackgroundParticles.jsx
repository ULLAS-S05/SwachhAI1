import Particles from "react-tsparticles";

export default function BackgroundParticles() {

  return (
    <Particles
      options={{
        background: {
          color: {
            value: "transparent"
          }
        },
        particles: {
          number: {
            value: 40
          },
          move: {
            enable: true,
            speed: 1
          },
          opacity: {
            value: 0.3
          },
          size: {
            value: 3
          }
        }
      }}
      className="fixed inset-0 -z-10"
    />
  );

}
