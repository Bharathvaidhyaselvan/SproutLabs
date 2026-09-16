export type ProgramCourse = {
  name: string;
  description: string;
};

export type Program = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  courses: ProgramCourse[];
};

export const programs: Program[] = [
  {
    id: 'foundational-stem-experiences',
    title: 'Foundational STEM Experiences',
    subtitle: 'Scientific thinking, structured exploration, and hands-on discovery.',
    description:
      'Our foundational STEM experiences introduce students to scientific thinking, structured exploration, and hands-on discovery in ways that feel engaging, accessible, and inspiring. These programs help learners build confidence while developing the habits of curiosity and experimentation.',
    color: 'bg-brand-yellow',
    courses: [
      {
        name: 'STEM Discovery Workshops',
        description:
          'Short interactive sessions that introduce students to scientific thinking, engineering challenges, and problem-solving activities.',
      },
      {
        name: 'Young Inventors Program',
        description:
          'A guided program that encourages students to identify problems, brainstorm ideas, and create simple prototypes or concepts.',
      },
      {
        name: 'Everyday Science and Innovation',
        description:
          'A practical course that connects classroom concepts with real-world applications through experiments and mini-projects.',
      },
    ],
  },
  {
    id: 'coding-and-digital-creativity',
    title: 'Coding and Digital Creativity',
    subtitle: 'Logic, creativity, and digital expression for meaningful technology learning.',
    description:
      'These programs blend logic, creativity, and digital expression to help students engage with technology in meaningful ways. From beginner-friendly coding concepts to creative project development, learners gain exposure to digital thinking through activities that are both structured and imaginative.',
    color: 'bg-brand-orange',
    courses: [
      {
        name: 'Code Blocks for Game Creation',
        description:
          'A beginner-friendly course where students build simple games using visual coding blocks while learning sequencing, logic, and interactivity.',
      },
      {
        name: 'Physics Through Play',
        description:
          'An engaging course that helps students understand motion, force, energy, and real-world physics concepts through hands-on activities and experiments.',
      },
      {
        name: 'IoT Explorers',
        description:
          'A practical course introducing students to connected devices, sensors, smart systems, and how everyday technology works.',
      },
      {
        name: 'Robotics for Young Innovators',
        description:
          'A hands-on learning experience where students explore robotics basics, simple automation, problem-solving, and creative building.',
      },
      {
        name: 'Art and Design Studio',
        description:
          'A creative course that blends imagination, visual design, and digital expression to help students develop artistic confidence and design thinking.',
      },
    ],
  },
  {
    id: 'innovation-and-design-thinking',
    title: 'Innovation and Design Thinking',
    subtitle: 'Question, create, and solve through practical innovation challenges.',
    description:
      'Built for students who enjoy questioning, creating, and solving, these programs introduce the mindset and methods of innovation through practical challenges and guided exploration. Learners are encouraged to think critically, collaborate effectively, and turn ideas into tangible outcomes.',
    color: 'bg-brand-teal',
    courses: [
      {
        name: 'Innovation Lab Sessions',
        description:
          'Facilitated sessions that guide students through ideation, teamwork, experimentation, and presentation.',
      },
      {
        name: 'Design Thinking for Students',
        description:
          'A structured program that introduces empathy, problem definition, idea generation, testing, and refinement.',
      },
      {
        name: 'Build, Create, Present',
        description:
          'A project-based learning format where students work on concepts and showcase outcomes at the end of the program.',
      },
    ],
  },
  {
    id: 'certified-three-month-learning-pathways',
    title: 'Certified Three-Month Learning Pathways',
    subtitle: 'Structured skill development with continuity and measurable progress.',
    description:
      'Our certified pathways are ideal for institutions seeking deeper student engagement and more structured skill development over time. These programs are designed to deliver continuity, measurable learning progression, and a stronger foundation for long-term capability building.',
    color: 'bg-brand-lavender',
    courses: [
      {
        name: 'STEM Foundations Certificate',
        description:
          'A three-month program focused on curiosity, experimentation, and basic interdisciplinary STEM exposure.',
      },
      {
        name: 'Innovation Skills Certificate',
        description:
          'A structured course that builds creativity, collaboration, design thinking, and presentation skills.',
      },
      {
        name: 'Future Skills Explorer Certificate',
        description:
          'A learner-centered program that combines practical activities, mini-projects, and guided reflection.',
      },
    ],
  },
  {
    id: 'competitions-and-challenge-based-learning',
    title: 'Competitions and Challenge-Based Learning',
    subtitle: 'Apply learning in energizing, goal-oriented environments.',
    description:
      'Challenge-based experiences give students the opportunity to apply what they learn in energizing, goal-oriented environments. These programs are designed to encourage creativity, teamwork, presentation confidence, and solution-oriented thinking through guided competition formats.',
    color: 'bg-brand-cream',
    courses: [
      {
        name: 'Innovation Challenges',
        description:
          'Theme-based challenges that encourage idea generation, teamwork, and creative solutions.',
      },
      {
        name: 'STEM Competitions',
        description:
          'Practical events where students participate in structured tasks, presentations, or design-based activities.',
      },
      {
        name: 'School Showcase Programs',
        description:
          'Institution-level events that allow students to present prototypes, concepts, or project outcomes to peers and educators.',
      },
    ],
  },
  {
    id: 'custom-programs-for-institutions',
    title: 'Custom Programs for Institutions',
    subtitle: 'Tailored pathways shaped to each institution’s goals and context.',
    description:
      'Every institution has unique priorities, learner profiles, and delivery contexts. SproutLabs works closely with schools and learning partners to design customized program pathways that reflect age group, duration, learning objectives, infrastructure, and implementation preferences. These programs can be shaped into weekend workshops, club journeys, bootcamps, holiday intensives, or certified three-month tracks.',
    color: 'bg-brand-paleblue',
    courses: [
      {
        name: 'Weekend Workshops',
        description: 'Compact, high-impact sessions designed around institutional schedules.',
      },
      {
        name: 'Club Journeys',
        description: 'Recurring club-style pathways for continuous student engagement.',
      },
      {
        name: 'Bootcamps & Holiday Intensives',
        description: 'Focused short-term programs for deeper skill-building during breaks.',
      },
      {
        name: 'Certified Three-Month Tracks',
        description: 'Structured long-form pathways with continuity and measurable outcomes.',
      },
    ],
  },
];

export const programsById = Object.fromEntries(programs.map((p) => [p.id, p]));
