'use client'
import { useState, useMemo } from 'react';
import { ResourceCard } from './ResourceCard';
import { ResourceGalleryProps } from '@/types';

export const ResourceGallery: React.FC<ResourceGalleryProps> = ({ 
  items, 
  itemsPerPage = 4, 
  title,
  allTabLabel,
  categoryMapping = {} 
}) => {
  // 1. State for both filtering and pagination
  const [activeTab, setActiveTab] = useState(allTabLabel);
  const [currentPage, setCurrentPage] = useState(1);

  // 2. Extract raw categories from data
  const rawCategories = useMemo(() => 
    Array.from(new Set(items.map(i => i.category))), 
    [items]
  );

  // 3. Filter logic
  const filteredItems = useMemo(() => {
    if (activeTab === allTabLabel) return items;
    
    return items.filter(item => {
      const displayLabel = categoryMapping[item.category] || item.category;
      return displayLabel === activeTab;
    });
  }, [items, activeTab, allTabLabel, categoryMapping]);

  // 4. Pagination math
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredItems.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredItems, currentPage, itemsPerPage]);

  // 5. Helper to change tabs and reset page
  const handleTabChange = (label: string) => {
    setActiveTab(label);
    setCurrentPage(1);
  };

  return (
    <section className="py-20 px-6 bg-(--color-bg-light) min-h-screen">
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-(--color-text-dark)">
            {title}
          </h2>
        )}

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => handleTabChange(allTabLabel)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${
              activeTab === allTabLabel
                ? "bg-(--color-primary-blue) text-white border-(--color-primary-blue) shadow-md"
                : "bg-white text-(--color-text-light) border-(--color-border) hover:text-(--color-primary-blue)"
            }`}
          >
            {allTabLabel}
          </button>

          {rawCategories.map((rawCat) => {
            const displayLabel = categoryMapping[rawCat] || rawCat;
            return (
              <button
                key={rawCat}
                onClick={() => handleTabChange(displayLabel)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${
                  activeTab === displayLabel
                    ? "bg-(--color-primary-blue) text-white border-(--color-primary-blue) shadow-md"
                    : "bg-white text-(--color-text-light) border-(--color-border) hover:text-(--color-primary-blue)"
                }`}
              >
                {displayLabel}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((item) => (
            <ResourceCard key={item.id} item={item} />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-20">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-6 py-2 rounded-xl border border-(--color-border) bg-white disabled:opacity-30 font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Previous
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-xl border text-sm font-bold transition-all cursor-pointer ${
                    currentPage === i + 1
                      ? "bg-(--color-text-dark) text-white border-(--color-text-dark)"
                      : "bg-white text-(--color-text-light) border-(--color-border) hover:border-(--color-text-dark)"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-6 py-2 rounded-xl border border-(--color-border) bg-white disabled:opacity-30 font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};