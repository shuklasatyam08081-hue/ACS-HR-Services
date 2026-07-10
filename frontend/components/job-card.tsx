"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MapPin, Clock, Building2, Briefcase, ChevronDown, ChevronUp, IndianRupee } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export interface Job {
  id: string
  title: string
  company: string
  location: string
  type: "Full-time" | "Part-time" | "Contract" | "Internship"
  department: string
  experience: string
  salary: string
  description: string
  requirements: string[]
  responsibilities: string[]
  postedDate: string
}

interface JobCardProps {
  job: Job
}

export function JobCard({ job }: JobCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const typeColors: Record<string, string> = {
    "Full-time": "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20",
    "Part-time": "bg-blue-500/10 text-blue-600 hover:bg-blue-500/20",
    "Contract": "bg-amber-500/10 text-amber-600 hover:bg-amber-500/20",
    "Internship": "bg-purple-500/10 text-purple-600 hover:bg-purple-500/20",
  }

  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <CardTitle className="text-xl">{job.title}</CardTitle>
            <CardDescription className="mt-1 flex items-center gap-1">
              <Building2 className="h-4 w-4" />
              {job.company}
            </CardDescription>
          </div>
          <Badge variant="secondary" className={typeColors[job.type]}>
            {job.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {job.location}
          </span>
          <span className="flex items-center gap-1">
            <Briefcase className="h-4 w-4" />
            {job.experience}
          </span>
          <span className="flex items-center gap-1">
            <IndianRupee className="h-4 w-4" />
            {job.salary}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {job.postedDate}
          </span>
        </div>

        <p className="mt-4 text-sm text-muted-foreground line-clamp-2">{job.description}</p>

        {/* Expandable Details */}
        <div className={cn("overflow-hidden transition-all", isExpanded ? "mt-4" : "h-0")}>
          <div className="space-y-4 border-t pt-4">
            <div>
              <h4 className="font-semibold text-foreground">Requirements</h4>
              <ul className="mt-2 space-y-1">
                {job.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Responsibilities</h4>
              <ul className="mt-2 space-y-1">
                {job.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Apply Now</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Apply for {job.title}</DialogTitle>
                <DialogDescription>
                  To apply for this position at {job.company}, please send your resume and cover letter to our recruitment team.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <p className="text-sm text-muted-foreground">
                  Send your application to:
                </p>
                <a
                  href="mailto:careers@anshumanhr.com"
                  className="block rounded-lg bg-secondary p-4 text-center font-medium text-primary hover:bg-secondary/80"
                >
                  careers@anshumanhr.com
                </a>
                <p className="text-sm text-muted-foreground">
                  Please mention the job title &quot;{job.title}&quot; in your email subject line.
                </p>
                <div className="flex gap-3">
                  <Button asChild className="flex-1">
                    <a href={`mailto:careers@anshumanhr.com?subject=Application for ${job.title}`}>
                      Send Email
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-muted-foreground"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="ml-1 h-4 w-4" />
              </>
            ) : (
              <>
                View Details <ChevronDown className="ml-1 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
