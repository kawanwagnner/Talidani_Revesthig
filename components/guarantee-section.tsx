import { Shield, Award, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const guarantees = [
  {
    icon: Shield,
    title: "Garantia de 5 Anos",
    description: "Garantia completa em todos os nossos serviços de impermeabilização e revestimento",
    color: "text-[#00C4CC]",
  },
  {
    icon: Award,
    title: "Produtos Certificados pela ABNT",
    description: "Utilizamos apenas materiais premium que atendem aos padrões técnicos brasileiros",
    color: "text-[#002366]",
  },
  {
    icon: Users,
    title: "Equipe Treinada e Segurada",
    description: "Profissionais totalmente qualificados com cobertura de seguro completa",
    color: "text-[#00C4CC]",
  },
]

export default function GuaranteeSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-4">Sua Tranquilidade é Nossa Prioridade</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Três pilares que garantem um serviço excepcional e resultados duradouros
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {guarantees.map((guarantee, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <guarantee.icon className={`w-10 h-10 ${guarantee.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-[#002366] mb-4">{guarantee.title}</h3>
                <p className="text-gray-600 leading-relaxed">{guarantee.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
