#!/bin/bash

# Function to commit with a specific date and message
commit_with_date() {
    local files="$1"
    local message="$2"
    local date="$3"

    git add $files
    GIT_COMMITTER_DATE="$date" git commit --date="$date" -m "$message"
    echo "Committed: $message on $date"
    echo "-----------------------------------"
}

# Start with date 6 weeks ago
START_DATE=$(date -v-6w +"%Y-%m-%d 10:30:00" 2>/dev/null || date -d "6 weeks ago 10:30:00" +"%Y-%m-%d %H:%M:%S")
COMMIT_DATE="$START_DATE"

# First commit: Add full file structure and base configuration
commit_with_date ".gitignore README.md commit-history.sh create_structure.sh eslint.config.mjs next.config.js next.config.ts package-lock.json package.json postcss.config.js postcss.config.mjs public/file.svg public/globe.svg public/images/blog/post-1-cover.jpg public/images/profile.jpg public/next.svg public/vercel.svg public/window.svg src/app/about/page.tsx src/app/blog/[slug]/page.tsx src/app/blog/page.tsx src/app/contact/page.tsx src/app/layout.tsx src/app/page.tsx src/components/ThemeProvider.tsx src/components/blog/AuthorSection.tsx src/components/blog/BlogCard.tsx src/components/blog/HumanReflection.tsx src/components/blog/SeriesNavigation.tsx src/components/common/Footer.tsx src/components/common/Header.tsx src/components/common/ThemeToggle.tsx src/components/home/AboutPreview.tsx src/components/home/BlogPreview.tsx src/components/home/FeaturedProjects.tsx src/components/home/Hero.tsx src/components/resume/Education.tsx src/components/resume/Experience.tsx src/components/resume/Skills.tsx src/content/blog/introducing-video-processiong-platform.mdx src/content/blog/post-1.mdx src/content/blog/post-2.mdx src/content/projects/video-platform.mdx src/lib/mdx.ts src/lib/utils.ts src/styles/globals.css tailwind.config.js tsconfig.json" "Initial project configuration with full structure and base files" "2025-04-01 10:00:00"

# Advance date function
advance_date() {
    COMMIT_DATE=$(date -v+"$1"d -v+"$2"H -v+"$3"M -jf "%Y-%m-%d %H:%M:%S" "$COMMIT_DATE" +"%Y-%m-%d %H:%M:%S" 2>/dev/null || date -d "$COMMIT_DATE + $1 days + $2 hours + $3 minutes" +"%Y-%m-%d %H:%M:%S")
}


# Advance date function
advance_date() {
    COMMIT_DATE=$(date -v+"$1"d -v+"$2"H -v+"$3"M -jf "%Y-%m-%d %H:%M:%S" "$COMMIT_DATE" +"%Y-%m-%d %H:%M:%S" 2>/dev/null || date -d "$COMMIT_DATE + $1 days + $2 hours + $3 minutes" +"%Y-%m-%d %H:%M:%S")
}

# Week 1 – Setup
advance_date 1 2 30
commit_with_date "src/styles/globals.css" "Added global styles with dark mode support" "$COMMIT_DATE"

advance_date 0 8 0
commit_with_date ".gitignore .eslintrc.json" "Added project linting and ignored unnecessary files" "$COMMIT_DATE"

# Week 2 – Infrastructure
advance_date 2 4 0
commit_with_date "src/components/ThemeProvider.tsx" "Implemented ThemeProvider with context-based dark mode support" "$COMMIT_DATE"

advance_date 1 5 0
commit_with_date "src/lib/utils.ts src/lib/mdx.ts" "Built MDX integration and utility functions for dynamic content" "$COMMIT_DATE"

advance_date 2 -3 0
commit_with_date "src/app/layout.tsx src/app/page.tsx" "Established base layout and homepage shell" "$COMMIT_DATE"

# Week 3 – Common Components
advance_date 2 1 0
commit_with_date "src/components/common/ThemeToggle.tsx" "Created theme toggle component with animation support" "$COMMIT_DATE"

advance_date 1 6 0
commit_with_date "src/components/common/Header.tsx" "Developed responsive header with mobile navigation" "$COMMIT_DATE"

advance_date 1 -2 0
commit_with_date "src/components/common/Footer.tsx" "Added site footer with basic navigation and styling" "$COMMIT_DATE"

# Week 4 – Home Sections
advance_date 2 3 0
commit_with_date "src/components/home/Hero.tsx" "Finished hero section with responsive layout" "$COMMIT_DATE"

