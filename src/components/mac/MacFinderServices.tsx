import React, { useState } from 'react';
import {
  Folder,
  LayoutGrid,
  List,
  Search,
  Sparkles,
  Eye,
  CheckCircle2,
} from 'lucide-react';
import { servicesData } from '../../data/services';
import { ServiceItem } from '../../types';
import { ServiceModal } from '../ServiceModal';
import { MacWindowFrame } from './MacWindowFrame';

interface MacFinderServicesProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const MacFinderServices: React.FC<MacFinderServicesProps> = ({
  onSelectServiceForQuote,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const sidebarFavorites = [
    { id: 'all', label: 'All Services', count: 8 },
    { id: 'hardwood', label: 'Hardwood & Herringbone', count: 2 },
    { id: 'restoration', label: 'Sanding & Refinishing', count: 4 },
    { id: 'vinyl', label: 'Luxury Vinyl Plank (LVP)', count: 1 },
    { id: 'remodeling', label: 'Remodeling & Stairs', count: 1 },
  ];

  const filteredServices = servicesData.filter((service) => {
    // category filter
    if (selectedCategory === 'hardwood') {
      if (service.id !== 'hardwood-flooring' && service.id !== 'herringbone-custom-designs') return false;
    } else if (selectedCategory === 'restoration') {
      if (
        service.id !== 'floor-sanding-refinishing' &&
        service.id !== 'floor-repair' &&
        service.id !== 'scraping-buffing' &&
        service.id !== 'custom-staining'
      )
        return false;
    } else if (selectedCategory === 'vinyl') {
      if (service.id !== 'vinyl-flooring') return false;
    } else if (selectedCategory === 'remodeling') {
      if (service.id !== 'remodeling-renovations') return false;
    }

    // search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        service.title.toLowerCase().includes(q) ||
        service.description.toLowerCase().includes(q) ||
        service.category.toLowerCase().includes(q)
      );
    }

    return true;
  });

  return (
    <section id="services" className="py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <p className="text-xs font-extrabold uppercase tracking-widest text-[#C92227] mb-1">
          macOS Finder Explorer
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-[#111111] dark:text-white tracking-tight">
          WHAT WE OFFER
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">
          Navigate our complete portfolio of flooring disciplines through the macOS Finder workspace.
        </p>
      </div>

      {/* Main Finder Window */}
      <MacWindowFrame
        title="Services — Macintosh HD / Applications / A&A Wood Flooring"
        subtitle={`${filteredServices.length} items`}
        headerRight={
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1 rounded ${
                viewMode === 'grid'
                  ? 'bg-black/15 dark:bg-white/20 text-[#C92227]'
                  : 'text-gray-500 hover:bg-black/5 dark:hover:bg-white/10'
              }`}
              title="Icons View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1 rounded ${
                viewMode === 'list'
                  ? 'bg-black/15 dark:bg-white/20 text-[#C92227]'
                  : 'text-gray-500 hover:bg-black/5 dark:hover:bg-white/10'
              }`}
              title="List View"
            >
              <List className="w-3.5 h-3.5" />
            </button>
          </div>
        }
      >
        <div className="flex flex-col md:flex-row min-h-[580px] bg-white dark:bg-[#1a1a1a]">
          {/* macOS Finder Left Sidebar */}
          <div className="w-full md:w-60 bg-[#F6F6F6] dark:bg-[#202020] border-r border-black/10 dark:border-white/10 p-4 space-y-6 flex-shrink-0 select-none">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-white dark:bg-[#2c2c2c] border border-gray-200 dark:border-gray-700 text-xs text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#C92227]"
              />
            </div>

            {/* Favorites List */}
            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Favorites</p>
              <div className="space-y-1">
                {sidebarFavorites.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedCategory(item.id)}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      selectedCategory === item.id
                        ? 'bg-[#C92227] text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Folder className="w-4 h-4 opacity-80" />
                      <span className="truncate">{item.label}</span>
                    </div>
                    <span className="text-[10px] opacity-75">{item.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Tags</p>
              <div className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
                <div className="flex items-center space-x-2 px-2.5 py-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C92227]" />
                  <span>Popular Choice</span>
                </div>
                <div className="flex items-center space-x-2 px-2.5 py-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span>100% Waterproof</span>
                </div>
                <div className="flex items-center space-x-2 px-2.5 py-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span>Dustless HEPA</span>
                </div>
              </div>
            </div>

            {/* Quick Call Reminder */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Direct Consultation</p>
              <a
                href="tel:9179304105"
                className="font-bold text-xs text-[#C92227] hover:underline block mt-1"
              >
                (917) 930-4105
              </a>
            </div>
          </div>

          {/* Main Items Area */}
          <div className="flex-1 p-5 overflow-y-auto">
            {viewMode === 'grid' ? (
              /* Grid View (Cards with Apple styling) */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredServices.map((service) => (
                  <div
                    key={service.id}
                    className="group bg-[#F9F9FA] dark:bg-[#252525] rounded-2xl overflow-hidden border border-gray-200/80 dark:border-gray-700 shadow-sm hover:shadow-apple-md transition-all duration-200 flex flex-col justify-between hover:-translate-y-0.5"
                  >
                    <div>
                      {/* Image Thumbnail */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                        {service.popular && (
                          <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-[#C92227] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center space-x-1">
                            <Sparkles className="w-2.5 h-2.5" />
                            <span>Featured</span>
                          </div>
                        )}

                        <div className="absolute bottom-2.5 left-3 right-3 text-white">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-gray-300">
                            {service.category}
                          </span>
                          <h4 className="text-base font-bold leading-tight truncate">
                            {service.title}
                          </h4>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed mb-3">
                          {service.description}
                        </p>

                        <div className="space-y-1 pt-2 border-t border-gray-200/70 dark:border-gray-700 text-[11px] text-gray-600 dark:text-gray-400">
                          {service.features.slice(0, 2).map((feat, idx) => (
                            <div key={idx} className="flex items-center space-x-1.5 truncate">
                              <CheckCircle2 className="w-3 h-3 text-[#C92227] flex-shrink-0" />
                              <span className="truncate">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="p-3 bg-white dark:bg-[#202020] border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                      <button
                        onClick={() => setActiveModalService(service)}
                        className="inline-flex items-center space-x-1 text-xs font-bold text-gray-800 dark:text-gray-200 hover:text-[#C92227] transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#C92227]" />
                        <span>Quick Look</span>
                      </button>

                      <button
                        onClick={() => onSelectServiceForQuote(service.title)}
                        className="px-3 py-1 rounded-full text-xs font-bold text-white bg-[#C92227] hover:bg-[#AB1B20] transition-colors shadow-sm"
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* List View (macOS Finder Details Table) */
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-800 text-gray-400 uppercase font-bold">
                      <th className="py-2.5 px-3">Service Name</th>
                      <th className="py-2.5 px-3">Category</th>
                      <th className="py-2.5 px-3">Primary Application</th>
                      <th className="py-2.5 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                    {filteredServices.map((service) => (
                      <tr
                        key={service.id}
                        className="hover:bg-[#C92227]/5 transition-colors group cursor-pointer"
                        onClick={() => setActiveModalService(service)}
                      >
                        <td className="py-3 px-3 flex items-center space-x-2 font-bold text-gray-900 dark:text-white">
                          <Folder className="w-4 h-4 text-[#C92227]" />
                          <span>{service.title}</span>
                          {service.popular && (
                            <span className="w-2 h-2 rounded-full bg-[#C92227]" title="Popular" />
                          )}
                        </td>
                        <td className="py-3 px-3 text-gray-500 dark:text-gray-400">
                          {service.category}
                        </td>
                        <td className="py-3 px-3 text-gray-600 dark:text-gray-300 max-w-xs truncate">
                          {service.idealFor}
                        </td>
                        <td className="py-3 px-3 text-right space-x-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveModalService(service);
                            }}
                            className="px-2.5 py-1 rounded bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 text-gray-800 dark:text-gray-200 font-medium"
                          >
                            Quick Look
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectServiceForQuote(service.title);
                            }}
                            className="px-2.5 py-1 rounded bg-[#C92227] text-white font-bold hover:bg-[#AB1B20]"
                          >
                            Quote
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Finder Status Bar */}
        <div className="h-7 px-4 bg-[#F6F6F6] dark:bg-[#202020] border-t border-black/10 dark:border-white/10 flex items-center justify-between text-[11px] text-gray-500 select-none">
          <span>{filteredServices.length} items displayed • Tri-State Coverage</span>
          <span className="font-mono">Macintosh HD › A&A Wood Flooring</span>
        </div>
      </MacWindowFrame>

      {/* Quick Look Service Modal */}
      <ServiceModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onRequestQuote={onSelectServiceForQuote}
      />
    </section>
  );
};
