import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Users, Award, Lightbulb, Handshake, ArrowRight, Linkedin, Quote } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | ACS HR Services - Anshuman Consultancy",
  description: "Learn about ACS HR Services - a leading job consultancy firm based in India specializing in connecting talented professionals with reputable companies.",
}

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our dealings, building trust through transparency and honesty.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every service we provide, continuously improving to exceed expectations.",
  },
  {
    icon: Users,
    title: "People First",
    description: "We believe in putting people at the center of everything we do, valuing both our clients and candidates.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace innovative solutions and modern HR practices to deliver the best outcomes for our clients.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We see ourselves as partners in your success, working collaboratively to achieve your HR goals.",
  },
]

const team = [
  {
    name: "Manish Sharma",
    role: "HR Compliance Manager",
    bio: "Ensuring all HR operations meet statutory compliance and regulatory requirements across industries.",
    initials: "MS",
  },
  {
    name: "Vibha Chaubey",
    role: "HR Assistant Manager",
    bio: "Managing day-to-day HR operations and supporting recruitment processes with dedication and efficiency.",
    initials: "VC",
  },
  {
    name: "Harsh Nigam",
    role: "Training & Development / Accountant",
    bio: "Dual expertise in personality development training programs and financial management for the organization.",
    initials: "HN",
  },
  {
    name: "Neha Tiwari",
    role: "HR / Training & Development",
    bio: "Focused on candidate development and ensuring smooth HR processes for both clients and job seekers.",
    initials: "NT",
  },
]

