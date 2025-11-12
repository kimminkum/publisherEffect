/**
 * Particle Effect (Vanilla JS)
 * 마우스를 따라다니는 파티클 효과
 */

class ParticleEffect {
  constructor(canvas, options = {}) {
    this.canvas =
      typeof canvas === "string" ? document.querySelector(canvas) : canvas;
    this.options = {
      color: options.color || "#007aff",
      particleCount: options.particleCount || 50,
      particleSize: options.particleSize || 3,
      speed: options.speed || 1,
      followMouse:
        options.followMouse !== undefined ? options.followMouse : true,
      ...options
    };

    this.particles = [];
    this.mouse = { x: 0, y: 0 };
    this.animationFrame = null;

    this.init();
  }

  init() {
    if (!this.canvas) {
      console.error("Canvas element not found");
      return;
    }

    this.ctx = this.canvas.getContext("2d");
    this.canvas.classList.add("particle-effect");

    this.resizeCanvas();
    window.addEventListener("resize", () => this.resizeCanvas());

    if (this.options.followMouse) {
      this.canvas.addEventListener("mousemove", e => {
        const rect = this.canvas.getBoundingClientRect();
        this.mouse = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };
      });
    }

    // Create particles
    for (let i = 0; i < this.options.particleCount; i++) {
      this.particles.push(this.createParticle());
    }

    this.animate();
  }

  resizeCanvas() {
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
  }

  createParticle() {
    return {
      x: this.options.followMouse
        ? this.mouse.x
        : Math.random() * this.canvas.width,
      y: this.options.followMouse
        ? this.mouse.y
        : Math.random() * this.canvas.height,
      vx: (Math.random() - 0.5) * this.options.speed * 2,
      vy: (Math.random() - 0.5) * this.options.speed * 2,
      size: Math.random() * this.options.particleSize + 1,
      life: 0,
      maxLife: 60 + Math.random() * 60
    };
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach((particle, index) => {
      particle.life++;

      if (particle.life > particle.maxLife) {
        this.particles[index] = this.createParticle();
        return;
      }

      particle.x += particle.vx;
      particle.y += particle.vy;

      const alpha = 1 - particle.life / particle.maxLife;

      // Color parsing
      let fillColor = this.options.color;
      if (fillColor.startsWith("#")) {
        const r = parseInt(fillColor.slice(1, 3), 16);
        const g = parseInt(fillColor.slice(3, 5), 16);
        const b = parseInt(fillColor.slice(5, 7), 16);
        fillColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;
      } else if (fillColor.includes("rgb")) {
        fillColor = fillColor
          .replace(")", `, ${alpha})`)
          .replace("rgb", "rgba");
      }

      this.ctx.fillStyle = fillColor;
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fill();
    });

    this.animationFrame = requestAnimationFrame(() => this.animate());
  }

  destroy() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
    window.removeEventListener("resize", () => this.resizeCanvas());
  }
}

// Export for module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = ParticleEffect;
}
