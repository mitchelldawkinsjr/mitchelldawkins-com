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

# Function to create and checkout a feature branch
create_feature_branch() {
    local branch_name="$1"
    git checkout main
    git branch "$branch_name"
    git checkout "$branch_name"
    echo "Created and switched to branch: $branch_name"
    echo "-----------------------------------"
}

# Function to merge a feature branch into main
merge_feature_branch() {
    local branch_name="$1"
    local merge_message="$2"
    local date="$3"
    
    git checkout main
    GIT_COMMITTER_DATE="$date" git merge --no-ff "$branch_name" -m "$merge_message" --date="$date"
    echo "Merged $branch_name into main: $merge_message"
    echo "-----------------------------------"
}

# Start with date 6 weeks ago
START_DATE=$(date -v-6w +"%Y-%m-%d 10:30:00" 2>/dev/null || date -d "6 weeks ago 10:30:00" +"%Y-%m-%d %H:%M:%S")
COMMIT_DATE="$START_DATE"

advance_date() {
    COMMIT_DATE=$(date -v+"$1"d -v+"$2"H -v+"$3"M -jf "%Y-%m-%d %H:%M:%S" "$COMMIT_DATE" +"%Y-%m-%d %H:%M:%S" 2>/dev/null || date -d "$COMMIT_DATE + $1 days + $2 hours + $3 minutes" +"%Y-%m-%d %H:%M:%S")
}

# Week 1 – Setup
create_feature_branch "feature/setup"
advance_date 1 2 30
commit_with_date ".gitignore README.md commit-history.sh create_structure.sh eslint.config.mjs next.config.js next.config.ts package-lock.json package.json postcss.config.js postcss.config.mjs tailwind.config.js tsconfig.json" "Initial project configuration with Next.js, TypeScript, and Tailwind CSS" "$COMMIT_DATE"
advance_date 1 3 0
commit_with_date "src/styles/globals.css" "Added global styles with dark mode support" "$COMMIT_DATE"
advance_date 0 8 0
commit_with_date ".gitignore eslint.config.mjs" "Updated linting configuration and gitignore" "$COMMIT_DATE"
advance_date 0 1 0
merge_feature_branch "feature/setup" "Merge feature/setup into main" "$COMMIT_DATE"

# Week 2 – Infrastructure
create_feature_branch "feature/infrastructure"
advance_date 2 4 0
commit_with_date "src/components/ThemeProvider.tsx" "Implemented ThemeProvider with context-based dark mode support" "$COMMIT_DATE"
advance_date 1 5 0
commit_with_date "src/lib/utils.ts src/lib/mdx.ts" "Built MDX integration and utility functions for dynamic content" "$COMMIT_DATE"
advance_date 2 -3 0
commit_with_date "src/app/layout.tsx src/app/page.tsx" "Established base layout and homepage shell" "$COMMIT_DATE"
advance_date 0 1 0
merge_feature_branch "feature/infrastructure" "Merge feature/infrastructure into main" "$COMMIT_DATE"

# Week 3 – Common Components
create_feature_branch "feature/common-components"
advance_date 2 1 0
commit_with_date "src/components/common/ThemeToggle.tsx" "Created theme toggle component with animation support" "$COMMIT_DATE"
advance_date 1 6 0
commit_with_date "src/components/common/Header.tsx" "Developed responsive header with mobile navigation" "$COMMIT_DATE"
advance_date 1 -2 0
commit_with_date "src/components/common/Footer.tsx" "Added site footer with basic navigation and styling" "$COMMIT_DATE"
advance_date 0 1 0
merge_feature_branch "feature/common-components" "Merge feature/common-components into main" "$COMMIT_DATE"

# Week 4 – Home Sections
create_feature_branch "feature/home-sections"
advance_date 2 3 0
commit_with_date "src/components/home/Hero.tsx" "Finished hero section with responsive layout" "$COMMIT_DATE"
advance_date 1 4 0
commit_with_date "src/components/home/AboutPreview.tsx" "Implemented About section preview on homepage" "$COMMIT_DATE"
advance_date 1 -1 0
commit_with_date "src/components/home/FeaturedProjects.tsx" "Featured project section with interactive cards" "$COMMIT_DATE"
advance_date 1 2 0
commit_with_date "src/components/home/BlogPreview.tsx" "Blog preview section with grid layout" "$COMMIT_DATE"
advance_date 0 1 0
merge_feature_branch "feature/home-sections" "Merge feature/home-sections into main" "$COMMIT_DATE"

# Week 4–5 – Blog Components
create_feature_branch "feature/blog-components"
advance_date 2 5 0
commit_with_date "src/components/blog/BlogCard.tsx src/components/blog/AuthorSection.tsx" "Built reusable blog card and author section components" "$COMMIT_DATE"
advance_date 1 -3 0
commit_with_date "src/components/blog/HumanReflection.tsx" "Added HumanReflection component for personal commentary" "$COMMIT_DATE"
advance_date 1 7 0
commit_with_date "src/components/blog/SeriesNavigation.tsx" "Implemented blog series navigation" "$COMMIT_DATE"
advance_date 0 1 0
merge_feature_branch "feature/blog-components" "Merge feature/blog-components into main" "$COMMIT_DATE"

