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
}

module.exports = withMDX(nextConfig)