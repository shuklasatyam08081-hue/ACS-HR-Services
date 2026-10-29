"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

const SLIDES = [
  {
    tag: "Trusted HR Partner Since 2023",
    heading: "Turning Dreams\ninto Reality",
    sub: "Connecting top talent with leading companies across India",
    accent: "#4f6ef7",
  },
  {
    tag: "Expert Staffing Solutions",
    heading: "IT & Non-IT\nContract Staffing",
    sub: "Flexible, skilled professionals for every business need",
    accent: "#7c3aed",
  },
  {
    tag: "End-to-End HR Services",
    heading: "Payroll &\nCompliance Made Easy",
    sub: "Seamless payroll processing and statutory compliance management",
    accent: "#0ea5e9",
  },
  {
    tag: "150+ Clients Served",
    heading: "Your Growth\nIs Our Mission",
    sub: "Pan-India network · 86% client satisfaction · 100+ placements",
    accent: "#10b981",
  },
]

export function ACSVideoBanner() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animFrameRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])
  const [slideIdx, setSlideIdx] = useState(0)
  const [slidePhase, setSlidePhase] = useState<"enter" | "hold" | "exit">("enter")
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null)
  const phaseTimerRef = useRef<NodeJS.Timeout | null>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const diff = touchStart - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        setSlideIdx((prev) => (prev + 1) % SLIDES.length)
      } else {
        setSlideIdx((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
      }
    }
    setTouchStart(null)
  }

  // --- Canvas particle animation ---
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!
    let width = 0
    let height = 0

    const COLORS = [
      "rgba(79,110,247,",
      "rgba(124,58,237,",
      "rgba(14,165,233,",
      "rgba(16,185,129,",
      "rgba(255,255,255,",
    ]

    const resize = () => {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width
      canvas.height = height
      // re-spawn particles when resized
      particlesRef.current = Array.from({ length: 80 }, () => spawnParticle(width, height, COLORS))
    }

    const spawnParticle = (w: number, h: number, colors: string[]): Particle => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -Math.random() * 0.6 - 0.2,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.6 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    })

    resize()
    window.addEventListener("resize", resize)

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // draw lines between nearby particles
      const pts = particlesRef.current
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(79,110,247,${0.12 * (1 - dist / 120)})`
            ctx.lineWidth = 0.6
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.stroke()
          }
        }
      }

      pts.forEach((p) => {
        // glowing dot
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3)
        gradient.addColorStop(0, `${p.color}${p.opacity})`)
        gradient.addColorStop(1, `${p.color}0)`)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        p.x += p.vx
        p.y += p.vy

        // wrap around
        if (p.y < -10) p.y = height + 10
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10
      })

      animFrameRef.current = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [])

  // --- Slide rotation ---
  useEffect(() => {
    setSlidePhase("enter")

    phaseTimerRef.current = setTimeout(() => {
      setSlidePhase("hold")
      phaseTimerRef.current = setTimeout(() => {
        setSlidePhase("exit")
        phaseTimerRef.current = setTimeout(() => {
          setSlideIdx((prev) => (prev + 1) % SLIDES.length)
        }, 700)
      }, 3500)
    }, 900)

    return () => {
      if (phaseTimerRef.current) clearTimeout(phaseTimerRef.current)
      if (slideTimerRef.current) clearTimeout(slideTimerRef.current)
    }
  }, [slideIdx])

  const slide = SLIDES[slideIdx]

  const enterStyle = slidePhase === "enter" ? "acs-slide-enter" : ""
  const exitStyle = slidePhase === "exit" ? "acs-slide-exit" : ""

  return (
    <div
      className="acs-video-banner select-none"
      aria-label="ACS HR Services Promotional Banner"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Deep gradient background */}
      <div className="acs-bg-layer" />

      {/* Animated gradient orbs */}
      <div className="acs-orb acs-orb-1" />
      <div className="acs-orb acs-orb-2" />
      <div className="acs-orb acs-orb-3" />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="acs-canvas" />

      {/* Scan-line overlay */}
      <div className="acs-scanlines" />

      {/* Content */}
      <div className="acs-content">
        {/* Logo */}
        <div className="acs-logo-wrap">
          <div className="acs-logo-ring" />
          <Image
            src="/logo.jpeg"
            alt="ACS HR Services Logo"
            width={80}
            height={80}
            className="acs-logo-img"
            priority
          />
        </div>

        {/* Slide text */}
        <div className={`acs-slide-text ${enterStyle} ${exitStyle}`} key={slideIdx}>
          {/* Tag pill */}
          <div className="acs-tag-pill" style={{ borderColor: slide.accent, color: slide.accent }}>
            <span className="acs-tag-dot" style={{ background: slide.accent }} />
            {slide.tag}
          </div>

        {/* Main heading */}
          <h2 className="acs-heading">
            {slide.heading.split("\n").map((line, i) => (
              <span key={i} className="acs-heading-line" style={{ animationDelay: `${0.1 + i * 0.15}s` }}>
                {i === 1 ? (
                  <span className="acs-heading-accent" style={{ color: slide.accent }}>
                    {line}
                  </span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h2>

          {/* Sub text */}
          <p className="acs-sub">{slide.sub}</p>

          {/* Divider line */}
          <div className="acs-divider" style={{ background: `linear-gradient(90deg, ${slide.accent}, transparent)` }} />
        </div>

        {/* Stats row */}
        <div className="acs-stats-row">
          {[
            { val: "3+", lbl: "Years" },
            { val: "150+", lbl: "Clients" },
            { val: "100+", lbl: "Placements" },
            { val: "86%", lbl: "Satisfaction" },
          ].map((s) => (
            <div key={s.lbl} className="acs-stat">
              <span className="acs-stat-val">{s.val}</span>
              <span className="acs-stat-lbl">{s.lbl}</span>
            </div>
          ))}
        </div>

        {/* Slide dots */}
        <div className="acs-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`acs-dot ${i === slideIdx ? "acs-dot-active" : ""}`}
              style={i === slideIdx ? { background: slide.accent } : {}}
              onClick={() => setSlideIdx(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom brand bar */}
      <div className="acs-brand-bar">
        <span className="acs-brand-text">ACS HR SERVICES</span>
        <span className="acs-brand-sep">·</span>
        <span className="acs-brand-sub">Anshuman Consultancy · Lucknow, India</span>
      </div>

      <style>{`
        .acs-video-banner {
          position: relative;
          width: 100%;
          height: 420px;
          overflow: hidden;
          border-radius: 1.5rem;
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          box-shadow: 0 30px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(79,110,247,0.15);
        }
        @media (max-width: 640px) {
          .acs-video-banner { height: 490px; border-radius: 1rem; }
          .acs-content { padding: 1.25rem 1rem 3.25rem !important; gap: 0.85rem !important; }
          .acs-logo-img { width: 56px !important; height: 56px !important; }
          .acs-logo-ring { width: 76px !important; height: 76px !important; }
          .acs-heading { font-size: clamp(1.35rem, 5.5vw, 2.2rem) !important; }
          .acs-sub { font-size: clamp(0.75rem, 3.2vw, 0.88rem) !important; line-height: 1.45 !important; }
          .acs-stats-row { gap: 0.5rem !important; }
          .acs-stat { padding: 0.35rem 0.65rem !important; border-radius: 0.5rem !important; }
          .acs-stat-val { font-size: 1.1rem !important; }
          .acs-stat-lbl { font-size: 0.55rem !important; }
          .acs-brand-bar { height: 32px !important; gap: 0.4rem !important; padding: 0 0.5rem !important; }
          .acs-brand-text { font-size: 0.55rem !important; letter-spacing: 0.12em !important; }
          .acs-brand-sub { font-size: 0.52rem !important; letter-spacing: 0.04em !important; white-space: nowrap !important; overflow: hidden !important; text-overflow: ellipsis !important; max-width: 180px !important; }
        }

        .acs-bg-layer {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #050714 0%, #0a0f2e 40%, #0d1a3a 70%, #050714 100%);
          z-index: 0;
        }
        .acs-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 1;
          animation: acs-orb-float 8s ease-in-out infinite;
        }
        .acs-orb-1 {
          width: 350px; height: 350px;
          background: radial-gradient(circle, rgba(79,110,247,0.35) 0%, transparent 70%);
          top: -100px; left: -80px;
          animation-delay: 0s;
        }
        .acs-orb-2 {
          width: 280px; height: 280px;
          background: radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%);
          bottom: -60px; right: 10%;
          animation-delay: -3s;
        }
        .acs-orb-3 {
          width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(14,165,233,0.25) 0%, transparent 70%);
          top: 50%; right: 20%;
          animation-delay: -5s;
        }
        @keyframes acs-orb-float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-25px) scale(1.08); }
        }

        .acs-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
        }
        .acs-scanlines {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.04) 2px,
            rgba(0,0,0,0.04) 4px
          );
          z-index: 3;
          pointer-events: none;
        }

        .acs-content {
          position: absolute;
          inset: 0;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.5rem 4rem;
          gap: 1.2rem;
          text-align: center;
        }

        .acs-logo-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: acs-logo-appear 1s ease both;
        }
        @keyframes acs-logo-appear {
          from { opacity: 0; transform: scale(0.6) rotate(-10deg); }
          to { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        .acs-logo-ring {
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 2px solid rgba(79,110,247,0.5);
          animation: acs-ring-pulse 2.5s ease-in-out infinite;
        }
        @keyframes acs-ring-pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.18); opacity: 0.2; }
        }
        .acs-logo-img {
          width: 76px;
          height: 76px;
          object-fit: cover;
          border-radius: 50%;
          border: 2px solid rgba(79,110,247,0.6);
          box-shadow: 0 0 24px rgba(79,110,247,0.4), 0 0 60px rgba(79,110,247,0.15);
        }

        /* Slide text */
        .acs-slide-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.7rem;
        }
        .acs-slide-enter {
          animation: acs-slide-in 0.75s cubic-bezier(0.22,1,0.36,1) both;
        }
        .acs-slide-exit {
          animation: acs-slide-out 0.65s cubic-bezier(0.4,0,1,1) both;
        }
        @keyframes acs-slide-in {
          from { opacity: 0; transform: translateY(28px) scale(0.97); filter: blur(4px); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    filter: blur(0); }
        }
        @keyframes acs-slide-out {
          from { opacity: 1; transform: translateY(0)    scale(1);    filter: blur(0); }
          to   { opacity: 0; transform: translateY(-22px) scale(0.97); filter: blur(4px); }
        }

        .acs-tag-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.3rem 0.9rem;
          border-radius: 999px;
          border: 1px solid;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: rgba(0,0,0,0.3);
          backdrop-filter: blur(8px);
        }
        .acs-tag-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          animation: acs-blink 1.5s ease-in-out infinite;
        }
        @keyframes acs-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .acs-heading {
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.1rem;
          font-size: clamp(1.7rem, 5vw, 2.8rem);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #fff;
          text-shadow: 0 2px 30px rgba(0,0,0,0.5);
        }
        .acs-heading-line {
          display: block;
          animation: acs-line-rise 0.6s ease both;
        }
        .acs-heading-line:nth-child(2) { animation-delay: 0.15s; }
        @keyframes acs-line-rise {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .acs-heading-accent {
          background: linear-gradient(90deg, currentColor, rgba(255,255,255,0.85));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 20px currentColor);
        }

        .acs-sub {
          margin: 0;
          font-size: clamp(0.8rem, 2.2vw, 1rem);
          color: rgba(255,255,255,0.65);
          max-width: 480px;
          line-height: 1.55;
          font-weight: 400;
        }

        .acs-divider {
          height: 2px;
          width: 60px;
          border-radius: 999px;
          margin-top: 0.3rem;
        }

        /* Stats */
        .acs-stats-row {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
          animation: acs-stats-rise 1s 0.5s ease both;
        }
        @keyframes acs-stats-rise {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .acs-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.15rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 0.75rem;
          padding: 0.5rem 1rem;
          backdrop-filter: blur(12px);
          transition: background 0.3s, transform 0.3s;
        }
        .acs-stat:hover {
          background: rgba(79,110,247,0.12);
          transform: translateY(-3px);
        }
        .acs-stat-val {
          font-size: 1.35rem;
          font-weight: 900;
          color: #fff;
          letter-spacing: -0.02em;
        }
        .acs-stat-lbl {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
        }

        /* Dots */
        .acs-dots {
          display: flex;
          gap: 0.45rem;
          animation: acs-stats-rise 1.2s 0.8s ease both;
        }
        .acs-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.2);
          cursor: pointer;
          transition: all 0.3s;
          padding: 0;
        }
        .acs-dot-active {
          width: 24px;
          border-radius: 4px;
        }
        .acs-dot:hover { background: rgba(255,255,255,0.5); }

        /* Bottom brand bar */
        .acs-brand-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          background: linear-gradient(90deg, rgba(79,110,247,0.15), rgba(124,58,237,0.1), rgba(14,165,233,0.15));
          border-top: 1px solid rgba(255,255,255,0.07);
          backdrop-filter: blur(12px);
          z-index: 10;
          animation: acs-bar-in 1s 0.3s ease both;
        }
        @keyframes acs-bar-in {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .acs-brand-text {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.8);
        }
        .acs-brand-sep {
          color: rgba(255,255,255,0.25);
          font-size: 0.8rem;
        }
        .acs-brand-sub {
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.4);
        }
      `}</style>
    </div>
  )
}
