import { useEffect, useState } from "react";

export default function MouseGlow() {

  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {

    const move = (e) => {
      setPos({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);

  }, []);

  return (

    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(500px at ${pos.x}px ${pos.y}px, rgba(34,197,94,0.18), transparent 70%)`
      }}
    />

  );

}
