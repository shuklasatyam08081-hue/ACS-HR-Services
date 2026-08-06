"use client"

import { useState, useMemo, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { JobCard, Job } from "@/components/job-card"
import { Search, Briefcase, X, Loader2 } from "lucide-react"
import Link from "next/link"
const departments = ["All Departments", "Human Resources", "Recruitment", "Payroll", "Compliance", "Learning & Development"]
const jobTypes = ["All Types", "Full-time", "Part-time", "Contract", "Internship"]
const locations = ["All Locations", "Mumbai, Maharashtra", "Delhi NCR", "Bangalore, Karnataka", "Pune, Maharashtra", "Hyderabad, Telangana", "Remote"]

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments")
  const [selectedType, setSelectedType] = useState("All Types")
  const [selectedLocation, setSelectedLocation] = useState("All Locations")
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [expandedJobs, setExpandedJobs] = useState<Set<string>>(new Set())

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/jobs")
        if (response.ok) {
          const data = await response.json()
          setJobs(data)
        }
      } catch (error) {
        console.error("Failed to fetch jobs:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchJobs()
  }, [])

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        searchQuery === "" ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesDepartment =
        selectedDepartment === "All Departments" || job.department === selectedDepartment

      const matchesType = selectedType === "All Types" || job.type === selectedType

      const matchesLocation =
        selectedLocation === "All Locations" || job.location === selectedLocation

      return matchesSearch && matchesDepartment && matchesType && matchesLocation
    })
  }, [jobs, searchQuery, selectedDepartment, selectedType, selectedLocation])

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedDepartment("All Departments")
    setSelectedType("All Types")
    setSelectedLocation("All Locations")
  }

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedDepartment !== "All Departments" ||
    selectedType !== "All Types" ||
    selectedLocation !== "All Locations"

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && filteredJobs.length > 0) {
      const newExpanded = new Set(expandedJobs)
      filteredJobs.forEach(job => newExpanded.add(job.id))
      setExpandedJobs(newExpanded)
      
      // Scroll to the first matched job after a short delay
      setTimeout(() => {
        const firstJobElement = document.getElementById(`job-${filteredJobs[0].id}`)
        if (firstJobElement) {
          firstJobElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }

  const toggleJob = (id: string) => {
    setExpandedJobs((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background py-12 lg:py-16">
        <div className="absolute top-0 left-1/2 w-[1000px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-none" />
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center animate-in fade-in zoom-in duration-1000">
            <div className="inline-flex items-center rounded-full border bg-background/50 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-primary mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Career Opportunities
            </div>
            <h1 className="text-balance text-5xl font-extrabold tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Find Your Next Opportunity
            </h1>
            <p className="mt-6 text-pretty text-lg text-muted-foreground md:text-xl leading-relaxed">
              Browse current job openings from our clients across various industries and locations.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b bg-card py-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search jobs, companies, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="pl-10"
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="flex flex-wrap gap-3">
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  {jobTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((loc) => (
                    <SelectItem key={loc} value={loc}>
                      {loc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {hasActiveFilters && (
                <Button variant="ghost" size="icon" onClick={clearFilters}>
                  <X className="h-4 w-4" />
                  <span className="sr-only">Clear filters</span>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-8 lg:py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredJobs.length}</span>{" "}
              {filteredJobs.length === 1 ? "job" : "jobs"}
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : filteredJobs.length > 0 ? (
            <div className="grid gap-6">
              {filteredJobs.map((job) => (
                <div key={job.id} id={`job-${job.id}`} className="scroll-mt-24">
                  <JobCard 
                    job={job} 
                    isExpanded={expandedJobs.has(job.id)} 
                    onToggle={() => toggleJob(job.id)} 
                  />
                </div>
              ))}
            </div>
          ) : (
            <Card className="border-2 border-dashed border-primary/20 bg-gradient-to-br from-background to-secondary/20 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex flex-col items-center justify-center py-20">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-6">
                  <Briefcase className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {searchQuery ? "No postings available for this job right now" : "No jobs found"}
                </h3>
                <p className="mt-3 text-center text-lg text-muted-foreground max-w-md">
                  {searchQuery 
                    ? `We couldn't find any job postings matching "${searchQuery}". Try adjusting your search or filter criteria.`
                    : "Try adjusting your search or filter criteria."}
                </p>
                <Button variant="outline" onClick={clearFilters} className="mt-6 border-primary/20 hover:bg-primary/5">
                  Clear All Filters
                </Button>
              </CardContent>
            </Card>
          )}
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
                  Looking to Hire?
                </h2>
                <p className="mt-6 text-lg text-primary-foreground/90 md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                  Partner with us to find the best talent for your organization. Our recruitment experts are here to help.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" variant="secondary" className="h-14 px-8 text-base font-bold shadow-xl hover:scale-105 transition-transform" asChild>
                    <Link href="/contact">Contact Us to Hire</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 text-base font-bold border-2 border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all hover:scale-105 shadow-lg"
                    asChild
                  >
                    <Link href="/services#recruitment">Learn About Our Services</Link>
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
