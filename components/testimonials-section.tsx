"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Carlos Silva",
    location: "Vila Madalena, São Paulo",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "Economizei R$ 15.000 ao reparar vazamentos com o serviço de impermeabilização! A equipe foi profissional e o resultado superou minhas expectativas.",
    service: "Impermeabilização",
    savings: "R$ 15.000",
  },
  {
    id: 2,
    name: "Maria Santos",
    location: "Moema, São Paulo",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "A qualidade da água melhorou drasticamente após a limpeza. Não sentimos mais gosto ou cheiro estranho. Recomendo muito!",
    service: "Limpeza de Caixa d’Água",
    savings: null,
  },
  {
    id: 3,
    name: "João Oliveira",
    location: "Pinheiros, São Paulo",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "O serviço de revestimento em epóxi valeu cada centavo. Minha caixa parece nova e tenho tranquilidade com a garantia de 5 anos.",
    service: "Revestimento Epóxi",
    savings: null,
  },
  {
    id: 4,
    name: "Ana Costa",
    location: "Brooklin, São Paulo",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "O serviço emergencial foi incrível! Consertaram nosso vazamento em apenas 2 dias e evitaram grandes danos estruturais ao prédio.",
    service: "Reparo Emergencial",
    savings: "R$ 25.000",
  },
  {
    id: 5,
    name: "Roberto Lima",
    location: "Itaim Bibi, São Paulo",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "Profissionais, pontuais e detalhistas. O relatório técnico que nos entregaram foi excelente. Com certeza utilizarei os serviços novamente.",
    service: "Manutenção Completa",
    savings: null,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-[#002366]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Depoimentos reais de clientes satisfeitos em toda São Paulo
          </p>

          {/* Selo de Satisfação */}
          <div className="inline-flex items-center bg-gradient-to-r from-[#00C4CC] to-green-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
            <Star className="w-6 h-6 mr-2 fill-current" />
            Mais de 100 Clientes Satisfeitos em 2024
          </div>
        </div>

        {/* Carrossel de Depoimentos */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar e Informações */}
                <div className="flex-shrink-0 text-center md:text-left">
                  <div className="relative w-20 h-20 mx-auto md:mx-0 mb-4">
                    <Image
                      src={currentTestimonial.avatar || "/placeholder.svg"}
                      alt={currentTestimonial.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-[#002366] text-xl mb-1">{currentTestimonial.name}</h3>
                  <p className="text-gray-600 mb-2">{currentTestimonial.location}</p>
                  <div className="flex justify-center md:justify-start mb-2">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="inline-block bg-[#00C4CC] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {currentTestimonial.service}
                  </div>
                </div>

                {/* Conteúdo do Depoimento */}
                <div className="flex-1">
                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4 italic">
                    "{currentTestimonial.text}"
                  </blockquote>

                  {currentTestimonial.savings && (
                    <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                      💰 Economia: {currentTestimonial.savings}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Setas de Navegação */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-[#00C4CC] scale-125" : "bg-white/50 hover:bg-white/70"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
