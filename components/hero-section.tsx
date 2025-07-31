"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Phone, Eye, Check } from "lucide-react"
import Image from "next/image"

const heroImages = [
  {
    image: "/water-box.png",
    title: "Limpeza Profissional de Caixa d'Água",
    features: [
      "Eliminação de 99,9% das bactérias",
      "Produtos 100% ecológicos",
      "Equipe especializada"
    ]
  },
  {
    image: "/water-box.png",
    title: "Impermeabilização Premium",
    features: [
      "Garantia de 5 anos",
      "Materiais de alta qualidade",
      "Prevenção de vazamentos"
    ]
  },
  {
    image: "/water-box.png",
    title: "Revestimento Protetor",
    features: [
      "Aumenta vida útil da caixa",
      "Proteção contra corrosão",
      "Manutenção facilitada"
    ]
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [typewriterText, setTypewriterText] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const sliderRef = useRef(null)
  const fullText = "100% Limpa e Segura!"
  const typewriterTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Limpa o timer quando o componente é desmontado
  useEffect(() => {
    return () => {
      if (typewriterTimerRef.current) {
        clearInterval(typewriterTimerRef.current)
      }
    }
  }, [])

  // Efeito de typewriter
  const startTypewriter = () => {
    // Limpa qualquer timer existente
    if (typewriterTimerRef.current) {
      clearInterval(typewriterTimerRef.current)
    }

    // Reseta o estado
    setTypewriterText("")
    setIsTypingComplete(false)

    let index = 0
    typewriterTimerRef.current = setInterval(() => {
      if (index < fullText.length) {
        setTypewriterText(fullText.slice(0, index + 1))
        index++
      } else {
        setIsTypingComplete(true)
        if (typewriterTimerRef.current) {
          clearInterval(typewriterTimerRef.current)
        }
      }
    }, 80)
  }

  // Auto-rotation effect
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  // Inicia o typewriter quando o slide muda
  useEffect(() => {
    startTypewriter()
  }, [currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide()
    }

    if (touchStart - touchEnd < -50) {
      prevSlide()
    }
  }

  return (
    <section
      className="relative h-screen overflow-hidden"
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider de Fundo */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
          >
            <div className="relative h-full w-full">
              <Image
                src={image.image || "/placeholder.svg"}
                alt={image.title}
                fill
                className="object-cover"
                priority={index === currentSlide}
              />
            </div>
          </div>
        ))}

        {/* Sobreposição com Gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/40" />
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 h-full flex items-center text-center text-white px-4 md:px-8 pt-20">
        <div className="max-w-6xl mx-auto space-y-6 w-full">


          {/* Subtítulo e features */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white/90">
              {heroImages[currentSlide].title}
            </h2>

            {/* Título com efeito máquina de escrever */}
            <div className="mb-6 md:mb-8">
              <h5 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <span className="inline-block min-h-[1.2em] bg-gradient-to-r from-[#00C4CC] to-white bg-clip-text text-transparent">
                  {typewriterText}
                  <span className={`inline-block w-1 h-8 md:h-10 bg-[#00C4CC] ml-1 align-middle ${isTypingComplete ? 'opacity-0' : 'animate-pulse'}`}></span>
                </span>
              </h5>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {heroImages[currentSlide].features.map((feature, index) => (
                <li key={index} className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Check className="w-4 h-4 text-[#00C4CC] flex-shrink-0" />
                  <span className="text-sm md:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Botões CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#00C4CC] to-[#002366] hover:from-[#00A8B0] hover:to-[#001a4d] text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              <span>Ligar agora!</span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-[#002366] px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 bg-transparent group"
            >
              <Eye className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              <span>Conhecer mais</span>
            </Button>
          </div>

          {/* Indicadores de Slide */}
          <div className="flex justify-center space-x-2 pt-8 md:pt-12">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white ${index === currentSlide
                  ? "bg-[#00C4CC] scale-125"
                  : "bg-white/50 hover:bg-white/70"
                  }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}