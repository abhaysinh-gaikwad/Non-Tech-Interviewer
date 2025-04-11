import type { Metadata } from "next"
import { BookingForm } from "@/components/dashboard/booking-form"

export const metadata: Metadata = {
  title: "Book Interview - Non-Tech-Interviewer",
  description: "Book your next practice interview session",
}

export default function BookingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Book an Interview</h1>
        <p className="text-muted-foreground">Schedule your next practice interview session with our AI interviewer.</p>
      </div>

      <BookingForm />
    </div>
  )
}
