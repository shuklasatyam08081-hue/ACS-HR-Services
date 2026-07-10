import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Facebook, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | ACS HR Services - Anshuman Consultancy",
  description: "Get in touch with ACS HR Services. We're here to help with all your HR needs - recruitment, staffing, training, payroll, and more.",
}

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 97111 89713",
    href: "tel:+919711189713",
    description: "Mon-Sat, 9:00 AM - 6:00 PM",
  },
  {
    icon: Mail,
    label: "Email",
    value: "amitacs2023@gmail.com",
    href: "mailto:amitacs2023@gmail.com",
    description: "We respond within 24 hours",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 97111 89713",
    href: "https://wa.me/919711189713",
    description: "Quick responses via WhatsApp",
  },
]

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "WhatsApp", href: "https://wa.me/919711189713", icon: MessageCircle },
]

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">
              Contact Us
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Let&apos;s Connect With Us!
            </h1>
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
              Have questions about our services? Looking for your dream job? Ready to transform your HR operations? We&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {contactInfo.map((info) => (
              <Card key={info.label} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <info.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{info.label}</h3>
                  <a
                    href={info.href}
                    className="mt-2 block text-lg font-medium text-primary hover:underline"
                    target={info.href?.startsWith("https") ? "_blank" : undefined}
                    rel={info.href?.startsWith("https") ? "noopener noreferrer" : undefined}
                  >
                    {info.value}
                  </a>
                  <p className="mt-1 text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Office Address Card */}
              <Card className="overflow-hidden">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Office Address</h3>
                      <p className="mt-2 text-muted-foreground">
                        Shop no. 274, Prime Plaza<br />
                        Munshipulia, Indira Nagar<br />
                        Lucknow, Uttar Pradesh - 226016
                      </p>
                      <a
                        href="https://maps.google.com/?q=Prime+Plaza+Munshipulia+Indira+Nagar+Lucknow"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center text-sm font-medium text-primary hover:underline"
                      >
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Business Hours</h3>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-medium text-foreground">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-medium text-foreground">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* All Contact Numbers */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Contact Numbers</h3>
                  </div>
                  <div className="mt-4 space-y-3">
                    <a href="tel:+919120335555" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                      <Phone className="h-4 w-4" />
                      +91 91203 35555
                    </a>
                    <a href="tel:+916393190171" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                      <Phone className="h-4 w-4" />
                      +91 63931 90171
                    </a>
                    <a href="tel:+919711189713" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                      <Phone className="h-4 w-4" />
                      +91 97111 89713 (Amit)
                    </a>
                    <a href="mailto:amitacs2023@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                      <Mail className="h-4 w-4" />
                      amitacs2023@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-foreground">Connect With Us</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Follow us on social media for updates, insights, and career opportunities.
                  </p>
                  <div className="mt-4 flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                        aria-label={social.name}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Website CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Visit Our Website
            </h2>
            <p className="mt-4 text-muted-foreground">
              Learn more about our services and current job openings.
            </p>
            <div className="mt-8">
              <a
                href="https://www.anshumanconsultancy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                www.anshumanconsultancy.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
              Have Questions?
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              Whether you&apos;re looking for HR services or searching for your dream job, we&apos;re here to help. Reach out to us directly!
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:amitacs2023@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
              >
                <Mail className="h-5 w-5" />
                Email Us
              </a>
              <a
                href="https://wa.me/919711189713"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 bg-transparent px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
