"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Share2, Heart, Calendar } from "lucide-react"
import { ProjectDescription } from "@/components/project-description"
import { ProjectDiscussion } from "@/components/project-discussion"
import { ProjectTeam } from "@/components/project-team"

interface Project {
  id: number
  title: string
  description: string
  creator: {
    name: string
    avatar: string
  }
  createdAt: string
  bannerImage: string
  skills: string[]
  status: string
  openPositions: Array<{
    id: number
    title: string
    description: string
  }>
  team: Array<{
    id: number
    name: string
    role: string
    avatar: string
  }>
  comments: Array<{
    id: number
    author: {
      name: string
      avatar: string
    }
    content: string
    createdAt: string
  }>
}

interface ProjectDetailsProps {
  project: Project
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const [savedToFavorites, setSavedToFavorites] = useState(false)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content - Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Project Header */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-slate-50">{project.title}</h1>

            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={project.creator.avatar || "/placeholder.svg"} alt={project.creator.name} />
                <AvatarFallback className="bg-slate-700 text-slate-50">
                  {project.creator.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-slate-300 font-medium">{project.creator.name}</p>
                <div className="flex items-center text-slate-400 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  Publicado em {formatDate(project.createdAt)}
                </div>
              </div>
            </div>
          </div>

          {/* Project Banner */}
          <div className="rounded-lg overflow-hidden bg-slate-800">
            <img
              src={project.bannerImage || "/placeholder.svg"}
              alt="Banner do projeto"
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Project Tabs */}
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-slate-800 border-slate-700">
              <TabsTrigger
                value="description"
                className="data-[state=active]:bg-slate-700 data-[state=active]:text-slate-50 text-slate-400"
              >
                Descrição
              </TabsTrigger>
              <TabsTrigger
                value="discussion"
                className="data-[state=active]:bg-slate-700 data-[state=active]:text-slate-50 text-slate-400"
              >
                Discussão
              </TabsTrigger>
              <TabsTrigger
                value="team"
                className="data-[state=active]:bg-slate-700 data-[state=active]:text-slate-50 text-slate-400"
              >
                Equipe
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <ProjectDescription description={project.description} />
            </TabsContent>

            <TabsContent value="discussion" className="mt-6">
              <ProjectDiscussion comments={project.comments} />
            </TabsContent>

            <TabsContent value="team" className="mt-6">
              <ProjectTeam team={project.team} />
            </TabsContent>
          </Tabs>
        </div>

        {/* Action Panel - Right Column */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            {/* Open Positions Card */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-50">Vagas em Aberto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {project.openPositions.map((position) => (
                  <div key={position.id} className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-50">{position.title}</h4>
                        <p className="text-sm text-slate-400 mt-1">{position.description}</p>
                      </div>
                    </div>
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Quero Colaborar</Button>
                    {position.id < project.openPositions.length && <Separator className="bg-slate-700" />}
                  </div>
                ))}
              </CardContent>
              <CardFooter className="flex space-x-2 pt-4 border-t border-slate-700">
                <Button variant="outline" className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700">
                  <Share2 className="h-4 w-4 mr-2" />
                  Compartilhar
                </Button>
                <Button
                  variant="outline"
                  className={`flex-1 border-slate-600 hover:bg-slate-700 ${
                    savedToFavorites ? "text-red-400 border-red-400" : "text-slate-300"
                  }`}
                  onClick={() => setSavedToFavorites(!savedToFavorites)}
                >
                  <Heart className={`h-4 w-4 mr-2 ${savedToFavorites ? "fill-current" : ""}`} />
                  {savedToFavorites ? "Salvo" : "Salvar"}
                </Button>
              </CardFooter>
            </Card>

            {/* Project Skills */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-50">Tecnologias</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-slate-700/50 text-slate-300 border-slate-600">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
