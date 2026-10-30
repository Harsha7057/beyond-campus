export const STATS_DATA = [
  {
    id: 'students',
    value: 15400,
    suffix: '+',
    label: 'Global Student Members',
    description: 'High school & college innovators across 45+ countries',
    growth: '+124% this year',
    icon: 'GraduationCap'
  },
  {
    id: 'mentors',
    value: 680,
    suffix: '+',
    label: 'Industry Mentors',
    description: 'Engineers & leaders from Google, Stripe, Meta, OpenAI & startups',
    growth: '100% volunteer-led',
    icon: 'Users'
  },
  {
    id: 'events',
    value: 135,
    suffix: '+',
    label: 'Workshops & Hackathons',
    description: 'Hands-on technical bootcamps, sprint weeks, and AMAs',
    growth: '$120k+ in student prizes',
    icon: 'Code2'
  },
  {
    id: 'countries',
    value: 48,
    suffix: '',
    label: 'Countries Represented',
    description: 'Vibrant local chapters from San Francisco to Singapore',
    growth: 'Global timezones',
    icon: 'Globe'
  }
];

export const PILLARS_DATA = [
  {
    id: 'mentorship',
    title: 'Student-Professional Mentorship',
    badge: '1:1 Guided Growth',
    icon: 'Compass',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    borderColor: 'group-hover:border-amber-500/50',
    accentColor: '#F59E0B',
    summary: 'Direct access to senior engineers, architects, and product designers for weekly 1:1 sessions.',
    details: [
      'Tailored career roadmaps from university to first tech job',
      'Realistic mock technical & system design interviews',
      'In-depth resume, GitHub profile, and portfolio teardowns',
      'Private mentor channels for continuous asynchronous feedback'
    ],
    metric: '94% interview pass rate for mentored students'
  },
  {
    id: 'hackathons',
    title: 'Global Hackathons & Real Projects',
    badge: 'Build That Matters',
    icon: 'Flame',
    gradient: 'from-orange-500/20 via-red-500/10 to-transparent',
    borderColor: 'group-hover:border-orange-500/50',
    accentColor: '#F97316',
    summary: 'Ship real, production-ready applications with cross-functional global teams under real industry briefs.',
    details: [
      'Quarterly 48-hour global virtual hackathons with $25k+ prize pools',
      'Open-source incubation teams mentored by senior maintainers',
      'Direct sponsor recruiting pipelines with fast-track interviews',
      'Showcase demo day pitch streams to leading angel investors'
    ],
    metric: '180+ student apps deployed to production'
  },
  {
    id: 'tech-talks',
    title: 'Masterclasses & Tech Talks',
    badge: 'Cutting-Edge Skills',
    icon: 'Laptop',
    gradient: 'from-orange-400/20 via-amber-400/10 to-transparent',
    borderColor: 'group-hover:border-orange-400/50',
    accentColor: '#FB923C',
    summary: 'Deep-dive live workshops on modern engineering paradigms that universities rarely cover.',
    details: [
      'Generative AI engineering: RAG, agents, and fine-tuning',
      'Distributed systems, Kubernetes & resilient cloud infrastructure',
      'Modern frontend architecture & design systems',
      'Navigating equity, compensation, and startup vs. Big Tech'
    ],
    metric: '40,000+ workshop hours watched worldwide'
  },
  {
    id: 'meetups',
    title: 'Local Hubs & In-Person Meetups',
    badge: 'Real-Life Fellowship',
    icon: 'MapPin',
    gradient: 'from-amber-400/20 via-orange-600/10 to-transparent',
    borderColor: 'group-hover:border-amber-400/50',
    accentColor: '#FDBA74',
    summary: 'Physical campus chapters and city meetup groups turning virtual connections into lifelong friendships.',
    details: [
      'Monthly coffee & code meetups in major tech cities',
      'Hack nights and co-working sprints at partner tech offices',
      'University club partnerships and regional student summits',
      'Local hackathon viewing parties and celebratory demo days'
    ],
    metric: '26 active city chapters across 5 continents'
  }
];

