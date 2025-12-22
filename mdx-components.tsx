import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mt-8 text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-8 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-base leading-7 text-neutral-700 dark:text-neutral-300">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc space-y-2 pl-6 text-base leading-7 text-neutral-700 dark:text-neutral-300">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal space-y-2 pl-6 text-base leading-7 text-neutral-700 dark:text-neutral-300">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="pl-2">{children}</li>,
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-neutral-900 underline decoration-neutral-400 transition-colors hover:decoration-neutral-900 dark:text-neutral-100 dark:decoration-neutral-600 dark:hover:decoration-neutral-100"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-neutral-300 pl-4 italic text-neutral-700 dark:border-neutral-700 dark:text-neutral-300">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm font-mono text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="overflow-x-auto rounded-lg bg-neutral-100 p-4 text-sm dark:bg-neutral-900">
        {children}
      </pre>
    ),
    img: (props) => {
      const { src, alt } = props as { src?: string; alt?: string };
      return (
        <Image
          src={src || ''}
          alt={alt || ''}
          width={800}
          height={600}
          className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800"
        />
      );
    },
    iframe: (props) => {
      const { className, ...rest } = props as React.IframeHTMLAttributes<HTMLIFrameElement>;
      return (
        <iframe
          {...rest}
          className={`w-full aspect-video rounded-lg border border-neutral-200 dark:border-neutral-800 ${className || ''}`}
        />
      );
    },
    div: ({ children, ...props }) => (
      <div {...props}>{children}</div>
    ),
    figure: ({ children, ...props }) => (
      <figure {...props}>{children}</figure>
    ),
    figcaption: ({ children, ...props }) => (
      <figcaption className="mt-3 text-center text-sm text-neutral-600 dark:text-neutral-400" {...props}>
        {children}
      </figcaption>
    ),
    ...components,
  };
}

