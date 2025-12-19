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
    slug: 'failure-a-first-step-to-success',
    title: 'Failure: A First Step to Success',
    date: '2025-12-19',
    summary:
      'A brief look at a past academic essay about the power of failure.',
    tags: ['Opinion', 'Archive', 'Life Lessons'],
    content: [
      'When digging through my old files I came across an old essay I wrote for school in 2023. It was about the importance of failure in achieving success, a topic that still resonates with me today.',
      'By the time the Wright brothers flew the world’s first aircraft in 1903, they had failed countless times and faced numerous setbacks. They had built multiple unsuccessful models prior to creating a flight-worthy one. During these challenging times, they used every defeat to learn what worked and what did not, in order to build an incrementally better aircraft. The Wright brothers story is a concrete example of the best advice I received: failure is the first step toward success.',
      'At first, this advice confused and surprised me since failure is rarely associated with success. However, after further reflection, I realized most people experienced setbacks while pursuing their dreams. Although they had different goals and failed differently, in the end, they all had one thing in common: resilience; they were able to overcome and learn from their mistakes.',
      'Setbacks caused by failure show us that we have pushed ourselves and reached far in our goals. There is no doubt that trivial goals are easily achieved, but such accomplishments are often of little value or importance. Conversely, failure is proof of our ambitions, that we have challenged ourselves and pushed our limits when we pursued lofty endeavors. When we try difficult things, we are bound to fail initially. However, knowing how to appreciate failure can provide us with some valuable lessons. It is resilience, the ability to recover and learn from our mistakes, that converts failure into a temporary setback. Learning what worked and what did not is a critical step toward success. When we show resilience and rebound from our failures, we are better prepared for our next attempt and ready to achieve success.',
      'This advice has changed me forever by helping me embrace failure. It gives me the courage to pursue challenging goals, knowing that I will most likely experience setbacks along the way. Furthermore, it gives me confidence that with resilience and perseverance, I can accomplish these goals. Learning about failure helps me approach challenges with an open mindset and face them directly instead of avoiding them. Because of this I can push myself to do better and keep reaching farther.',
      'If I could give someone a single piece of advice, this would be it. I would offer it in the hopes that it can inspire and change them, as it did me. It teaches that failure is part of the learning process, that it is a sign of a worthy endeavor, and that the way we handle failure is the most important predictor of success. Perhaps, in the end, the biggest failure is someone who has succeeded in everything they have tried.'
    ],
  },
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