export const EVENTS_DATA = [
  {
    id: 'ev-1',
    category: 'hackathons',
    title: 'BeyondHacks 2026: Global AI & Cloud Sprint',
    description: 'A 48-hour worldwide virtual hackathon tackling real-world problems in climate, health, and developer tooling using cutting-edge AI.',
    badge: 'REGISTRATION OPEN',
    badgeColor: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    mode: 'Online (Discord & Devpost)',
    date: 'Nov 14 - 16, 2026',
    time: 'Starts 18:00 UTC',
    location: 'Global Virtual',
    prizes: '$30,000 Prize Pool',
    spots: '1,250 / 2,000 registered',
    speaker: {
      name: 'Sarah Lin',
      role: 'Staff Machine Learning Engineer',
      company: 'OpenAI',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'ev-2',
    category: 'webinars',
    title: 'System Design for Ambitious New Grads & Interns',
    description: 'Learn how to architect high-throughput, low-latency microservices from a principal engineer who scaled Stripe billing to millions of TPS.',
    badge: 'LIVE NOW',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    mode: 'Online (Zoom & Live Q&A)',
    date: 'Today, 20:00 UTC',
    time: '20:00 - 21:30 UTC',
    location: 'Interactive Stream',
    prizes: 'Free System Design Cheatsheet',
    spots: '480 attended live',
    speaker: {
      name: 'David Chen',
      role: 'Principal Systems Architect',
      company: 'Stripe',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'ev-3',
    category: 'meetups',
    title: 'San Francisco Tech Meetup & Student Demo Day',
    description: 'Join 150+ students and mentors in the heart of SoMa for lightning project demos, tech career lightning talks, and artisan pizza.',
    badge: 'FILLING FAST',
    badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    mode: 'In-Person (San Francisco)',
    date: 'Nov 21, 2026',
    time: '18:30 - 21:30 PST',
    location: 'Github HQ / SoMa, SF',
    prizes: 'Swag & Mentor Networking',
    spots: '35 spots remaining',
    speaker: {
      name: 'Elena Rostova',
      role: 'Director of Developer Relations',
      company: 'GitHub',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'ev-4',
    category: 'webinars',
    title: 'Breaking Into Top Tech: The Unfiltered Mentor Panel',
    description: 'Four senior engineering managers reveal what actually moves your resume past automated filters and into the hiring committee.',
    badge: 'UPCOMING',
    badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    mode: 'Online (YouTube Live & Discord)',
    date: 'Dec 02, 2026',
    time: '17:00 - 18:30 UTC',
    location: 'Beyond Campus Stage',
    prizes: 'Direct Resume Reviews for 10 Attendees',
    spots: '920 registered',
    speaker: {
      name: 'Marcus Vance',
      role: 'Engineering Manager',
      company: 'Google Cloud',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'ev-5',
    category: 'meetups',
    title: 'London Tech Hub: AI Builders Coffee & Code',
    description: 'Informal Saturday morning building session for college students and junior engineers working on autonomous agent projects.',
    badge: 'UPCOMING',
    badgeColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    mode: 'In-Person (London, UK)',
    date: 'Dec 06, 2026',
    time: '10:00 - 14:00 GMT',
    location: 'Shoreditch Tech Hub, London',
    prizes: 'Coffee on us & 1:1 Code Reviews',
    spots: '50 capacity',
    speaker: {
      name: 'Tariq Al-Mansoor',
      role: 'Senior Staff Engineer',
      company: 'DeepMind',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'ev-6',
    category: 'hackathons',
    title: 'Open Source Sprint: First PR to Production',
    description: 'A 7-day guided sprint where student contributors are paired with OSS maintainers to make meaningful contributions to top GitHub repositories.',
    badge: 'APPLICATIONS OPEN',
    badgeColor: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    mode: 'Online (GitHub & Discord)',
    date: 'Dec 12 - 19, 2026',
    time: 'Async with daily check-ins',
    location: 'Global GitHub Organization',
    prizes: '$10k Stipend for Top Contributors',
    spots: '200 contributor slots',
    speaker: {
      name: 'Chloe Dubois',
      role: 'Core Maintainer & Tech Lead',
      company: 'Vercel',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80'
    }
  }
];

export const MENTORS_DATA = [
  {
    id: 'm-1',
    name: 'Sarah Lin',
    role: 'Staff Machine Learning Engineer',
    company: 'OpenAI',
    specialty: 'ai',
    experience: '8+ yrs',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    bio: 'Passionate about democratizing machine learning research. Has mentored 45+ students who now work across top AI labs.',
    topics: ['LLM Fine-tuning', 'AI Safety', 'Graduate School vs. Industry'],
    sessionsGiven: 112,
    rating: 4.98,
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 'm-2',
    name: 'David Chen',
    role: 'Principal Systems Architect',
    company: 'Stripe',
    specialty: 'software',
    experience: '12+ yrs',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    bio: 'Infrastructure and distributed systems lead. Specializes in helping students master backend concurrency and distributed consensus.',
    topics: ['System Design', 'Go & Rust', 'Scalable Architectures'],
    sessionsGiven: 148,
    rating: 5.0,
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 'm-3',
    name: 'Chloe Dubois',
    role: 'Staff Frontend Architect',
    company: 'Vercel',
    specialty: 'software',
    experience: '7+ yrs',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
    bio: 'Open source enthusiast and UI performance nerd. Helps students build world-class portfolios and master web standards.',
    topics: ['Next.js & React', 'Web Performance', 'UI/UX Engineering'],
    sessionsGiven: 94,
    rating: 4.95,
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 'm-4',
    name: 'Marcus Vance',
    role: 'Engineering Manager',
    company: 'Google Cloud',
    specialty: 'cloud',
    experience: '10+ yrs',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    bio: 'Former university career counselor turned EM. Keen on empowering students from non-traditional and underrepresented backgrounds.',
    topics: ['Engineering Management', 'Kubernetes', 'FAANG Interviewing'],
    sessionsGiven: 160,
    rating: 4.99,
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 'm-5',
    name: 'Amara Okafor',
    role: 'Lead Product Designer',
    company: 'Figma',
    specialty: 'product',
    experience: '6+ yrs',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80',
    bio: 'Bridging design and code. Teaches students how to formulate design systems, conduct user research, and craft delightful micro-interactions.',
    topics: ['Design Systems', 'Figma Prototyping', 'Portfolio Reviews'],
    sessionsGiven: 82,
    rating: 4.97,
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 'm-6',
    name: 'Tariq Al-Mansoor',
    role: 'Senior Staff Research Scientist',
    company: 'DeepMind',
    specialty: 'ai',
    experience: '9+ yrs',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
    bio: 'Working on autonomous reasoning and multimodality. Loves teaching high school and undergraduate researchers how to publish their first papers.',
    topics: ['Deep Learning', 'Research Publications', 'Reinforcement Learning'],
    sessionsGiven: 104,
    rating: 5.0,
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com'
    }
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: 't-1',
    name: 'Alex Rivera',
    school: 'Stanford University ‘25',
    outcome: 'Software Engineer @ Stripe',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop&q=80',
    quote: 'Beyond Campus was the single most pivotal community in my undergraduate journey. Within three weeks of joining, my mentor David Chen helped me completely rebuild my backend projects and gave me the confidence to ace my Stripe onsite.',
    stars: 5,
    tag: 'Mentorship Impact'
  },
  {
    id: 't-2',
    name: 'Priya Sharma',
    school: 'IIT Delhi ‘26',
    outcome: 'Google Summer of Code & Open Source Contributor',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80',
    quote: 'As a student in India, it felt impossible to get direct advice from engineers at top international tech companies. Beyond Campus broke down every geographical barrier. I made lifelong friends and landed my dream open-source fellowship!',
    stars: 5,
    tag: 'Global Access'
  },
  {
    id: 't-3',
    name: 'Marcus Chen',
    school: 'University of Waterloo ‘24',
    outcome: 'Co-founder, AI Voice Tool (YC W25)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    quote: 'We met our co-founder at the Beyond Campus Winter Hackathon. The mentors didn’t just critique our code; they connected us to our first five beta customers. There is no other community with this density of ambitious builders.',
    stars: 5,
    tag: 'Startup Incubation'
  },
  {
    id: 't-4',
    name: 'Hanna Lindqvist',
    school: 'KTH Royal Institute of Technology ‘25',
    outcome: 'Cloud Infrastructure Intern @ Datadog',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80',
    quote: 'The masterclasses on Kubernetes and system architecture gave me practical knowledge that none of my university courses ever touched. When interviewers asked about observability, I spoke from real hands-on experience.',
    stars: 5,
    tag: 'Practical Skills'
  }
];

export const COMMUNITY_PLATFORMS = [
  {
    name: 'Discord Community',
    members: '12,800+ Active Members',
    description: 'Daily code discussions, 24/7 help desk, virtual study rooms, and weekly voice hangouts.',
    icon: 'MessageSquare',
    actionText: 'Join Discord Server',
    href: 'https://discord.gg',
    accent: '#5865F2',
    badge: 'Most Active'
  },
  {
    name: 'LinkedIn Network',
    members: '28,500+ Followers',
    description: 'Official announcements, mentor spotlights, hiring partner job drops, and student alumni updates.',
    icon: 'Linkedin',
    actionText: 'Follow on LinkedIn',
    href: 'https://linkedin.com',
    accent: '#0A66C2',
    badge: 'Alumni Network'
  },
  {
    name: 'GitHub Organization',
    members: '850+ Open Source Contributors',
    description: 'Explore community open-source starter kits, hackathon templates, and collaborative projects.',
    icon: 'Github',
    actionText: 'Explore Repositories',
    href: 'https://github.com',
    accent: '#F97316',
    badge: 'Open Source'
  },
  {
    name: 'X (Twitter) & Telegram',
    members: '14,000+ Community Voices',
    description: 'Instant event alerts, speaker announcements, student wins, and tech discussion threads.',
    icon: 'Twitter',
    actionText: 'Follow @BeyondCampus',
    href: 'https://x.com',
    accent: '#38BDF8',
    badge: 'Live Updates'
  }
];
