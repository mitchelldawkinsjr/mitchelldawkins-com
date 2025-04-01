'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Wait until component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle theme toggle with animation
  const toggleTheme = () => {
    setIsTransitioning(true);
    setTheme(theme === 'dark' ? 'light' : 'dark');
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  // Early return during SSR to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-md bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        <div className="w-5 h-5"></div>
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`w-10 h-10 rounded-md flex items-center justify-center transition-colors ${
        theme === 'dark' 
          ? 'bg-gray-700 hover:bg-gray-600' 
          : 'bg-gray-200 hover:bg-gray-300'
      }`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative">
        {/* Sun icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-5 w-5 text-yellow-500 absolute top-0 left-0 transition-all duration-300 ${
            theme === 'dark' 
              ? 'opacity-100 transform rotate-0 scale-100' 
              : 'opacity-0 transform rotate-90 scale-0'
          }`}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
          />
        </svg>
        
        {/* Moon icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-5 w-5 text-blue-600 absolute top-0 left-0 transition-all duration-300 ${
            theme === 'light' 
              ? 'opacity-100 transform rotate-0 scale-100' 
              : 'opacity-0 transform -rotate-90 scale-0'
          }`}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
          />
        </svg>
      </div>
      
      {/* Visual indicator that shows briefly during theme change */}
      {isTransitioning && (
        <span className="absolute inset-0 bg-white dark:bg-gray-900 rounded-md opacity-20"></span>
      )}
    </button>
  );
}