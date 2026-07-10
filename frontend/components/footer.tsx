import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, MessageCircle } from "lucide-react"

const navigation = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Careers", href: "/jobs" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Contract Staffing", href: "/services#staffing" },
    { name: "IT & Non-IT Staffing", href: "/services#it-staffing" },
    { name: "HR Services", href: "/services#hr-services" },
    { name: "Payroll Management", href: "/services#payroll" },
    { name: "Training & Development", href: "/services#training" },
  ],
  resources: [
    { name: "Job Openings", href: "/jobs" },
    { name: "Register as Candidate", href: "/contact" },
    { name: "HR Insights", href: "#" },
    { name: "FAQ", href: "#" },
  ],
}

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "WhatsApp", href: "https://wa.me/919711189713", icon: MessageCircle },
]

export function Footer() {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.jpeg"
                alt="ACS HR Services Logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-lg object-cover"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">ACS HR Services</span>
                <span className="text-xs text-muted-foreground">Turning Dreams into Reality</span>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              A leading job consultancy firm based in India, specializing in connecting talented professionals with reputable companies across various industries. Empowering businesses with tailored strategies and innovative solutions.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a href="tel:+919120335555" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <Phone className="h-4 w-4" />
                +91 91203 35555 / 63931 90171 / 97111 89713
              </a>
              <a href="mailto:amitacs2023@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <Mail className="h-4 w-4" />
                amitacs2023@gmail.com / acs02.2016@gmail.com
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Shop no. 274, Prime Plaza,<br />Munshipulia, Indira Nagar,<br />Lucknow, U.P. - 226016</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Resources</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} ACS HR Services (Anshuman Consultancy Services). All rights reserved.
            </p>
            <a href="https://www.anshumanconsultancy.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
              www.anshumanconsultancy.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground"
                aria-label={item.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <item.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
