import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ServiceCalculator } from "@/components/service-calculator"
import {
  Users,
  Briefcase,
  Shield,
  CheckCircle,
  Search,
  UserCheck,
  FileText,
  Settings,
  Scale,
  Calculator as CalcIcon,
  ArrowRight,
  Building,
  TrendingUp,
  Clock,
  GraduationCap,
  Handshake,
  Layers,
  Monitor,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services | ACS HR Services - Anshuman Consultancy",
  description: "Explore our comprehensive HR services including contract staffing, IT & Non-IT staffing, HR services, training, payroll management, and more.",
}

const services = [
  {
    id: "staffing",
    title: "Contract Staffing",
    description: "Flexible staffing solutions to meet your temporary and project-based workforce requirements across industries.",
    icon: Users,
    color: "bg-blue-500/10 text-blue-600",
    features: [
      {
        icon: Search,
        title: "Talent Sourcing",
        description: "Access our extensive database of pre-screened candidates for quick deployment.",
      },
      {
        icon: UserCheck,
        title: "Temporary Staffing",
        description: "Flexible workforce for short-term projects and seasonal requirements.",
      },
      {
        icon: Clock,
        title: "Contract-to-Hire",
        description: "Evaluate candidates on the job before making permanent hiring decisions.",
      },
      {
        icon: TrendingUp,
        title: "Bulk Hiring",
        description: "Rapid scaling of workforce for large projects and new ventures.",
      },
    ],
    process: [
      "Requirement Analysis",
      "Candidate Sourcing",
      "Screening & Interview",
      "Deployment",
      "Performance Monitoring",
    ],
  },
  {
    id: "it-staffing",
    title: "IT & Non-IT Staffing",
    description: "Specialized recruitment for both technology and non-technology roles across all levels and domains.",
    icon: Monitor,
    color: "bg-purple-500/10 text-purple-600",
    features: [
      {
        icon: Monitor,
        title: "IT Professionals",
        description: "Software developers, system admins, network engineers, and more.",
      },
      {
        icon: Building,
        title: "Non-IT Roles",
        description: "Sales, marketing, operations, finance, and administrative positions.",
      },
      {
        icon: UserCheck,
        title: "Executive Search",
        description: "Senior and C-suite positions across IT and Non-IT domains.",
      },
      {
        icon: TrendingUp,
        title: "Campus Hiring",
        description: "Fresh talent acquisition from colleges and universities.",
      },
    ],
    process: [
      "Job Analysis",
      "Profile Matching",
      "Technical Assessment",
      "Interview Coordination",
      "Offer & Onboarding",
    ],
  },
  {
    id: "hr-services",
    title: "HR Services",
    description: "Comprehensive HR solutions to streamline your human resource operations and enhance employee experience.",
    icon: Briefcase,
    color: "bg-emerald-500/10 text-emerald-600",
    features: [
      {
        icon: Settings,
        title: "HR Policy Development",
        description: "Create comprehensive policies aligned with your culture and compliance.",
      },
      {
        icon: TrendingUp,
        title: "Performance Management",
        description: "Design and implement effective performance appraisal systems.",
      },
      {
        icon: Building,
        title: "Employee Relations",
        description: "Manage employee grievances and build positive workplace culture.",
      },
      {
        icon: Users,
        title: "HR Audit",
        description: "Comprehensive review of HR practices and compliance status.",
      },
    ],
    process: [
      "HR Assessment",
      "Gap Analysis",
      "Strategy Development",
      "Implementation",
      "Continuous Support",
    ],
  },
  {
    id: "vendor",
    title: "Vendor Management Services",
    description: "Efficient vendor management to optimize your contractor and supplier relationships.",
    icon: Handshake,
    color: "bg-orange-500/10 text-orange-600",
    features: [
      {
        icon: Layers,
        title: "Vendor Onboarding",
        description: "Streamlined process for vendor registration and qualification.",
      },
      {
        icon: FileText,
        title: "Contract Management",
        description: "End-to-end management of vendor contracts and agreements.",
      },
      {
        icon: TrendingUp,
        title: "Performance Tracking",
        description: "Monitor and evaluate vendor performance metrics.",
      },
      {
        icon: Scale,
        title: "Compliance Management",
        description: "Ensure vendor compliance with company policies and regulations.",
      },
    ],
    process: [
      "Vendor Assessment",
      "Onboarding",
      "Contract Negotiation",
      "Performance Review",
      "Relationship Management",
    ],
  },
  {
    id: "training",
    title: "Training & Personality Development",
    description: "Build a capable workforce with our comprehensive training and personality development programs.",
    icon: GraduationCap,
    color: "bg-pink-500/10 text-pink-600",
    features: [
      {
        icon: GraduationCap,
        title: "Soft Skills Training",
        description: "Communication, leadership, and interpersonal skills development.",
      },
      {
        icon: TrendingUp,
        title: "Technical Training",
        description: "Job-specific skill enhancement and certification programs.",
      },
      {
        icon: Users,
        title: "Team Building",
        description: "Activities and workshops to strengthen team dynamics.",
      },
      {
        icon: UserCheck,
        title: "Interview Preparation",
        description: "Grooming candidates for successful interview performance.",
      },
    ],
    process: [
      "Training Needs Assessment",
      "Program Design",
      "Training Delivery",
      "Skill Evaluation",
      "Follow-up Support",
    ],
  },
  {
    id: "payroll",
    title: "Payroll Management Services",
    description: "Accurate and timely payroll processing with complete statutory compliance management.",
    icon: Shield,
    color: "bg-amber-500/10 text-amber-600",
    features: [
      {
        icon: CalcIcon,
        title: "Payroll Processing",
        description: "Accurate salary computation and timely disbursement.",
      },
      {
        icon: Scale,
        title: "Statutory Compliance",
        description: "PF, ESI, PT, and other statutory compliances managed end-to-end.",
      },
      {
        icon: FileText,
        title: "Tax Management",
        description: "TDS computation, filing, and employee tax documentation.",
      },
      {
        icon: Settings,
        title: "Reporting & Analytics",
        description: "Comprehensive payroll reports and workforce analytics.",
      },
    ],
    process: [
      "Data Collection",
      "Salary Computation",
      "Compliance Filing",
      "Disbursement",
      "Report Generation",
    ],
  },
]

