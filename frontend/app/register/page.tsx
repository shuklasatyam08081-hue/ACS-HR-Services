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
      <section className="border-b border-border/40 bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Job Seeker Registration</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Register with ACS HR Services
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Join thousands of job seekers who have found their dream career through ACS HR Services. Complete your registration and let us help you turn your career dreams into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <JobSeekerRegistrationForm />
            </div>

            {/* Sidebar Benefits */}
            <div className="space-y-6">
              <div className="rounded-lg bg-primary/5 p-6 border border-primary/20">
                <h3 className="font-semibold text-foreground mb-4">Why Register with Us?</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Access exclusive job opportunities</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Personalized job matching based on your skills</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Expert career guidance and mentoring</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Personality development training</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Direct placement with leading companies</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-secondary/50 p-6 border border-border">
                <h4 className="font-semibold text-foreground mb-4">Quick Reference</h4>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="relative bg-white rounded-xl p-4 border-4 border-accent">
                    <span className="font-medium text-foreground block mb-1">Registration Fee:</span>
                    <p className="text-2xl font-bold text-foreground">₹1000</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Processing Time:</span>
                    <p>24-48 hours</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Documents Needed:</span>
                    <p className="mt-1">Resume, Photo, ID Proof, Educational Certificates</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-accent/10 p-6 border border-accent/20">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" />
                  Next Steps
                </h4>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li>1. Complete the registration form</li>
                  <li>2. Receive your registration number via email</li>
                  <li>3. Attend interview at our office</li>
                  <li>4. Get matched with suitable jobs</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/40 bg-primary/5 py-12">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">Questions?</h2>
          <p className="text-muted-foreground mb-6">
            Contact our team for any assistance with your registration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a
              href="tel:+919120335555"
              className="inline-flex items-center justify-center px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
            >
              Call: +91 91203 35555
            </a>
            <a
              href="https://wa.me/919711189713"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors font-medium"
            >
              WhatsApp: +91 97111 89713
            </a>
            <a
              href="mailto:amitacs2023@gmail.com"
              className="inline-flex items-center justify-center px-6 py-2 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors font-medium"
            >
              Email: amitacs2023@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
