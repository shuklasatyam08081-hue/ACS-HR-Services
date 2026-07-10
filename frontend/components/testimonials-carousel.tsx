"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote: "ACS HR Services truly lives up to their tagline - they helped turn my career dream into reality. Found my perfect IT job within weeks!",
    author: "Vikram Singh",
    position: "Software Developer",
    company: "Tech Solutions Pvt. Ltd.",
  },
  {
    quote: "Excellent contract staffing support for our manufacturing unit. Their team understands our requirements and delivers quality candidates consistently.",
    author: "Priya Sharma",
    position: "HR Manager",
    company: "Lucknow Industries",
  },
  {
    quote: "The training and personality development program was transformative. It boosted my confidence and helped me crack multiple interviews.",
    author: "Rahul Verma",
    position: "Sales Executive",
    company: "RetailMax India",
  },
  {
    quote: "Professional payroll management services that have simplified our operations. Their compliance support is exceptional and stress-free.",
    author: "Amit Gupta",
    position: "Finance Director",
    company: "Greenfield Enterprises",
  },
  {
    quote: "As a fresher, I was struggling to find the right opportunity. ACS HR Services guided me throughout and placed me in a reputable company.",
    author: "Neha Agarwal",
    position: "HR Associate",
    company: "Corporate Solutions Ltd.",
  },
]

interface TestimonialsCarouselProps {
  className?: string
}

export function TestimonialsCarousel({ className }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full shrink-0 px-4">
              <Card className="mx-auto max-w-3xl border-none bg-secondary/50 shadow-none">
                <CardContent className="pt-6">
                  <Quote className="mb-4 h-10 w-10 text-primary/30" />
                  <blockquote className="text-lg leading-relaxed text-foreground md:text-xl">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "h-2.5 w-2.5 rounded-full transition-all",
              index === currentIndex
                ? "w-8 bg-primary"
                : "bg-primary/30 hover:bg-primary/50"
            )}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
