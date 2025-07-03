"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"
import { UserPlus, Edit, MapPin, Calendar, LinkIcon } from "lucide-react"

interface User {
  id: number
  name: string
  headline: string
  avatar: string
  bannerImage: string
  bio: string
  skills: {
    design: string[]
    technical: string[]
    soft: string[]
  }
  projects: Array<{
    id: number
    title: string
    description: string
    creator: { name: string; avatar: string }
    skills: string[]
    status: string
  }>
  isOwnProfile: boolean
}

interface UserProfileProps {
  user: User
}

export function UserProfile({ user }: UserProfileProps) {
  const [isFollowing, setIsFollowing] = useState(false)

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
    <div className="container mx-auto px-4 py-8">
      {/* Profile Header Card */}
      <Card className="bg-slate-800 border-slate-700 mb-8 overflow-hidden">
        {/* Banner Image */}
        <div className="relative h-48 bg-gradient-to-r from-blue-600 to-purple-600">
          <img
            src={user.bannerImage || "/placeholder.svg"}
            alt="Banner do perfil"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <CardContent className="relative px-6 pb-6">
          {/* Avatar */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between -mt-16 relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-end space-y-4 sm:space-y-0 sm:space-x-6">
              <Avatar className="h-32 w-32 border-4 border-slate-800 bg-slate-800">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback className="bg-slate-700 text-slate-50 text-2xl">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="space-y-2 pb-2">
                <h1 className="text-3xl font-bold text-slate-50">{user.name}</h1>
                <p className="text-slate-300 text-lg max-w-2xl">{user.headline}</p>
                <div className="flex items-center space-x-4 text-slate-400 text-sm">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    São Paulo, Brasil
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Membro desde Jan 2024
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3 mt-4 sm:mt-0">
              {user.isOwnProfile ? (
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                  <Edit className="h-4 w-4 mr-2" />
                  Editar Perfil
                </Button>
              ) : (
                <>
                  <Button
                    variant="outline"
                    className={`border-slate-600 hover:bg-slate-700 ${
                      isFollowing ? "text-blue-400 border-blue-400" : "text-slate-300"
                    }`}
                    onClick={() => setIsFollowing(!isFollowing)}
                  >
                    <UserPlus className="h-4 w-4 mr-2" />
                    {isFollowing ? "Conectado" : "Conectar"}
                  </Button>
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                    <LinkIcon className="h-4 w-4 mr-2" />
                    Compartilhar
                  </Button>
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Content Tabs */}
      <Tabs defaultValue="portfolio" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-slate-800 border-slate-700 mb-8">
          <TabsTrigger
            value="portfolio"
            className="data-[state=active]:bg-slate-700 data-[state=active]:text-slate-50 text-slate-400"
          >
            Portfólio de Projetos
          </TabsTrigger>
          <TabsTrigger
            value="skills"
            className="data-[state=active]:bg-slate-700 data-[state=active]:text-slate-50 text-slate-400"
          >
            Habilidades
          </TabsTrigger>
          <TabsTrigger
            value="about"
            className="data-[state=active]:bg-slate-700 data-[state=active]:text-slate-50 text-slate-400"
          >
            Sobre
          </TabsTrigger>
        </TabsList>

        {/* Portfolio Tab */}
        <TabsContent value="portfolio">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {user.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        {/* Skills Tab */}
        <TabsContent value="skills">
          <div className="space-y-8">
            {/* Design Skills */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-50 flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3" />
                  Design & UX
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {user.skills.design.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2 text-sm font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Technical Skills */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-50 flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3" />
                  Técnicas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {user.skills.technical.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-green-500/20 text-green-300 border-green-500/30 px-4 py-2 text-sm font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-50 flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {user.skills.soft.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2 text-sm font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* About Tab */}
        <TabsContent value="about">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-slate-50">Sobre {user.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-invert prose-slate max-w-none">
                {user.bio.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-slate-300 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
