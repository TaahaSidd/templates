import { Service, Project, TeamMember, Testimonial } from "./types";

export const services: Service[] = [
  {
    id: "whatsapp-marketing",
    title: "WhatsApp Marketing",
    iconName: "MessageSquare",
    description: "Deploy high-impact chat campaigns, customer broadcast loops, and direct instant engagement funnels right inside WhatsApp.",
    benefits: [
      "Continuous broadcast automation setups",
      "High-conversion templates & campaign planning",
      "Opt-in lists and user database building tools",
      "Polished visual assets formatted for WhatsApp"
    ],
    duration: "Ongoing",
    priceEstimate: "$3,500/mo"
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots & Conversational Agents",
    iconName: "Cpu",
    description: "Build ultra-intelligent conversational agents running on Gemini models that answer support inquiries and qualify leads 24/7 on Autopilot.",
    benefits: [
      "Custom Gemini LLM model fine-tuning & prompt setup",
      "CRM, database, and custom scheduling integrations",
      "Conversational script design with fallback logic",
      "Staggering organic user conversion funnel tracking"
    ],
    duration: "3 - 5 Weeks",
    priceEstimate: "$8,000+"
  },
  {
    id: "automated-support",
    title: "Automated Customer Support",
    iconName: "CheckSquare",
    description: "Resolve tickets, issue status checks, and customer requests without staff intervention through structured conversation logic.",
    benefits: [
      "Ticket escalation & dynamic priority systems",
      "Omnichannel inbox synchronization (Web, WhatsApp, Slack)",
      "Automated feedback collection and scoring",
      "Self-service workflow templates & help desk hooks"
    ],
    duration: "4 - 6 Weeks",
    priceEstimate: "$6,500+"
  },
  {
    id: "web-app",
    title: "Web & App Development",
    iconName: "Code",
    description: "We develop digital assets, such as websites, microsites, and mobile apps, tailored specifically for your business growth.",
    benefits: [
      "Custom React & Next.js applications",
      "Robust responsive layouts for mobile & desktop",
      "High-performance API and databases integration",
      "Search-engine-optimized codebases out of the box"
    ],
    duration: "4 - 8 Weeks",
    priceEstimate: "$15,000+"
  },
  {
    id: "brand-strategy",
    title: "Brand Strategy",
    iconName: "Award",
    description: "We design premium positioning frameworks, identity strategies, and competitive rollout systems that command market recognition and design authority.",
    benefits: [
      "Competitive positioning & narrative design",
      "Brand style guidelines & logo architectures",
      "Go-to-market rollout coordination plans",
      "Customer persona mapping & research"
    ],
    duration: "4 - 6 Weeks",
    priceEstimate: "$12,000+"
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    iconName: "Mail",
    description: "We help you build high-value subscriber lists and deploy newsletters that regularly drive sales or nurture your audiences.",
    benefits: [
      "High-converting automated drip pipelines",
      "Visually beautiful, mobile-friendly newsletters",
      "Advanced user list segmentation & behavior triggers",
      "A/B multivariate performance tests"
    ],
    duration: "Ongoing",
    priceEstimate: "$3,200/mo"
  },
  {
    id: "seo",
    title: "Search Engine Marketing",
    iconName: "Search",
    description: "We are officially partnering with Google to make your website appear on top within minutes and captures high-intent traffic.",
    benefits: [
      "Intent-focused target search queries planning",
      "High-converting landing page creation & landing tests",
      "Google Ads (PPC) complete budget optimization",
      "Local SEO maps & citation network scaling"
    ],
    duration: "Instant Setup + Monthly",
    priceEstimate: "$5,000+"
  },
  {
    id: "creative-content",
    title: "Creative & Content",
    iconName: "PenTool",
    description: "We think outside the box to craft rich multimedia content that genuinely matters to your audience and fuels business expansion.",
    benefits: [
      "High-conversion copywriting & sales scripts",
      "Sleek professional asset branding guideline sets",
      "SEO copywriting for educational blogs and guides",
      "Polished multi-platform vector asset designs"
    ],
    duration: "Milestone-based",
    priceEstimate: "$6,000+"
  },
  {
    id: "digital-ads",
    title: "Digital Advertising & PPC",
    iconName: "TrendingUp",
    description: "We make your digital media buying and PPC stress-free by partnering with major, high-authority publishers.",
    benefits: [
      "Deep programmatic ads system bidding setup",
      "Retargeting funnels that rescue lost leads",
      "Comprehensive multi-platform analytics dashboarding",
      "Ad copy curation with dynamic testing scripts"
    ],
    duration: "Monthly Retainer",
    priceEstimate: "$4,000/mo"
  }
];

