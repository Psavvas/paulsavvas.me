import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogContentPath = path.join(process.cwd(), 'content/blog');

interface PostMetadata {
  identifier: string;
  heading: string;
  publishedDate: string;
  excerpt: string;
  topicTags?: string[];
}

interface FullPost extends PostMetadata {
  markdownContent: string;
}

export const loadAllBlogEntries = (): PostMetadata[] => {
  const entries = fs.readdirSync(blogContentPath);
  const blogData = entries
    .filter((entry) => entry.endsWith('.mdx'))
    .map((entry) => {
      const identifier = entry.replace(/\.mdx$/, '');
      const filePath = path.join(blogContentPath, entry);
      const rawContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(rawContent);

      return {
        identifier,
        heading: data.title,
        publishedDate: data.date,
        excerpt: data.summary,
        topicTags: data.tags,
      };
    });

  return blogData.sort((a, b) => (a.publishedDate < b.publishedDate ? 1 : -1));
};

export const loadBlogEntryByIdentifier = (identifier: string): FullPost | null => {
  try {
    const filePath = path.join(blogContentPath, `${identifier}.mdx`);
    const rawContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(rawContent);

    return {
      identifier,
      heading: data.title,
      publishedDate: data.date,
      excerpt: data.summary,
      topicTags: data.tags,
      markdownContent: content,
    };
  } catch {
    return null;
  }
};

export const fetchAllBlogIdentifiers = (): string[] => {
  const entries = fs.readdirSync(blogContentPath);
  return entries
    .filter((entry) => entry.endsWith('.mdx'))
    .map((entry) => entry.replace(/\.mdx$/, ''));
};
