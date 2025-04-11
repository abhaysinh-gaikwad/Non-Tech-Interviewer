import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Download, Lock } from "lucide-react"
import { PaymentModal } from "@/components/dashboard/payment-modal"

export const metadata: Metadata = {
  title: "Interview Feedback - Non-Tech-Interviewer",
  description: "View detailed feedback from your interview",
}

export default function FeedbackPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/interviews">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Interview Feedback</h1>
          <p className="text-muted-foreground">Frontend Developer • May 15, 2023</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Overall, you demonstrated good knowledge of React fundamentals and state management. Your explanations
              were clear and concise, showing strong communication skills. However, there are areas for improvement in
              system design and optimization techniques.
            </p>
            <p>
              You handled the coding challenge well, implementing a working solution within the time constraints. Your
              approach to problem-solving was methodical, but you could improve on discussing trade-offs between
              different solutions.
            </p>
            <div className="flex justify-between items-center pt-4">
              <div className="text-sm text-muted-foreground">Overall Score</div>
              <div className="text-xl font-bold">85%</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skills Assessment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="text-sm font-medium">Technical Knowledge</div>
                <div className="text-sm font-medium">90%</div>
              </div>
              <Progress value={90} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="text-sm font-medium">Problem Solving</div>
                <div className="text-sm font-medium">85%</div>
              </div>
              <Progress value={85} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="text-sm font-medium">Communication</div>
                <div className="text-sm font-medium">88%</div>
              </div>
              <Progress value={88} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="text-sm font-medium">System Design</div>
                <div className="text-sm font-medium">75%</div>
              </div>
              <Progress value={75} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="text-sm font-medium">Code Quality</div>
                <div className="text-sm font-medium">82%</div>
              </div>
              <Progress value={82} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Detailed Feedback</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Strengths</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Strong understanding of React hooks and component lifecycle</li>
              <li>Clear explanation of state management approaches</li>
              <li>Good coding practices with proper error handling</li>
              <li>Effective communication of technical concepts</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Areas for Improvement</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Deepen knowledge of advanced React patterns</li>
              <li>Improve understanding of performance optimization techniques</li>
              <li>Practice more complex system design scenarios</li>
              <li>Consider alternative approaches to problem-solving</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Recommended Resources</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>React Performance Optimization Guide</li>
              <li>System Design Interview Handbook</li>
              <li>Advanced JavaScript Patterns Course</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Interview Recording</CardTitle>
          <PaymentModal />
        </CardHeader>
        <CardContent>
          <div className="bg-muted rounded-lg p-8 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Recording Locked</h3>
            <p className="text-muted-foreground mb-4">
              Unlock the full interview recording to review your performance and identify areas for improvement.
            </p>
            <PaymentModal>
              <Button>Unlock for ₹50</Button>
            </PaymentModal>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download Feedback as PDF
        </Button>
        <Link href="/dashboard/book">
          <Button>Book Another Interview</Button>
        </Link>
      </div>
    </div>
  )
}
