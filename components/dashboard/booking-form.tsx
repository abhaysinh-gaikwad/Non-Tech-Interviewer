"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { format } from "date-fns"
import { CalendarIcon, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  role: z.string({ required_error: "Please select a job role." }),
  experience: z.string({ required_error: "Please select your experience level." }),
  date: z.date({ required_error: "Please select a date for your interview." }),
  time: z.string({ required_error: "Please select a time for your interview." }),
})

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM",
  "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM",
]

export function BookingForm() {
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { role: "", experience: "", date: undefined, time: "" },
  })

  // Handle "Continue" button to move to next step
  const handleContinue = async () => {
    console.log("handleContinue called, current step:", step)
    if (step === 1) {
      const isValid = await form.trigger(["role", "experience"])
      console.log("Step 1 Continue clicked, valid:", isValid)
      if (isValid) setStep(2)
    } else if (step === 2) {
      const isValid = await form.trigger(["date", "time"])
      console.log("Step 2 Continue clicked, valid:", isValid)
      if (isValid) setStep(3)
    }
  }

  // Handle manual submission only when "Submit Booking" is clicked
  const handleSubmitBooking = () => {
    console.log("Submit Booking button clicked at", new Date().toISOString())
    form.handleSubmit((values) => {
      console.log("onSubmit called with values:", values)
      setIsLoading(true)
      setTimeout(() => {
        console.log("Final submission", values)
        setIsLoading(false)
        router.push("/dashboard/confirmation")
      }, 2000)
    })()
  }

  console.log("Rendering BookingForm, step:", step)

  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="pt-6">

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>1</div>
              <div className={`h-1 w-12 ${step >= 2 ? "bg-primary" : "bg-muted"}`} />
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>2</div>
              <div className={`h-1 w-12 ${step >= 3 ? "bg-primary" : "bg-muted"}`} />
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>3</div>
            </div>
            <div className="text-sm text-muted-foreground">Step {step} of 3</div>
          </div>
        </div>

        <Form {...form}>
          <form className="space-y-6"> {/* No onSubmit here */}
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Interview Details</h2>
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Role</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a job role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="frontend">Frontend Developer</SelectItem>
                          <SelectItem value="backend">Backend Developer</SelectItem>
                          <SelectItem value="fullstack">Full Stack Developer</SelectItem>
                          <SelectItem value="mobile">Mobile Developer</SelectItem>
                          <SelectItem value="devops">DevOps Engineer</SelectItem>
                          <SelectItem value="data">Data Scientist</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>Select the role you're preparing for.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Years of Experience</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your experience level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="0-1">0-1 years</SelectItem>
                          <SelectItem value="1-3">1-3 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="5-8">5-8 years</SelectItem>
                          <SelectItem value="8+">8+ years</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>This helps us tailor the interview questions.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Select Date & Time</h2>
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Interview Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                            >
                              {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 1))
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription>You can book interviews up to 1 month in advance.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Interview Time</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a time slot" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>{time}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>All times are in your local timezone.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Review Your Interview</h2>
                <div className="space-y-4 rounded-lg border p-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm text-muted-foreground">Job Role:</div>
                    <div className="text-sm font-medium">
                      {(() => {
                        const role = form.getValues("role")
                        const roleMap: Record<string, string> = {
                          frontend: "Frontend Developer",
                          backend: "Backend Developer",
                          fullstack: "Full Stack Developer",
                          mobile: "Mobile Developer",
                          devops: "DevOps Engineer",
                          data: "Data Scientist",
                        }
                        return roleMap[role] || "Not selected"
                      })()}
                    </div>
                    <div className="text-sm text-muted-foreground">Experience:</div>
                    <div className="text-sm font-medium">{form.getValues("experience") || "Not selected"} years</div>
                    <div className="text-sm text-muted-foreground">Date:</div>
                    <div className="text-sm font-medium">
                      {form.getValues("date") ? format(form.getValues("date"), "PPP") : "Not selected"}
                    </div>
                    <div className="text-sm text-muted-foreground">Time:</div>
                    <div className="text-sm font-medium">{form.getValues("time") || "Not selected"}</div>
                  </div>
                  <div className="rounded-lg bg-muted p-3 text-sm">
                    <p className="font-medium">Important Notes:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                      <li>This interview will use 1 credit from your account.</li>
                      <li>You can cancel up to 12 hours before the scheduled time.</li>
                      <li>A Google Meet link will be sent to your email.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between pt-4">
              {step > 1 ? (
                <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                  Back
                </Button>
              ) : (
                <div></div>
              )}

              {step < 3 ? (
                <Button type="button" onClick={handleContinue} disabled={isLoading}>
                  Continue
                </Button>
              ) : (
                <Button
                  type="button" // Prevents default form submission
                  onClick={handleSubmitBooking}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Booking"
                  )}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}