import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

interface TeamMember {
  id: number
  name: string
  role: string
  avatar: string
}

interface ProjectTeamProps {
  team: TeamMember[]
}

export function ProjectTeam({ team }: ProjectTeamProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {team.map((member) => (
        <Card key={member.id} className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                <AvatarFallback className="bg-slate-700 text-slate-50 text-lg">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium text-slate-50">{member.name}</h3>
                <p className="text-sm text-slate-400">{member.role}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
