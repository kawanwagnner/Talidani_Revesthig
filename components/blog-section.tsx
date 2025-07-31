import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Download, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Por que Limpar Sua Caixa d'Água a Cada 6 Meses? (Guia 2024)",
    excerpt: "Descubra os riscos à saúde de negligenciar a manutenção da caixa d’água e conheça a frequência ideal de limpeza.",
    image: "https://irp.cdn-website.com/760fb542/dms3rep/multi/Como-limpar-caixa-d%C3%A1gua.jpg",
    date: "2024-01-15",
    readTime: "5 min de leitura",
    category: "Manutenção",
  },
  {
    id: 2,
    title: "Vazamentos Invisíveis: Como Detectar Antes que Eles Custem Caro",
    excerpt: "Aprenda técnicas profissionais para identificar vazamentos ocultos que podem estar gerando grandes prejuízos.",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=800&auto=format&fit=crop",
    date: "2024-01-10",
    readTime: "7 min de leitura",
    category: "Prevenção",
  },
  {
    id: 3,
    title: "Água Turva? Pode Ser Bactéria – Veja o Que Fazer",
    excerpt: "Entenda os sinais de contaminação da água e as ações imediatas para proteger a saúde da sua família.",
    image: "https://blog.hth.com.br/wp-content/uploads/2023/05/Agua-turva-2.jpg",
    date: "2024-01-05",
    readTime: "4 min de leitura",
    category: "Saúde",
  },
]

export default function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-4">Conhecimento e Dicas de Especialistas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fique por dentro das nossas últimas novidades sobre manutenção e segurança da água
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#00C4CC] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString("pt-BR")}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#002366] mb-3 leading-tight group-hover:text-[#00C4CC] transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-[#002366] font-semibold group-hover:text-[#00C4CC] transition-colors duration-300"
                >
                  <span>Ler Mais</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA E-book */}
        <div className="bg-gradient-to-r from-[#002366] to-[#00C4CC] rounded-2xl p-8 md:p-12 text-center text-white max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-40 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Download className="w-16 h-16 text-white" />
              </div>
            </div>

            <div className="flex-1 text-left">
              <h3 className="text-3xl font-bold mb-4">E-book Gratuito: Guia Completo de Manutenção de Caixas d'Água</h3>
              <p className="text-xl text-gray-200 mb-6">
                Baixe nosso guia completo com 25 páginas de dicas profissionais, cronogramas de manutenção e soluções de problemas.
              </p>

              <Button
                size="lg"
                className="bg-white text-[#002366] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                Baixar Guia Gratuito
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
