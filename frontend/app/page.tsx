import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import dynamic from "next/dynamic"
import { Users, Briefcase, Shield, ArrowRight, CheckCircle, Building2, Award, Clock, GraduationCap, FileText, Handshake } from "lucide-react"

const TestimonialsCarousel = dynamic(() => import("@/components/testimonials-carousel").then((mod) => mod.TestimonialsCarousel))

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
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background py-12 lg:py-16">
        <div className="absolute top-0 left-1/2 w-[1000px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-none" />
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-in fade-in zoom-in duration-1000">
            <div>
              <div className="inline-flex items-center rounded-full border bg-background/50 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-primary mb-6 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Trusted HR Partner Since 2023
              </div>
              <h1 className="text-balance text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
                Turning <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Dreams</span> into Reality
              </h1>
              <p className="mt-6 text-pretty text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto leading-relaxed">
                Anshuman Consultancy is a leading job consultancy firm based in India, specializing in connecting talented professionals with reputable companies across various industries.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="h-12 px-8 shadow-lg shadow-primary/30 transition-all hover:scale-105 font-medium" asChild>
                  <Link href="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 backdrop-blur-sm bg-background/50 hover:bg-secondary/80 transition-all hover:scale-105 font-medium" asChild>
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-8 lg:py-10 relative">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center mb-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Our Premium Services
            </h2>
            <div className="w-20 h-1.5 bg-primary mx-auto mt-6 rounded-full" />
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Empowering businesses with tailored strategies and innovative solutions. We drive sustainable growth, optimize operations, and enhance competitive advantage.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 bg-gradient-to-b from-background to-secondary/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="relative z-10">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:shadow-md group-hover:rotate-3">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed mt-2 font-medium">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 pt-4 border-t border-border/50 mt-2">
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:text-accent group-hover:underline underline-offset-4"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 py-8 lg:py-10 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="container relative mx-auto px-4 lg:px-8 z-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group p-6 rounded-3xl hover:bg-white/10 transition-colors duration-300 border border-transparent hover:border-white/20">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/20 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-inner border border-white/20">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <p className="text-5xl font-black tracking-tight text-primary-foreground drop-shadow-lg">{stat.value}</p>
                <p className="mt-3 font-semibold text-primary-foreground/90 uppercase tracking-widest text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 lg:py-10 relative">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent mb-6">
                Why Us
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
                Why Choose ACS HR Services?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                With a team of experienced recruiters and industry experts, Anshuman Consultancy offers comprehensive recruitment solutions tailored to the needs of both candidates and clients. We ensure our clients thrive in a dynamic market landscape.
              </p>
              <ul className="mt-6 grid gap-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-4 p-3 rounded-lg hover:bg-secondary/40 transition-colors">
                    <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-accent drop-shadow-sm" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button size="lg" className="h-12 px-8 shadow-md hover:scale-105 transition-transform" asChild>
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-accent/10 to-transparent blur-3xl -z-10 rounded-[3rem]" />
              <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-background via-background to-secondary/50 rounded-[2rem]">
                <CardContent className="p-10 md:p-12">
                  <div className="text-center">
                    <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
                      <Award className="h-10 w-10 text-primary" />
                    </div>
                    <p className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">3+</p>
                    <p className="mt-4 text-xl font-bold text-foreground">Years of Excellence</p>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      Serving businesses across India with dedication and expertise since 2023
                    </p>
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-6">
                    <div className="rounded-2xl bg-background border shadow-sm p-6 text-center hover:border-primary/50 transition-colors group">
                      <p className="text-3xl font-black text-primary group-hover:scale-110 transition-transform">IT</p>
                      <p className="text-sm font-semibold text-muted-foreground mt-2 uppercase tracking-wider">Sector</p>
                    </div>
                    <div className="rounded-2xl bg-background border shadow-sm p-6 text-center hover:border-accent/50 transition-colors group">
                      <p className="text-3xl font-black text-accent group-hover:scale-110 transition-transform">Non-IT</p>
                      <p className="text-sm font-semibold text-muted-foreground mt-2 uppercase tracking-wider">Sector</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/40 py-8 lg:py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
              What Our Clients Say
            </h2>
            <div className="w-20 h-1.5 bg-primary mx-auto mt-6 rounded-full" />
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Don&apos;t just take our word for it. Here&apos;s what our valued clients have to say about their experience with us.
            </p>
          </div>
          <div className="mt-12 max-w-5xl mx-auto">
            <TestimonialsCarousel />
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
                  Ready to Transform Your HR?
                </h2>
                <p className="mt-6 text-lg text-primary-foreground/90 md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                  Let&apos;s discuss how we can help you build a stronger, more efficient workforce. Get a free consultation with our HR experts today.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" variant="secondary" className="h-14 px-8 text-base font-bold shadow-xl hover:scale-105 transition-transform" asChild>
                    <Link href="/contact">Schedule Free Consultation</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 px-8 text-base font-bold border-2 border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all hover:scale-105 shadow-lg" asChild>
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
