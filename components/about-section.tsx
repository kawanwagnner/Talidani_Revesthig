import { CheckCircle, Clock, FileText, Phone } from "lucide-react"
import Image from "next/image"

const promises = [
  {
    icon: CheckCircle,
    text: "Sem sujeira, limpeza profissional inclusa",
  },
  {
    icon: Clock,
    text: "Sem interrupções na sua rotina diária",
  },
  {
    icon: FileText,
    text: "Relatórios técnicos detalhados fornecidos",
  },
  {
    icon: Phone,
    text: "Suporte emergencial disponível",
  },
]

export default function AboutSection() {
  return (
    <section className="py-20 bg-[#002366]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagem da Equipe */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://img.freepik.com/fotos-premium/um-menino-brinca-com-barquinho-de-papel-no-barril-de-agua-no-jardim_308589-1029.jpg?ga=GA1.1.130564222.1744656216&semt=ais_incoming&w=740&q=80"
                alt="Equipe profissional de limpeza de caixa d'água"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Selos de Certificação */}
            <div className="absolute -bottom-6 -right-3 flex space-x-4">
              <div className="bg-white rounded-full p-4 shadow-lg">
                <Image src="https://cdn-icons-png.flaticon.com/256/6294/6294076.png" alt="Certificado ABNT" width={60} height={60} />
              </div>
              <div className="bg-white rounded-full p-4 shadow-lg">
                <Image src="https://images.vexels.com/media/users/3/145869/isolated/lists/f7e86ad2d567941ec3916da31869506f-emblema-de-oferta-especial.png" alt="Totalmente Segurado" width={60} height={60} />
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-[#00C4CC]">15+ Anos</span> Garantindo Água Pura para Sua Família
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Somos a escolha de confiança para manutenção de caixas d’água em São Paulo, combinando décadas de experiência com tecnologia de ponta para entregar resultados incomparáveis.
              </p>
            </div>

            <div className="space-y-4">
              {promises.map((promise, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00C4CC] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <promise.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300">
                    {promise.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Disponível para emergências</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
