import Header from '@/components/Header';
import SolutionCard from '@/components/SolutionCard';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import { FaRocket, FaLaptopCode, FaHeadset, FaChartLine, FaLightbulb } from 'react-icons/fa';

const solutions = [
  {
    icon: FaRocket,
    title: 'Internet de Alta Performance',
    description: 'Fibra e Link Dedicado para seu negócio nunca parar.',
    link: 'https://api.whatsapp.com/send?phone=554195058450&text=Olá!%20Visitei%20sua%20página%20e%20gostaria%20de%20receber%20mais%20informações%20sobre%20os%20planos%20de%20Internet%20Fibra%20e%20Link%20Dedicado%20para%20minha%20empresa.',
  },
  {
    icon: FaLaptopCode,
    title: 'Tecnologia e Equipamentos',
    description: 'Vivo Tech com aluguel e aparelhos com desconto.',
    link: 'https://api.whatsapp.com/send?phone=554195058450&text=Olá!%20Visitei%20sua%20página%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20licenças%20Microsoft%20e%20Google%20para%20empresas.',
  },
  {
    icon: FaHeadset,
    title: 'Comunicação Eficiente',
    description: 'Fixo Virtual (Vivo Voz Negócio) para sua equipe conectada.',
    link: 'https://api.whatsapp.com/send?phone=554195058450&text=Olá!%20Visitei%20sua%20página%20e%20tenho%20interesse%20em%20conhecer%20o%20Vivo%20Voz%20Negócio%20(Fixo%20Virtual)%20para%20a%20minha%20equipe.',
  },
  {
    icon: FaChartLine,
    title: 'Otimização e Produtividade',
    description: 'Licenças Microsoft/Google para impulsionar sua equipe.',
    link: 'https://api.whatsapp.com/send?phone=554195058450&text=Olá!%20Visitei%20sua%20página%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20licenças%20Microsoft%20e%20Google%20para%20empresas.',
  },
  {
    icon: FaLightbulb,
    title: 'Economia para o Seu Negócio',
    description: 'Energia Vivo: Reduza sua conta em até 30%.',
    link: 'https://api.whatsapp.com/send?phone=554195058450&text=Olá!%20Visitei%20sua%20página%20e%20gostaria%20de%20receber%20uma%20análise%20sobre%20a%20solução%20Energia%20Vivo%20e%20a%20economia%20que%20ela%20pode%20gerar%20para%20minha%20empresa.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl p-6 sm:p-10 text-center">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
        <Cta />
        <Footer />
      </div>
    </div>
  );
}
