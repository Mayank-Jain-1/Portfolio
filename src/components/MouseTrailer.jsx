import React, { useEffect, useRef } from "react";

const MouseTrailer = () => {
  const canvas = useRef();
  var ctx = undefined;
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

  const mouseMove = (event) => {
    target.x = event.clientX;
    target.y = event.clientY;
    event.preventDefault();
    // console.log(target);
    // drawCircle()
    // loop()
  };

  const drawCircle = () => {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(target.x, target.y, 20, 0, Math.PI * 2);
    ctx.fill();
  };

  const resize = () => {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  };

  function Node() {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
  }

  function Tendril(options) {
    this.init(options || {});
  }

  // Tendril.prototype = (opt) => {
  //   function Node() {
  //     this.x = 0;
  //     this.y = 0;
  //     this.vx = 0;
  //     this.vy = 0;
  //   }

  //   const options = opt || {};
  //   const spring = options.spring + Math.random() * 0.1 - 0.05;
  //   const friction = settings.friction + Math.random() * 0.01 - 0.005;
  //   const nodes = [];

  //   for (let i = 0; i < settings.tendrilCount; i++) {
  //     var node = new Node();
  //     node.x = target.x;
  //     node.y = target.y;

  //     nodes.push(node);
  //   }

  //   const update = () => {
  //     node = nodes[0];

  //     node.vx += (target.x - node.x) * spring;
  //     node.vy += (target.y - node.y) * spring;

  //     for (var prev, i = 0, n = nodes.length; i < n; i++) {
  //       node = nodes[i];
  //       if (i > 0) {
  //         prev = nodes[i - 1];
  //         node.vx += (prev.x - node.x) * spring;
  //         node.vy += (prev.y - node.y) * spring;
  //         node.vx += prev.vx * settings.dampening;
  //         node.vy += prev.vy * settings.dampening;
  //       }

  //       node.vx *= friction;
  //       node.vy *= friction;
  //       node.x += node.vx;
  //       node.y += node.vy;

  //       spring *= settings.tension;
  //     }
  //   };

  //   const draw = () => {
  //     var x = nodes[0].x,
  //       y = nodes[0].y,
  //       a,
  //       b;
  //     ctx.beginPath();
  //     ctx.moveTo(x, y);
  //     for (var i = 1; i < nodes.length - 2; i++) {
  //       a = nodes[i];
  //       b = nodes[i + 1];
  //       x = (a.x + b.x) * 0.5;
  //       y = (a.y + b.y) * 0.5;

  //       ctx.quadraticCurveTo(a.x, a.y, x, y);
  //     }

  //     a = nodes[i];
  //     b = nodes[i + 1];
  //     x = (a.x + b.x) * 0.5;
  //     y = (a.y + b.y) * 0.5;

  //     ctx.quadraticCurveTo(a.x, a.y, x, y);
  //     ctx.stroke();
  //     ctx.closePath();
  //   };
  // };
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
      
      update: function () {
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
          // console.log(target);
        }
      },
      
      draw: function () {
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

  const loop = () => {
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
      tendril.update();
      tendril.draw();
    }
  };


  useEffect(() => {
    ctx = canvas.current.getContext("2d");
    console.log(ctx);
    reset();
    resize();
    
    window.addEventListener('mousemove',mouseMove)
    window.addEventListener('touchmove',mouseMove)
    
    window.addEventListener("resize", resize);
    const animate = setInterval(() => {
      loop();
      
    }, 1000 / 150);
    
    return () => {
      window.removeEventListener('mousemove',mouseMove)
      window.removeEventListener('touchmove',mouseMove)
      clearInterval(animate);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
    // onClick={drawCircle}
      onMouseMove={mouseMove}
      onTouchMove={mouseMove}
      id="canvas"
      ref={canvas}
      className="fixed -z-10"
    />
  );
};

export default MouseTrailer;
