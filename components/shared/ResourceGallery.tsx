'use client'
import { useState, useMemo } from 'react';
import { ResourceCard } from './ResourceCard';
import { ResourceGalleryProps } from '@/types';

export const ResourceGallery: React.FC<ResourceGalleryProps> = ({ 
  items, 
  itemsPerPage = 6, 
  title = "Resources" 
}) => {
  const [activeTab, setActiveTab] = useState('All Resources');
  const [currentPage, setCurrentPage] = useState(1);

  // 1. Get unique categories
  const categories = useMemo(() => 
    ['All Resources', ...Array.from(new Set(items.map(i => i.category)))], 
    [items]
  );

  // 2. Filter logic
  const filteredItems = useMemo(() => {
    setCurrentPage(1); // Reset page when filtering
    return activeTab === 'All Resources' 
      ? items 
      : items.filter(i => i.category === activeTab);
  }, [items, activeTab]);

  // 3. Pagination logic
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="py-20 px-6 bg-(--color-bg-light) min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-(--color-text-dark)">
          {title}
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border shadow-sm ${
                activeTab === category
                  ? "bg-(--color-primary-blue) text-white border-(--color-primary-blue) scale-105"
                  : "bg-white text-(--color-text-light) border-(--color-border) hover:border-(--color-primary-blue) hover:text-(--color-primary-blue)"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((item, index) => (
            <ResourceCard key={`${item.title}-${index}`} item={item} />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-20">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-6 py-2 rounded-xl border border-(--color-border) bg-white disabled:opacity-30 font-semibold"
            >
              Previous
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-xl border text-sm font-bold transition-all ${
                    currentPage === i + 1
                      ? "bg-(--color-text-dark) text-white border-(--color-text-dark)"
                      : "bg-white text-(--color-text-light) border-(--color-border)"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-6 py-2 rounded-xl border border-(--color-border) bg-white disabled:opacity-30 font-semibold"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};