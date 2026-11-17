import React, { useState } from 'react';
import { ZoomIn, MapPin } from 'lucide-react';
import { galleryData } from '../data/gallery';
import { GalleryItem } from '../types';
import { Lightbox } from './Lightbox';

export const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'hardwood', label: 'Hardwood' },
    { id: 'herringbone', label: 'Herringbone & Custom' },
    { id: 'refinishing', label: 'Sanding & Refinishing' },
    { id: 'vinyl', label: 'Luxury Vinyl' },
    { id: 'repairs', label: 'Repairs' },
  ];

  const filteredItems = galleryData.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#C92227] mb-2">
            PORTFOLIO
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight">
            OUR WORK. YOUR INSPIRATION.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            A curated showcase of authentic hardwood installations, historic brownstone restorations, dustless sanding, and waterproof vinyl craftsmanship.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-[#111111] text-white shadow-md'
                    : 'bg-[#F5F5F7] text-gray-700 hover:bg-gray-200'
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
              className="group relative rounded-3xl overflow-hidden shadow-apple-sm hover:shadow-apple-lg border border-gray-200 cursor-pointer bg-gray-100 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Hover Dark Overlay with Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#C92227] text-white text-[11px] font-bold uppercase tracking-wider">
                    {item.categoryLabel}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold leading-snug">{item.title}</h4>
                  <div className="flex items-center space-x-2 text-xs text-gray-300 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-[#C92227]" />
                    <span>{item.location}</span>
                    {item.woodType && (
                      <>
                        <span>•</span>
                        <span>{item.woodType}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Mobile permanent caption strip */}
              <div className="p-4 bg-white sm:hidden border-t border-gray-100">
                <span className="text-[10px] font-bold text-[#C92227] uppercase tracking-wider block">
                  {item.categoryLabel}
                </span>
                <p className="text-sm font-bold text-gray-900 mt-0.5">{item.title}</p>
                <p className="text-xs text-gray-500 mt-1 flex items-center space-x-1">
                  <MapPin className="w-3 h-3 text-gray-400" />
                  <span>{item.location}</span>
                </p>
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
