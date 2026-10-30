import React, { useEffect, useRef } from 'react';

export default function GlobalNetworkCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates
    const mouse = {
      x: null,
      y: null,
      radius: 140
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Node definitions
    let nodes = [];
    const nodeCount = Math.min(Math.floor((width * height) / 16000), 75);

    function initNodes() {
      nodes = [];
      const colors = ['#F97316', '#FB923C', '#FDE047', '#94A3B8', '#E2E8F0'];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 2 + 1,
          baseColor: colors[Math.floor(Math.random() * colors.length)],
          isKeyNode: Math.random() > 0.85 // key hub nodes
        });
      }
    }

    initNodes();

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw connections
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        // Move
        a.x += a.vx;
        a.y += a.vy;

        // Bounce
        if (a.x < 0 || a.x > width) a.vx *= -1;
        if (a.y < 0 || a.y > height) a.vy *= -1;

        // Connect with other nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 120;
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            // Highlight connections closer to mouse
            let strokeColor = `rgba(148, 163, 184, ${alpha})`;
            if (mouse.x && mouse.y) {
              const mouseDist = Math.sqrt((a.x - mouse.x) ** 2 + (a.y - mouse.y) ** 2);
              if (mouseDist < mouse.radius) {
                strokeColor = `rgba(249, 115, 22, ${alpha * 2.2})`;
              }
            }
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.isKeyNode ? a.radius * 1.6 : a.radius, 0, Math.PI * 2);
        ctx.fillStyle = a.baseColor;
        ctx.shadowBlur = a.isKeyNode ? 10 : 0;
        ctx.shadowColor = a.baseColor;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-45"
      style={{ zIndex: 1 }}
    />
  );
}
