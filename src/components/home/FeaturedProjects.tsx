'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const projects = [
  {
    title: 'NBA Stat Spot',
    description: 'Advanced NBA analytics platform with AI-powered prop bet predictions, machine learning models, real-time ESPN data integration, and comprehensive betting analysis tools.',
    image: '/images/projects/nba-stat-spot/header.png',
    link: '/projects/nba-stat-spot',
    tags: ['FastAPI','React','TypeScript','Python','PostgreSQL','Redis','Docker'],
  },
  {
    title: 'GH Film Review Pipeline',
    description: 'A comprehensive data pipeline and static site generator for weekly and season-long football player evaluations from CSV film logs.',
    image: '/images/projects/gh-flim-revew-dashboard/header-1.png',
    link: '/projects/gh-film-review-pipeline',
    tags: ['Python','Pandas','ReportLab','HTML','CSS','GitHub Actions','Google Analytics'],
  },
  {
    title: 'WNBA Stat Spot',
    description: 'Advanced WNBA analytics platform with AI-powered predictions, prop betting scanner, Monte Carlo simulations, and comprehensive statistical analysis.',
    image: '/images/projects/wnba-stat-spot/header.png',
    link: '/projects/wnba-stat-spot',
    tags: ['Laravel','SvelteKit','PHP','TypeScript','PostgreSQL','Redis','Docker'],
  },
  {
    title: 'Video Processing Platform',
    description: 'A multi-tenant platform for processing, transcribing, and analyzing video content using AI.',
    image: '/images/projects/video-processing-platform/header.svg',
    link: '/projects/video-processing-platform',
    tags: ['Next.js', 'Python', 'Docker', 'ML'],
  },
];

export default function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Calculate items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3); // lg: 3 items
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2); // md: 2 items
      } else {
        setItemsPerView(1); // sm: 1 item
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, projects.length - itemsPerView);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex > maxIndex ? 0 : nextIndex;
      });
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const goToSlide = (index: number) => {
    const clampedIndex = Math.min(index, maxIndex);
    setCurrentIndex(clampedIndex);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? maxIndex : newIndex;
    });
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex > maxIndex ? 0 : nextIndex;
    });
    setIsAutoPlaying(false);
  };

  const slideWidth = 100 / itemsPerView;

  return (
    <>
      <div className="relative w-full">
        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
          >
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="px-4 flex-shrink-0"
                style={{ width: `${slideWidth}%` }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <div className="relative h-48 md:h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 4).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                    
                    <Link 
                      href={project.link} 
                      className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {currentIndex > 0 && (
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-10"
            aria-label="Previous project"
          >
            <svg 
              className="w-6 h-6 text-gray-700 dark:text-gray-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {currentIndex < maxIndex && (
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-10"
            aria-label="Next project"
          >
            <svg 
              className="w-6 h-6 text-gray-700 dark:text-gray-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'bg-blue-600 dark:bg-blue-400 w-8 h-3'
                  : 'bg-gray-300 dark:bg-gray-600 w-3 h-3 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <div className="text-center mt-8">
        <Link 
          href="/projects" 
          className="inline-block px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-lg border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
        >
          View All Projects
        </Link>
      </div>
    </>
  );
}