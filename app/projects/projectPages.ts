export type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectPageSection = {
  type: 'text' | 'image' | 'video' | 'heading' | 'gallery';
  content?: string | string[]; // Text content or paragraphs
  src?: string; // For images and videos
  alt?: string; // For images
  caption?: string; // Optional caption for media
  level?: 2 | 3; // For heading type
  items?: GalleryItem[]; // For gallery type
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
    title: 'Optimizing Internal Structure of 3D Printed Constructions for Shock Absorption',
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
          'In this investigation, different internal structures of 3D printed objects were evaluated to optimize their shock absorption capabilities. These prototypes were each three inches thick and tested at collision speed of 6.82 mph. To test them, a pendulum-like device was created where an arm would swing and hit the prototype at a constant speed and force. Each design was also tested five times, with their averages being calculated. A Mass-Force Index (Prototype Mass x Max Force) and a Mass-Deceleration Index (Prototype Mass x Max Deceleration x -1) were created to compare designs. A lower output was favorable since it would indicate the design would be lightweight and cheap all while exhibiting good shock absorption properties. Furthermore, the prototype would have to prevent the testing arm from penetrating the prototype completely and yield an impact force and deceleration below 250 N and -245m/s (-25G) respectively.',
          'A series of prototypes were tested including a standard hexagon, zigzag, thin-hexagon and a combination of a zigzag and hexagon design. During the conclusion it was determined the standard hexagon was the most favorable with Indexes. However, this investigation proved that it is difficult to create a standard shock absorber optimized for every situation. Every situation is different with unique needs, the design that was proven optimal was only optimal based on the testing specifications put in place. Furthermore, a series of errors could have impacted on the results including print discrepancies and temperature & humidity impacting both the prototypes properties and the measuring devices.',
        ],
      },
      {
        type: 'video',
        src: 'https://www.youtube.com/embed/Fq_6kPeij3g?si=z1b_Dk8Dscfkjema',
      },
      {
        type: 'heading',
        content: 'Research Methodology',
        level: 2,
      },
      {
        type: 'text',
        content: [
          'To determine the optimal internal structure, thorough research was conducted on current infill patterns used in 3D printing, including honeycomb, grid, and other common geometries. The findings helped inform the design of custom infill patterns and aided in the creation of future iterations.',
          'In order to test and evaluate each prototype, a pendulum-like testing device was constructed. Each prototype would be placed in a fixed location and the arm of the device would hit each prototype at a consistent speed. Sensors were attached to the arm to measure the force and deceleration upon impact. Each prototype was tested five times to ensure accuracy, and the average values were calculated for comparison. Furthermore all impacts were recorded using a high-speed camera to analyze the deformation and energy absorption characteristics of each design.',
          'Like stated earlier, two indexes were created to compare each design: the Mass-Force Index and the Mass-Deceleration Index. These indexes took into account both the mass of the prototype and the measured force and deceleration, providing a comprehensive metric for evaluating shock absorption performance relative to weight. Using these two indexes as well as fixed requirements for maximum force and deceleration, each design was compared and ranked accordingly.',
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
          'After testing 4 different infill patterns, it was determined that the standard hexagon design provided the best shock absorption properties based on the Mass-Force and Mass-Deceleration Indexes. This design effectively distributed the impact forces, resulting in lower peak forces and decelerations compared to other patterns tested. While a combined zigzag and hexagon design showed promise, it did not outperform the standard hexagon in this specific testing scenario, due to the higher costs assoicated due to increased material usage and print time.',
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
          'Future work could explore could explore additional infill patterns, varriable impact speed, angle and materials. Furthermore attempting to create more unique infill patterns that are optimized for shock absorption could be benificial.',
          'Overall this experiment provided valuable insights and learning opportunities into the field of 3D printing and shock absorption, as well as testing methodlogies, design of experiments and data analysis techniques.',
        ],
      },
    ],
    links: [
      {
        label: 'View Video Presentation',
        href: 'https://youtu.be/Fq_6kPeij3g?si=z1b_Dk8Dscfkjema',
      },
      {
        label: 'View Raw Data',
        href: 'https://drive.google.com/drive/folders/1AUFU2yS38haAjjnJ7OzXP2N7-yJ9hDvE?usp=sharing',
      },
    ],
  },
  {
    slug: 'notion-templates',
    title: 'Notion Templates',
    summary:
      'High-quality Notion templates designed to enhance productivity and organization, free for personal and professional use. Ranging from team hubs to personal planners.',
    tags: ['Notion', 'Templates', 'Productivity'],
    year: ['202'],
    sections: [
      {
        type: 'heading',
        content: 'Project Overview',
        level: 2,
      },
      {
        type: 'text',
        content: [
          'This project is dedicated to designing a wide variety of Notion templates that empower users to take control of their productivity, organization, and creative goals. From students and educators to hobbyists and team leaders, the templates are crafted to meet everyday needs with clean structure and built-in flexibility. The growing collection includes tools like Student Life OS, an all-in-one dashboard for managing classes, homework, and extracurriculars; the STEM Project Hub, built for collaborative teams to track meetings, tasks, and materials; and the Academic Portfolio, a sleek and customizable space to showcase work, embed multimedia, and reflect personal growth. Each template is thoughtfully designed with user experience in mind, featuring intuitive navigation, visually appealing layouts, and practical functionalities. Whether you\'re looking to streamline your study habits, coordinate team projects, or simply organize your personal life, these Notion templates provide a solid foundation to build upon. Best of all, they are freely available for anyone to use and adapt to their unique workflows.',
          'What began as a way to simplify digital life has evolved into a broader mission to help others stay focused and effective—whether that means planning a book club using the Book Club Homebase, or preparing for finals with built-in study tools. These templates have been used by hundreds of students and professionals around the world. With an emphasis on usability, polish, and adaptability, the project continues to expand, offering new systems designed to meet users where they are—and grow with them.',
        ],
      },
      {
        type: 'heading',
        content: 'Why Notion?',
        level: 2,
      },
      {
        type: 'text',
        content: [
          'I believe that Notion is a powerful tool for organization and productivity, offering unparalleled flexibility to create custom workflows that suit individual needs. Yet, indivudals are often intimidated by its powerful features and advanced tools. By creating high-quality, pre-made templates, I aim to lower the barrier to entry and help users get started quickly. By designing templates specifically for Notion, I aim to help users unlock its full potential, providing them with structured yet adaptable systems that can enhance their efficiency and creativity in both personal and professional contexts.',
        ],
      },
      {
        type: 'heading',
        content: 'Featured Templates',
        level: 2,
      },
      {
        type: 'text',
        content: [
          'Here are some of my most popular Notion templates available for free in my Notion Template Gallery:',
          '- LifeOS: An all-in-one life management system designed specfically for students, integrating task management, goal setting, note taking, travel planning, and life planning into a single cohesive dashboard.',
          '- STEM Project Hub: A collaborative workspace tailored for STEM students and teams, featuring project timelines, resource libraries, meeting notes, and task assignments to streamline group work and enhance productivity.',
          '- Academic Portfolio: A sleek and customizable template for students to showcase their academic achievements, projects, and extracurricular activities, complete with sections for multimedia embeds and reflective journaling.',
          '- Book Club Homebase: A dedicated space for book clubs to organize reading schedules, discussion questions, member contributions, and meeting logistics, fostering a sense of community and engagement around shared literary interests.',
          '- Learner\'s Permit Tracking: A template designed to help new drivers track their progress towards obtaining a full provisional license, including logging hours, lessons completed, and milestones achieved.',
        ],
      },
      {
        type: 'heading',
        content: 'Template Preview',
        level: 2,
      },
      { 
        type: 'image',
        src: '/images/notion-templates/life-os.png',
        alt: 'Life OS Notion Template',
        caption: 'Life OS Notion Template - A comprehensive life management system built for Notion.',
      },
      { 
        type: 'image',
        src: '/images/notion-templates/stem-project-hub.png',
        alt: 'STEM Project Hub Notion Template',
        caption: 'STEM Project Hub Notion Template - A collaborative workspace tailored for STEM students and teams.',
      },
      { 
        type: 'image',
        src: '/images/notion-templates/academic-portfolio.png',
        alt: 'Academic Portfolio Notion Template',
        caption: 'Academic Portfolio Notion Template - A sleek and customizable template for students to showcase their academic achievements, projects, and extracurricular activities.',
      },
      { 
        type: 'image',
        src: '/images/notion-templates/book-club-homebase.png',
        alt: 'Book Club Homebase Notion Template',
        caption: 'Book Club Homebase Notion Template - A dedicated space for book clubs to organize reading schedules, discussion questions, member contributions, and meeting logistics.',
      }
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
        content: 'Project Overview',
        level: 2,
      },
      {
        type: 'text',
        content: [
          'This recreational design project focuses on reimagining aircraft cabins and seating through detailed 3D modeling, with the goal of enhancing passenger comfort, functionality, and spatial efficiency across multiple cabin classes. The project includes five distinct concepts: a refined Premium Economy layout, a modernized Business Class, a luxurious First Class, an exclusive Three-Room First Class Suite, and a Sleeper Economy Cabin designed to make long-haul travel more restful and accessible for economy passengers.',
          'Each cabin concept is tailored to the needs of its intended passenger segment, balancing innovation with practical considerations like space constraints, aircraft architecture, and operational efficiency. From modular privacy-focused suites to space-saving lie-flat designs and convertible sleeping arrangements, the project challenges the traditional boundaries of airline seating. Though conceptual, these designs aim to inspire future developments in aviation interior design by prioritizing user experience, comfort, and creative use of space.',
        ],
      },
      {
        type: 'gallery',
        items: [
          {
            src: '/images/aircraft-cabin/premium-economy.png',
            alt: 'Premium Economy Cabin Design',
            caption: 'Premium Economy Cabin Design',
          },
          {
            src: '/images/aircraft-cabin/business-class.png',
            alt: 'Business Class Configuration',
            caption: 'Business Class Configuration',
          },
          {
            src: '/images/aircraft-cabin/first-class-suite.png',
            alt: 'First Class Suite',
            caption: 'First Class Suite',
          },
          {
            src: '/images/aircraft-cabin/sleeper-economy.png',
            alt: 'Sleeper Economy Cabin Concept',
            caption: 'Sleeper Economy Cabin Concept',
          },
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
        label: 'View on Thingiverse',
        href: 'https://www.thingiverse.com/psavvas/collections/43694788/things',
      },
    ],
  },
];

export function findProjectPageBySlug(slug: string) {
  return projectPages.find((page) => page.slug === slug);
}
