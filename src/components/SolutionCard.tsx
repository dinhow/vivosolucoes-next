
import { ElementType } from 'react';

interface SolutionCardProps {
  icon: ElementType;
  title: string;
  description: string;
  link: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon: Icon, title, description, link }) => (
  <div className="flex flex-col items-center p-6 bg-purple-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <Icon className="text-4xl mb-4 text-[#6b21a8]" />
    <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
    <p className="text-sm text-gray-600 mb-4">{description}</p>
    <a href={link} className="w-full bg-[#6b21a8] text-white py-2 px-4 rounded-full hover:bg-[#581c87] transition-colors duration-300">
      Quero saber mais
    </a>
  </div>
);

export default SolutionCard;
