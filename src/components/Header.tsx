
import Image from 'next/image';

const Header = () => (
  <div className="mb-8">
    <Image src="/vivo_solucoes_1.png" alt="Vivo Soluções Logo" width={192} height={192} className="mx-auto mb-2 h-48 w-auto" />
    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
      Soluções Vivo para Sua Empresa
    </h1>
    <p className="text-lg sm:text-xl text-gray-600 mb-4">
      Conecte, Otimize e Economize.
    </p>
    <p className="text-gray-500">
      Descubra como a Vivo Soluções pode impulsionar seu negócio com conectividade de alta performance, tecnologia atualizada e economia real.
    </p>
  </div>
);

export default Header;
