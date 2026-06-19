/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          // Brand red palette anchored on #CA0000, mirroring former blue shade roles
          blue: {
            50: '#FFF5F5',
            100: '#FFE8E8',
            200: '#FFCCCC',
            300: '#FF9999',
            400: '#FF4D4D',
            500: '#E60000',
            600: '#CA0000',
            700: '#A00000',
            800: '#7A0000',
            900: '#4D0000',
            950: '#330000',
          },
          // Slightly warmer red tints for gradients and secondary accents
          indigo: {
            50: '#FFF0F0',
            100: '#FFE0E0',
            200: '#FFC2C2',
            300: '#FF9494',
            400: '#FF5252',
            500: '#E62222',
            600: '#CA0000',
            700: '#9B0000',
            800: '#6B0000',
            900: '#450000',
            950: '#2E0000',
          },
        },
        typography: {
          DEFAULT: {
            css: {
              maxWidth: '100%',
              color: '#374151',
              a: {
                color: '#CA0000',
                '&:hover': {
                  color: '#A00000',
                },
              },
            },
          },
          invert: {
            css: {
              color: '#d1d5db',
              a: {
                color: '#FF4D4D',
                '&:hover': {
                  color: '#FF9999',
                },
              },
              strong: {
                color: '#fff',
              },
              h1: {
                color: '#fff',
              },
              h2: {
                color: '#fff',
              },
              h3: {
                color: '#fff',
              },
              h4: {
                color: '#fff',
              },
              code: {
                color: '#fff',
              },
              blockquote: {
                color: '#d1d5db',
                borderLeftColor: '#4b5563',
              },
            },
          },
        },
      },
    },
    plugins: [
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require('@tailwindcss/typography'),
    ],
    darkMode: 'class',
  }