import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InterviewsList } from "@/components/dashboard/interviews-list"

export const metadata: Metadata = {
  title: "My Interviews - Non-Tech-Interviewer",
  description: "View your upcoming and past interviews",
}

export default function InterviewsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Interviews</h1>
          <p className="text-muted-foreground">View and manage your interview sessions.</p>
        </div>
        <Link href="/dashboard/book">
          <Button>Book New Interview</Button>
        </Link>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4">
          <InterviewsList type="upcoming" />
        </TabsContent>
        <TabsContent value="past" className="space-y-4">
          <InterviewsList type="past" />
        </TabsContent>
      </Tabs>
    </div>
  )
}
