"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Send } from "lucide-react"

interface Comment {
  id: number
  author: {
    name: string
    avatar: string
  }
  content: string
  createdAt: string
}

interface ProjectDiscussionProps {
  comments: Comment[]
}

export function ProjectDiscussion({ comments }: ProjectDiscussionProps) {
  const [newComment, setNewComment] = useState("")

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      // Here you would typically send the comment to your API
      console.log("New comment:", newComment)
      setNewComment("")
    }
  }

  return (
    <div className="space-y-6">
      {/* New Comment Form */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <h3 className="text-lg font-medium text-slate-50">Adicionar Comentário</h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Faça uma pergunta ou deixe um comentário sobre o projeto..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="bg-slate-700 border-slate-600 text-slate-50 placeholder:text-slate-400 resize-none"
            rows={3}
          />
          <div className="flex justify-end">
            <Button
              onClick={handleSubmitComment}
              disabled={!newComment.trim()}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              <Send className="h-4 w-4 mr-2" />
              Comentar
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <Card key={comment.id} className="bg-slate-800 border-slate-700">
            <CardContent className="pt-6">
              <div className="flex space-x-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={comment.author.avatar || "/placeholder.svg"} alt={comment.author.name} />
                  <AvatarFallback className="bg-slate-700 text-slate-50">
                    {comment.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-slate-50">{comment.author.name}</span>
                    <span className="text-sm text-slate-400">{formatDate(comment.createdAt)}</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{comment.content}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
