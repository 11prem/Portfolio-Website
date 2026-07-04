// Mock data and utilities for portfolio
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export const contactFormMock = {
  submit: async (formData) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock successful submission
    console.log('Mock contact form submission:', formData);
    return {
      success: true,
      message: 'Thanks — I\'ll respond within 24 hours.'
    };
  }
};

export const resumeUrl = "/Prem_B-Resume.pdf";

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/11prem',
    icon: Github
  },
  {
    name: 'LinkedIn',
    url: 'http://linkedin.com/in/premb2004',
    icon: Linkedin
  },
  {
    name: 'Email',
    url: 'mailto:prem112004@gmail.com',
    icon: Mail
  },
  {
    name: 'Phone',
    url: 'tel:+91 8056187431',
    icon: Phone
  }
];

export const personalInfo = {
  name: 'Prem B',
  location: 'Chengalpattu, Tamil Nadu, India',
  taglines: {
    short: 'Developing enterprise AI applications, real-time data pipelines, and intelligent automation.',
    recruiter: 'Computer Science graduate — HCLTech, Google Developers & ISRO internships, production focus.',
    technical: 'Building scalable backend systems, RAG workflows, data pipelines, and AI-powered solutions.'
  },
  subtitle: 'Data Engineer, AI/ML Engineer, Full-Stack Developer',
  about: 'Computer Science graduate with hands-on experience in Generative AI, Retrieval-Augmented Generation (RAG), Data Engineering, Machine Learning, and Full-Stack Development. Experienced in developing enterprise AI applications, data pipelines, and intelligent automation solutions using FastAPI, React, PostgreSQL, Docker, Python, and LLMs. Interned at HCLTech and Indian Space Research Organization-ISRO, building scalable backend systems, data engineering workflows, and AI-powered applications for real-world enterprise use cases.'
};