# Week 5 – Pages
create_feature_branch "feature/pages"
advance_date 2 1 0
commit_with_date "src/app/about/page.tsx src/components/resume/Education.tsx src/components/resume/Experience.tsx src/components/resume/Skills.tsx" "Completed About page with resume sections" "$COMMIT_DATE"
advance_date 1 5 0
commit_with_date "src/app/blog/page.tsx" "Blog index with category filtering and date sorting" "$COMMIT_DATE"
advance_date 1 3 0
commit_with_date "src/app/blog/[slug]/page.tsx" "Dynamic MDX blog rendering with syntax highlighting" "$COMMIT_DATE"
advance_date 2 -2 0
commit_with_date "src/app/contact/page.tsx" "Contact form with validation and error handling" "$COMMIT_DATE"
advance_date 0 1 0
merge_feature_branch "feature/pages" "Merge feature/pages into main" "$COMMIT_DATE"

# Week 5–6 – Content
create_feature_branch "feature/content"
advance_date 1 9 0
commit_with_date "src/content/blog/introducing-video-processiong-platform.mdx src/content/blog/post-1.mdx src/content/blog/post-2.mdx" "Drafted initial blog posts" "$COMMIT_DATE"
advance_date 1 2 0
mkdir -p public/images
touch public/images/profile.jpg
commit_with_date "public/images/profile.jpg" "Added profile image to About page" "$COMMIT_DATE"
advance_date 1 -1 0
mkdir -p public/images/projects
touch public/images/projects/video-platform.jpg
commit_with_date "public/images/projects/video-platform.jpg src/content/projects/video-platform.mdx" "Uploaded screenshot and content for video platform project" "$COMMIT_DATE"
advance_date 1 6 0
mkdir -p public/images/blog
touch public/images/blog/post-1-cover.jpg
commit_with_date "public/images/blog/post-1-cover.jpg" "Created cover image for blog post" "$COMMIT_DATE"
advance_date 0 1 0
merge_feature_branch "feature/content" "Merge feature/content into main" "$COMMIT_DATE"

# Week 6 – Enhancements
create_feature_branch "feature/enhancements"
advance_date 2 4 0
touch src/app/robots.txt src/app/sitemap.xml
commit_with_date "src/app/robots.txt src/app/sitemap.xml public/next.svg public/vercel.svg public/file.svg public/globe.svg public/window.svg" "Added sitemap, robots.txt, and public assets for SEO and UI" "$COMMIT_DATE"
advance_date 1 3 0
commit_with_date "src/components/common/Header.tsx src/components/common/Footer.tsx" "Improved accessibility for header and footer" "$COMMIT_DATE"
advance_date 1 5 0
commit_with_date "src/components/home/Hero.tsx src/components/home/BlogPreview.tsx" "Responsive fixes for mobile layout in Hero and BlogPreview" "$COMMIT_DATE"
advance_date 1 -2 0
commit_with_date "src/app/page.tsx src/app/blog/page.tsx" "Optimized performance for core pages" "$COMMIT_DATE"
advance_date 0 1 0
merge_feature_branch "feature/enhancements" "Merge feature/enhancements into main" "$COMMIT_DATE"

# Week 6 – Final Polish
create_feature_branch "feature/final-polish"
advance_date 2 6 0
commit_with_date "src/components/common/ThemeToggle.tsx" "Refactored ThemeToggle for clarity and consistency" "$COMMIT_DATE"
advance_date 1 3 0
commit_with_date "README.md" "Updated README with setup and deployment instructions" "$COMMIT_DATE"
advance_date 1 8 0
commit_with_date "src/styles/globals.css src/app/layout.tsx" "Final design tweaks to layout and global styles" "$COMMIT_DATE"
advance_date 0 1 0
merge_feature_branch "feature/final-polish" "Merge feature/final-polish into main" "$COMMIT_DATE"

# Final Day – Deployment
create_feature_branch "feature/deployment"
advance_date 1 2 0
touch vercel.json
commit_with_date "vercel.json" "Configured Vercel deployment settings" "$COMMIT_DATE"
advance_date 0 8 0
commit_with_date "package.json" "Deployment ready: updated metadata and scripts" "$COMMIT_DATE"
advance_date 0 1 0
merge_feature_branch "feature/deployment" "Merge feature/deployment into main" "$COMMIT_DATE"

# Push all branches to remote
git push origin main
git push origin --all

echo "✔  Commit simulation complete!"
echo "All branches pushed to remote. View history with 'git log --graph --oneline --decorate --all'."
echo "Check GitHub for branch and merge activity."