'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = 'h-8 w-auto' }: LogoProps) {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  
  // UseEffect runs on the client, so now we can safely determine the theme
  useEffect(() => {
    setMounted(true);
    
    // Listen for theme change events from the ThemeToggle component
    const handleThemeChange = (event: Event) => {
      // Force a re-render when theme changes
      setMounted(false);
      setTimeout(() => setMounted(true), 0);
    };
    
    window.addEventListener('themeChanged', handleThemeChange);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('themeChanged', handleThemeChange);
    };
  }, []);

  // If not mounted yet, return a placeholder with the same dimensions
  // to prevent layout shift
  if (!mounted) {
    return <div className={`${className} bg-gray-200 dark:bg-gray-800 rounded`}></div>;
  }

  // Return the appropriate logo based on the current theme
  return (
    <>
      {theme === 'dark' ? (
        <Image 
          src="/images/logo/logo-stamp-w-name-white.png" // Path to your light logo (for dark mode)
          alt="Logo"
          width={200}
          height={150}
          className={className}
          priority
        />
      ) : (
        <Image 
          src="/images/logo/logo-stamp-w-name.png" // Path to your dark logo (for light mode) 
          alt="Logo"
          width={200}
          height={150}
          className={className}
          priority
        />
      )}
    </>
  );
}