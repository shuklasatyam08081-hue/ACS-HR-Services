"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Play, Pause, CheckCircle2, UserCheck, HeartHandshake, ArrowRight, Volume2, Trophy } from "lucide-react"
import Link from "next/link"

const STORY_STEPS = [
  {
    title: "1. The Arrival",
    subtitle: "A Walk of Hope",
    description: "A young job seeker enters the modern ACS HR Services office wearing casual clothes, feeling hopeful yet slightly nervous about his upcoming interview opportunity.",
    badge: "01 / STEP",
    icon: UserCheck,
    highlight: "Hopeful & Determined",
    image: "/user_story_2.jpg",
    imageAlt: "Hopeful young man arriving at ACS HR Services office",
    accent: "from-blue-500/20 to-primary/10",
  },
  {
    title: "2. Warm Reception",
    subtitle: "Professional Guidance",
    description: "A friendly ACS recruitment consultant greets him with a welcoming smile, puts him at ease, and invites him to sit down for a dedicated career consultation.",
    badge: "02 / STEP",
    icon: HeartHandshake,
    highlight: "Expert Review",
    image: "/user_story_4.jpg",
    imageAlt: "HR consultant warmly welcoming job seeker at reception",
    accent: "from-teal-500/20 to-accent/10",
  },
  {
    title: "3. Resume Evaluation",
    subtitle: "Unlocking Potential",
    description: "Together they review his achievements on screen. The recruiter aligns his unique skills with top hiring partner requirements across India.",
    badge: "03 / STEP",
    icon: Sparkles,
    highlight: "Perfect Match",
    image: "/user_story_3.jpg",
    imageAlt: "Recruiter and candidate reviewing resume on laptop together",
    accent: "from-purple-500/20 to-primary/10",
  },
  {
    title: "4. The Moment of Joy!",
    subtitle: "You've Got The Job!",
    description: "The HR consultant warmly shakes his hand with a polite smile, declaring: 'Congratulations! You've got the job!' A proud, respectful moment marking the start of a bright career.",
    badge: "04 / STEP",
    icon: Trophy,
    highlight: "Dream Realized!",
    image: "/user_story_1.jpg",
    imageAlt: "HR consultant warmly shaking hands with candidate on job offer",
    accent: "from-amber-500/20 to-accent/10",
  },
]

export function CandidateJourneyStory() {
  const [activeStep, setActiveStep] = useState(0)
  const [prevStep, setPrevStep] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [transitioning, setTransitioning] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const goToStep = useCallback((idx: number) => {
    if (idx === activeStep || transitioning) return
    setTransitioning(true)
    setPrevStep(activeStep)
    setTimeout(() => {
      setActiveStep(idx)
      setTransitioning(false)
      setPrevStep(null)
    }, 350)
  }, [activeStep, transitioning])

  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      const next = (activeStep + 1) % STORY_STEPS.length
      goToStep(next)
    }, 4500)
    return () => clearInterval(interval)
  }, [isPlaying, activeStep, goToStep])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const diff = touchStart - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) {
      setIsPlaying(false)
      if (diff > 0) {
        goToStep((activeStep + 1) % STORY_STEPS.length)
      } else {
        goToStep((activeStep - 1 + STORY_STEPS.length) % STORY_STEPS.length)
      }
    }
    setTouchStart(null)
  }

  const step = STORY_STEPS[activeStep]
  const StepIcon = step.icon

  return (
    <section className="py-12 lg:py-16 relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <div className="inline-flex items-center rounded-full border bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Inspiring Success Story
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            From Nervous Hope to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Celebration</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Experience how ACS HR Services turns career dreams into reality — every single day.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">

          {/* Left: Sliding Photo Panel */}
          <div className="lg:col-span-7 relative">
            <div 
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-primary/20 select-none"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="aspect-[4/3] sm:aspect-[16/10] relative w-full overflow-hidden bg-slate-950">

                {/* Current image */}
                <Image
                  key={activeStep}
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  className={`object-cover transition-all duration-500 ${
                    transitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"
                  }`}
                  priority
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent" />

                {/* Step badge */}
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-primary/30 text-xs font-bold text-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  {step.badge}
                </div>

                {/* Play/Pause */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? "Pause story slideshow" : "Play story slideshow"}
                  className="absolute top-4 right-4 bg-background/80 backdrop-blur-md p-2.5 rounded-full border border-border text-foreground hover:bg-primary hover:text-white transition-all shadow-md"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>

                {/* Dot indicators */}
                <div className="absolute bottom-24 sm:bottom-20 inset-x-0 flex justify-center gap-2 z-10">
                  {STORY_STEPS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => { goToStep(idx); setIsPlaying(false) }}
                      aria-label={`Go to step ${idx + 1}`}
                      className={`rounded-full transition-all duration-300 ${
                        idx === activeStep
                          ? "w-6 h-2 bg-white"
                          : "w-2 h-2 bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>

                {/* Story caption */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 text-white">
                  <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-wider mb-1.5 sm:mb-2">
                    <Volume2 className="w-4 h-4 animate-bounce" />
                    Story Scene: {step.title}
                  </div>
                  <h3
                    className={`text-lg sm:text-xl md:text-2xl font-bold text-white mb-1.5 sm:mb-2 transition-all duration-400 ${
                      transitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                    }`}
                  >
                    "{step.subtitle}"
                  </h3>
                  <p
                    className={`text-xs sm:text-sm text-slate-200 leading-relaxed transition-all duration-400 line-clamp-2 sm:line-clamp-none ${
                      transitioning ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom quote bar */}
            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-primary/5 border border-primary/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold shrink-0">
                  🎉
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">"Congratulations! You've got the job!"</p>
                  <p className="text-xs text-muted-foreground">ACS Recruitment Consultant to candidate</p>
                </div>
              </div>
              <Button size="sm" className="shadow-md w-full sm:w-auto shrink-0" asChild>
                <Link href="/register">
                  Start Your Journey
                  <ArrowRight className="ml-1 w-3.5 h-3.5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Step Timeline */}
          <div className="lg:col-span-5 space-y-4">
            {STORY_STEPS.map((s, idx) => {
              const isActive = idx === activeStep
              const SIcon = s.icon
              return (
                <Card
                  key={s.title}
                  onClick={() => { goToStep(idx); setIsPlaying(false) }}
                  className={`cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? "bg-gradient-to-r from-primary/10 via-background to-accent/5 border-primary shadow-lg scale-[1.02]"
                      : "bg-card/60 hover:bg-card border-border hover:border-primary/40 opacity-80 hover:opacity-100"
                  }`}
                >
                  <CardContent className="p-4 flex items-start gap-4">
                    {/* Thumbnail */}
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-border">
                      <Image
                        src={s.image}
                        alt={s.imageAlt}
                        fill
                        className="object-cover"
                      />
                      {isActive && (
                        <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-white animate-ping" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">
                          {s.badge}
                        </span>
                        {isActive && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full">
                            <CheckCircle2 className="w-3 h-3" /> Active
                          </span>
                        )}
                      </div>
                      <h4 className="font-bold text-foreground text-sm leading-snug">{s.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
