import type { Metadata } from "next"
import { ProfileSettings } from "@/components/dashboard/profile-settings"

export const metadata: Metadata = {
  title: "Settings - Non-Tech-Interviewer",
  description: "Manage your account settings and preferences",
}

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences.</p>
      </div>

      <ProfileSettings />
    </div>
  )
}
