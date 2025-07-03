import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "CollabSphere - Conecte Ideias e Talentos",
  description: "Plataforma para conectar pessoas com ideias a pessoas com habilidades para executá-las",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${inter.className}`}>{children}</body>
    </html>
  )
}
