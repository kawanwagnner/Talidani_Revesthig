"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de solicitar um orçamento gratuito para serviços de caixa d'água."
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 "
      size="lg"
    >
      <MessageCircle className="w-6 h-6 mr-2" />
      <span className="hidden sm:inline">Fazer Orçamento</span>
      <span className="sm:hidden">Orçamento</span>
    </Button>
  )
}
