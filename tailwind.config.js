/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
          display: ['var(--font-display)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
        },
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
          article: {
            css: {
              '--tw-prose-body': '#1f2937',
              '--tw-prose-headings': '#111827',
              '--tw-prose-bold': '#111827',
              '--tw-prose-links': '#CA0000',
              '--tw-prose-bullets': '#9ca3af',
              '--tw-prose-counters': '#6b7280',
              '--tw-prose-hr': '#e5e7eb',
              fontSize: '1.125rem',
              lineHeight: '1.8',
              p: {
                marginTop: '1.35em',
                marginBottom: '1.35em',
              },
              'p:first-of-type': {
                fontSize: '1.15em',
                lineHeight: '1.75',
                color: '#4b5563',
              },
              li: {
                marginTop: '0.45em',
                marginBottom: '0.45em',
                paddingLeft: '0.15em',
              },
              'li > p': {
                marginTop: '0.4em',
                marginBottom: '0.4em',
              },
              ul: {
                marginTop: '1.25em',
                marginBottom: '1.25em',
              },
              ol: {
                marginTop: '1.25em',
                marginBottom: '1.25em',
              },
              h2: {
                fontSize: '1.55em',
                marginTop: '2.25em',
                marginBottom: '0.65em',
                lineHeight: '1.3',
                fontWeight: '700',
              },
              h3: {
                fontSize: '1.3em',
                marginTop: '1.85em',
                marginBottom: '0.55em',
                lineHeight: '1.35',
                fontWeight: '600',
              },
              h4: {
                marginTop: '1.5em',
                marginBottom: '0.4em',
                fontWeight: '600',
              },
              hr: {
                marginTop: '2.75em',
                marginBottom: '2.75em',
              },
              blockquote: {
                fontStyle: 'normal',
                fontWeight: '400',
                borderLeftWidth: '4px',
                paddingLeft: '1.15em',
              },
              a: {
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
                fontWeight: '500',
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