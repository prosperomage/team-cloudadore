 import { ResourceItem } from '@/types';
import Image from 'next/image';

export const ResourceCard: React.FC<{ item: ResourceItem }> = ({ item }) => (
  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 border border-(--color-border) flex flex-col h-full">
    <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden bg-gray-100">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform group-hover:scale-105"
      />
    </div>
    
    <div className="flex items-center justify-between mb-3 text-xs font-medium uppercase tracking-wider">
      <span className="text-(--color-secondary-blue) bg-blue-50 px-2 py-1 rounded-md">
        {item.category}
      </span>
      <span className="text-(--color-text-light)">{item.date}</span>
    </div>

    <h3 className="font-bold text-(--color-text-dark) text-lg mb-2 line-clamp-2">
      {item.title}
    </h3>
    
    <p className="text-(--color-text-light) text-sm leading-relaxed mb-6 grow line-clamp-3">
      {item.description}
    </p>

    <button className="w-full py-3 bg-(--color-primary-blue) text-white rounded-xl font-bold hover:bg-(--color-secondary-blue) transition-colors active:scale-95">
      Access Resource
    </button>
  </div>
);