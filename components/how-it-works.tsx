import { CalendarCheck, Video, TrendingUp } from "lucide-react"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-background-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform makes it easy to practice interviews and improve your skills with just three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white rounded-lg p-8 shadow-custom text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CalendarCheck className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">1. Book</h3>
            <p className="text-muted-foreground">
              Schedule an interview session at your convenience. Choose your experience level and job role.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg p-8 shadow-custom text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Video className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">2. Interview</h3>
            <p className="text-muted-foreground">
              Join your virtual interview with our AI interviewer. Answer questions just like in a real interview.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg p-8 shadow-custom text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">3. Improve</h3>
            <p className="text-muted-foreground">
              Receive detailed feedback on your performance and specific areas to improve for future interviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
