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