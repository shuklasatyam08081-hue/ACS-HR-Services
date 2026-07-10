"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, Phone } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
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
          <a href="tel:+919120335555" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <Phone className="h-4 w-4" />
            <span>+91 97111 89713</span>
          </a>
          <Button asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px]">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-6 pt-6">
              <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                <Image
                  src="/logo.jpeg"
                  alt="ACS HR Services Logo"
                  width={40}
                  height={40}
                  priority
                  className="h-10 w-10 rounded-lg object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-tight">ACS HR Services</span>
                  <span className="text-xs text-muted-foreground">Turning Dreams into Reality</span>
                </div>
              </Link>
              <nav className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "rounded-md px-3 py-2.5 text-base font-medium transition-colors hover:bg-secondary",
                      pathname === item.href
                        ? "bg-secondary text-secondary-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-3 border-t pt-4">
                <a href="tel:+919711189713" className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+91 97111 89713</span>
                </a>
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>Get a Quote</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
