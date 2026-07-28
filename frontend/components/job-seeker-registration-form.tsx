"use client"

import { useState, useRef } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Loader2, FileText, Upload, X } from "lucide-react"

const registrationSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  fatherName: z.string().min(2, "Father's name is required"),
  gender: z.enum(["male", "female"], { errorMap: () => ({ message: "Please select gender" }) }),
  maritalStatus: z.enum(["married", "unmarried"], { errorMap: () => ({ message: "Please select marital status" }) }),
  mobileNumber: z.string().min(10, "Please enter a valid mobile number"),
  landlineNumber: z.string().optional(),
  permanentAddress: z.string().min(10, "Permanent address is required"),
  currentAddress: z.string().min(10, "Current address is required"),
  email: z.string().email("Please enter a valid email address"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  languages: z.string().min(1, "Please mention languages"),
  experienceType: z.enum(["current", "previous", "fresher"], { errorMap: () => ({ message: "Please select experience type" }) }),
  companyName: z.string().optional(),
  designation: z.string().optional(),
  currentSalary: z.string().optional(),
  expectedSalary: z.string().optional(),
  noticePeriod: z.string().optional(),
  education: z.string().min(1, "Education details are required"),
  jobPreference: z.string().min(1, "Please specify job preference"),
  termsAccepted: z.boolean().refine(val => val === true, { message: "You must accept the terms and conditions" }),
  transactionId: z.string().regex(/^\d{12}$/, "Please enter a valid 12-digit UTR number"),
})

type RegistrationFormData = z.infer<typeof registrationSchema>

