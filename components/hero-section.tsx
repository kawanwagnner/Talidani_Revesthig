"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Phone, Eye } from "lucide-react"
import Image from "next/image"

const heroImages = [
  {
    before: "/suja.png",
    after: "/water-box2.png",
    title: "Complete Tank Cleaning",
  },
  {
    before: "/placeholder.svg?height=600&width=800",
    after: "/placeholder.svg?height=600&width=800",
    title: "Professional Waterproofing",
  },
  {
    before: "/placeholder.svg?height=600&width=800",
    after: "/placeholder.svg?height=600&width=800",
    title: "Protective Coating",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [typewriterText, setTypewriterText] = useState("")
  const fullText = "Água 100% Limpa e Segura com Garantia de 5 Anos!"

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    let index = 0
    const typewriterTimer = setInterval(() => {
      if (index < fullText.length) {
        setTypewriterText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typewriterTimer)
      }
    }, 100)
    return () => clearInterval(typewriterTimer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slider de Fundo */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <div className="grid grid-cols-2 h-full">
              <div className="relative">
                <Image src={image.before || "/placeholder.svg"} alt="Antes da limpeza" fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ANTES
                </div>
              </div>
              <div className="relative">
                <Image src={image.after || "/placeholder.svg"} alt="Depois da limpeza" fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  DEPOIS
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Sobreposição com Gradiente Escuro */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Setas de Navegação */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Conteúdo */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="inline-block min-h-[1.2em]">
              {typewriterText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Serviços especializados que eliminam bactérias, previnem vazamentos e aumentam a vida útil da sua caixa d’água.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#00C4CC] to-[#002366] hover:from-[#00A8B0] hover:to-[#001a4d] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Ligar agora!            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-[#002366] px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <Eye className="w-5 h-5 mr-2" />
              Conhecer mais...
            </Button>
          </div>

          {/* Indicadores de Slide */}
          <div className="flex justify-center space-x-2 pt-8">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-[#00C4CC] scale-125" : "bg-white/50 hover:bg-white/70"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
