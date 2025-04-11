"use client"

import type React from "react"

import { useState } from "react"
import { Loader2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface PaymentModalProps {
  children?: React.ReactNode
}

export function PaymentModal({ children }: PaymentModalProps) {
  const [step, setStep] = useState<"payment" | "processing" | "success">("payment")
  const [open, setOpen] = useState(false)

  const handlePayment = () => {
    setStep("processing")

    // Simulate payment processing
    setTimeout(() => {
      setStep("success")
    }, 2000)
  }

  const handleClose = () => {
    setOpen(false)
    // Reset after dialog closes
    setTimeout(() => {
      setStep("payment")
    }, 300)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children || <Button>Unlock for ₹50</Button>}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {step === "payment" && (
          <>
            <DialogHeader>
              <DialogTitle>Unlock Interview Recording</DialogTitle>
              <DialogDescription>
                Pay ₹50 to access the full interview recording. This helps you review your performance and improve.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <RadioGroup defaultValue="card">
                <div className="flex items-center space-x-2 border rounded-md p-3">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex-1">
                    Credit/Debit Card
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-md p-3">
                  <RadioGroupItem value="upi" id="upi" />
                  <Label htmlFor="upi" className="flex-1">
                    UPI
                  </Label>
                </div>
              </RadioGroup>

              <div className="space-y-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="1234 5678 9012 3456" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={handleClose}>
                Cancel
              </Button>
              <Button onClick={handlePayment}>Pay ₹50</Button>
            </DialogFooter>
          </>
        )}

        {step === "processing" && (
          <div className="py-12 flex flex-col items-center justify-center">
            <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
            <DialogTitle className="text-center">Processing Payment</DialogTitle>
            <DialogDescription className="text-center">Please wait while we process your payment...</DialogDescription>
          </div>
        )}

        {step === "success" && (
          <div className="py-12 flex flex-col items-center justify-center">
            <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
            <DialogTitle className="text-center">Payment Successful!</DialogTitle>
            <DialogDescription className="text-center mb-6">
              Your interview recording is now unlocked and ready to view.
            </DialogDescription>
            <Button onClick={handleClose}>View Recording</Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