const industries = [
  "Information Technology",
  "Manufacturing",
  "Healthcare",
  "Banking & Finance",
  "Retail & E-commerce",
  "Pharmaceuticals",
  "Education",
  "Hospitality",
  "Telecom",
  "FMCG",
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background py-12 lg:py-16">
        <div className="absolute top-0 left-1/2 w-[1000px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-none" />
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center animate-in fade-in zoom-in duration-1000">
            <div className="inline-flex items-center rounded-full border bg-background/50 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-primary mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Our Services
            </div>
            <h1 className="text-balance text-5xl font-extrabold tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Comprehensive HR Solutions for Every Business
            </h1>
            <p className="mt-6 text-pretty text-lg text-muted-foreground md:text-xl leading-relaxed">
              From contract staffing to payroll management, we offer end-to-end HR services designed to help your business thrive in a dynamic market landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="py-8 lg:py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.id} className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 bg-gradient-to-b from-background to-secondary/10">
                <CardHeader className="relative z-10">
                  <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-md ${service.color}`}>
                    <service.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed mt-2 font-medium">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 pt-4 border-t border-border/50 mt-2">
                  <Link
                    href={`#${service.id}-detail`}
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

      {/* Services Detail */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={`${service.id}-detail`}
          className={index % 2 === 0 ? "py-8 lg:py-10" : "bg-secondary/30 py-8 lg:py-10"}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              {/* Service Info */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${service.color}`}>
                  <service.icon className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">{service.description}</p>

                {/* Features */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <Card key={feature.title} className="border-none bg-card/50 shadow-sm">
                      <CardContent className="p-4">
                        <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg ${service.color}`}>
                          <feature.icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-semibold text-foreground">{feature.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-xl">Our Process</CardTitle>
                    <CardDescription>
                      How we deliver {service.title.toLowerCase()} services
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ol className="relative space-y-4 border-l-2 border-primary/20 pl-6">
                      {service.process.map((step, stepIndex) => (
                        <li key={step} className="relative">
                          <div className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                            {stepIndex + 1}
                          </div>
                          <p className="font-medium text-foreground">{step}</p>
                        </li>
                      ))}
                    </ol>
                    <div className="mt-6">
                      <Button asChild className="w-full">
                        <Link href="/contact">
                          Inquire About {service.title}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Industries */}
      <section className="py-8 lg:py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Industries We Serve
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our expertise spans across multiple sectors, enabling us to understand your unique challenges.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="group flex items-center gap-2 rounded-full bg-secondary/80 px-5 py-3 shadow-sm hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default border border-transparent hover:border-primary/50"
              >
                <CheckCircle className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                <span className="text-sm font-bold">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Calculator */}
      <section id="calculator" className="bg-secondary/30 py-8 lg:py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Estimate Your HR Investment
            </h2>
            <p className="mt-4 text-muted-foreground">
              Use our interactive calculator to get an instant estimate for your HR service needs.
            </p>
          </div>
          <ServiceCalculator />
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
                  Need a Custom Solution?
                </h2>
                <p className="mt-6 text-lg text-primary-foreground/90 md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                  Every business is unique. Let us design a tailored HR package that perfectly fits your requirements and budget.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" variant="secondary" className="h-14 px-8 text-base font-bold shadow-xl hover:scale-105 transition-transform" asChild>
                    <Link href="/contact">Schedule a Consultation</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 text-base font-bold border-2 border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all hover:scale-105 shadow-lg"
                    asChild
                  >
                    <Link href="tel:+919120335555">Call +91 91203 35555</Link>
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
