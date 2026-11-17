import React, { useState } from 'react';
import { Star, ShieldCheck, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { reviewsData } from '../data/reviews';

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  };

  return (
    <section id="reviews" className="py-24 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#C92227] mb-2">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight">
            TRUSTED BY OUR CUSTOMERS.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Real feedback from homeowners and property managers across New York, New Jersey, and Connecticut.
          </p>

          {/* Rating Summary Badge */}
          <div className="mt-6 inline-flex items-center space-x-3 px-5 py-2.5 rounded-full bg-white shadow-apple-sm border border-gray-200">
            <div className="flex items-center space-x-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-extrabold text-[#111111]">5.0 Out of 5 Stars</span>
            <span className="text-gray-400">|</span>
            <span className="text-xs text-gray-600 font-medium">100% Customer Satisfaction Goal</span>
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {reviewsData.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-apple-sm hover:shadow-apple-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-gray-400">{review.date}</span>
                </div>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#111111] flex items-center space-x-1.5">
                    <span>{review.name}</span>
                    {review.verified && (
                      <span title="Verified Client">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#C92227]" />
                      </span>
                    )}
                  </h4>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
                <span className="text-[11px] font-semibold text-[#C92227] bg-red-50 px-2.5 py-1 rounded-full">
                  {review.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet Interactive Carousel */}
        <div className="lg:hidden relative">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-apple-md">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-1 text-amber-400">
                {[...Array(reviewsData[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-gray-400">{reviewsData[currentIndex].date}</span>
            </div>

            <Quote className="w-8 h-8 text-gray-200 mb-2" />
            <p className="text-base text-gray-700 italic leading-relaxed mb-6">
              "{reviewsData[currentIndex].comment}"
            </p>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-[#111111] flex items-center space-x-1.5">
                  <span>{reviewsData[currentIndex].name}</span>
                  {reviewsData[currentIndex].verified && (
                    <ShieldCheck className="w-4 h-4 text-[#C92227]" />
                  )}
                </h4>
                <p className="text-xs text-gray-500">{reviewsData[currentIndex].location}</p>
              </div>
              <span className="text-[11px] font-semibold text-[#C92227] bg-red-50 px-2.5 py-1 rounded-full">
                {reviewsData[currentIndex].projectType}
              </span>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center space-x-4 mt-6">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white border border-gray-200 text-gray-700 hover:text-black shadow-sm"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex space-x-1.5">
              {reviewsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentIndex === idx ? 'w-6 bg-[#C92227]' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white border border-gray-200 text-gray-700 hover:text-black shadow-sm"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
