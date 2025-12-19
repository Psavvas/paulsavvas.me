export type BlogPost = {
  slug: string;
  title: string;
  date: string; // ISO date string (YYYY-MM-DD)
  summary: string;
  tags?: string[];
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: 'hello-world',
    title: 'Hello, world',
    date: '2025-12-13',
    summary:
      'A starting point for the blog — what I plan to write about, and how I think about building.',
    tags: ['Update'],
    content: [
      'This is the first post on my site. Over time, I’ll publish short write-ups about projects, what I learned, and what I’d improve next.',
      'I care about clarity and repeatability: defining constraints, testing ideas in real conditions, and documenting results so someone else can understand (and build on) the work.',
    ],
  },
];

export function findPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
