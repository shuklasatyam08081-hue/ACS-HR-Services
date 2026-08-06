"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Loader2, Plus, Pencil, Trash2, CheckCircle2, XCircle } from "lucide-react"

const JOB_TYPES = ["Full-time", "Part-time", "Contract", "Internship"]
const DEPARTMENTS = ["Human Resources", "Recruitment", "Payroll", "Compliance", "Learning & Development"]
const LOCATIONS = ["Mumbai, Maharashtra", "Delhi NCR", "Bangalore, Karnataka", "Pune, Maharashtra", "Hyderabad, Telangana", "Remote"]

export default function AdminJobsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState("")
  
  // Forgot / Reset Password state
  const [authMode, setAuthMode] = useState<"login" | "forgot" | "reset">("login")
  const [otp, setOtp] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [forgotMessage, setForgotMessage] = useState("")
  const [forgotError, setForgotError] = useState("")
  const [authLoading, setAuthLoading] = useState(false)
  
  const [jobs, setJobs] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)
  const [view, setView] = useState<"list" | "form">("list")
  const [editingJobId, setEditingJobId] = useState<string | null>(null)

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    department: "",
    experience: "",
    salary: "",
    description: "",
    requirements: "",
    responsibilities: "",
  })

  useEffect(() => {
    if (isAuthenticated) {
      fetchJobs()
    }
  }, [isAuthenticated])

  const fetchJobs = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/jobs")
      const data = await res.json()
      setJobs(data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError("")
    setAuthLoading(true)
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      })
      const data = await res.json()
      if (res.ok) {
        setIsAuthenticated(true)
      } else {
        setLoginError(data.message || "Invalid password")
      }
    } catch (err) {
      setLoginError("Failed to connect to backend server")
    } finally {
      setAuthLoading(false)
    }
  }

  const handleRequestOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setForgotError("")
    setForgotMessage("")
    setAuthLoading(true)
    try {
      const res = await fetch("/api/admin/forgot-password", {
        method: "POST",
      })
      const data = await res.json()
      if (res.ok) {
        setForgotMessage(data.message || "OTP has been sent to your email.")
        setAuthMode("reset")
      } else {
        setForgotError(data.message || "Failed to request OTP")
      }
    } catch (err) {
      setForgotError("Failed to connect to backend server")
    } finally {
      setAuthLoading(false)
    }
  }

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setForgotError("")
    setForgotMessage("")
    setAuthLoading(true)
    try {
      const res = await fetch("/api/admin/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp, newPassword }),
      })
      const data = await res.json()
      if (res.ok) {
        setForgotMessage("Password updated successfully! You can login now.")
        setAuthMode("login")
        setPassword("")
        setOtp("")
        setNewPassword("")
      } else {
        setForgotError(data.message || "Failed to reset password")
      }
    } catch (err) {
      setForgotError("Failed to connect to backend server")
    } finally {
      setAuthLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this job?")) return
    try {
      await fetch(`/api/jobs/${id}`, { method: "DELETE" })
      fetchJobs()
    } catch (err) {
      console.error(err)
    }
  }

  const handleEdit = (job: any) => {
    setFormData({
      title: job.title,
      company: job.company,
      location: job.location,
      type: job.type,
      department: job.department,
      experience: job.experience,
      salary: job.salary,
      description: job.description,
      requirements: job.requirements.join("\n"),
      responsibilities: job.responsibilities.join("\n"),
    })
    setEditingJobId(job.id)
    setView("form")
  }

  const handleAddNew = () => {
    setFormData({
      title: "",
      company: "",
      location: "",
      type: "",
      department: "",
      experience: "",
      salary: "",
      description: "",
      requirements: "",
      responsibilities: "",
    })
    setEditingJobId(null)
    setView("form")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitStatus(null)
    const payload = {
      ...formData,
      requirements: formData.requirements.split("\n").filter(r => r.trim() !== ""),
      responsibilities: formData.responsibilities.split("\n").filter(r => r.trim() !== ""),
    }

    try {
      let res
      if (editingJobId) {
        res = await fetch(`/api/jobs/${editingJobId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      } else {
        res = await fetch(`/api/jobs`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      }
      if (!res.ok) {
        const errData = await res.json()
        throw new Error(errData.message || "Server error")
      }
      setSubmitStatus("success")
      setTimeout(() => {
        setView("list")
        fetchJobs()
        setSubmitStatus(null)
      }, 1500)
    } catch (err: any) {
      console.error(err)
      setSubmitStatus("error")
    } finally {
      setSubmitting(false)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="flex h-screen items-center justify-center bg-secondary/30">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">
              {authMode === "login" && "Admin Login"}
              {authMode === "forgot" && "Reset Password"}
              {authMode === "reset" && "Verify OTP & Reset"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {authMode === "login" && (
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label>Password</Label>
                  <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                {loginError && (
                  <p className="text-sm font-medium text-destructive">{loginError}</p>
                )}
                {forgotMessage && (
                  <p className="text-sm font-medium text-green-600">{forgotMessage}</p>
                )}
                <Button type="submit" className="w-full" disabled={authLoading}>
                  {authLoading ? "Logging in..." : "Login"}
                </Button>
                <div className="text-center mt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setAuthMode("forgot");
                      setLoginError("");
                      setForgotMessage("");
                    }}
                    className="text-xs text-primary hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>
              </form>
            )}

            {authMode === "forgot" && (
              <form onSubmit={handleRequestOtp} className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  An OTP will be sent to the configured admin email address.
                </p>
                {forgotError && (
                  <p className="text-sm font-medium text-destructive">{forgotError}</p>
                )}
                <Button type="submit" className="w-full" disabled={authLoading}>
                  {authLoading ? "Sending OTP..." : "Request Reset OTP"}
                </Button>
                <div className="text-center mt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setAuthMode("login");
                      setForgotError("");
                    }}
                    className="text-xs text-muted-foreground hover:underline"
                  >
                    Back to Login
                  </button>
                </div>
              </form>
            )}

            {authMode === "reset" && (
              <form onSubmit={handleResetPassword} className="space-y-4">
                {forgotMessage && (
                  <p className="text-sm font-medium text-green-600">{forgotMessage}</p>
                )}
                <div className="space-y-2">
                  <Label>6-Digit OTP</Label>
                  <Input 
                    type="text" 
                    placeholder="123456" 
                    value={otp} 
                    onChange={(e) => setOtp(e.target.value)} 
                    maxLength={6} 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label>New Password</Label>
                  <Input 
                    type="password" 
                    value={newPassword} 
                    onChange={(e) => setNewPassword(e.target.value)} 
                    required 
                  />
                </div>
                {forgotError && (
                  <p className="text-sm font-medium text-destructive">{forgotError}</p>
                )}
                <Button type="submit" className="w-full" disabled={authLoading}>
                  {authLoading ? "Resetting..." : "Reset Password"}
                </Button>
                <div className="text-center mt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setAuthMode("login");
                      setForgotError("");
                      setForgotMessage("");
                    }}
                    className="text-xs text-muted-foreground hover:underline"
                  >
                    Cancel & Back
                  </button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Manage Job Listings</h1>
        {view === "list" && (
          <Button onClick={handleAddNew}>
            <Plus className="mr-2 h-4 w-4" /> Add New Job
          </Button>
        )}
        {view === "form" && (
          <Button variant="outline" onClick={() => setView("list")}>
            Back to List
          </Button>
        )}
      </div>

      {view === "list" && (
        <div className="grid gap-4">
          {loading ? (
            <div className="flex justify-center py-12"><Loader2 className="h-8 w-8 animate-spin" /></div>
          ) : jobs.length === 0 ? (
            <p className="text-center text-muted-foreground">No jobs found. Create one!</p>
          ) : (
            jobs.map(job => (
              <Card key={job.id}>
                <CardContent className="flex items-center justify-between p-6">
                  <div>
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <p className="text-sm text-muted-foreground">{job.company} • {job.location}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(job)}>
                      <Pencil className="h-4 w-4 mr-2" /> Edit
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(job.id)}>
                      <Trash2 className="h-4 w-4 mr-2" /> Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      )}

      {view === "form" && (
        <Card>
          <CardHeader>
            <CardTitle>{editingJobId ? "Edit Job" : "Create New Job"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Job Title</Label>
                  <Input value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
                </div>
                <div className="space-y-2">
                  <Label>Company</Label>
                  <Input value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} required />
                </div>
                <div className="space-y-2">
                  <Label>Location</Label>
                  <Select value={formData.location} onValueChange={v => setFormData({...formData, location: v})} required>
                    <SelectTrigger><SelectValue placeholder="Select location" /></SelectTrigger>
                    <SelectContent>
                      {LOCATIONS.map(l => <SelectItem key={l} value={l}>{l}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Job Type</Label>
                  <Select value={formData.type} onValueChange={v => setFormData({...formData, type: v})} required>
                    <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                    <SelectContent>
                      {JOB_TYPES.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Department</Label>
                  <Select value={formData.department} onValueChange={v => setFormData({...formData, department: v})} required>
                    <SelectTrigger><SelectValue placeholder="Select department" /></SelectTrigger>
                    <SelectContent>
                      {DEPARTMENTS.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Experience Required</Label>
                  <Input value={formData.experience} onChange={e => setFormData({...formData, experience: e.target.value})} required />
                </div>
                <div className="space-y-2">
                  <Label>Salary</Label>
                  <Input value={formData.salary} onChange={e => setFormData({...formData, salary: e.target.value})} required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} required />
              </div>

              <div className="space-y-2">
                <Label>Requirements (One per line)</Label>
                <Textarea rows={5} value={formData.requirements} onChange={e => setFormData({...formData, requirements: e.target.value})} required />
              </div>

              <div className="space-y-2">
                <Label>Responsibilities (One per line)</Label>
                <Textarea rows={5} value={formData.responsibilities} onChange={e => setFormData({...formData, responsibilities: e.target.value})} required />
              </div>

              {submitStatus === "success" && (
                <div className="flex items-center gap-2 rounded-md bg-green-50 border border-green-200 p-3 text-green-700">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Job {editingJobId ? "updated" : "saved"} successfully!</span>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="flex items-center gap-2 rounded-md bg-red-50 border border-red-200 p-3 text-red-700">
                  <XCircle className="h-4 w-4" />
                  <span>Failed to save job. Check console for details.</span>
                </div>
              )}
              <Button type="submit" className="w-full" disabled={submitting}>
                {submitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...</> : (editingJobId ? "Update Job" : "Save Job")}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
