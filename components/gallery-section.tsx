"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    id: 1,
    category: "cleaning",
    before: "/services/before-1.jpg",
    after: "/services/after-1.jpg",
    title: "Limpeza Residencial de Caixa d'Água",
    location: "Vila Madalena, São Paulo",
    beforeText: "Acúmulo de Algas e Detritos",
    afterText: "Impecável e Sanitizada",
  },
  {
    id: 2,
    category: "waterproofing",
    before: "/services/before-2.jpg",
    after: "/services/after-2.jpg",
    title: "Reparo Emergencial de Vazamento",
    location: "Moema, São Paulo",
    beforeText: "Rachaduras e Vazamentos Graves",
    afterText: "Completamente Vedado",
  },
  {
    id: 3,
    category: "coating",
    before: "/services/before-3.jpg",
    after: "/services/after-3.jpg",
    title: "Aplicação de Revestimento Industrial",
    location: "Brooklin, São Paulo",
    beforeText: "Ferrugem e Corrosão",
    afterText: "Protegido com Epóxi",
  },
  {
    id: 4,
    category: "cleaning",
    before: "/services/before-4.jpg",
    after: "/services/after-4.jpg",
    title: "Tratamento de Contaminação Bacteriana",
    location: "Pinheiros, São Paulo",
    beforeText: "Contaminação Bacteriana",
    afterText: "Limpeza de Padrão Hospitalar",
  },
  {
    id: 5,
    category: "waterproofing",
    before: "/services/before-1.jpg",
    after: "/services/after-5.jpg",
    title: "Impermeabilização de Fundação",
    location: "Itaim Bibi, São Paulo",
    beforeText: "Danos por Água",
    afterText: "Totalmente Protegido",
  },
  {
    id: 6,
    category: "coating",
    before: "/services/before-2.jpg",
    after: "/services/after-6.jpg",
    title: "Restauração de Revestimento",
    location: "Jardins, São Paulo",
    beforeText: "Superfície Deteriorada",
    afterText: "Nova Camada Protetora",
  },
]

const categories = [
  { id: "all", label: "Todos os Projetos" },
  { id: "cleaning", label: "Limpeza" },
  { id: "waterproofing", label: "Impermeabilização" },
  { id: "coating", label: "Revestimento" },
]

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-4">Transformações Reais, Resultados Reais</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Veja os resultados impressionantes de antes e depois dos nossos serviços profissionais
          </p>

          {/* Botões de Filtro */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${activeCategory === category.id
                  ? "bg-[#002366] text-white hover:bg-[#001a4d]"
                  : "border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white"
                  }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Grade Masonry */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="break-inside-avoid relative group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="relative">
                  {/* Imagens Antes/Depois */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="grid grid-cols-2 h-full">
                      <div className="relative">
                        <Image src={project.before || "/placeholder.svg"} alt="Antes" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                          ANTES
                        </div>
                      </div>
                      <div className="relative">
                        <Image src={project.after || "/placeholder.svg"} alt="Depois" fill className="object-cover" />
                        <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                          DEPOIS
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Overlay ao passar o mouse */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${hoveredProject === project.id ? "opacity-100" : "opacity-0"
                      }`}
                  >
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="font-semibold text-red-300">{project.beforeText}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-green-300">{project.afterText}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-[#002366] mb-1">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#00C4CC] to-[#002366] hover:from-[#00A8B0] hover:to-[#001a4d] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Solicitar um Serviço Similar
          </Button>
        </div>
      </div>
    </section>
  )
}
