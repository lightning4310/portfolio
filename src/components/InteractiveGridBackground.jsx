import { useEffect, useRef } from "react";

export default function InteractiveGridBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates & target coordinates for smooth inertia
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 360, // Influence radius
      strength: 5, // Max distortion displacement
      isMoving: false,
    };

    let idleTimeout;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initGrid();
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isMoving = true;
      clearTimeout(idleTimeout);
      idleTimeout = setTimeout(() => {
        mouse.isMoving = false;
      }, 2000);
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Grid Configuration
    const gridSize = 45; // Spacing between grid lines
    let points = [];
    let cols = 0;
    let rows = 0;

    function initGrid() {
      points = [];
      cols = Math.ceil(width / gridSize) + 2;
      rows = Math.ceil(height / gridSize) + 2;

      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const originX = c * gridSize;
          const originY = r * gridSize;
          points.push({
            originX,
            originY,
            x: originX,
            y: originY,
            vx: 0,
            vy: 0,
          });
        }
      }
    }

    initGrid();

    // Animation Loop with Spring / Magnetic Physics
    const render = () => {
      // Smooth lerp mouse towards target
      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;

      ctx.clearRect(0, 0, width, height);

      // Update point positions with elastic displacement
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const dx = mouse.x - p.originX;
        const dy = mouse.y - p.originY;
        const dist = Math.hypot(dx, dy);

        let targetDispX = 0;
        let targetDispY = 0;

        if (dist < mouse.radius && dist > 0) {
          // Push/warp effect inversely proportional to distance (smooth cosine falloff)
          const angle = Math.atan2(dy, dx);
          const force = Math.cos((dist / mouse.radius) * (Math.PI / 2)) * mouse.strength;
          // Displace away from cursor (lens distortion / repulsive wave)
          targetDispX = -Math.cos(angle) * force;
          targetDispY = -Math.sin(angle) * force;
        }

        // Spring physics to return smoothly to original position + target displacement
        const targetX = p.originX + targetDispX;
        const targetY = p.originY + targetDispY;

        p.vx += (targetX - p.x) * 0.18;
        p.vy += (targetY - p.y) * 0.18;
        p.vx *= 0.72; // damping
        p.vy *= 0.72;

        p.x += p.vx;
        p.y += p.vy;
      }

      // Draw horizontal distorted lines
      ctx.lineWidth = 1;

      // Create a radial gradient centered at the cursor to fade the grid out beyond the influence radius
      const gridGradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        mouse.radius
      );
      gridGradient.addColorStop(0, "#202020ff");
      gridGradient.addColorStop(1, "black");

      for (let r = 0; r <= rows; r++) {
        ctx.beginPath();
        for (let c = 0; c <= cols; c++) {
          const idx = r * (cols + 1) + c;
          const p = points[idx];
          if (!p) continue;
          if (c === 0) {
            ctx.moveTo(p.x, p.y);
          } else {
            ctx.lineTo(p.x, p.y);
          }
        }
        ctx.strokeStyle = gridGradient;
        ctx.stroke();
      }

      // Draw vertical distorted lines
      for (let c = 0; c <= cols; c++) {
        ctx.beginPath();
        for (let r = 0; r <= rows; r++) {
          const idx = r * (cols + 1) + c;
          const p = points[idx];
          if (!p) continue;
          if (r === 0) {
            ctx.moveTo(p.x, p.y);
          } else {
            ctx.lineTo(p.x, p.y);
          }
        }
        ctx.strokeStyle = gridGradient;
        ctx.stroke();
      }


      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(idleTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: -1,
      }}
    />
  );
}
