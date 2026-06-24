import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function BackgroundParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      await loadSlim;
      setInit(true);
    };
    initParticles();
  }, []);

  if (!init) return null;

  return (
    <Particles
      className="fixed inset-0 -z-10"
      options={{
        background: {
          color: { value: "transparent" }
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
    />
  );
}
