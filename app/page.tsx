import { Header } from "@/components/header"
import { ProjectFeed } from "@/components/project-feed"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main className="pt-20">
        <ProjectFeed />
      </main>
    </div>
  )
}
