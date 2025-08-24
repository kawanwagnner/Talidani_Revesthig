"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Gerar mensagem para WhatsApp
    const whatsappMessage = `Olá vim pelo site! Gostaria de solicitar um orçamento:

Nome: ${formData.name}
Telefone: ${formData.phone}
Serviço: ${formData.service}
Mensagem: ${formData.message}`

  const whatsappUrl = `https://wa.me/5511954566247?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-4">Solicite Seu Orçamento Gratuito Hoje</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quer garantir água limpa e segura para sua família? Fale agora com nossos especialistas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Formulário de Contato */}
          <Card className="shadow-2xl border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[#002366] mb-6">Solicite Seu Orçamento Gratuito</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo *</label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#00C4CC] transition-colors duration-300"
                    placeholder="Digite seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone *</label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#00C4CC] transition-colors duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tipo de Serviço *</label>
                  <Select onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#00C4CC] transition-colors duration-300">
                      <SelectValue placeholder="Selecione o serviço desejado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cleaning">Limpeza Profissional</SelectItem>
                      <SelectItem value="waterproofing">Impermeabilização</SelectItem>
                      <SelectItem value="coating">Revestimento Epóxi</SelectItem>
                      <SelectItem value="emergency">Reparo Emergencial</SelectItem>
                      <SelectItem value="maintenance">Manutenção Completa</SelectItem>
                      <SelectItem value="consultation">Consulta Gratuita</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Detalhes Adicionais</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#00C4CC] transition-colors duration-300 min-h-[120px]"
                    placeholder="Conte-nos sobre o tamanho da sua caixa d'água, problemas atuais ou requisitos específicos..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00C4CC] to-[#002366] hover:from-[#00A8B0] hover:to-[#001a4d] text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar pelo WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informações de Contato & Mapa */}
          <div className="space-y-8">
            {/* Informações de Contato */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#002366] mb-6">Informações de Contato</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#00C4CC] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#002366] mb-1">WhatsApp</h4>
                      <p className="text-gray-600">(11) 95456-6247</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#00C4CC] rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#002366] mb-1">E-mail</h4>
                      <p className="text-gray-600">oscarzerga@hotmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#00C4CC] rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#002366] mb-1">Área de Atendimento</h4>
                      <p className="text-gray-600">São Paulo e regiões próximas</p>
                      <p className="text-gray-600">Cobertura em um raio de 150km</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#00C4CC] rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#002366] mb-1">Horário de Atendimento</h4>
                      <p className="text-gray-600">Seg-Sex: 08:00 - 17:00</p>
                      <p className="text-gray-600">Sáb: 08:00 - 13:00</p>
                      <p className="text-red-600 font-semibold">Atendimento Emergencial Disponível</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mapa da Área de Atendimento */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#002366] mb-6">Nossa Área de Atendimento</h3>

                <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-[#00C4CC] mx-auto mb-2" />
                      <p className="text-[#002366] font-semibold">Região Metropolitana de São Paulo</p>
                      <p className="text-gray-600">Cobertura em um raio de 150km</p>
                    </div>
                  </div>

                  {/* Visualização do Círculo de Cobertura */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-4 border-[#00C4CC] border-dashed rounded-full opacity-50 animate-pulse"></div>
                  </div>
                </div>

                <div className="mt-4 text-sm text-gray-600">
                  <p className="mb-2">Atendemos com orgulho:</p>
                  <div className="grid grid-cols-2 gap-2">
                    <p>• Santo André</p>
                    <p>• São Bernardo</p>
                    <p>• São Caetano</p>
                    <p>• Baixada Santista</p>
                    <p>• Praia Grande</p>
                    <p>• Guarujá</p>
                  </div>
                  <p className="mt-2 text-[#00C4CC] font-semibold">+ Muitas outras localidades</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
