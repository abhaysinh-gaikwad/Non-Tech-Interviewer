import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Video, BarChart3 } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Dashboard - Non-Tech-Coder",
  description: "Your interview practice dashboard",
}

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your interview practice.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Interviews Completed</CardTitle>
            <Video className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">+1 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Feedback Score</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">+5% from last interview</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Credits Remaining</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Purchase more credits</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Recent Interviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-3 text-sm text-muted-foreground">
                <div>Date</div>
                <div>Role</div>
                <div>Score</div>
              </div>
              <div className="grid grid-cols-3 items-center">
                <div className="text-sm">May 15, 2023</div>
                <div className="text-sm">Frontend Developer</div>
                <div className="text-sm font-medium">85%</div>
              </div>
              <div className="grid grid-cols-3 items-center">
                <div className="text-sm">May 10, 2023</div>
                <div className="text-sm">React Developer</div>
                <div className="text-sm font-medium">76%</div>
              </div>
              <div className="grid grid-cols-3 items-center">
                <div className="text-sm">May 5, 2023</div>
                <div className="text-sm">Full Stack Developer</div>
                <div className="text-sm font-medium">72%</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Interviews</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border p-3">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Frontend Developer</h4>
                  <p className="text-sm text-muted-foreground">May 20, 2023 • 10:00 AM</p>
                </div>
                <Button size="sm" variant="outline">
                  Join
                </Button>
              </div>
            </div>
            <Link href="/dashboard/book" className="block">
              <Button className="w-full">Book New Interview</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
