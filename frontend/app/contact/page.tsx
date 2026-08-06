import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin, Clock, Linkedin, Instagram, Facebook, MessageCircle } from "lucide-react"

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
  { name: "LinkedIn", href: "https://www.linkedin.com/in/amit-tiwari-645347104?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: Linkedin },
  { name: "Instagram", href: "https://www.instagram.com/acsjobs2024?igsh=cWkyaWJrOWs5NXls", icon: Instagram },
  { name: "Facebook", href: "https://www.facebook.com/share/14fMqdZ5rse/", icon: Facebook },
  { name: "WhatsApp", href: "https://wa.me/919711189713", icon: MessageCircle },
]

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background py-12 lg:py-16">
        <div className="absolute top-0 left-1/2 w-[1000px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-none" />
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center animate-in fade-in zoom-in duration-1000">
            <div className="inline-flex items-center rounded-full border bg-background/50 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-primary mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Contact Us
            </div>
            <h1 className="text-balance text-5xl font-extrabold tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Let&apos;s Connect With Us!
            </h1>
            <p className="mt-6 text-pretty text-lg text-muted-foreground md:text-xl leading-relaxed">
              Have questions about our services? Looking for your dream job? Ready to transform your HR operations? We&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 lg:py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {contactInfo.map((info) => (
              <Card key={info.label} className="text-center group overflow-hidden border-0 bg-gradient-to-b from-background to-secondary/20 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <CardContent className="pt-8 pb-8">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-md">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{info.label}</h3>
                  <a
                    href={info.href}
                    className="mt-3 block text-lg font-bold text-primary transition-colors hover:text-accent group-hover:underline underline-offset-4"
                    target={info.href?.startsWith("https") ? "_blank" : undefined}
                    rel={info.href?.startsWith("https") ? "noopener noreferrer" : undefined}
                  >
                    {info.value}
                  </a>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="bg-secondary/30 py-8 lg:py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Office Address Card */}
              <Card className="overflow-hidden border-0 bg-gradient-to-br from-background to-secondary/20 shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                      <MapPin className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Office Address</h3>
                      <p className="mt-2 text-muted-foreground font-semibold text-primary">ACS HR Services</p>
                      <p className="mt-2 text-muted-foreground leading-relaxed">
                        410, Munshi Pulia, Munshipulia<br />
                        Indira Nagar, Lucknow<br />
                        Uttar Pradesh - 226016
                      </p>
                      <a
                        href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x399be330e84746c9:0xb848f6d35a6c0a4e"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center text-sm font-bold text-primary hover:text-accent transition-colors underline-offset-4 hover:underline"
                      >
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* All Contact Numbers */}
              <Card className="overflow-hidden border-0 bg-gradient-to-br from-background to-secondary/20 shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                      <Phone className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Contact Numbers</h3>
                  </div>
                  <div className="mt-6 space-y-4">
                    <a href="tel:+919120335555" className="flex items-center gap-3 text-base font-medium text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="h-5 w-5" />
                      +91 91203 35555
                    </a>
                    <a href="tel:+916393190171" className="flex items-center gap-3 text-base font-medium text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="h-5 w-5" />
                      +91 63931 90171
                    </a>
                    <a href="tel:+919711189713" className="flex items-center gap-3 text-base font-medium text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="h-5 w-5" />
                      +91 97111 89713
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="overflow-hidden border-0 bg-gradient-to-br from-background to-secondary/20 shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground">Connect With Us</h3>
                  <p className="mt-3 text-base text-muted-foreground">
                    Follow us on social media for updates, insights, and career opportunities.
                  </p>
                  <div className="mt-6 flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-muted-foreground shadow-sm transition-all hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground hover:shadow-md"
                        aria-label={social.name}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <social.icon className="h-6 w-6" />
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
      <section className="py-8 lg:py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Visit Our Website
            </h2>
            <p className="mt-4 text-muted-foreground">
              Learn more about our services and current job openings.
            </p>
            <div className="mt-6">
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
      <section className="py-8 lg:py-10 relative overflow-hidden">
        <div className="container relative mx-auto px-4 lg:px-8 z-10">
          <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground relative rounded-[2rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
            <CardContent className="p-10 md:p-16 lg:p-20 relative z-10">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl drop-shadow-sm">
                  Have Questions?
                </h2>
                <p className="mt-6 text-lg text-primary-foreground/90 md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                  Whether you&apos;re looking for HR services or searching for your dream job, we&apos;re here to help. Reach out to us directly!
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="mailto:amitacs2023@gmail.com"
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-secondary px-8 font-bold text-primary shadow-xl transition-all hover:scale-105"
                  >
                    <Mail className="h-5 w-5" />
                    Email Us
                  </a>
                  <a
                    href="https://wa.me/919711189713"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-lg border-2 border-primary-foreground/40 bg-transparent px-8 font-bold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary-foreground hover:text-primary"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
