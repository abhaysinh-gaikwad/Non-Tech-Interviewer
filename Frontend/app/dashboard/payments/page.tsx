import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Plus } from "lucide-react"

export const metadata: Metadata = {
  title: "Payment History - Non-Tech-Coder",
  description: "View your payment history and manage credits",
}

export default function PaymentsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Payment History</h1>
          <p className="text-muted-foreground">View your payment history and manage your credits.</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Buy Credits
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Credits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Each interview uses 1 credit</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹350</div>
            <p className="text-xs text-muted-foreground">Lifetime spending</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Payment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹50</div>
            <p className="text-xs text-muted-foreground">May 16, 2023</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Transaction History</CardTitle>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="grid grid-cols-6 bg-muted p-4 text-sm font-medium">
              <div>Date</div>
              <div>Description</div>
              <div>Type</div>
              <div>Status</div>
              <div>Recording</div>
              <div className="text-right">Amount</div>
            </div>
            <div className="divide-y">
              <div className="grid grid-cols-6 items-center p-4">
                <div className="text-sm">May 16, 2023</div>
                <div className="text-sm">Interview Recording</div>
                <div className="text-sm">One-time</div>
                <div className="text-sm">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    Completed
                  </span>
                </div>
                <div className="text-sm">View</div>
                <div className="text-right text-sm font-medium">₹50</div>
              </div>
              <div className="grid grid-cols-6 items-center p-4">
                <div className="text-sm">May 10, 2023</div>
                <div className="text-sm">5 Interview Credits</div>
                <div className="text-sm">Package</div>
                <div className="text-sm">
                  <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                    Pending
                  </span>
                </div>
                <div className="text-sm">View</div>
                <div className="text-right text-sm font-medium">₹300</div>
              </div>
              <div className="grid grid-cols-6 items-center p-4">
                <div className="text-sm">May 10, 2023</div>
                <div className="text-sm">5 Interview Credits</div>
                <div className="text-sm">Package</div>
                <div className="text-sm">
                  <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                    failed
                  </span>
                </div>
                <div className="text-sm">View</div>
                <div className="text-right text-sm font-medium">₹300</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* <Card>
        <CardHeader>
          <CardTitle>Credit Packages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium mb-2">Starter</h3>
              <div className="text-3xl font-bold mb-2">₹300</div>
              <p className="text-sm text-muted-foreground mb-4">5 Interview Credits</p>
              <Button className="w-full">Buy Now</Button>
            </div>
            <div className="rounded-lg border p-4 bg-primary/5 border-primary/20">
              <div className="text-xs font-medium text-primary mb-2 uppercase">Most Popular</div>
              <h3 className="text-lg font-medium mb-2">Professional</h3>
              <div className="text-3xl font-bold mb-2">₹500</div>
              <p className="text-sm text-muted-foreground mb-4">10 Interview Credits</p>
              <Button className="w-full">Buy Now</Button>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium mb-2">Premium</h3>
              <div className="text-3xl font-bold mb-2">₹900</div>
              <p className="text-sm text-muted-foreground mb-4">20 Interview Credits</p>
              <Button className="w-full">Buy Now</Button>
            </div>
          </div>
        </CardContent>
      </Card> */}
    </div>
  )
}
