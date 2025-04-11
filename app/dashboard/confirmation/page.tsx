import Link from "next/link"
import type { Metadata } from "next"
import { CheckCircle, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Booking Confirmed - Non-Tech-Interviewer",
  description: "Your interview booking has been confirmed",
}

export default function ConfirmationPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Booking Confirmed!</h1>
        <p className="text-muted-foreground mt-2">Your interview has been scheduled successfully.</p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div className="text-sm text-muted-foreground">Job Role:</div>
              <div className="text-sm font-medium">Frontend Developer</div>

              <div className="text-sm text-muted-foreground">Experience:</div>
              <div className="text-sm font-medium">3-5 years</div>

              <div className="text-sm text-muted-foreground">Date:</div>
              <div className="text-sm font-medium">May 20, 2023</div>

              <div className="text-sm text-muted-foreground">Time:</div>
              <div className="text-sm font-medium">10:00 AM</div>

              <div className="text-sm text-muted-foreground">Google Meet Link:</div>
              <div className="text-sm font-medium">
                <a
                  href="https://meet.google.com/abc-defg-hij"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  meet.google.com/abc-defg-hij
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center mt-6 space-x-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Add to Calendar
              </Button>
              <Link href="/dashboard/interviews">
                <Button className="flex items-center gap-2">
                  View My Interviews
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-muted rounded-lg p-4 text-sm">
        <h3 className="font-medium mb-2">Preparing for your interview:</h3>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>Join the Google Meet link 5 minutes before your scheduled time.</li>
          <li>Ensure you have a stable internet connection and a quiet environment.</li>
          <li>Have your resume and portfolio ready for reference.</li>
          <li>The interview will last approximately 45-60 minutes.</li>
        </ul>
      </div>
    </div>
  )
}
