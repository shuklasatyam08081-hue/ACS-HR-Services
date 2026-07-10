import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { Users, Briefcase, Shield, ArrowRight, CheckCircle, Building2, Award, Clock, GraduationCap, FileText, Handshake } from "lucide-react"

const services = [
  {
    title: "Contract Staffing",
    description: "Flexible staffing solutions for IT & Non-IT sectors. We provide skilled professionals for temporary and permanent positions.",
    icon: Users,
    href: "/services#staffing",
  },
  {
    title: "HR Services",
    description: "Comprehensive HR solutions including vendor management, outsourcing, and strategic HR consulting for your business.",
    icon: Briefcase,
    href: "/services#hr-services",
  },
  {
    title: "Payroll Management",
    description: "End-to-end payroll processing and statutory compliance management to streamline your operations.",
    icon: Shield,
    href: "/services#payroll",
  },

  {
    title: "Career Management",
    description: "Professional career counseling and placement services to help candidates find their dream jobs.",
    icon: FileText,
    href: "/services#career",
  },
  {
    title: "Vendor Management",
    description: "Efficient vendor management services to optimize your contractor and supplier relationships.",
    icon: Handshake,
    href: "/services#vendor",
  },
]

const stats = [
  { value: "3+", label: "Years Experience", icon: Clock },
  { value: "150+", label: "Clients Served", icon: Building2 },
  { value: "100+", label: "Placements Made", icon: Users },
  { value: "86%", label: "Client Satisfaction", icon: Award },
]

const benefits = [
  "Dedicated team of experienced recruiters and industry experts",
  "Comprehensive recruitment solutions tailored to your needs",
  "Quick turnaround time for urgent requirements",
  "Transparent pricing with no hidden costs",
  "Pan-India network with focus on quality placements",
  "Proven track record with measurable results",
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background py-20 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(45,100,180,0.08),transparent_50%)]" />
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">
                Trusted HR Partner Since 2023
              </p>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Turning Dreams into Reality
              </h1>
              <p className="mt-6 text-pretty text-lg text-muted-foreground md:text-xl">
                Anshuman Consultancy is a leading job consultancy firm based in India, specializing in connecting talented professionals with reputable companies across various industries.
              </p>
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-2xl" />
                <Image
                  src="/logo.jpeg"
                  alt="ACS HR Services"
                  width={400}
                  height={400}
                  className="relative rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-muted-foreground">
              Empowering businesses with tailored strategies and innovative solutions. We drive sustainable growth, optimize operations, and enhance competitive advantage.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="group relative overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10">
                  <stat.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <p className="text-4xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="mt-1 text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Why Choose ACS HR Services?
              </h2>
              <p className="mt-4 text-muted-foreground">
                With a team of experienced recruiters and industry experts, Anshuman Consultancy offers comprehensive recruitment solutions tailored to the needs of both candidates and clients. We ensure our clients thrive in a dynamic market landscape.
              </p>
              <ul className="mt-8 grid gap-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="overflow-hidden bg-gradient-to-br from-primary/5 via-secondary to-accent/5">
                <CardContent className="p-8">
                  <div className="text-center">
                    <p className="text-6xl font-bold text-primary">3+</p>
                    <p className="mt-2 text-lg font-semibold text-foreground">Years of Excellence</p>
                    <p className="mt-4 text-muted-foreground">
                      Serving businesses across India with dedication and expertise since 2023
                    </p>
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-background p-4 text-center">
                      <p className="text-2xl font-bold text-primary">IT</p>
                      <p className="text-sm text-muted-foreground">Sector Expertise</p>
                    </div>
                    <div className="rounded-lg bg-background p-4 text-center">
                      <p className="text-2xl font-bold text-primary">Non-IT</p>
                      <p className="text-sm text-muted-foreground">Sector Expertise</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/30 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-muted-foreground">
              Don&apos;t just take our word for it. Here&apos;s what our valued clients have to say about their experience with us.
            </p>
          </div>
          <div className="mt-12">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="overflow-hidden bg-primary text-primary-foreground">
            <CardContent className="p-8 md:p-12">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Ready to Transform Your HR?
                </h2>
                <p className="mt-4 text-primary-foreground/80">
                  Let&apos;s discuss how we can help you build a stronger, more efficient workforce. Get a free consultation with our HR experts today.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact">Schedule Free Consultation</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10" asChild>
                    <Link href="/register">Register as Job Seeker</Link>
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
