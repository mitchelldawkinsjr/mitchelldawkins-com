/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to add it here
    remarkPlugins: [],
    rehypePlugins: [],
    // If you need syntax highlighting, add:
    // providerImportSource: '@mdx-js/react',
  },
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    domains: [],
  },
  async redirects() {
    return [
      {
        source: '/documents/Mitchell-Dawkins-II-Resume-2026.pdf',
        destination: '/documents/Mitchell-Dawkins-II-Resume.pdf',
        permanent: true,
      },
      {
        source: '/documents/Mitchell-Dawkins-II-Resume-Forward-Deployed-2026.pdf',
        destination: '/documents/Mitchell-Dawkins-II-Resume.pdf',
        permanent: true,
      },
    ]
  },
}

module.exports = withMDX(nextConfig)