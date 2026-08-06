"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export function ScrollEffects() {
  const pathname = usePathname()
  const progressRef = useRef<HTMLDivElement>(null)

  // Scroll progress bar only — no DOM class mutations to avoid hydration mismatch
  useEffect(() => {
    const bar = progressRef.current
    if (!bar) return

    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      bar.style.width = `${progress}%`
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [pathname])

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-track">
        <div ref={progressRef} className="scroll-progress-bar" />
      </div>

      {/* Floating ambient orbs — purely decorative, new DOM elements so no hydration issue */}
      <div className="ambient-orbs" aria-hidden="true">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
      </div>
    </>
  )
}

