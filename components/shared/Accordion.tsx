'use client'
import { useState, FC } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AppAccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: FC<AppAccordionProps> = ({ 
  items, 
  className = "" 
}) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className={`w-full space-y-4 ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div 
            key={item.id} 
            className="border border-(--color-border) rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:shadow-sm"
          >
            {/* Trigger Header */}
            <button
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between p-6 text-left cursor-pointer group outline-none"
            >
              <span className={`font-bold text-lg transition-colors duration-300 ${
                isOpen ? "text-(--color-primary-blue)" : "text-(--color-text-dark) group-hover:text-(--color-primary-blue)"
              }`}>
                {item.question}
              </span>
              
              <FaChevronDown 
                className={`text-(--color-text-light) transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-(--color-primary-blue)" : "rotate-0"
                }`} 
              />
            </button>

            {/* Expandable Content Area */}
            <div 
              className={`transition-all duration-300 ease-in-out px-6 overflow-hidden ${
                isOpen ? "max-h-125 pb-6 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-(--color-text-light) leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};