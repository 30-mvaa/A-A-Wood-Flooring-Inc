import React, { useState } from 'react';
import {
  Image,
  MapPin,
  Sparkles,
  Maximize2,
} from 'lucide-react';
import { galleryData } from '../../data/gallery';
import { GalleryItem } from '../../types';
import { Lightbox } from '../Lightbox';
import { MacWindowFrame } from './MacWindowFrame';

export const MacPhotosGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [gridColumns, setGridColumns] = useState<number>(3); // 2, 3, or 4
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const sidebarCategories = [
    { id: 'all', label: 'All Photos', count: galleryData.length },
    { id: 'herringbone', label: 'Herringbone & Inlays', count: 2 },
    { id: 'hardwood', label: 'Solid & Engineered Hardwood', count: 2 },
    { id: 'refinishing', label: 'Dustless Sanding & Refinishing', count: 2 },
    { id: 'vinyl', label: 'Luxury Vinyl Plank (LVP)', count: 2 },
    { id: 'repairs', label: 'Precision Repairs', count: 1 },
  ];

  const filteredPhotos = galleryData.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="gallery" className="py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <p className="text-xs font-extrabold uppercase tracking-widest text-[#C92227] mb-1">
          Apple Photos Studio
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-[#111111] dark:text-white tracking-tight">
          OUR WORK. YOUR INSPIRATION.
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">
          Browse real residential and commercial installations across NY, NJ, and CT in the macOS Photos interface.
        </p>
      </div>

      <MacWindowFrame
        title="Photos — Library / Real Flooring Installations"
        subtitle={`${filteredPhotos.length} Photos`}
        headerRight={
          <div className="flex items-center space-x-2">
            {/* Zoom Slider */}
            <span className="text-[10px] text-gray-400 font-mono hidden sm:inline">Zoom</span>
            <input
              type="range"
              min="2"
              max="4"
              step="1"
              value={gridColumns}
              onChange={(e) => setGridColumns(Number(e.target.value))}
              className="w-16 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#C92227] hidden sm:inline"
              title="Adjust Thumbnail Size"
            />
          </div>
        }
      >
        <div className="flex flex-col md:flex-row min-h-[560px] bg-white dark:bg-[#181818]">
          {/* macOS Photos Sidebar */}
          <div className="w-full md:w-64 bg-[#F6F6F6] dark:bg-[#202020] border-r border-black/10 dark:border-white/10 p-4 space-y-6 flex-shrink-0 select-none">
            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Photos Library</p>
              <div className="space-y-1">
                {sidebarCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                      selectedCategory === cat.id
                        ? 'bg-[#C92227] text-white shadow-sm'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center space-x-2 truncate">
                      <Image className="w-4 h-4 opacity-80 flex-shrink-0" />
                      <span className="truncate">{cat.label}</span>
                    </div>
                    <span className="text-[10px] opacity-75">{cat.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Project Inspector Info */}
            <div className="p-3 rounded-2xl bg-white dark:bg-[#282828] border border-gray-200 dark:border-gray-700 text-xs space-y-2">
              <div className="flex items-center space-x-1.5 font-bold text-gray-900 dark:text-white">
                <Sparkles className="w-3.5 h-3.5 text-[#C92227]" />
                <span>Authentic Projects</span>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Every photograph showcases actual installations, dustless sanding passes, and custom staining projects completed by our artisans.
              </p>
            </div>
          </div>

          {/* Photo Grid Canvas */}
          <div className="flex-1 p-5 overflow-y-auto">
            <div
              className={`grid gap-4 ${
                gridColumns === 2
                  ? 'grid-cols-1 sm:grid-cols-2'
                  : gridColumns === 4
                  ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {filteredPhotos.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 dark:bg-gray-800 cursor-pointer shadow-sm hover:shadow-apple-md border border-gray-200/80 dark:border-gray-700 transition-all duration-300 hover:scale-[1.02]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-4 text-white" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-2.5 py-1 rounded-full bg-[#C92227] text-white text-[10px] font-bold uppercase tracking-wider shadow">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Top Right Zoom Icon */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Caption */}
                  <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-xs font-bold leading-tight truncate">{item.title}</p>
                    <p className="text-[11px] text-gray-300 flex items-center space-x-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#C92227]" />
                      <span>{item.location}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Photos Bottom Status Bar */}
        <div className="h-7 px-4 bg-[#F6F6F6] dark:bg-[#202020] border-t border-black/10 dark:border-white/10 flex items-center justify-between text-[11px] text-gray-500 select-none">
          <span>{filteredPhotos.length} Photos Selected</span>
          <span>Apple Photos Engine</span>
        </div>
      </MacWindowFrame>

      {/* Lightbox Modal */}
      <Lightbox
        item={selectedItem}
        items={filteredPhotos}
        onClose={() => setSelectedItem(null)}
        onSelect={(item) => setSelectedItem(item)}
      />
    </section>
  );
};
