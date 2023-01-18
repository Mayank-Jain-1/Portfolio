import React, { useEffect, useRef } from "react";

//TODO
//Move all the required functions to the ../function/trailerFunctions.js

const MouseTrailer = () => {
  const canvas = useRef();
  const target = {
    x: 0,
    y: 0,
  };
  const settings = {
    friction: 0.5,
    trails: 30,
    size: 50,
    dampening: 0.25,
    tension: 0.98,
  };

  var tendrils = [];

  function mouseMove(event) {
    if (event.touches) {
      
    } else {
      target.x = event.clientX;
      target.y = event.clientY;
    }

    event.preventDefault();
  }


  const resize = (ctx) => {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  };

  function Tendril(options) {
    this.init(options || {});
  }

  Tendril.prototype = (function () {
    function Node() {
      this.x = 0;
      this.y = 0;
      this.vy = 0;
      this.vx = 0;
    }

    return {
      init: function (options) {
        this.spring = options.spring + Math.random() * 0.1 - 0.05;
        this.friction = settings.friction + Math.random() * 0.01 - 0.005;
        this.nodes = [];

        for (var i = 0, node; i < settings.size; i++) {
          node = new Node();
          node.x = target.x;
          node.y = target.y;
          this.nodes.push(node);
        }
      },
      
      update: function (ctx) {
        var spring = this.spring,
        node = this.nodes[0];
        node.vx += (target.x - node.x) * spring;
        node.vy += (target.y - node.y) * spring;
        for (var prev, i = 0, n = this.nodes.length; i < n; i++) {
          node = this.nodes[i];
          
          if (i > 0) {
            prev = this.nodes[i - 1];
            
            node.vx += (prev.x - node.x) * spring;
            node.vy += (prev.y - node.y) * spring;
            node.vx += prev.vx * settings.dampening;
            node.vy += prev.vy * settings.dampening;
          }
          
          node.vx *= this.friction;
          node.vy *= this.friction;
          node.x += node.vx;
          node.y += node.vy;
          
          spring *= settings.tension;
        }
      },
      
      draw: function (ctx) {
        var x = this.nodes[0].x,
        y = this.nodes[0].y,
        a,
        b;
        
        ctx.beginPath();
        ctx.moveTo(x, y);
        
        for (var i = 1, n = this.nodes.length - 2; i < n; i++) {
          a = this.nodes[i];
          b = this.nodes[i + 1];
          x = (a.x + b.x) * 0.5;
          y = (a.y + b.y) * 0.5;
          
          ctx.quadraticCurveTo(a.x, a.y, x, y);
        }
        
        a = this.nodes[i];
        b = this.nodes[i + 1];
        
        ctx.quadraticCurveTo(a.x, a.y, b.x, b.y);
        ctx.stroke();
        ctx.closePath();
      },
    };
  })();
  
  function reset() {
    tendrils = [];

    for (var i = 0; i < settings.trails; i++) {
      tendrils.push(
        new Tendril({
          spring: 0.45 + 0.025 * (i / settings.trails),
        })
      );
    }
  }

  var color = Math.random();

  const loop = (ctx) => {
    if(ctx.canvas.width < 500) return ;
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "#1d1d1d";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = "hsla(171,98%,56%,0.25)";
    ctx.lineWidth = 1;


    if (color < 0.5) {
      ctx.strokeStyle = "hsl(284, 91%, 15%)";
    } else {
      ctx.strokeStyle = "hsla(171,98%,56%,0.25)";
    }

    for (var i = 0, tendril; i < settings.trails; i++) {
      tendril = tendrils[i];
      tendril.update(ctx);
      tendril.draw(ctx);
    }
  };


  useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    reset();
    resize(ctx);
    console.log(ctx.canvas.width);
    window.addEventListener('mousemove',mouseMove)
    window.addEventListener("resize", () => resize(ctx));
    const animate = setInterval(() => {
      loop(ctx);
    }, 1000 / 120);
    
    return () => {
      window.removeEventListener('mousemove',mouseMove)
      window.removeEventListener("resize", resize);
      clearInterval(animate);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      id="canvas"
      ref={canvas}
      className="fixed -z-10 "
    />
  );
};

export default MouseTrailer;
