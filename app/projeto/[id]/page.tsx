import { ProjectDetails } from "@/components/project-details"
import { Header } from "@/components/header"

// Mock data for demonstration
const mockProject = {
  id: 1,
  title: "EcoTrack - App de Sustentabilidade",
  description: `
# Sobre o EcoTrack

O **EcoTrack** é um aplicativo mobile inovador que visa transformar a forma como as pessoas se relacionam com práticas sustentáveis no dia a dia.

## Objetivos do Projeto

- Gamificar hábitos sustentáveis através de um sistema de pontuação e conquistas
- Criar uma comunidade engajada em práticas ecológicas
- Fornecer dicas personalizadas baseadas no perfil do usuário
- Conectar usuários com iniciativas locais de sustentabilidade

## Funcionalidades Principais

### 📱 App Mobile
- Interface intuitiva e moderna
- Sistema de gamificação com níveis e badges
- Tracking de atividades sustentáveis
- Feed social para compartilhar conquistas

### 🌱 Sistema de Pontuação
- Pontos por ações sustentáveis realizadas
- Rankings mensais e anuais
- Recompensas e parcerias com empresas locais

### 👥 Comunidade
- Feed de atividades dos amigos
- Desafios em grupo
- Fóruns de discussão sobre sustentabilidade

## Tecnologias Utilizadas

- **Frontend Mobile**: React Native
- **Backend**: Node.js com Express
- **Banco de Dados**: PostgreSQL
- **Autenticação**: Firebase Auth
- **Notificações**: Firebase Cloud Messaging
  `,
  creator: {
    name: "Maria Silva",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  createdAt: "2024-01-15",
  bannerImage: "/placeholder.svg?height=300&width=800",
  skills: ["React Native", "Node.js", "UI/UX Design", "PostgreSQL"],
  status: "Recrutando",
  openPositions: [
    {
      id: 1,
      title: "Desenvolvedor(a) React Native",
      description: "Responsável pelo desenvolvimento da interface mobile e integração com APIs.",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      description: "Criação de interfaces intuitivas e experiência do usuário otimizada.",
    },
    {
      id: 3,
      title: "Desenvolvedor(a) Backend",
      description: "Desenvolvimento de APIs REST e arquitetura do servidor.",
    },
  ],
  team: [
    {
      id: 1,
      name: "Maria Silva",
      role: "Product Owner",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Carlos Santos",
      role: "Tech Lead",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ],
  comments: [
    {
      id: 1,
      author: {
        name: "João Pedro",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      content: "Projeto muito interessante! Vocês já têm algum protótipo funcionando?",
      createdAt: "2024-01-20T10:30:00Z",
    },
    {
      id: 2,
      author: {
        name: "Ana Costa",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      content: "Adorei a ideia da gamificação! Como vocês pretendem validar o impacto real das ações sustentáveis?",
      createdAt: "2024-01-19T15:45:00Z",
    },
  ],
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main className="pt-20">
        <ProjectDetails project={mockProject} />
      </main>
    </div>
  )
}
