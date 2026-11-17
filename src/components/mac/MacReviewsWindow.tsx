import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { reviewsData } from '../../data/reviews';
import { MacWindowFrame } from './MacWindowFrame';

export const MacReviewsWindow: React.FC = () => {
  return (
    <section id="reviews" className="py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <p className="text-xs font-extrabold uppercase tracking-widest text-[#C92227] mb-1">
          macOS Messages & Reviews
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-[#111111] dark:text-white tracking-tight">
          TRUSTED BY OUR CUSTOMERS
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">
          Verified client testimonials from homeowners and businesses across New York, New Jersey, and Connecticut.
        </p>
      </div>

      <MacWindowFrame
        title="Messages — Client Testimonials & Feedback"
        subtitle="5.0 ★ Verified"
        headerRight={
          <div className="flex items-center space-x-1 text-amber-500 text-xs">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
            ))}
          </div>
        }
      >
        <div className="p-6 sm:p-10 bg-white dark:bg-[#1a1a1a]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewsData.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="p-6 rounded-2xl bg-[#F6F6F6] dark:bg-[#252525] border border-gray-200/80 dark:border-gray-700 shadow-sm hover:shadow-apple-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1 text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-mono text-gray-400">{review.date}</span>
                  </div>

                  <Quote className="w-6 h-6 text-gray-300 dark:text-gray-600 mb-2" />
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 leading-relaxed italic mb-4">
                    "{review.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 dark:text-white flex items-center space-x-1">
                      <span>{review.name}</span>
                      {review.verified && (
                        <ShieldCheck className="w-3 h-3 text-[#C92227]" />
                      )}
                    </h4>
                    <p className="text-[11px] text-gray-400">{review.location}</p>
                  </div>
                  <span className="text-[10px] font-semibold text-[#C92227] bg-red-50 dark:bg-red-950/30 px-2 py-0.5 rounded-full">
                    {review.projectType}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Testimonials Ribbon */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>100% Client Satisfaction Commitment</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>Over 1,500 projects completed</span>
              <a href="tel:9179304105" className="font-bold text-[#C92227] hover:underline">
                Call (917) 930-4105
              </a>
            </div>
          </div>
        </div>
      </MacWindowFrame>
    </section>
  );
};
