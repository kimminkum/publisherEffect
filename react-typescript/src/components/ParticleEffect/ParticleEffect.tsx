import React, { useEffect, useRef } from "react";
import { ParticleEffectProps } from "../../types";
import "./ParticleEffect.css";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
}

export const ParticleEffect: React.FC<ParticleEffectProps> = ({
  color = "#007aff",
  particleCount = 50,
  particleSize = 3,
  speed = 1,
  followMouse = true,
  className = ""
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    if (followMouse) {
      canvas.addEventListener("mousemove", handleMouseMove);
    }

    // Create particles
    const createParticle = (): Particle => ({
      x: followMouse ? mouseRef.current.x : Math.random() * canvas.width,
      y: followMouse ? mouseRef.current.y : Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * speed * 2,
      vy: (Math.random() - 0.5) * speed * 2,
      size: Math.random() * particleSize + 1,
      life: 0,
      maxLife: 60 + Math.random() * 60
    });

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(createParticle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        particle.life++;

        if (particle.life > particle.maxLife) {
          particlesRef.current[index] = createParticle();
          return;
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        const alpha = 1 - particle.life / particle.maxLife;
        ctx.fillStyle =
          color.includes("rgba") || color.includes("#")
            ? color.replace(")", `, ${alpha})`).replace("rgb", "rgba")
            : `rgba(0, 122, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (followMouse) {
        canvas.removeEventListener("mousemove", handleMouseMove);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [color, particleCount, particleSize, speed, followMouse]);

  return <canvas ref={canvasRef} className={`particle-effect ${className}`} />;
};