export const projects: Project[] = [
  {
    id: "techcorp-seo",
    title: "TechCorp's Traffic Soars With SEO Optimization",
    category: "SEO Optimization",
    description: "Boosted organic traffic by 50% for TechCorp through carefully targeted keyword strategies and comprehensive on-page optimization, driving significant growth in search engine visibility.",
    image: "/src/assets/images/project_seo_globe_1781896523546.jpg",
    metric: "+50%",
    metricLabel: "ORGANIC TRAFFIC",
    clientName: "TechCorp Inc.",
    year: "2025"
  },
  {
    id: "fashionwave-social",
    title: "FashionWave's Engagement Soars With Creative Campaigns",
    category: "Brand Strategy",
    description: "Increased follower engagement for FashionWave by 75% through the implementation of creative content strategies and interactive social media campaigns, significantly enhancing brand interaction and customer connection across all platforms.",
    image: "/src/assets/images/project_social_campaign_1781896539008.jpg",
    metric: "+75%",
    metricLabel: "FOLLOWER ENGAGEMENT",
    clientName: "FashionWave Group",
    year: "2026"
  },
  {
    id: "urbannest-brand",
    title: "UrbanNest's Brand Revamp Boosts Recognition",
    category: "Brand Strategy",
    description: "Revamped UrbanNest's brand identity, leading to a 60% increase in customer recognition and loyalty. The refreshed image strengthened market presence and deepened connections with the target audience.",
    image: "/src/assets/images/project_brand_mockup_1781896553286.jpg",
    metric: "+60%",
    metricLabel: "GROWTH IN CUSTOMER",
    clientName: "UrbanNest Living",
    year: "2025"
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: "cody",
    name: "Cody Fisher",
    role: "SEO Specialist & Partner",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    bio: "SEO wizard with over 8 years of organic optimization experience. Cody is dedicated to outranking hard-fought competitor keywords and driving targeted, high-intent traffic.",
    skills: ["Google Ads", "Organic Growth", "A/B Testing", "Content Silos"]
  },
  {
    id: "ronald",
    name: "Ronald Richards",
    role: "Creative Director",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    bio: "Ronald merges design with storytelling. Having crafted campaigns for international tech players, he knows how to keep copy highly engaging and visually stellar.",
    skills: ["Visual Identity", "Video Production", "Copy Strategy", "Figma Design"]
  },
  {
    id: "eleanor",
    name: "Eleanor Pena",
    role: "Media Planner & Lead",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    bio: "Data-led media strategist controlling over $10M in lifetime ad spend. Eleanor has an obsession with cost-per-click efficiency and funnel conversion maximization.",
    skills: ["Programmatic Ads", "PPC Bidding", "Brand Strategy", "Affiliate Networks"]
  },
  {
    id: "darrell",
    name: "Darrell Steward",
    role: "UI/UX & Web Architect",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    bio: "Darrell constructs highly responsive, beautiful digital assets that translate brand strategies into clean interactive code. Craft and usability are his priorities.",
    skills: ["React Development", "Vite & Tailwind", "Web Performance", "Interaction Design"]
  },
  {
    id: "cameron",
    name: "Cameron Williamson",
    role: "Marketing Coordinator",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
    bio: "Detail-focused coordinator making sure every campaign goes live on time and operates perfectly. Cameron maintains pristine client communication lines.",
    skills: ["Campaign Tracking", "Reporting Analytics", "Social Scheduling", "Lead Funneling"]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    author: "Robert Fox",
    role: "CEO",
    company: "UrbanNest",
    text: "The digital marketing team transformed our online presence, delivering exceptional results with their SEO and targeted ads. Highly recommend their professional approach!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "test-2",
    author: "Leslie Alexander",
    role: "Manager",
    company: "FashionWave",
    text: "We've seen incredible growth thanks to their tailored digital marketing strategies. The team's expertise in SEO and social media has been absolutely invaluable.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "test-3",
    author: "Arlene McCoy",
    role: "VP of Product",
    company: "TechCorp",
    text: "Working with Nexlo Systems has been a complete game-changer. Our search visibility rose beyond expectations within weeks, keeping our pipeline fully loaded.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "test-4",
    author: "Kristin Watson",
    role: "VP Growth",
    company: "RetailFlow",
    text: "The ROI estimate tool gave us immediate confidence, and their high-performing team exceeded that benchmark of 82% return inside our very first quarter.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
    rating: 5
  }
];
