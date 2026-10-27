import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define types for project data
export interface ProjectFrontmatter {
  title: string;
  description: string;
  date?: string;
  status?: string;
  featured?: boolean;
  priority?: number;
  slug: string;
  headerImage?: string;
  tech?: string[];
  tags?: string[];
  audience?: string[];
  /** Short problem/care statement for the project story */
  why?: string;
  /** What gets built live for this project */
  streamFocus?: string;
  lessons?: string[];
  roadmap?: string[];
  relatedPosts?: string[];
  links?: {
    title: string;
    url: string;
  }[];
  [key: string]: any; // For any additional frontmatter properties
}

/** Card shape for homepage / CV carousels */
export interface FeaturedProjectCard {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

/**
 * Featured projects for carousels, driven by MDX `featured` + `priority`.
 */
export function getFeaturedProjectsForCarousel(): FeaturedProjectCard[] {
  const featured = getAllProjects()
    .filter((p) => p.featured)
    .sort((a, b) => (a.priority ?? Infinity) - (b.priority ?? Infinity));

  const source = featured.length > 0 ? featured : getAllProjects().slice(0, 8);

  return source.map((p) => ({
    title: p.title,
    description: p.description,
    image: p.headerImage || '/images/logo/logo-stamp.png',
    link: `/projects/${p.slug}`,
    tags: (p.tech || p.tags || []).slice(0, 7),
  }));
}

export interface Project extends ProjectFrontmatter {
  content: string;
}

const projectsDirectory = path.join(process.cwd(), 'src', 'content', 'projects');

/**
 * Get all project data including frontmatter and content
 */
export function getAllProjects(): Project[] {
  // Ensure the directory exists
  if (!fs.existsSync(projectsDirectory)) {
    console.warn(`Projects directory not found at ${projectsDirectory}`);
    return [];
  }

  // Get all MDX files in the projects directory
  const filenames = fs.readdirSync(projectsDirectory);
  const mdxFiles = filenames.filter(file => file.endsWith('.mdx'));

  const projects = mdxFiles.map(filename => {
    // Read file content
    const filePath = path.join(projectsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    // Extract frontmatter and content
    const { data, content } = matter(fileContents);
    
    // Use slug from frontmatter, or derive from filename
    const slug = data.slug || filename.replace(/\.mdx$/, '');
    
    // Return the combined data
    return {
      ...(data as ProjectFrontmatter),
      slug,
      content,
    } as Project;
  });

  // Sort projects by date posted (newest first), using priority as a tiebreaker
  return projects.sort((a, b) => {
    const dateA = new Date(a.date || '0');
    const dateB = new Date(b.date || '0');
    const dateDiff = dateB.getTime() - dateA.getTime();
    if (dateDiff !== 0) {
      return dateDiff;
    }

    // Same date: fall back to priority (lower number first)
    return (a.priority ?? Infinity) - (b.priority ?? Infinity);
  });
}

/**
 * Get a specific project by its slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  const projects = getAllProjects();
  return projects.find(project => project.slug === slug);
}

/**
 * Get project paths for static generation
 */
export function getAllProjectPaths(): { params: { slug: string } }[] {
  const projects = getAllProjects();
  
  return projects.map(project => ({
    params: {
      slug: project.slug,
    },
  }));
}