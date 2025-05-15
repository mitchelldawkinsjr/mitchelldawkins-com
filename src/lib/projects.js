import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'src', 'content', 'projects');

/**
 * Get all project data including frontmatter and content
 */
export function getAllProjects() {
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
      ...data,
      slug,
      content,
    };
  });

  // Sort projects by priority if available, otherwise by date
  return projects.sort((a, b) => {
    if (a.priority !== undefined && b.priority !== undefined) {
      return a.priority - b.priority;
    }
    
    // Fall back to date-based sorting if no priority
    const dateA = new Date(a.date || 0);
    const dateB = new Date(b.date || 0);
    return dateB - dateA;
  });
}

/**
 * Get a specific project by its slug
 */
export function getProjectBySlug(slug) {
  const projects = getAllProjects();
  return projects.find(project => project.slug === slug);
}

/**
 * Get project paths for static generation
 */
export function getAllProjectPaths() {
  const projects = getAllProjects();
  
  return projects.map(project => ({
    params: {
      slug: project.slug,
    },
  }));
}