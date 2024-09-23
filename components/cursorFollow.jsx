"use client";

import { useEffect, useState } from "react";

const CursorFollow = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: cursorPosition.y,
        left: cursorPosition.x,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 1000,
      }}
      className={`hidden md:block absolute w-[500px] h-[500px] bg-accent/50 rounded-full top-0 left-0 blur-3xl opacity-5 z-50 transition`}
    ></div>
  );
};

export default CursorFollow;
