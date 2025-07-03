import { Header } from "@/components/header"
import { UserProfile } from "@/components/user-profile"

// Mock data for demonstration
const mockUser = {
  id: 1,
  name: "Maria Silva",
  headline: "Product Designer @ TechCorp | Apaixonada por UX e Acessibilidade",
  avatar: "/placeholder.svg?height=120&width=120",
  bannerImage: "/placeholder.svg?height=200&width=800",
  bio: `Sou uma designer de produto com mais de 5 anos de experiência criando experiências digitais centradas no usuário. Minha paixão é resolver problemas complexos através de design intuitivo e acessível.

Atualmente trabalho na TechCorp, onde lidero a equipe de design de produtos mobile. Tenho experiência em pesquisa de usuário, prototipagem, design systems e colaboração multidisciplinar.

Quando não estou projetando, gosto de contribuir para projetos open source, escrever sobre design e mentorear novos designers. Acredito que o design tem o poder de tornar a tecnologia mais humana e inclusiva.

Estou sempre em busca de novos desafios e oportunidades para criar impacto positivo através do design.`,
  skills: {
    design: ["Figma", "Sketch", "Adobe XD", "Prototyping", "User Research", "Design Systems"],
    technical: ["HTML/CSS", "React", "JavaScript", "Git"],
    soft: ["Liderança", "Comunicação", "Pensamento Crítico", "Colaboração", "Mentoria"],
  },
  projects: [
    {
      id: 1,
      title: "EcoTrack - App de Sustentabilidade",
      description: "Aplicativo mobile para rastrear e gamificar hábitos sustentáveis do dia a dia.",
      creator: { name: "Maria Silva", avatar: "/placeholder.svg?height=40&width=40" },
      skills: ["React Native", "Node.js", "UI/UX Design"],
      status: "Recrutando",
    },
    {
      id: 2,
      title: "DesignSystem Pro",
      description: "Sistema de design completo para acelerar o desenvolvimento de produtos digitais.",
      creator: { name: "Maria Silva", avatar: "/placeholder.svg?height=40&width=40" },
      skills: ["Figma", "React", "Storybook"],
      status: "Concluído",
    },
    {
      id: 3,
      title: "AccessiApp",
      description: "Ferramenta para avaliar e melhorar a acessibilidade de aplicações web.",
      creator: { name: "Maria Silva", avatar: "/placeholder.svg?height=40&width=40" },
      skills: ["JavaScript", "WCAG", "Testing"],
      status: "Em Andamento",
    },
  ],
  isOwnProfile: false, // This would be determined by authentication
}

export default function ProfilePage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main className="pt-20">
        <UserProfile user={mockUser} />
      </main>
    </div>
  )
}
