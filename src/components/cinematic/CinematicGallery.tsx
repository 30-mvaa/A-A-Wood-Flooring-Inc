import React, { useState } from 'react';
import { ZoomIn, MapPin } from 'lucide-react';
import { galleryData } from '../../data/gallery';
import { GalleryItem } from '../../types';
import { Lightbox } from '../Lightbox';

export const CinematicGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'ALL PROJECTS' },
    { id: 'herringbone', label: 'HERRINGBONE & INLAYS' },
    { id: 'hardwood', label: 'HARDWOOD INSTALLATION' },
    { id: 'refinishing', label: 'DUSTLESS RESTORATION' },
    { id: 'vinyl', label: 'LUXURY VINYL PLANK' },
  ];

  const filteredItems = galleryData.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="gallery" className="py-24 bg-[#0B0B0E] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#C92227] uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C92227]" />
              <span>04 // PROJECT ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              OUR WORK. YOUR INSPIRATION.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-xl font-light">
              Architectural photo portfolio documenting real residential estates, commercial fit-outs, and geometric joinery throughout New York, New Jersey, and Connecticut.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-[#C92227] text-white font-black shadow-[0_0_15px_rgba(201,34,39,0.3)]'
                    : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-black cursor-pointer border border-white/10 hover:border-[#C92227]/50 shadow-card-dark transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-5 text-white" />

              {/* Category Pill */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold uppercase tracking-wider text-[#C92227]">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-9 h-9 rounded-xl bg-[#C92227] text-white flex items-center justify-center shadow-lg">
                  <ZoomIn className="w-4 h-4 font-bold" />
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-base font-bold text-white leading-snug group-hover:text-[#C92227] transition-colors">
                  {item.title}
                </h4>
                <div className="flex items-center space-x-2 text-xs font-mono text-gray-400 mt-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C92227]" />
                  <span>{item.location}</span>
                  {item.woodType && (
                    <>
                      <span>•</span>
                      <span className="text-gray-300">{item.woodType}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        item={selectedItem}
        items={filteredItems}
        onClose={() => setSelectedItem(null)}
        onSelect={(item) => setSelectedItem(item)}
      />
    </section>
  );
};
