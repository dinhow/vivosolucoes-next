
import Image from 'next/image';

const Header = () => (
  <div className="mb-8">
    <Image src="/vivo_solucoes_1.png" alt="Vivo Soluções Logo" width={192} height={192} className="mx-auto mb-2 h-48 w-auto" />
    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
      A Parceria Tecnológica que seu Negócio Precisa para Crescer.
    </h1>
    <p className="text-lg sm:text-xl text-gray-600 mb-4">
      Soluções Vivo Empresa para todo o Brasil: Conectividade, Produtividade e Economia em um só lugar.
    </p>
  </div>
);

export default Header;
