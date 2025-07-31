"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, MessageCircle, Droplets, Shield, Award, Clock } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de mais informações sobre os serviços."
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <footer className="bg-[#002366] text-white">
      {/* Conteúdo Principal do Rodapé */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Informações da Empresa */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-[#00C4CC] to-white rounded-full flex items-center justify-center">
                <Droplets className="w-6 h-6 text-[#002366]" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Talidani Revesthig</h3>
                <p className="text-sm text-gray-300">+15 Anos entregando resultados</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Mais de 20 anos garantindo água pura para famílias em São Paulo. Serviços profissionais, confiáveis e com resultados garantidos.
            </p>
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-[#00C4CC] rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-[#00C4CC] rounded-full flex items-center justify-center">
                <Award className="w-4 h-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-[#00C4CC] rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#00C4CC]">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Nossos Serviços
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Galeria de Projetos
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Blog & Dicas
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#00C4CC]">Nossos Serviços</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Limpeza Profissional</span>
              </li>
              <li>
                <span className="text-gray-300">Revestimento Epóxi</span>
              </li>
              <li>
                <span className="text-gray-300">Impermeabilização</span>
              </li>
              <li>
                <span className="text-gray-300">Reparos Emergenciais</span>
              </li>
              <li>
                <span className="text-gray-300">Planos de Manutenção</span>
              </li>
              <li>
                <span className="text-gray-300">Consultas Gratuitas</span>
              </li>
            </ul>
          </div>

          {/* Informações de Contato */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#00C4CC]">Fale Conosco</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#00C4CC] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">(11) 99999-9999</p>
                  <p className="text-gray-300 text-sm">Emergencial 24h</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#00C4CC] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">contato@watertankpro.com.br</p>
                  <p className="text-gray-300 text-sm">Resposta Rápida</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#00C4CC] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">São Paulo e Região</p>
                  <p className="text-gray-300 text-sm">Cobertura em 50km</p>
                </div>
              </div>

              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-full mt-4"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Barra Inferior */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300">© {new Date().getFullYear()} Water Tank Pro. Todos os direitos reservados.</p>
              <p className="text-sm text-gray-400">CNPJ: 12.345.678/0001-90 | Empresa Licenciada e Segurada</p>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors duration-300">
                Política de Privacidade
              </Link>
              <Link href="/warranty" className="text-gray-300 hover:text-white text-sm transition-colors duration-300">
                Termos de Garantia
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">Disponível 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
