"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Droplets, Shield, Wrench, ArrowRight } from "lucide-react"
import Image from "next/image"

const services = [
  {
    id: "cleaning",
    icon: Droplets,
    title: "Limpeza Profissional",
    subtitle: "Limpeza e Higienização em Reservatórios de Água Potável",
    description: "Remoção completa de lodo, bactérias e detritos utilizando equipamentos avançados",
    image: "https://www.universoambiental.eco.br/images/1602294481-limpeza%20de%20reservat%C3%B3rio%20de%20%C3%A1gua-min.jpg",
    details: {
      process: [
        "Drenagem completa da água e descarte de resíduos",
        "Limpeza com jato de alta pressão e equipamentos especializados",
        "Eliminação de bactérias com desinfetantes de padrão hospitalar",
        "Inspeção final e teste de qualidade da água",
      ],
      benefits: [
        "Elimina 99,9% de bactérias e contaminantes",
        "Melhora o sabor e o odor da água",
        "Previne doenças transmitidas pela água",
        "Aumenta a vida útil da caixa",
      ],
      duration: "4-6 horas",
      warranty: "6 meses",
    },
  },
  {
    id: "coating",
    icon: Shield,
    title: "Revestimento Higiênico",
    subtitle: "Proteção na parede do reservatório dando-lhe mais Vida útil",
    description: "Revestimento com Âncoragem Retirando o Contato da Água com a Parede",
    image: "https://oicramengenharia.com.br/wp-content/uploads/2023/09/Impermeabilizacao-Caixa-Dagua-1-e1695061212774.jpg",
    details: {
      process: [
        "Preparação e limpeza da superfície",
        "Âncoragem",
        "Sistema de aplicação do revestimento higiênico no local com solda, segundo o tamanho.",
        "Controle de qualidade verificando a aderência do revestimento",
      ],
      benefits: [
        "A Água não tem contato com a parede",
        "Mantém a qualidade da água potável",
        "Aumenta a vida útil da caixa",
      ],
      duration: "1-2 dias",
      warranty: "1 ano",
    },
  },
  {
    id: "waterproofing",
    icon: Wrench,
    title: "Impermeabilização Completa",
    subtitle: "Solução definitiva para vazamentos",
    description: "Solução definitiva para vazamentos e infiltrações com materiais de longa durabilidade",
    image: "https://sanfercaicara.com.br/wp-content/uploads/2016/05/Impermeabilizacao-de-Caixa-de-Agua-em-Santos.jpg",
    details: {
      process: [
        "Detecção de vazamentos e avaliação estrutural",
        "Reparo de trincas estruturais",
        "Havendo necessidade, proteção mecânica",
        "Teste de estanqueidade e validação",
      ],
      benefits: [
        "Elimina todos os vazamentos de água",
        "Previne danos estruturais",
        "Reduz desperdício de água e custos",
        "Valoriza o imóvel",
      ],
      duration: "3-5 dias",
      warranty: "5 anos",
    },
  },
]

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null)

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-4">
            Serviços Especializados que Entregam Resultados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Três soluções completas para manter sua caixa d'água em perfeitas condições
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-0 shadow-lg overflow-hidden"
              onClick={() => setSelectedService(service)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-[#00C4CC] rounded-full flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#002366] mb-2">{service.title}</h3>
                <p className="text-[#00C4CC] font-semibold mb-3">{service.subtitle}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                <div className="flex items-center text-[#002366] font-semibold group-hover:text-[#00C4CC] transition-colors duration-300">
                  <span>Saiba Mais</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal de Detalhes do Serviço */}
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedService && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold text-[#002366] flex items-center">
                    <selectedService.icon className="w-8 h-8 text-[#00C4CC] mr-3" />
                    {selectedService.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Image
                      src={selectedService.image}
                      alt={selectedService.title}
                      width={400}
                      height={300}
                      className="rounded-lg w-full h-64 object-cover"
                    />

                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#002366] mb-1">Duração</h4>
                        <p className="text-gray-600">{selectedService.details.duration}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#002366] mb-1">Garantia</h4>
                        <p className="text-gray-600">{selectedService.details.warranty}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-[#002366] mb-3">Nosso Processo</h4>
                      <ul className="space-y-2">
                        {selectedService.details.process.map((step, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-6 h-6 bg-[#00C4CC] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                              {index + 1}
                            </div>
                            <span className="text-gray-700">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-[#002366] mb-3">Principais Benefícios</h4>
                      <ul className="space-y-2">
                        {selectedService.details.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-[#00C4CC] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-[#00C4CC] to-[#002366] hover:from-[#00A8B0] hover:to-[#001a4d] text-white py-3 text-lg font-semibold rounded-full"
                      onClick={() => setSelectedService(null)}
                    >
                      Solicitar Este Serviço
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
