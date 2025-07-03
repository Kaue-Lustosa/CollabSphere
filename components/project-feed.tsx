"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { ProjectCard } from "@/components/project-card"

const filters = ["Tecnologia", "Design", "Projetos Sociais", "Em Alta"]

const mockProjects = [
  {
    id: 1,
    title: "EcoTrack - App de Sustentabilidade",
    description:
      "Aplicativo mobile para rastrear e gamificar hábitos sustentáveis do dia a dia. Queremos criar uma comunidade engajada em práticas ecológicas.",
    creator: {
      name: "Maria Silva",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    skills: ["React Native", "Node.js", "UI/UX Design"],
    status: "Recrutando",
  },
  {
    id: 2,
    title: "CodeMentor - Plataforma de Mentoria",
    description:
      "Conectar desenvolvedores iniciantes com mentores experientes através de sessões de código ao vivo e projetos práticos.",
    creator: {
      name: "João Santos",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    skills: ["React", "Python", "WebRTC"],
    status: "Em Andamento",
  },
  {
    id: 3,
    title: "ArtShare - Rede Social para Artistas",
    description:
      "Uma plataforma dedicada para artistas compartilharem seu trabalho, receberem feedback e colaborarem em projetos criativos.",
    creator: {
      name: "Ana Costa",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    skills: ["Vue.js", "Figma", "Photography"],
    status: "Recrutando",
  },
  {
    id: 4,
    title: "HealthBot - Assistente de Saúde IA",
    description:
      "Chatbot inteligente para fornecer informações básicas de saúde e agendar consultas médicas de forma automatizada.",
    creator: {
      name: "Pedro Lima",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    skills: ["Python", "Machine Learning", "NLP"],
    status: "Recrutando",
  },
  {
    id: 5,
    title: "LocalBiz - Marketplace Local",
    description:
      "Plataforma para conectar pequenos negócios locais com consumidores da região, promovendo o comércio de proximidade.",
    creator: {
      name: "Carla Oliveira",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    skills: ["Next.js", "Stripe", "Marketing Digital"],
    status: "Em Andamento",
  },
  {
    id: 6,
    title: "StudyGroup - Grupos de Estudo Online",
    description:
      "Ferramenta para formar e gerenciar grupos de estudo virtuais com recursos de videoconferência e compartilhamento de materiais.",
    creator: {
      name: "Rafael Souza",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    skills: ["Angular", "WebRTC", "Firebase"],
    status: "Recrutando",
  },
]

export function ProjectFeed() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-50 mb-6">Explore Projetos Inovadores</h1>

        {/* Quick Filters */}
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <Badge
              key={filter}
              variant={activeFilter === filter ? "default" : "secondary"}
              className={`cursor-pointer px-4 py-2 text-sm transition-colors ${
                activeFilter === filter
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700"
              }`}
              onClick={() => setActiveFilter(activeFilter === filter ? null : filter)}
            >
              {filter}
            </Badge>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
