export type ProjectPageSection = {
  type: 'text' | 'image' | 'video' | 'heading';
  content?: string | string[]; // Text content or paragraphs
  src?: string; // For images and videos
  alt?: string; // For images
  caption?: string; // Optional caption for media
  level?: 2 | 3; // For heading type
};

export type ProjectPageLink = {
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
  sections: ProjectPageSection[];
  links?: ProjectPageLink[];
};

export const projectPages: ProjectPage[] = [
  {
    slug: '3d-printing-shock-absorption',
    title: '3D Printing for Shock Absorption',
    summary:
      'A 1st place Science Fair project investigating how different infills could affect the shock absorption properties of different objects, through research and custom infills.',
    tags: ['3D Printing', 'Science Fair', 'Research'],
    year: ['2024'],
    sections: [
      {
        type: 'heading',
        content: 'Project Overview',
        level: 2,
      },
      {
        type: 'text',
        content: [
          'This project earned 1st place at the Science Fair by exploring an innovative application of 3D printing technology: optimizing infill patterns for shock absorption. The research combined materials science, mechanical engineering, and additive manufacturing to create custom solutions for impact protection.',
          'Traditional 3D printed objects use standard infill patterns like honeycomb or grid structures. This project investigated whether custom-designed infill patterns could significantly improve shock absorption properties, potentially leading to better protective equipment, packaging solutions, and safety devices.',
        ],
      },
      {
        type: 'heading',
        content: 'Research Methodology',
        level: 2,
      },
      {
        type: 'text',
        content: [
          'The research involved designing and testing multiple custom infill patterns using CAD software and 3D printing technology. Each pattern was evaluated for its ability to absorb and distribute impact forces.',
          'Testing protocols included drop tests from various heights, compression tests, and analysis of energy absorption characteristics. Data was collected using force sensors and high-speed cameras to capture the deformation behavior of different infill structures.',
        ],
      },
      {
        type: 'heading',
        content: 'Key Findings',
        level: 2,
      },
      {
        type: 'text',
        content: [
          'Custom infill patterns demonstrated superior shock absorption compared to standard patterns, with some designs showing up to 40% improvement in energy dissipation.',
          'The research identified specific geometric configurations that optimize the balance between material usage, structural integrity, and impact protection.',
          'These findings have practical applications in sports equipment, protective cases, automotive safety components, and medical devices.',
        ],
      },
      {
        type: 'heading',
        content: 'Future Directions',
        level: 2,
      },
      {
        type: 'text',
        content: [
          'Future work could explore multi-material printing to combine different materials with varying shock absorption properties in a single object.',
          'Advanced computational modeling could help predict optimal infill patterns for specific use cases before physical prototyping.',
          'Collaboration with industry partners could bring these innovations to commercial products.',
        ],
      },
    ],
    links: [
      {
        label: 'View on GitHub',
        href: 'https://github.com/psavvas/psavvas.github.io',
      },
    ],
  },
  {
    slug: 'aircraft-cabin-redesign',
    title: 'Aircraft Cabin Redesign',
    summary:
      'A recreational project, aiming to redesign aircraft cabin and airline seating for improved comfort and functionality, through 3D modeling.',
    tags: ['3D Printing', 'CAD', 'Aviation'],
    year: ['2024'],
    sections: [
      {
        type: 'heading',
        content: 'Design Philosophy',
        level: 2,
      },
      {
        type: 'text',
        content: [
          'This recreational project explores innovative approaches to aircraft cabin design, focusing on passenger comfort, space efficiency, and improved functionality. Using advanced 3D modeling tools, the project reimagines how airline seating and cabin layouts could enhance the flying experience.',
          'The design process considered real-world constraints such as safety regulations, weight limitations, and manufacturing feasibility while pushing the boundaries of conventional cabin design.',
        ],
      },
      {
        type: 'heading',
        content: 'Key Design Features',
        level: 2,
      },
      {
        type: 'text',
        content: [
          'Ergonomic seating that provides better lumbar support and adjustability for passengers of different sizes.',
          'Innovative storage solutions that maximize personal space while maintaining safety standards.',
          'Modular design elements that allow airlines to configure cabins for different routes and passenger demographics.',
          'Attention to passenger flow and accessibility, ensuring efficient boarding and deplaning processes.',
        ],
      },
      {
        type: 'heading',
        content: '3D Modeling Process',
        level: 2,
      },
      {
        type: 'text',
        content: [
          'The project utilized professional CAD software to create detailed 3D models of seating arrangements and cabin configurations.',
          'Multiple iterations were developed and evaluated based on comfort metrics, space utilization, and aesthetic appeal.',
          'Virtual walkthroughs and renderings helped visualize the passenger experience and identify areas for improvement.',
        ],
      },
      {
        type: 'heading',
        content: 'Design Challenges',
        level: 2,
      },
      {
        type: 'text',
        content: [
          'Balancing passenger comfort with airline economics and capacity requirements proved to be a central challenge.',
          'Meeting stringent aviation safety standards while introducing innovative design elements required careful consideration.',
          'The project highlighted the importance of user-centered design in transportation systems.',
        ],
      },
      {
        type: 'heading',
        content: 'Project Impact',
        level: 2,
      },
      {
        type: 'text',
        content: [
          'This recreational project demonstrates the potential for design thinking to address real-world challenges in aviation.',
          'The 3D models serve as conversation starters about the future of air travel and passenger experience.',
          'The project showcases advanced CAD skills and an understanding of human factors in design.',
        ],
      },
    ],
    links: [
      {
        label: 'View on GitHub',
        href: 'https://github.com/psavvas/psavvas.github.io',
      },
    ],
  },
];

export function findProjectPageBySlug(slug: string) {
  return projectPages.find((page) => page.slug === slug);
}
