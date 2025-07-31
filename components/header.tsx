"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X, Droplets } from "lucide-react"
import Link from "next/link"

const navigation = [
  { name: "Início", href: "/" },
  { name: "Serviços", href: "#services" },
  { name: "Galeria", href: "#gallery" },
  { name: "Sobre", href: "#about" },
  { name: "Blog", href: "#blog" },
  { name: "Contato", href: "#contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-[#00C4CC] to-[#002366] rounded-full flex items-center justify-center">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#002366]">Talidani Revesthig</h1>
              <p className="text-xs text-gray-600">+15 Anos entregando resultados</p>
            </div>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#00C4CC] font-medium transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Botão CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">Ligue Agora</p>
              <p className="text-lg font-bold text-[#002366]">(11) 99999-9999</p>
            </div>
            <Button className="bg-gradient-to-r from-[#00C4CC] to-[#002366] hover:from-[#00A8B0] hover:to-[#001a4d] text-white px-6 py-2 rounded-full">
              <Phone className="w-4 h-4 mr-2" />
              Orçamento Grátis
            </Button>
          </div>

          {/* Botão Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#00C4CC] transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[#00C4CC] font-medium transition-colors duration-300 px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4 border-t border-gray-200">
                <Button className="w-full bg-gradient-to-r from-[#00C4CC] to-[#002366] hover:from-[#00A8B0] hover:to-[#001a4d] text-white py-2 rounded-full">
                  <Phone className="w-4 h-4 mr-2" />
                  (11) 99999-9999
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
