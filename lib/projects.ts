import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export type ProjectLink = {
  label: string;
  href: string;
  primary?: boolean;
};

export type ProjectPage = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  year?: string | string[];
  links?: ProjectLink[];
};

export type ProjectPageWithContent = ProjectPage & {
  content: string;
};

export function getAllProjects(): ProjectPage[] {
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        summary: data.summary,
        tags: data.tags,
        year: data.year,
        links: data.links,
      };
    });

  return allProjectsData;
}

export function getProjectBySlug(slug: string): ProjectPageWithContent | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      summary: data.summary,
      tags: data.tags,
      year: data.year,
      links: data.links,
      content,
    };
  } catch (error) {
    return null;
  }
}

export function getAllProjectSlugs(): string[] {
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}