const milestones = [
  { year: "2023", event: "Founded Anshuman Consultancy Services in Lucknow, U.P." },
  { year: "2023", event: "Expanded to IT & Non-IT staffing solutions" },
  { year: "2024", event: "Added Payroll Management and HR Compliance services" },
  { year: "2025", event: "Reached 200+ successful placements milestone" },
  { year: "2026", event: "Expanded vendor management and outsourcing services" },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background py-12 lg:py-16">
        <div className="absolute top-0 left-1/2 w-[1000px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-none" />
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center animate-in fade-in zoom-in duration-1000">
            <div className="inline-flex items-center rounded-full border bg-background/50 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-primary mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              About Us
            </div>
            <h1 className="text-balance text-5xl font-extrabold tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Turning <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Dreams</span> into Reality
            </h1>
            <p className="mt-6 text-pretty text-lg text-muted-foreground md:text-xl leading-relaxed">
              Anshuman Consultancy is a leading job consultancy firm based in India, specializing in connecting talented professionals with reputable companies across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-8 lg:py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  ACS HR Services (Anshuman Consultancy Services) was established in 2023 with a powerful mission: to bridge the gap between talented professionals and organizations seeking exceptional talent across India.
                </p>
                <p>
                  Based in Lucknow, Uttar Pradesh, we started as a recruitment consultancy and quickly earned a reputation for our personalized approach and commitment to quality. With a team of experienced recruiters and industry experts, we offer comprehensive recruitment solutions tailored to the needs of both candidates and clients.
                </p>
                <p>
                  Today, we serve clients across various industries, from IT to manufacturing, retail to healthcare. Our services have expanded to include Contract Staffing, Vendor Management, HR Services, Career Management, Outsourcing, and Payroll Management.
                </p>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-2xl" />
                <Image
                  src="/logo.png"
                  alt="ACS HR Services"
                  width={350}
                  height={350}
                  className="relative rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-8 lg:py-10 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-0 bg-gradient-to-br from-background to-secondary/20 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 shadow-inner">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-extrabold text-foreground">Our Mission</h3>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Empowering businesses with tailored strategies and innovative solutions, we drive sustainable growth, optimize operations, and enhance competitive advantage, ensuring our clients thrive in a dynamic market landscape.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 bg-gradient-to-br from-background to-secondary/20 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 shadow-inner">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-3xl font-extrabold text-foreground">Our Vision</h3>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  To be India&apos;s most trusted HR consultancy, known for transforming workplaces and careers. We envision a future where every organization has access to world-class HR support and every professional finds their dream opportunity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-8 lg:py-10 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Our Core Values
            </h2>
            <div className="w-20 h-1.5 bg-primary mx-auto mt-6 rounded-full" />
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Teamwork begins by building trust. These principles guide everything we do and define who we are as an organization.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Card key={value.title} className={`group overflow-hidden border-0 bg-background shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${index === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
                <CardContent className="p-8">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                  <p className="mt-3 text-base text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-secondary/30 py-8 lg:py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Our Journey
            </h2>
            <p className="mt-4 text-muted-foreground">
              Key milestones that have shaped our growth over the years.
            </p>
          </div>
          <div className="relative mx-auto mt-12 max-w-3xl">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={`${milestone.year}-${index}`}
                  className={`relative flex items-center gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  <div className="hidden flex-1 md:block" />
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground md:absolute md:left-1/2 md:-translate-x-1/2">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <Card className="border-none shadow-md">
                      <CardContent className="p-4">
                        <p className="text-sm font-semibold text-primary">{milestone.year}</p>
                        <p className="mt-1 text-foreground">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-8 lg:py-10 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row items-center gap-10 bg-card rounded-2xl shadow-lg p-8 border border-border">
              {/* Photo */}
              <div className="relative shrink-0">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/40 to-accent/20 blur-md" />
                <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl">
                  <Image
                    src="/rohit-saxena.jpg"
                    alt="Rohit Kumar Saxena - Director"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-3 flex items-center justify-center md:justify-start gap-2">
                  <Quote className="h-5 w-5 text-primary opacity-60" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">Director's Message</span>
                </div>
                <blockquote className="text-base leading-relaxed text-muted-foreground italic">
                  "At ACS HR Services, we believe that the right talent placed in the right environment creates
                  extraordinary results. Our commitment is not just to fill vacancies — it is to build careers,
                  strengthen organizations, and contribute to a more productive India. Every placement we make
                  is a promise we keep."
                </blockquote>
                <div className="mt-5">
                  <p className="text-lg font-bold text-foreground">Rohit Kumar Saxena</p>
                  <p className="text-sm font-medium text-primary">Director, ACS HR Services</p>
                  <a
                    href="https://www.linkedin.com/in/rohit-saxena-865b9a301"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-md bg-[#0A66C2] px-4 py-1.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                  >
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Co-Founder's Message */}
      <section className="py-8 lg:py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row-reverse items-center gap-10 bg-card rounded-2xl shadow-lg p-8 border border-border">
              {/* Photo */}
              <div className="relative shrink-0">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 blur-md" />
                <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl">
                  <Image
                    src="/amit-tiwari.jpg"
                    alt="Amit Tiwari - Co-Founder"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-3 flex items-center justify-center md:justify-start gap-2">
                  <Quote className="h-5 w-5 text-primary opacity-60" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">Co-Founder's Message</span>
                </div>
                <blockquote className="text-base leading-relaxed text-muted-foreground italic">
                  "Building ACS HR Services has been a journey driven by one core belief — that people are an
                  organization's greatest asset. We founded this company to create meaningful connections between
                  talent and opportunity. Every business we partner with, every candidate we place, moves us closer
                  to a stronger, more empowered workforce."
                </blockquote>
                <div className="mt-5">
                  <p className="text-lg font-bold text-foreground">Amit Tiwari</p>
                  <p className="text-sm font-medium text-primary">Co-Founder, ACS HR Services</p>
                  <a
                    href="https://www.linkedin.com/in/amit-tiwari-645347104"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-md bg-[#0A66C2] px-4 py-1.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                  >
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-8 lg:py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 text-muted-foreground">
              Experienced professionals dedicated to delivering excellence in HR services. Teamwork begins by building trust.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {team.map((member) => (
              <Card key={member.name} className="text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-10">
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground shadow-lg">
                    {member.initials}
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-primary uppercase tracking-wide">{member.role}</p>
                  <p className="mt-4 text-base text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 lg:py-10 relative overflow-hidden">
        <div className="container relative mx-auto px-4 lg:px-8 z-10">
          <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground relative rounded-[2rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
            <CardContent className="p-10 md:p-16 lg:p-20 relative z-10">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl drop-shadow-sm">
                  Stay Inspired. Never Stop Creating.
                </h2>
                <p className="mt-6 text-lg text-primary-foreground/90 md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                  Let&apos;s discuss how our expertise can help your organization achieve its HR goals or find your dream job.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" variant="secondary" className="h-14 px-8 text-base font-bold shadow-xl hover:scale-105 transition-transform" asChild>
                    <Link href="/contact">
                      Contact Us Today
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 text-base font-bold border-2 border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all hover:scale-105 shadow-lg"
                    asChild
                  >
                    <Link href="/services">View Our Services</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
