import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectContentPath = path.join(process.cwd(), 'content/projects');

interface ResourceLink {
  text: string;
  url: string;
  isPrimary?: boolean;
}

interface ProjectMetadata {
  identifier: string;
  heading: string;
  excerpt: string;
  categoryTags: string[];
  timeline?: string | string[];
  resources?: ResourceLink[];
}

interface FullProject extends ProjectMetadata {
  markdownContent: string;
}

export const loadAllProjectEntries = (): ProjectMetadata[] => {
  const entries = fs.readdirSync(projectContentPath);
  const projectData = entries
    .filter((entry) => entry.endsWith('.mdx'))
    .map((entry) => {
      const identifier = entry.replace(/\.mdx$/, '');
      const filePath = path.join(projectContentPath, entry);
      const rawContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(rawContent);

      return {
        identifier,
        heading: data.title,
        excerpt: data.summary,
        categoryTags: data.tags,
        timeline: data.year,
        resources: data.links,
      };
    });

  return projectData;
};

export const loadProjectByIdentifier = (identifier: string): FullProject | null => {
  try {
    const filePath = path.join(projectContentPath, `${identifier}.mdx`);
    const rawContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(rawContent);

    return {
      identifier,
      heading: data.title,
      excerpt: data.summary,
      categoryTags: data.tags,
      timeline: data.year,
      resources: data.links,
      markdownContent: content,
    };
  } catch {
    return null;
  }
};

export const fetchAllProjectIdentifiers = (): string[] => {
  const entries = fs.readdirSync(projectContentPath);
  return entries
    .filter((entry) => entry.endsWith('.mdx'))
    .map((entry) => entry.replace(/\.mdx$/, ''));
};
