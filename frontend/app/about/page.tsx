import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Users, Award, Lightbulb, Handshake, ArrowRight } from "lucide-react"

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
    name: "Amit Tiwari",
    role: "Co-Founder",
    bio: "Co-founding member with deep expertise in building client relationships and expanding business operations.",
    initials: "AT",
  },
  {
    name: "Munish Sharma",
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
      <section className="bg-gradient-to-b from-secondary/50 to-background py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">
              About Us
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Turning Dreams into Reality
            </h1>
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
              Anshuman Consultancy is a leading job consultancy firm based in India, specializing in connecting talented professionals with reputable companies across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
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

      {/* Director's Message Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest" style={{color: '#c9a84c'}}>
              Leadership
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-white">
              Director&apos;s Message
            </h2>
          </div>
          <div className="mx-auto max-w-5xl">
            <div className="relative rounded-3xl overflow-hidden" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(201,168,76,0.3)', backdropFilter: 'blur(10px)'}}>
              {/* Gold accent top bar */}
              <div className="h-1 w-full" style={{background: 'linear-gradient(90deg, #c9a84c, #f0d080, #c9a84c)'}} />
              <div className="p-8 lg:p-12">
                <div className="grid gap-10 lg:grid-cols-5 items-start">
                  {/* Director Photo */}
                  <div className="lg:col-span-2 flex flex-col items-center">
                    <div className="relative">
                      <div className="absolute -inset-1 rounded-2xl" style={{background: 'linear-gradient(135deg, #c9a84c, #f0d080, #c9a84c)'}} />
                      <Image
                        src="/rohit-saxena.jpg"
                        alt="Rohit Kumar Saxena - Director, ACS HR Services"
                        width={280}
                        height={340}
                        className="relative rounded-2xl object-cover object-top"
                        style={{height: '340px', width: '280px'}}
                      />
                    </div>
                    <div className="mt-5 text-center">
                      <h3 className="text-xl font-bold text-white">Rohit Kumar Saxena</h3>
                      <p className="mt-1 text-sm font-semibold uppercase tracking-widest" style={{color: '#c9a84c'}}>Director</p>
                      <p className="mt-1 text-xs text-slate-400">ACS HR Services</p>
                      {/* LinkedIn */}
                      <a
                        href="https://www.linkedin.com/in/rohit-saxena-865b9a301"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all hover:scale-105"
                        style={{background: '#0A66C2', color: '#fff'}}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>

                  {/* Director's Statement */}
                  <div className="lg:col-span-3 flex flex-col justify-center">
                    {/* Quote marks */}
                    <div className="text-6xl font-serif leading-none mb-4" style={{color: '#c9a84c', opacity: 0.6}}>&ldquo;</div>
                    <div className="space-y-4 text-slate-300 text-base lg:text-lg leading-relaxed">
                      <p>
                        At ACS HR Services, we do not merely fill positions — we build careers, strengthen teams, and shape the future of organizations. Since our founding, my guiding principle has been simple: <span className="text-white font-semibold">the right talent in the right place transforms everything.</span>
                      </p>
                      <p>
                        In today&apos;s rapidly evolving business landscape, human capital is the single most critical competitive advantage. We take immense pride in our ability to understand not just the skills a role demands, but the culture, vision, and ambition of both the hiring organization and the professional seeking growth.
                      </p>
                      <p>
                        Our commitment to integrity, transparency, and personalized service is not a promise — it is the foundation upon which every placement, every partnership, and every success story at ACS HR Services is built.
                      </p>
                      <p>
                        Whether you are an organization seeking exceptional talent or a professional ready to take the next step in your career, I assure you — at ACS HR Services, <span className="text-white font-semibold">your aspirations are in capable hands.</span>
                      </p>
                    </div>
                    <div className="text-6xl font-serif leading-none mt-4 text-right" style={{color: '#c9a84c', opacity: 0.6}}>&rdquo;</div>
                    {/* Signature */}
                    <div className="mt-6 pt-6" style={{borderTop: '1px solid rgba(201,168,76,0.3)'}}>
                      <p className="font-bold text-white text-lg">Rohit Kumar Saxena</p>
                      <p className="text-sm mt-1" style={{color: '#c9a84c'}}>Director &amp; Founder</p>
                      <p className="text-xs text-slate-400 mt-0.5">Anshuman Consultancy Services (ACS HR Services)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-none bg-card shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                <p className="mt-4 text-muted-foreground">
                  Empowering businesses with tailored strategies and innovative solutions, we drive sustainable growth, optimize operations, and enhance competitive advantage, ensuring our clients thrive in a dynamic market landscape.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none bg-card shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10">
                  <Eye className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                <p className="mt-4 text-muted-foreground">
                  To be India&apos;s most trusted HR consultancy, known for transforming workplaces and careers. We envision a future where every organization has access to world-class HR support and every professional finds their dream opportunity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-muted-foreground">
              Teamwork begins by building trust. These principles guide everything we do and define who we are as an organization.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Card key={value.title} className={index === 4 ? "sm:col-span-2 lg:col-span-1" : ""}>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-secondary/30 py-16 lg:py-24">
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

      {/* Team Section */}
      <section id="team" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 text-muted-foreground">
              Experienced professionals dedicated to delivering excellence in HR services. Teamwork begins by building trust.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    {member.initials}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
              Stay Inspired. Never Stop Creating.
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              Let&apos;s discuss how our expertise can help your organization achieve its HR goals or find your dream job.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
