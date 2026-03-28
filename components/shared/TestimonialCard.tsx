import { TestimonialData } from '@/types';
import React, { FC } from 'react';

export const TestimonialCard: FC<{ data: TestimonialData }> = ({ data }) => (
  <div className="flex flex-col p-8 md:p-10 rounded-2xl border border-(--color-border) bg-white shadow-sm hover:shadow-md transition-shadow">
    {/* Quote Text */}
    <p className="text-(--color-text-light) leading-relaxed italic mb-8 grow text-sm md:text-base">
      "{data.text}"
    </p>
    
    {/* Author Info */}
    <div className="flex items-center gap-4">
      <div className="h-12 w-12 rounded-full bg-slate-200 overflow-hidden shrink-0">
        {data.avatarUrl ? (
          <img src={data.avatarUrl} alt={data.author} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full bg-linear-to-tr from-slate-300 to-slate-400" />
        )}
      </div>
      <div>
        <h4 className="text-(--color-text-dark) font-bold text-sm md:text-base leading-tight">
          {data.author}
        </h4>
        <p className="text-(--color-text-light) text-xs md:text-sm">
          {data.role}
        </p>
      </div>
    </div>
  </div>
);