"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Trophy, HeartHandshake, Sparkles, UserCheck, FileText, Users } from "lucide-react"

const HERO_SLIDES = [
  {
    src: "/user_story_2.jpg",
    alt: "Arrival at ACS HR Services",
    title: "The Arrival",
    step: "01",
    subtitle: "A Walk of Hope",
    description: "A young job seeker enters the modern ACS HR Services office, feeling hopeful about his upcoming interview opportunity.",
    icon: UserCheck,
  },
  {
    src: "/user_story_6.jpg",
    alt: "Candidates Waiting",
    title: "The Wait Begins",
    step: "02",
    subtitle: "Many Dreams, One Door",
    description: "Job seekers from diverse backgrounds arrive and wait confidently at ACS HR Services — each with a resume and a dream.",
    icon: Users,
  },
  {
    src: "/user_story_4.jpg",
    alt: "Warm Reception",
    title: "Warm Reception",
    step: "03",
    subtitle: "Professional Guidance",
    description: "A friendly ACS recruitment consultant greets him with a welcoming smile and invites him for a dedicated career consultation.",
    icon: HeartHandshake,
  },
  {
    src: "/user_story_3.jpg",
    alt: "Resume Evaluation",
    title: "Resume Evaluation",
    step: "04",
    subtitle: "Unlocking Potential",
    description: "Together they review his achievements on screen. The recruiter aligns his unique skills with top hiring partner requirements.",
    icon: Sparkles,
  },
  {
    src: "/user_story_5.jpg",
    alt: "Offer Letter Presented",
    title: "The Offer Letter",
    step: "05",
    subtitle: "Your Dream, Delivered",
    description: "The ACS HR recruiter presents an official offer letter — the result of meticulous matching and dedicated support for his career journey.",
    icon: FileText,
  },
  {
    src: "/user_story_1.jpg",
    alt: "Handshake on Job Offer",
    title: "Moment of Joy!",
    step: "06",
    subtitle: "You've Got The Job!",
    description: "The consultant smiles warmly, shakes his hand, and declares: 'Congratulations! You've got the job!' as they share a professional handshake.",
    icon: Trophy,
  },
]

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [isPaused, setIsPaused] = useState(false)

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length)
  }, [])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }, [])

  // Auto-slide every 4.5s — pause on hover/focus
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(goToNext, 4500)
    return () => clearInterval(timer)
  }, [isPaused, goToNext])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const diff = touchStart - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) {
      diff > 0 ? goToNext() : goToPrev()
    }
    setTouchStart(null)
  }

  const slide = HERO_SLIDES[currentIndex]
  const Icon = slide.icon

  return (
    <div
      className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-primary/20 bg-card"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Image area ── */}
      <div
        className="relative w-full bg-slate-100 dark:bg-slate-950
          aspect-[4/3] sm:aspect-[16/9]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides */}
        {HERO_SLIDES.map((s, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              className="object-cover object-center"
              priority={idx === 0}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
            />
            {/* Bottom gradient for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10" />
          </div>
        ))}

        {/* Step badge — top left */}
        <div className="absolute top-3 left-4 z-20 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
          <span className="text-primary font-black">{slide.step}</span>
          <span className="opacity-60">/</span>
          <span className="opacity-70">{HERO_SLIDES.length}</span>
        </div>

        {/* Prev arrow - Left Side */}
        <button
          type="button"
          onClick={goToPrev}
          style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", zIndex: 30 }}
          className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-black/80 active:bg-black text-white flex items-center justify-center transition-all duration-200 backdrop-blur-md border border-white/30 focus:outline-none shadow-xl cursor-pointer"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next arrow - Right Side */}
        <button
          type="button"
          onClick={goToNext}
          style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", zIndex: 30 }}
          className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-black/80 active:bg-black text-white flex items-center justify-center transition-all duration-200 backdrop-blur-md border border-white/30 focus:outline-none shadow-xl cursor-pointer"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Inline text overlay — only visible on sm+ screens */}
        <div className="absolute bottom-0 left-0 right-0 z-20 hidden sm:block px-6 pb-5 pt-8">
          {HERO_SLIDES.map((s, idx) => {
            const SIcon = s.icon
            return (
              <div
                key={idx}
                className={`transition-all duration-700 ${
                  idx === currentIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3 absolute inset-x-6 bottom-5 pointer-events-none"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white border border-white/20">
                    <SIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-white drop-shadow leading-tight">
                      <span className="text-primary/90">{s.step}.</span>{" "}
                      {s.subtitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 mt-0.5 leading-relaxed max-w-2xl line-clamp-2">
                      {s.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Text section — only on mobile (< sm) ── */}
      <div className="sm:hidden px-4 pt-4 pb-5 bg-gradient-to-b from-card to-secondary/30">
        <div className="flex items-start gap-3">
          <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
            <Icon className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-base text-foreground leading-tight">
              <span className="text-primary">{slide.step}.</span>{" "}
              {slide.subtitle}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
              {slide.description}
            </p>
          </div>
        </div>

        {/* Dot indicators — mobile only */}
        <div className="flex justify-center gap-2 mt-4">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-300 rounded-full h-1.5 ${
                idx === currentIndex
                  ? "w-8 bg-primary shadow-sm"
                  : "w-2 bg-primary/30"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Dot indicators — desktop (below image) ── */}
      <div className="hidden sm:flex items-center justify-center gap-2 py-3 bg-card border-t border-border/40">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full h-1.5 ${
              idx === currentIndex
                ? "w-8 bg-primary shadow-sm"
                : "w-2 bg-primary/30 hover:bg-primary/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
