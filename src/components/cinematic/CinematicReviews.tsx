import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { reviewsData } from '../../data/reviews';

export const CinematicReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#0B0B0E] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-black/60 border border-[#C92227]/40 text-[#C92227] text-[11px] font-mono tracking-wider uppercase mb-2">
            <Star className="w-3.5 h-3.5 fill-[#C92227]" />
            <span>06 // VERIFIED TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            TRUSTED BY OUR CUSTOMERS
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 font-light">
            Real evaluations from homeowners and estate managers across New York, New Jersey, and Connecticut.
          </p>

          {/* Rating Summary Strip */}
          <div className="mt-6 inline-flex items-center space-x-3 px-5 py-2.5 rounded-xl bg-[#121217] border border-white/10 font-mono text-xs">
            <div className="flex items-center space-x-1 text-[#C92227]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#C92227]" />
              ))}
            </div>
            <span className="font-bold text-white">5.0 / 5.0 RATING</span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400">100% Satisfaction Goal</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsData.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="p-7 rounded-2xl bg-[#121217] border border-white/10 hover:border-[#C92227]/40 shadow-card-dark transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-[#C92227]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C92227]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-gray-500">{review.date}</span>
                </div>

                <Quote className="w-7 h-7 text-[#C92227]/40 mb-3" />
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic mb-6 font-light">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white flex items-center space-x-1.5 font-mono">
                    <span>{review.name}</span>
                    {review.verified && (
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                  </h4>
                  <p className="text-[11px] font-mono text-gray-500">{review.location}</p>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#C92227] bg-[#C92227]/10 border border-[#C92227]/30 px-2.5 py-1 rounded-md">
                  {review.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
