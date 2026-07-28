"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Phone, X, Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Jobs", href: "/jobs" },
  { name: "Register", href: "/register" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="ACS HR Services Logo"
              width={48}
              height={48}
              priority
              className="h-12 w-12 rounded-lg object-cover"
            />
            <div className="hidden flex-col sm:flex">
              <span className="text-lg font-bold leading-tight text-foreground">ACS HR Services</span>
              <span className="text-xs text-muted-foreground">Turning Dreams into Reality</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-secondary-foreground",
                  pathname === item.href
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">

            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-secondary lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Slide-in Drawer */}
      <div
        className={cn(
          "fixed right-0 top-0 z-[101] h-full w-[300px] bg-background shadow-xl transition-transform duration-300 ease-in-out lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-full flex-col overflow-y-auto">
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b px-4 py-4">
            <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
              <Image
                src="/logo.png"
                alt="ACS HR Services Logo"
                width={40}
                height={40}
                priority
                className="h-10 w-10 rounded-lg object-cover"
              />
              <div className="flex flex-col">
                <span className="text-base font-bold leading-tight">ACS HR Services</span>
                <span className="text-xs text-muted-foreground">Turning Dreams into Reality</span>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground hover:bg-secondary"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-1 p-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "rounded-md px-3 py-3 text-base font-medium transition-colors active:bg-secondary/80",
                  pathname === item.href
                    ? "bg-secondary text-secondary-foreground"
                    : "text-foreground hover:bg-secondary/50"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="mt-auto flex flex-col gap-3 border-t p-4">
            <a
              href="tel:+919711189713"
              className="flex items-center gap-2 rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-secondary/50"
            >
              <Phone className="h-4 w-4" />
              <span>+91 97111 89713</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex h-11 w-full items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 active:bg-primary/80"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
