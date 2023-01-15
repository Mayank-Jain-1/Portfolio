import React, { useEffect, useRef } from "react";

const MouseTrailer = () => {
  const canvas = useRef();
  var ctx = undefined;
  const target = {
    x: undefined,
    y: undefined,
  };
  useEffect(() => {
    ctx = canvas.current.getContext("2d");
    console.log(ctx);
    resize();
    drawCircle();


    window.addEventListener('resize',resize)
    const animate = setInterval(() => {
    }, 1000 / 15);

    return () => {
      clearInterval(animate);
      window.removeEventListener('resize',resize)
    };

  }, []);

  const mouseMove = (event) => {
    target.x = event.clientX;
    target.y = event.clientY;
    event.preventDefault();
    console.log(target);
  };

  const drawCircle = () => {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(target.x, target.y, 50, 0, Math.PI * 2);
    ctx.fill();
  };

  const resize = () => {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  };

  return (
    <canvas
      onMouseMove={mouseMove}
      id="canvas"
      ref={canvas}
      className="fixed z-20 bg-black bg-opacity-60"
    />
  );
};

export default MouseTrailer;
