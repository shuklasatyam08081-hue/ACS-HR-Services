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
    name: "Rohit Kumar Saxena",
    role: "Director",
    bio: "Leading ACS HR Services with vision and strategic direction to connect talented professionals with the right opportunities.",
    initials: "RS",
  },
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
                  src="/logo.jpeg"
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
                  key={milestone.year}
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
