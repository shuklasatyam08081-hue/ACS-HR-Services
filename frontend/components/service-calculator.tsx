"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { ArrowLeft, ArrowRight, CheckCircle2, Users, Briefcase, Shield, Calculator } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const services = [
  { id: "recruitment", label: "Recruitment & Staffing", icon: Users, basePrice: 15000 },
  { id: "consulting", label: "HR Consulting", icon: Briefcase, basePrice: 25000 },
  { id: "payroll", label: "Payroll & Compliance", icon: Shield, basePrice: 10000 },
]

const companySizes = [
  { id: "small", label: "1-50 employees", multiplier: 1 },
  { id: "medium", label: "51-200 employees", multiplier: 1.5 },
  { id: "large", label: "201-500 employees", multiplier: 2.5 },
  { id: "enterprise", label: "500+ employees", multiplier: 4 },
]

const urgencyOptions = [
  { id: "standard", label: "Standard (2-4 weeks)", discount: 0 },
  { id: "priority", label: "Priority (1-2 weeks)", discount: -15 },
  { id: "urgent", label: "Urgent (within 1 week)", discount: -25 },
]

export function ServiceCalculator() {
  const [step, setStep] = useState(1)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [companySize, setCompanySize] = useState("")
  const [employeeCount, setEmployeeCount] = useState([50])
  const [urgency, setUrgency] = useState("")

  const totalSteps = 3

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    )
  }

  const calculateEstimate = () => {
    if (selectedServices.length === 0 || !companySize || !urgency) return null

    const selectedServicesData = services.filter((s) => selectedServices.includes(s.id))
    const sizeMultiplier = companySizes.find((s) => s.id === companySize)?.multiplier || 1
    const urgencyData = urgencyOptions.find((u) => u.id === urgency)
    const urgencyMultiplier = 1 + (urgencyData?.discount || 0) / 100

    const baseTotal = selectedServicesData.reduce((sum, s) => sum + s.basePrice, 0)
    const adjustedTotal = baseTotal * sizeMultiplier * urgencyMultiplier

    return {
      services: selectedServicesData,
      baseTotal,
      sizeMultiplier,
      urgencyMultiplier,
      monthlyEstimate: Math.round(adjustedTotal),
      annualEstimate: Math.round(adjustedTotal * 12 * 0.9), // 10% annual discount
    }
  }

  const canProceed = () => {
    switch (step) {
      case 1:
        return selectedServices.length > 0
      case 2:
        return companySize !== ""
      case 3:
        return urgency !== ""
      default:
        return false
    }
  }

  const estimate = calculateEstimate()

  return (
    <Card className="mx-auto max-w-2xl border-2">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <Calculator className="h-7 w-7 text-primary" />
        </div>
        <CardTitle className="text-2xl">Service Calculator</CardTitle>
        <CardDescription>
          Get an instant estimate for your HR service needs
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Progress Steps */}
        <div className="mb-8 flex items-center justify-center gap-2">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-colors",
                  step >= s
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground"
                )}
              >
                {step > s ? <CheckCircle2 className="h-5 w-5" /> : s}
              </div>
              {s < 4 && (
                <div
                  className={cn(
                    "h-0.5 w-8 transition-colors",
                    step > s ? "bg-primary" : "bg-secondary"
                  )}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Select Services */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Select Services You Need</h3>
            <p className="text-sm text-muted-foreground">
              Choose one or more services to include in your estimate.
            </p>
            <div className="mt-4 space-y-3">
              {services.map((service) => (
                <label
                  key={service.id}
                  className={cn(
                    "flex cursor-pointer items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-secondary/50",
                    selectedServices.includes(service.id) && "border-primary bg-primary/5"
                  )}
                >
                  <Checkbox
                    checked={selectedServices.includes(service.id)}
                    onCheckedChange={() => handleServiceToggle(service.id)}
                  />
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{service.label}</p>
                    <p className="text-sm text-muted-foreground">
                      Starting from Rs. {service.basePrice.toLocaleString()}/month
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Company Size */}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company Size</h3>
            <p className="text-sm text-muted-foreground">
              Select your company size to help us estimate your needs.
            </p>
            <RadioGroup value={companySize} onValueChange={setCompanySize} className="mt-4 space-y-3">
              {companySizes.map((size) => (
                <label
                  key={size.id}
                  className={cn(
                    "flex cursor-pointer items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-secondary/50",
                    companySize === size.id && "border-primary bg-primary/5"
                  )}
                >
                  <RadioGroupItem value={size.id} />
                  <span className="font-medium">{size.label}</span>
                </label>
              ))}
            </RadioGroup>
            <div className="mt-6 space-y-4">
              <Label>Or specify exact employee count: {employeeCount[0]}</Label>
              <Slider
                value={employeeCount}
                onValueChange={(value) => {
                  setEmployeeCount(value)
                  // Auto-set company size based on slider
                  const count = value[0]
                  if (count <= 50) setCompanySize("small")
                  else if (count <= 200) setCompanySize("medium")
                  else if (count <= 500) setCompanySize("large")
                  else setCompanySize("enterprise")
                }}
                min={1}
                max={1000}
                step={1}
                className="py-4"
              />
            </div>
          </div>
        )}

        {/* Step 3: Timeline */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Project Timeline</h3>
            <p className="text-sm text-muted-foreground">
              When do you need to get started?
            </p>
            <RadioGroup value={urgency} onValueChange={setUrgency} className="mt-4 space-y-3">
              {urgencyOptions.map((option) => (
                <label
                  key={option.id}
                  className={cn(
                    "flex cursor-pointer items-center justify-between rounded-lg border p-4 transition-colors hover:bg-secondary/50",
                    urgency === option.id && "border-primary bg-primary/5"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <RadioGroupItem value={option.id} />
                    <span className="font-medium">{option.label}</span>
                  </div>
                  {option.discount !== 0 && (
                    <span className="text-sm text-muted-foreground">
                      +{Math.abs(option.discount)}% priority fee
                    </span>
                  )}
                </label>
              ))}
            </RadioGroup>
          </div>
        )}

        {/* Step 4: Results */}
        {step === 4 && estimate && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Your Estimated Quote</h3>
            <div className="rounded-lg bg-secondary/50 p-6">
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Selected Services:</p>
                <ul className="space-y-2">
                  {estimate.services.map((s) => (
                    <li key={s.id} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>{s.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 border-t pt-6">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Monthly Estimate</p>
                    <p className="text-3xl font-bold text-primary">
                      Rs. {estimate.monthlyEstimate.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Annual (10% savings)</p>
                    <p className="text-xl font-semibold text-foreground">
                      Rs. {estimate.annualEstimate.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              This is an estimate. Contact us for a detailed proposal tailored to your specific needs.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="flex-1">
                <Link href="/contact">Get Detailed Quote</Link>
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setStep(1)
                  setSelectedServices([])
                  setCompanySize("")
                  setUrgency("")
                }}
                className="flex-1"
              >
                Start Over
              </Button>
            </div>
          </div>
        )}

        {/* Navigation */}
        {step < 4 && (
          <div className="mt-8 flex justify-between">
            <Button
              variant="outline"
              onClick={() => setStep((s) => s - 1)}
              disabled={step === 1}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button onClick={() => setStep((s) => s + 1)} disabled={!canProceed()}>
              {step === 3 ? "Get Estimate" : "Next"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
