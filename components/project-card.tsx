import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Link from "next/link"

interface Project {
  id: number
  title: string
  description: string
  creator: {
    name: string
    avatar: string
  }
  skills: string[]
  status: string
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Recrutando":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Em Andamento":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "Concluído":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      default:
        return "bg-slate-500/20 text-slate-400 border-slate-500/30"
    }
  }

  return (
    <Card className="bg-slate-800 border-slate-700 hover:border-slate-600 transition-colors">
      <CardHeader className="pb-3">
        <h3 className="text-xl font-semibold text-slate-50 mb-3 line-clamp-2">{project.title}</h3>
        <div className="flex items-center space-x-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={project.creator.avatar || "/placeholder.svg"} alt={project.creator.name} />
            <AvatarFallback className="bg-slate-700 text-slate-50 text-sm">
              {project.creator.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <Link
            href="/perfil/1"
            className="text-sm text-slate-300 hover:text-blue-400 cursor-pointer transition-colors"
          >
            {project.creator.name}
          </Link>
        </div>
      </CardHeader>

      <CardContent className="pb-4">
        <p className="text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>

        <div className="space-y-2">
          <span className="text-sm font-medium text-slate-300">Habilidades Buscadas:</span>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <Badge key={skill} variant="outline" className="bg-slate-700/50 text-slate-300 border-slate-600 text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between pt-4 border-t border-slate-700">
        <Badge className={`${getStatusColor(project.status)} text-xs`}>{project.status}</Badge>
        <Link href={`/projeto/${project.id}`}>
          <Button
            variant="outline"
            size="sm"
            className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-slate-50"
          >
            Ver Detalhes
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
