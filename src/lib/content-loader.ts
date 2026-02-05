import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags?: string[];
}

interface FullPost extends PostMetadata {
  content: string;
}

function loadContentFromDirectory(dirPath: string): PostMetadata[] {
  const entries = readdirSync(dirPath);
  
  return entries
    .filter(name => name.endsWith('.mdx'))
    .map(filename => {
      const id = filename.replace(/\.mdx$/, '');
      const filepath = join(dirPath, filename);
      const rawContent = readFileSync(filepath, 'utf8');
      const parsed = matter(rawContent);

      return {
        slug: id,
        title: parsed.data.title,
        date: parsed.data.date,
        summary: parsed.data.summary,
        tags: parsed.data.tags,
      };
    })
    .sort((x, y) => (x.date < y.date ? 1 : -1));
}

function loadSinglePost(dirPath: string, id: string): FullPost | null {
  try {
    const filepath = join(dirPath, `${id}.mdx`);
    const rawContent = readFileSync(filepath, 'utf8');
    const parsed = matter(rawContent);

    return {
      slug: id,
      title: parsed.data.title,
      date: parsed.data.date,
      summary: parsed.data.summary,
      tags: parsed.data.tags,
      content: parsed.content,
    };
  } catch {
    return null;
  }
}

export function fetchBlogPosts(): PostMetadata[] {
  const blogPath = join(process.cwd(), 'content/blog');
  return loadContentFromDirectory(blogPath);
}

export function fetchBlogPost(id: string): FullPost | null {
  const blogPath = join(process.cwd(), 'content/blog');
  return loadSinglePost(blogPath, id);
}

export function fetchBlogIdentifiers(): string[] {
  const blogPath = join(process.cwd(), 'content/blog');
  return readdirSync(blogPath)
    .filter(name => name.endsWith('.mdx'))
    .map(name => name.replace(/\.mdx$/, ''));
}

export function fetchProjectPost(id: string): FullPost | null {
  const projectPath = join(process.cwd(), 'content/projects');
  return loadSinglePost(projectPath, id);
}

export function fetchProjectIdentifiers(): string[] {
  const projectPath = join(process.cwd(), 'content/projects');
  return readdirSync(projectPath)
    .filter(name => name.endsWith('.mdx'))
    .map(name => name.replace(/\.mdx$/, ''));
}
