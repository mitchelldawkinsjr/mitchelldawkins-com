#!/bin/bash

# Create directories
mkdir -p app/about
mkdir -p app/blog/[slug]
mkdir -p app/contact
mkdir -p components/blog
mkdir -p components/common
mkdir -p components/home
mkdir -p components/resume
mkdir -p content/blog
mkdir -p content/projects
mkdir -p lib
mkdir -p public/images/blog

# Create files
touch app/about/page.tsx
touch app/blog/[slug]/page.tsx
touch app/blog/page.tsx
touch app/contact/page.tsx
touch app/layout.tsx
touch app/page.tsx
touch components/blog/AuthorSection.tsx
touch components/blog/BlogCard.tsx
touch components/blog/HumanReflection.tsx
touch components/blog/SeriesNavigation.tsx
touch components/common/Footer.tsx
touch components/common/Header.tsx
touch components/common/ThemeToggle.tsx
touch components/home/Hero.tsx
touch components/home/FeaturedProjects.tsx
touch components/home/AboutPreview.tsx
touch components/resume/Experience.tsx
touch components/resume/Skills.tsx
touch components/resume/Education.tsx
touch content/blog/post-1.mdx
touch content/blog/post-2.mdx
touch content/projects/video-platform.mdx
touch lib/mdx.ts
touch lib/utils.ts
touch public/images/profile.jpg
touch public/images/blog/post-1-cover.jpg
touch styles/globals.css

echo "Folder structure created successfully!"

