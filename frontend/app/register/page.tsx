import { JobSeekerRegistrationForm } from "@/components/job-seeker-registration-form"
import { ArrowRight, CheckCircle, FileText } from "lucide-react"

export const metadata = {
  title: "Job Seeker Registration | ACS HR Services",
  description: "Register as a job seeker with ACS HR Services and explore exciting career opportunities. Get matched with suitable positions based on your skills and preferences.",
}

export default function RegistrationPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background py-12 lg:py-16 border-b border-border/40">
        <div className="absolute top-0 left-1/2 w-[1000px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-none" />
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="space-y-4 animate-in fade-in zoom-in duration-1000 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/50 backdrop-blur-sm px-4 py-1.5 shadow-sm mx-auto">
              <FileText className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Job Seeker Registration</span>
            </div>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Register with ACS HR Services
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed mx-auto">
              Join thousands of job seekers who have found their dream career through ACS HR Services. Complete your registration and let us help you turn your career dreams into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <JobSeekerRegistrationForm />
            </div>

            {/* Sidebar Benefits */}
            <div className="space-y-6">
              <div className="rounded-2xl bg-gradient-to-br from-background to-secondary/20 p-8 shadow-lg hover:shadow-xl transition-shadow border-0">
                <h3 className="text-xl font-bold text-foreground mb-6">Why Register with Us?</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-muted-foreground">Access exclusive job opportunities</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-muted-foreground">Personalized job matching based on your skills</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-muted-foreground">Expert career guidance and mentoring</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-muted-foreground">Personality development training</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-muted-foreground">Direct placement with leading companies</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-background to-secondary/20 p-8 shadow-lg hover:shadow-xl transition-shadow border-0">
                <h4 className="text-xl font-bold text-foreground mb-6">Quick Reference</h4>
                <div className="space-y-5 text-sm text-muted-foreground">
                  <div className="relative bg-background rounded-xl p-5 border border-primary/20 shadow-sm hover:border-primary/50 transition-colors">
                    <span className="font-medium text-foreground block mb-1">Registration Fee:</span>
                    <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">₹1000</p>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Processing Time:</span>
                    <p className="mt-1 font-medium">24-48 hours</p>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Documents Needed:</span>
                    <p className="mt-1 font-medium leading-relaxed">Resume, Photo, ID Proof, Educational Certificates</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 p-8 shadow-lg hover:shadow-xl transition-shadow border border-primary/10">
                <h4 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-primary" />
                  Next Steps
                </h4>
                <ol className="space-y-3 text-sm font-medium text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span> Complete the registration form</li>
                  <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span> Receive your registration number via email</li>
                  <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span> Attend interview at our office</li>
                  <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span> Get matched with suitable jobs</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 lg:py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground shadow-2xl relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
            <div className="relative z-10 px-6 py-16 md:px-12 md:py-20 text-center">
              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl mb-4 drop-shadow-sm">Questions?</h2>
              <p className="text-lg md:text-xl font-medium text-primary-foreground/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                Contact our team for any assistance with your registration
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
                <a
                  href="tel:+919120335555"
                  className="inline-flex h-14 items-center justify-center px-8 rounded-lg bg-secondary text-primary hover:bg-secondary/90 shadow-xl transition-all hover:scale-105 font-bold"
                >
                  Call: +91 91203 35555
                </a>
                <a
                  href="https://wa.me/919711189713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center px-8 rounded-lg border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg transition-all hover:scale-105 font-bold"
                >
                  WhatsApp: +91 97111 89713
                </a>
                <a
                  href="mailto:amitacs2023@gmail.com"
                  className="inline-flex h-14 items-center justify-center px-8 rounded-lg border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg transition-all hover:scale-105 font-bold"
                >
                  Email: amitacs2023@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
