import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pr. Oscar - Limpeza, Revestimento e Impermeabilização Profissional | São Paulo",
  description:
    "Água 100% limpa e segura com garantia de 5 anos! Serviços especializados de limpeza de caixas d'água, revestimento epóxi e impermeabilização em São Paulo. Produtos certificados pela ABNT, equipe treinada e suporte emergencial 24h.",
  keywords:
    "limpeza de caixa d'água São Paulo, impermeabilização com garantia, revestimento epóxi, manutenção de caixa d'água, eliminação de bactérias, reparo de vazamentos, certificado ABNT",
  openGraph: {
    title: "Water Tank Pro - Garantia de 5 Anos em Todos os Serviços",
    description:
      "Serviços profissionais para caixas d'água que eliminam bactérias, previnem vazamentos e aumentam a durabilidade. Atendendo São Paulo com mais de 20 anos de experiência.",
    type: "website",
    locale: "pt_BR",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
