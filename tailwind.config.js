/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        typography: {
          DEFAULT: {
            css: {
              maxWidth: '100%',
              color: '#374151',
              a: {
                color: '#2563eb',
                '&:hover': {
                  color: '#1d4ed8',
                },
              },
            },
          },
          invert: {
            css: {
              color: '#d1d5db',
              a: {
                color: '#60a5fa',
                '&:hover': {
                  color: '#93c5fd',
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