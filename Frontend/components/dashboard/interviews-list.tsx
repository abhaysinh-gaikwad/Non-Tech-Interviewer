"use client"

import Link from "next/link"
import { Calendar, Clock, Video, MoreVertical, FileText, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useState } from "react"

type Interview = {
  id: string
  role: string
  date: string
  time: string
  status?: "completed" | "upcoming" | "cancelled"
  score?: number
}

const upcomingInterviews: Interview[] = [
  {
    id: "1",
    role: "Frontend Developer",
    date: "May 20, 2023",
    time: "10:00 AM",
    status: "upcoming",
  },
]

const pastInterviews: Interview[] = [
  {
    id: "2",
    role: "Frontend Developer",
    date: "May 15, 2023",
    time: "11:00 AM",
    status: "completed",
    score: 85,
  },
  {
    id: "3",
    role: "React Developer",
    date: "May 10, 2023",
    time: "02:00 PM",
    status: "completed",
    score: 76,
  },
  {
    id: "4",
    role: "Full Stack Developer",
    date: "May 5, 2023",
    time: "09:00 AM",
    status: "completed",
    score: 72,
  },
]

interface InterviewsListProps {
  type: "upcoming" | "past"
}

export function InterviewsList({ type }: InterviewsListProps) {
  const [interviews, setInterviews] = useState<Interview[]>(type === "upcoming" ? upcomingInterviews : pastInterviews)

  const handleCancel = (id: string) => {
    setInterviews(interviews.filter((interview) => interview.id !== id))
  }

  if (interviews.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          {type === "upcoming"
            ? "You don't have any upcoming interviews."
            : "You haven't completed any interviews yet."}
        </p>
        {type === "upcoming" && (
          <Link href="/dashboard/book" className="mt-4 inline-block">
            <Button>Book Your First Interview</Button>
          </Link>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {interviews.map((interview) => (
        <Card key={interview.id}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium">{interview.role}</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-4 w-4" />
                  {interview.date}
                  <span className="mx-2">•</span>
                  <Clock className="mr-1 h-4 w-4" />
                  {interview.time}
                </div>
              </div>

              <div className="flex items-center gap-4">
                {type === "upcoming" ? (
                  <Button size="sm" className="flex items-center gap-2">
                    <Video className="h-4 w-4" />
                    Join
                  </Button>
                ) : (
                  <div className="flex items-center gap-2">
                    <div className="text-sm font-medium">Score:</div>
                    <div className="text-sm font-bold">{interview.score}%</div>
                  </div>
                )}

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                      <span className="sr-only">More options</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {type === "past" && (
                      <DropdownMenuItem asChild>
                        <Link href={`/dashboard/feedback/${interview.id}`}>
                          <FileText className="mr-2 h-4 w-4" />
                          View Feedback
                        </Link>
                      </DropdownMenuItem>
                    )}
                    {type === "upcoming" && (
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                            <Trash2 className="mr-2 h-4 w-4" />
                            Cancel Interview
                          </DropdownMenuItem>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Cancel Interview?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to cancel this interview? Your credit will be refunded if cancelled
                              at least 12 hours before the scheduled time.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Keep Interview</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleCancel(interview.id)}
                              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            >
                              Yes, Cancel
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
