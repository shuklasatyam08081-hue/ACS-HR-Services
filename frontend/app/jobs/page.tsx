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

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/jobs")
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
  }, [searchQuery, selectedDepartment, selectedType, selectedLocation])

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

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">
              Career Opportunities
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Find Your Next Opportunity
            </h1>
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
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
      <section className="py-12 lg:py-16">
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
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <Card className="border-dashed">
              <CardContent className="flex flex-col items-center justify-center py-16">
                <Briefcase className="mb-4 h-12 w-12 text-muted-foreground" />
                <h3 className="text-lg font-semibold text-foreground">No jobs found</h3>
                <p className="mt-2 text-center text-muted-foreground">
                  Try adjusting your search or filter criteria.
                </p>
                <Button variant="outline" onClick={clearFilters} className="mt-4">
                  Clear All Filters
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary/30 py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Looking to Hire?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Partner with us to find the best talent for your organization. Our recruitment experts are here to help.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/admin/jobs">Post a Job Opening</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services#recruitment">Learn About Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
