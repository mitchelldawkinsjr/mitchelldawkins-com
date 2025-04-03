# Mitchell Dawkins Personal Website

This repository contains the code for [mitchelldawkins.com](https://mitchelldawkins.com), my personal website and blog where I document my journey of building software with AI assistance.

## Project Overview

The website is built with Next.js and features:

- A responsive, modern design with dark mode support
- A blog section featuring my "Building AI with AI" series
- An about page with my background and skills
- A contact form for inquiries

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with Typography plugin
- **Content**: MDX for blog posts with next-mdx-remote
- **Theming**: next-themes for dark/light mode
- **Deployment**: Vercel

## Local Development

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mitchelldawkins-com.git
   cd mitchelldawkins-com
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `src/app/`: App Router pages and layouts
- `src/components/`: Reusable React components
- `src/content/blog/`: MDX blog posts
- `src/lib/`: Utility functions and MDX processing
- `src/styles/`: Global CSS and Tailwind configuration
- `public/`: Static assets like images

## Adding a Blog Post

To add a new blog post, create a new MDX file in the `src/content/blog/` directory with the following format:

```mdx
---
title: "Your Post Title"
date: "YYYY-MM-DD"
excerpt: "A short description of your post"
coverImage: "/images/blog/your-image.jpg"
series: "Building AI with AI"
---

# Your Post Title

Content goes here...

<HumanReflection>
  This section contains your personal reflections, entirely written by you.
</HumanReflection>

More content...
```

## Deployment

The site is automatically deployed to Vercel when changes are pushed to the main branch.

## License

This project is licensed under the MIT License - see the LICENSE file for details.