export function JobSeekerRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [sameAsPermament, setSameAsPermanent] = useState(false)
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [resumeError, setResumeError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    getValues,
    formState: { errors },
    reset,
    trigger,
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    mode: "onChange",
  })

  const experienceType = watch("experienceType")
  const permanentAddress = watch("permanentAddress")

  // Handle "Same as Permanent Address" checkbox
  const handleSameAddress = (checked: boolean) => {
    setSameAsPermanent(checked)
    if (checked) {
      const pAddr = getValues("permanentAddress")
      setValue("currentAddress", pAddr, { shouldValidate: true })
    }
  }

  // Keep current address in sync when permanent changes and checkbox is on
  const handlePermanentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (sameAsPermament) {
      setValue("currentAddress", e.target.value, { shouldValidate: true })
    }
  }

  // Handle resume file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setResumeError(null)
    if (!file) return

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]
    if (!allowedTypes.includes(file.type)) {
      setResumeError("Only PDF, DOC, or DOCX files are allowed.")
      return
    }
    if (file.size > 5 * 1024 * 1024) {
      setResumeError("File size must be less than 5MB.")
      return
    }
    setResumeFile(file)
  }

  const handleNext = async () => {
    let fieldsToValidate: any[] = [];
    if (currentStep === 1) fieldsToValidate = ['fullName', 'fatherName', 'gender', 'maritalStatus', 'mobileNumber', 'email', 'dateOfBirth', 'permanentAddress', 'currentAddress', 'languages'];
    if (currentStep === 2) fieldsToValidate = ['experienceType', 'expectedSalary'];
    if (currentStep === 3) fieldsToValidate = ['education', 'jobPreference', 'termsAccepted'];
    
    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) setCurrentStep(currentStep + 1);
  }

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)
    
    try {
      // Use FormData to support file upload
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, String(value))
      })
      if (resumeFile) {
        formData.append("resume", resumeFile)
      }

      const response = await fetch("http://localhost:5001/api/register", {
        method: "POST",
        body: formData,
        // Don't set Content-Type — browser sets it with boundary for FormData
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(result.message || "Failed to register. Please try again.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setSubmitError("Failed to connect to the server. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <Card className="border-2 border-primary/20">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">Registration Successful!</h3>
          <p className="mt-2 text-center text-muted-foreground">
            Thank you for registering with ACS HR Services. Our team will contact you shortly with suitable job opportunities. Your registration number will be shared via email.
          </p>
          <p className="mt-4 text-center text-sm text-muted-foreground font-medium">
            Registration Fee: ₹1000 (if not already paid)
          </p>
          <Button
            onClick={() => {
              setIsSubmitted(false)
              reset()
              setCurrentStep(1)
              setResumeFile(null)
              setSameAsPermanent(false)
            }}
            className="mt-6"
          >
            Register Another Candidate
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="w-full max-w-4xl">
      <Card className="border-2">
        <CardHeader>
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            <div>
              <CardTitle>Job Seeker Registration</CardTitle>
              <CardDescription>
                Step {currentStep} of 4 - Complete all fields and pay the registration fee
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Step 1: Personal Information */}
            {currentStep >= 1 && (
              <div className="space-y-6 pb-6 border-b last:border-b-0">
                <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Candidate Full Name *</Label>
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      {...register("fullName")}
                      className={errors.fullName ? "border-destructive" : ""}
                    />
                    {errors.fullName && (
                      <p className="text-sm text-destructive">{errors.fullName.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fatherName">Father's Name *</Label>
                    <Input
                      id="fatherName"
                      placeholder="Father's Full Name"
                      {...register("fatherName")}
                      className={errors.fatherName ? "border-destructive" : ""}
                    />
                    {errors.fatherName && (
                      <p className="text-sm text-destructive">{errors.fatherName.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-3">
                    <Label>Gender *</Label>
                    <Controller
                      name="gender"
                      control={control}
                      render={({ field }) => (
                        <RadioGroup value={field.value} onValueChange={field.onChange} className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2">
                          <Label htmlFor="male" className="flex items-center space-x-3 cursor-pointer p-2 -ml-2 rounded-md hover:bg-secondary/50 active:bg-secondary/80">
                            <RadioGroupItem value="male" id="male" />
                            <span className="font-normal text-base">Male</span>
                          </Label>
                          <Label htmlFor="female" className="flex items-center space-x-3 cursor-pointer p-2 -ml-2 rounded-md hover:bg-secondary/50 active:bg-secondary/80">
                            <RadioGroupItem value="female" id="female" />
                            <span className="font-normal text-base">Female</span>
                          </Label>
                        </RadioGroup>
                      )}
                    />
                    {errors.gender && (
                      <p className="text-sm text-destructive">{errors.gender.message}</p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Label>Marital Status *</Label>
                    <Controller
                      name="maritalStatus"
                      control={control}
                      render={({ field }) => (
                        <RadioGroup value={field.value} onValueChange={field.onChange} className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2">
                          <Label htmlFor="married" className="flex items-center space-x-3 cursor-pointer p-2 -ml-2 rounded-md hover:bg-secondary/50 active:bg-secondary/80">
                            <RadioGroupItem value="married" id="married" />
                            <span className="font-normal text-base">Married</span>
                          </Label>
                          <Label htmlFor="unmarried" className="flex items-center space-x-3 cursor-pointer p-2 -ml-2 rounded-md hover:bg-secondary/50 active:bg-secondary/80">
                            <RadioGroupItem value="unmarried" id="unmarried" />
                            <span className="font-normal text-base">Unmarried</span>
                          </Label>
                        </RadioGroup>
                      )}
                    />
                    {errors.maritalStatus && (
                      <p className="text-sm text-destructive">{errors.maritalStatus.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="mobileNumber">Mobile Number *</Label>
                    <Input
                      id="mobileNumber"
                      type="tel"
                      placeholder="+91 98765 43210"
                      {...register("mobileNumber")}
                      className={errors.mobileNumber ? "border-destructive" : ""}
                    />
                    {errors.mobileNumber && (
                      <p className="text-sm text-destructive">{errors.mobileNumber.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="landlineNumber">Home Landline/Mobile Number</Label>
                    <Input
                      id="landlineNumber"
                      type="tel"
                      placeholder="+91 522 XXXX XXXX"
                      {...register("landlineNumber")}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email ID (In Capital Letter) *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="JOHNDOE@EMAIL.COM"
                      {...register("email")}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      {...register("dateOfBirth")}
                      className={errors.dateOfBirth ? "border-destructive" : ""}
                    />
                    {errors.dateOfBirth && (
                      <p className="text-sm text-destructive">{errors.dateOfBirth.message}</p>
                    )}
                  </div>
                </div>

                {/* Permanent Address */}
                <div className="space-y-2">
                  <Label htmlFor="permanentAddress">Permanent Address *</Label>
                  <Textarea
                    id="permanentAddress"
                    placeholder="Street, City, State, Postal Code"
                    rows={2}
                    {...register("permanentAddress", {
                      onChange: handlePermanentChange,
                    })}
                    className={errors.permanentAddress ? "border-destructive" : ""}
                  />
                  {errors.permanentAddress && (
                    <p className="text-sm text-destructive">{errors.permanentAddress.message}</p>
                  )}
                </div>

                {/* Current Address with "Same as Permanent" checkbox */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="currentAddress">Current Address *</Label>
                    <label
                      htmlFor="sameAsPermanent"
                      className="flex items-center gap-2 cursor-pointer select-none text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <input
                        type="checkbox"
                        id="sameAsPermanent"
                        checked={sameAsPermament}
                        onChange={(e) => handleSameAddress(e.target.checked)}
                        className="h-4 w-4 rounded border-border accent-primary cursor-pointer"
                      />
                      Same as Permanent Address
                    </label>
                  </div>
                  <Textarea
                    id="currentAddress"
                    placeholder="Street, City, State, Postal Code"
                    rows={2}
                    {...register("currentAddress")}
                    disabled={sameAsPermament}
                    className={`${errors.currentAddress ? "border-destructive" : ""} ${sameAsPermament ? "bg-secondary/50 text-muted-foreground" : ""}`}
                  />
                  {errors.currentAddress && (
                    <p className="text-sm text-destructive">{errors.currentAddress.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="languages">Language Knowledge *</Label>
                  <Input
                    id="languages"
                    placeholder="e.g., English, Hindi, Marathi"
                    {...register("languages")}
                    className={errors.languages ? "border-destructive" : ""}
                  />
                  {errors.languages && (
                    <p className="text-sm text-destructive">{errors.languages.message}</p>
                  )}
                </div>

                {/* CV / Resume Upload */}
                <div className="space-y-2">
                  <Label>Upload CV / Resume <span className="text-muted-foreground font-normal">(Optional — PDF, DOC, DOCX · Max 5MB)</span></Label>
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className={`relative flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed p-6 cursor-pointer transition-colors
                      ${resumeFile ? "border-primary/50 bg-primary/5" : "border-border hover:border-primary/40 hover:bg-secondary/30"}
                    `}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    {resumeFile ? (
                      <div className="flex items-center gap-3 w-full justify-center">
                        <FileText className="h-8 w-8 text-primary shrink-0" />
                        <div className="text-left min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">{resumeFile.name}</p>
                          <p className="text-xs text-muted-foreground">{(resumeFile.size / 1024).toFixed(1)} KB</p>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            setResumeFile(null)
                            if (fileInputRef.current) fileInputRef.current.value = ""
                          }}
                          className="ml-auto p-1 rounded-full hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <>
                        <Upload className="h-8 w-8 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground text-center">
                          <span className="font-medium text-primary">Click to upload</span> your CV or Resume
                        </p>
                        <p className="text-xs text-muted-foreground">PDF, DOC or DOCX up to 5MB</p>
                      </>
                    )}
                  </div>
                  {resumeError && (
                    <p className="text-sm text-destructive">{resumeError}</p>
                  )}
                </div>
              </div>
            )}

            {/* Step 2: Employment Details */}
            {currentStep >= 2 && (
              <div className="space-y-6 pb-6 border-b last:border-b-0">
                <h3 className="text-lg font-semibold text-foreground">Employment Details</h3>

                <div className="space-y-3">
                  <Label>Job Experience *</Label>
                  <Controller
                    name="experienceType"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup value={field.value} onValueChange={field.onChange} className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2">
                        <Label htmlFor="current" className="flex items-center space-x-3 cursor-pointer p-2 -ml-2 rounded-md hover:bg-secondary/50 active:bg-secondary/80">
                          <RadioGroupItem value="current" id="current" />
                          <span className="font-normal text-base">Currently Employed</span>
                        </Label>
                        <Label htmlFor="previous" className="flex items-center space-x-3 cursor-pointer p-2 -ml-2 rounded-md hover:bg-secondary/50 active:bg-secondary/80">
                          <RadioGroupItem value="previous" id="previous" />
                          <span className="font-normal text-base">Previously Employed</span>
                        </Label>
                        <Label htmlFor="fresher" className="flex items-center space-x-3 cursor-pointer p-2 -ml-2 rounded-md hover:bg-secondary/50 active:bg-secondary/80">
                          <RadioGroupItem value="fresher" id="fresher" />
                          <span className="font-normal text-base">Fresher</span>
                        </Label>
                      </RadioGroup>
                    )}
                  />
                  {errors.experienceType && (
                    <p className="text-sm text-destructive">{errors.experienceType.message}</p>
                  )}
                </div>

                {experienceType !== "fresher" && (
                  <div className="grid gap-4 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Employer/Company Name</Label>
                      <Input
                        id="companyName"
                        placeholder="Company Name"
                        {...register("companyName")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="designation">Designation</Label>
                      <Input
                        id="designation"
                        placeholder="Job Title"
                        {...register("designation")}
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="currentSalary">Salary (Monthly)</Label>
                        <Input
                          id="currentSalary"
                          type="number"
                          placeholder="₹"
                          {...register("currentSalary")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="noticePeriod">Notice Period (Days)</Label>
                        <Input
                          id="noticePeriod"
                          type="number"
                          placeholder="Days"
                          {...register("noticePeriod")}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="expectedSalary">Expected Salary (Monthly) *</Label>
                  <Input
                    id="expectedSalary"
                    type="number"
                    placeholder="₹"
                    {...register("expectedSalary")}
                    className={errors.expectedSalary ? "border-destructive" : ""}
                  />
                  {errors.expectedSalary && (
                    <p className="text-sm text-destructive">{errors.expectedSalary.message}</p>
                  )}
                </div>
              </div>
            )}

            {/* Step 3: Education & Preferences */}
            {currentStep >= 3 && (
              <div className="space-y-6 pb-6">
                <h3 className="text-lg font-semibold text-foreground">Education & Job Preferences</h3>

                <div className="space-y-2">
                  <Label htmlFor="education">Education Detail *</Label>
                  <Input
                    id="education"
                    placeholder="e.g., B.Tech (Computer Science), MBA, etc."
                    {...register("education")}
                    className={errors.education ? "border-destructive" : ""}
                  />
                  {errors.education && (
                    <p className="text-sm text-destructive">{errors.education.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="jobPreference">Looking for Job Like: *</Label>
                  <Textarea
                    id="jobPreference"
                    placeholder="e.g., Senior Software Developer, Accounts Manager, Marketing Executive, etc."
                    rows={3}
                    {...register("jobPreference")}
                    className={errors.jobPreference ? "border-destructive" : ""}
                  />
                  {errors.jobPreference && (
                    <p className="text-sm text-destructive">{errors.jobPreference.message}</p>
                  )}
                </div>

                <div className="space-y-3 rounded-lg bg-secondary/50 p-4">
                  <h4 className="font-semibold text-foreground">Terms & Conditions</h4>
                  <div className="max-h-40 overflow-y-auto space-y-2 text-sm text-muted-foreground">
                    <p>• Registration fee: ₹1000</p>
                    <p>• First month salary (30-50% of CTC) to be paid as recruitment charges after selection</p>
                    <p>• Personality Development Training: ₹1,500 for 15 days</p>
                    <p>• Offer letter property remains with ACS HR Services until full payment</p>
                    <p>• Your profile will not be deleted in any situation</p>
                    <p>• You agree to share contact details with recruiters and receive recruitment-related communications</p>
                  </div>
                  <div className="flex items-start space-x-2 pt-4">
                    <Controller
                      name="termsAccepted"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="checkbox"
                          id="terms"
                          checked={field.value || false}
                          onChange={field.onChange}
                          className="mt-1"
                        />
                      )}
                    />
                    <Label htmlFor="terms" className="font-normal cursor-pointer">
                      I have read and agree with all terms and conditions
                    </Label>
                  </div>
                  {errors.termsAccepted && (
                    <p className="text-sm text-destructive">{errors.termsAccepted.message}</p>
                  )}
                </div>
              </div>
            )}

            {/* Step 4: Payment */}
            {currentStep >= 4 && (
              <div className="space-y-6 pb-6">
                <h3 className="text-lg font-semibold text-foreground">Payment - ₹1000</h3>
                <p className="text-sm text-muted-foreground">Please pay the registration fee to complete your profile.</p>
                
                <div className="flex flex-col items-center p-6 bg-secondary/30 rounded-lg border border-border space-y-4">
                  <img 
                    src="/qr-code.png" 
                    alt="UPI QR Code" 
                    className="w-48 h-48 rounded-md bg-white p-2 border"
                  />
                  <p className="font-medium text-foreground text-center">Scan with any UPI App<br/>(GPay, PhonePe, Paytm)</p>
                  
                  <div className="w-full max-w-sm flex items-center gap-4 my-4">
                    <div className="h-px bg-border flex-1"></div>
                    <span className="text-sm text-muted-foreground uppercase font-medium">OR</span>
                    <div className="h-px bg-border flex-1"></div>
                  </div>

                  <a 
                    href="upi://pay?pa=9711189713@hdfc&pn=ACSHRServices&am=1000&cu=INR" 
                    className="w-full max-w-xs inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium shadow-sm"
                  >
                    Pay via UPI App (Mobile)
                  </a>
                </div>

                <div className="space-y-2 mt-6">
                  <Label htmlFor="transactionId">Enter UTR / Transaction ID (12 Digits) *</Label>
                  <Input
                    id="transactionId"
                    placeholder="e.g. 312345678901"
                    {...register("transactionId")}
                    className={errors.transactionId ? "border-destructive" : ""}
                  />
                  {errors.transactionId && (
                    <p className="text-sm text-destructive">{errors.transactionId.message}</p>
                  )}
                  <p className="text-xs text-muted-foreground">After successful payment, enter the 12-digit UTR or Transaction ID here to verify your payment.</p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            {submitError && (
              <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                {submitError}
              </div>
            )}
            <div className="flex gap-3 pt-6">
              {currentStep > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  Previous
                </Button>
              )}
              {currentStep < 4 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="ml-auto"
                >
                  {currentStep === 3 ? "Proceed to Payment" : "Next"}
                </Button>
              ) : (
                <Button type="submit" disabled={isSubmitting} className="ml-auto">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Registration"
                  )}
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