export const skills = {
  'Languages': ['Python', 'SQL', 'Java', 'JavaScript', 'Dart'],
  'AI & Machine Learning': ['Generative AI', 'Retrieval-Augmented Generation (RAG)', 'Prompt Engineering', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Sentence Transformers', 'Reinforcement Learning (PPO, DQN)'],
  'Backend Development': ['FastAPI', 'Flask', 'REST APIs', 'SQLAlchemy', 'JWT Authentication', 'RBAC'],
  'Data Engineering': ['Apache Kafka', 'Apache NiFi', 'Logstash', 'ETL', 'Data Warehousing', 'Pandas', 'Polars', 'OpenPyXL', 'Data Validation'],
  'Databases': ['PostgreSQL', 'pgvector', 'SQLite', 'Firebase Realtime Database'],
  'Frontend': ['React', 'Next.js', 'Flutter'],
  'Tools': ['Docker', 'Git', 'GitHub', 'Jupyter Notebook', 'VS Code', 'CI/CD'],
  'Languages Spoken': ['Tamil (Native)', 'English (Fluent)', 'Hindi (Proficient)', 'Japanese (Basic)']
};

export const projects = [
  {
    id: 'resolve-ai',
    title: 'Resolve AI — Enterprise AI Helpdesk Agent',
    summary: 'RAG-powered enterprise IT helpdesk using Gemini 2.5 Flash to automate ticket classification, troubleshooting, and intelligent support workflows.',
    bullets: [
      'Built a RAG-powered enterprise IT helpdesk using Gemini 2.5 Flash to automate ticket classification, troubleshooting, and intelligent support workflows.',
      'Implemented semantic search, JWT authentication, RBAC, audit logging, safety-gated tool execution, and Docker deployment.'
    ],
    tech: ['FastAPI', 'React', 'PostgreSQL', 'pgvector', 'Gemini', 'Docker'],
    github: 'https://github.com/11prem/Resolve-AI',
    demo: null,
    image: '/images/Resolve_AI.png'
  },
  {
    id: 'aarcs',
    title: 'AARCS — Automated Ambulance Route Clearance System',
    summary: 'Real-time ambulance routing & notification system (mobile + backend).',
    bullets: [
      'Engineered dual Flutter apps with Firebase Realtime Database & Node.js backend, reducing emergency vehicle travel time by 50% in urban areas.',
      'Integrated Google Maps API with real-time GPS tracking and dynamic route recalculation, enabling live ETA predictions across 10+ traffic signals.',
      'Implemented Firebase Admin SDK custom token authentication & role-based access control, achieving 65% reduction in traffic congestion delays.'
    ],
    tech: ['Flutter', 'Firebase', 'Node.js', 'Google Maps API'],
    github: 'https://github.com/11prem/AARCS-AMBULANCE',
    demo: null,
    image: '/images/AARCS.png'
  },
  {
    id: 'google-analytics',
    title: 'Analytics Visualization — Google Developers',
    summary: 'Dash-based analytics suite for large-scale datasets and stakeholder reporting.',
    bullets: [
      'Cleaned & normalized 8 large datasets, uncovering +12% more relevant trends.',
      'Built interactive Dash dashboards reducing stakeholder analysis time by ~30%.',
      'Produced technical report & walkthrough adopted by global teams.'
    ],
    tech: ['Python', 'Dash', 'SQL', 'Plotly'],
    github: null,
    demo: null,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDB8fHx8MTc1OTMyOTM4NHww&ixlib=rb-4.1.0&q=85'
  },
  {
    id: 'telemetry',
    title: 'NavIC Ranging Data Monitoring System',
    summary: 'Mission telemetry dashboard converting binary telemetry streams to live visual logs.',
    bullets: [
      'Engineered binary→JSON ingestion and low-latency REST + WebSocket APIs.',
      'Reduced telemetry latency from 5s to 2s and automated data-prep, cutting labor by ~60%.',
      'Integrated ELK for centralized logging (improved debugging speed ~40%).'
    ],
    tech: ['Python', 'Flask', 'SQL', 'WebSockets', 'ELK'],
    github: null,
    demo: null,
    image: '/images/Telemetry_Dashboard.png'
  },
  {
    id: 'robotics',
    title: 'Robotic Arm Manipulator using Reinforcement Learning',
    summary: 'Robotic Arm Manipulator (simulation).',
    bullets: [
      'Designed and simulated robotic-arm workflows in PyBullet + OpenCV, achieving a 92% pick-and-place success rate (simulation).',
      'Trained RL agents (PPO & DQN), improving assembly precision by 15% (simulation).',
      'Documented system architecture and delivered training to a 5-member team.'
    ],
    tech: ['PyBullet', 'OpenCV', 'NumPy', 'Reinforcement Learning'],
    github: null,
    demo: null,
    image: '/images/Robotic_Arm_Manipulator.png'
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website — This Site',
    summary: 'Recruiter-focused portfolio site showcasing mobile, real-time, and ML projects — React + Tailwind + Canvas.',
    bullets: [
      'Minimal, aesthetic UI with animated background, light/dark modes, accessible components and resume download.',
      'SEO & performance-first: meta tags, lazy-loaded assets, optimized images.',
      'Responsive design with micro-interactions and smooth animations throughout.'
    ],
    tech: ['React', 'Tailwind CSS', 'Canvas API', 'React Router', 'Lucide Icons'],
    github: 'https://github.com/11prem/Portfolio-Website',
    demo: null,
    image: '/images/Portfolio_Website.png'
  }
];

export const experience = [
  {
    company: 'HCLTech',
    role: 'Data Engineer Intern',
    period: 'Mar 2026 – Present',
    description: 'Developed Python-based data validation and preprocessing solutions using Pandas, Polars, and OpenPyXL to automate enterprise Excel processing and reporting workflows. Engineered a real-time ETL pipeline using Apache NiFi, Kafka, Logstash, and PostgreSQL; contributed to SQL development, data warehousing, and business requirement analysis.'
  },
  {
    company: 'Google Developers',
    role: 'Machine Learning Engineer Intern',
    period: 'Apr 2025 – May 2025',
    description: 'Built feature engineering pipelines across 8+ datasets to improve data quality and model performance. Developed an interactive Dash dashboard for data visualization and business insights.'
  },
  {
    company: 'ISRO ISTRAC',
    role: 'Software Engineer Intern',
    period: 'Jan 2025 – Feb 2025',
    description: 'Built a Flask-based telemetry dashboard integrated with SQL pipelines, reducing processing latency from 5s to 2s. Automated binary-to-JSON conversion and ELK logging, reducing manual data preparation by 60%.'
  },
  {
    company: 'ISRO SDSC',
    role: 'AI and Robotics Intern',
    period: 'Sep 2024 – Oct 2024',
    description: 'Designed and simulated robotic-arm workflows in PyBullet and OpenCV, trained PPO and DQN reinforcement learning agents, and documented architecture while conducting hands-on training for a team of five to optimize assembly precision.'
  }
];

export const education = [
  {
    degree: 'B.Tech, Computer Science & Engineering',
    period: '2022 - 2026',
    institution: 'Bharath Institute of Science and Technology',
    cgpa: '8.83',
    scoreLabel: 'CGPA'
  },
  {
    degree: 'Intermediate (MPC)',
    period: '2020 - 2022',
    institution: "St. Vincent's. Mat. High. Sec. School",
    cgpa: '74.5%',
    scoreLabel: 'Score'
  },
  {
    degree: 'State Board (SSLC)',
    period: '2019 - 2020',
    institution: "St. Vincent's. Mat. High. Sec. School",
    cgpa: '81.6%',
    scoreLabel: 'Score'
  }
];

export const publications = [
  {
    title: 'Adaptive Real Time Path Optimization for Traffic Signal Using AARCS',
    publisher: 'IEEE',
    date: 'Feb 2025',
    bullets: [
      'Published IEEE research proposing a GPS-based emergency mobility framework to reduce ambulance delays in urban traffic.',
      'Designed system architecture connecting driver apps, traffic monitoring interfaces, and live location services.'
    ]
  }
];