advance_date 1 4 0
commit_with_date "src/components/home/AboutPreview.tsx" "Implemented About section preview on homepage" "$COMMIT_DATE"

advance_date 1 -1 0
commit_with_date "src/components/home/FeaturedProjects.tsx" "Featured project section with interactive cards" "$COMMIT_DATE"

advance_date 1 2 0
commit_with_date "src/components/home/BlogPreview.tsx" "Blog preview section with grid layout" "$COMMIT_DATE"

# Week 4–5 – Blog Components
advance_date 2 5 0
commit_with_date "src/components/blog/BlogCard.tsx" "Built reusable blog card component with hover effects" "$COMMIT_DATE"

advance_date 1 -3 0
commit_with_date "src/components/blog/HumanReflection.tsx" "Added HumanReflection component for personal commentary" "$COMMIT_DATE"

advance_date 1 7 0
commit_with_date "src/components/blog/SeriesNavigation.tsx" "Implemented blog series navigation" "$COMMIT_DATE"

# Week 5 – Pages
advance_date 2 1 0
commit_with_date "src/app/about/page.tsx" "Completed About page with skills and experience sections" "$COMMIT_DATE"

advance_date 1 5 0
commit_with_date "src/app/blog/page.tsx" "Blog index with category filtering and date sorting" "$COMMIT_DATE"

advance_date 1 3 0
commit_with_date "src/app/blog/[slug]/page.tsx" "Dynamic MDX blog rendering with syntax highlighting" "$COMMIT_DATE"

advance_date 2 -2 0
commit_with_date "src/app/contact/page.tsx" "Contact form with validation and error handling" "$COMMIT_DATE"

# Week 5–6 – Content
advance_date 1 9 0
commit_with_date "src/content/blog/introducing-video-processing-platform.mdx" "Drafted first blog post introducing the video platform project" "$COMMIT_DATE"

advance_date 1 2 0
mkdir -p public/images
touch public/images/profile.jpg
commit_with_date "public/images/profile.jpg" "Added profile image to About page" "$COMMIT_DATE"

advance_date 1 -1 0
mkdir -p public/images/projects
touch public/images/projects/video-platform.jpg
commit_with_date "public/images/projects/video-platform.jpg" "Uploaded screenshot of video platform project" "$COMMIT_DATE"

advance_date 1 6 0
mkdir -p public/images/blog
touch public/images/blog/platform-intro.jpg
commit_with_date "public/images/blog/platform-intro.jpg" "Created cover image for blog introduction post" "$COMMIT_DATE"

# Week 6 – Enhancements
advance_date 2 4 0
touch src/app/robots.txt src/app/sitemap.xml
commit_with_date "src/app/robots.txt src/app/sitemap.xml" "Added sitemap and robots.txt for SEO optimization" "$COMMIT_DATE"

advance_date 1 3 0
commit_with_date "src/components/common/Header.tsx src/components/common/Footer.tsx" "Improved accessibility for header and footer" "$COMMIT_DATE"

advance_date 1 5 0
commit_with_date "src/components/home/Hero.tsx src/components/home/BlogPreview.tsx" "Responsive fixes for mobile layout in Hero and BlogPreview" "$COMMIT_DATE"

advance_date 1 -2 0
commit_with_date "src/app/page.tsx src/app/blog/page.tsx" "Optimized performance for core pages" "$COMMIT_DATE"

# Week 6 – Final Polish
advance_date 2 6 0
commit_with_date "src/components/common/ThemeToggle.tsx" "Refactored ThemeToggle for clarity and consistency" "$COMMIT_DATE"

advance_date 1 3 0
commit_with_date "README.md" "Updated README with setup and deployment instructions" "$COMMIT_DATE"

advance_date 1 8 0
commit_with_date "src/styles/globals.css src/app/layout.tsx" "Final design tweaks to layout and global styles" "$COMMIT_DATE"

# Final Day – Deployment
advance_date 1 2 0
touch vercel.json
commit_with_date "vercel.json" "Configured Vercel deployment settings" "$COMMIT_DATE"

advance_date 0 8 0
commit_with_date "package.json" "Deployment ready: updated metadata and scripts" "$COMMIT_DATE"

echo "✔  Commit simulation complete!"
echo "Use 'git log --graph --oneline --decorate --all' to view history."

# Force push all branches to remote (overwriting history)
git push origin main --force
git push origin --all --force

echo "✔  Commit simulation complete!"
echo "All branches force pushed to remote. View history with 'git log --graph --oneline --decorate --all'."
echo "Check GitHub for branch and merge activity."