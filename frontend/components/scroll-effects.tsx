"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export function ScrollEffects() {
  const pathname = usePathname()
  const progressRef = useRef<HTMLDivElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)

  // ── Scroll progress bar ──────────────────────────────────────
  useEffect(() => {
    const bar = progressRef.current
    if (!bar) return

    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      bar.style.width = `${progress}%`

      // Add/remove header shadow class on scroll
      const header = document.querySelector("header")
      if (header) {
        if (scrollTop > 10) {
          header.classList.add("scrolled")
        } else {
          header.classList.remove("scrolled")
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [pathname])

  // ── Cursor spotlight ─────────────────────────────────────────
  useEffect(() => {
    const el = spotlightRef.current
    if (!el) return

    let rafId: number
    let tx = -500
    let ty = -500

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        tx = e.clientX
        ty = e.clientY
        el.style.transform = `translate(${tx - 210}px, ${ty - 210}px)`
      })
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-track">
        <div ref={progressRef} className="scroll-progress-bar" />
      </div>

      {/* Cursor Spotlight */}
      <div ref={spotlightRef} className="cursor-spotlight" aria-hidden="true" />

      {/* Floating ambient orbs — purely decorative */}
      <div className="ambient-orbs" aria-hidden="true">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
      </div>
    </>
  )
}
