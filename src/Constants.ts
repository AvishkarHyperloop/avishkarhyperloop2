
import { NavItem, Feature, VideoItem, PodModel, Article } from './types';
import { Zap, Magnet, Wind, Box, FileText, Database } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Pod', href: '/pod' },
  { label: 'Media', href: '/media' },
  { label: 'Team', href: '/team' },
  { label: 'Subsystems', href: 'subsystems' },
  { label: 'Infrastructure', href: '/infrastructure' },
  { label: 'Our Partners', href: 'partners' },
  { label: 'Contact Us', href: 'contact' },
  // { label: 'Research', href: '/research' },
  // { label: 'Partners', href: '#partners' },
  // { label: 'Blog', href: '#blog' },
  // { label: 'Contact Us', href: '#contact' },
  // { label: 'Ticket Calculator', href: '#calculator' },
];

export const FEATURES: Feature[] = [
  {
    title: "Linear Induction Motor",
    description: "Contactless propulsion allowing for high acceleration and minimal friction.",
    icon: "Zap"
  },
  {
    title: "Magnetic Levitation",
    description: "Electro-dynamic suspension ensures a smooth, stable ride at supersonic speeds.",
    icon: "Magnet"
  },
  {
    title: "Vacuum Tube",
    description: "Near-vacuum environment eliminates air resistance, unlocking max efficiency.",
    icon: "Wind"
  },
  {
    title: "Autonomous Control",
    description: "AI-driven navigation systems for millisecond-precision braking and acceleration.",
    icon: "Cpu"
  }
];

export const INFRASTRUCTURE_DATA = [
  {
    id: 1,
    title: "Vacuum Pumps",
    description: "High-capacity rotary vane pumps maintain 0.001 atm pressure throughout the tube network.",
    stats: "99.9% Air Removal"
  },
  {
    id: 2,
    title: "Expansion Joints",
    description: "Advanced thermal expansion handling systems accommodating temperature variations of 50°C.",
    stats: "+/- 50cm Flex"
  },
  {
    id: 3,
    title: "Concrete Pylons",
    description: "Reinforced earthquake-resistant pillars spaced 30m apart to minimize land footprint.",
    stats: "Richter 8.0 Rated"
  },
  {
    id: 4,
    title: "Solar Cladding",
    description: "Top-mounted solar panels provide 100% of operational energy for the vacuum systems.",
    stats: "1.2 MW Output"
  }
];

export const GALLERY_IMAGES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?q=80&w=1000&auto=format&fit=crop",
    title: "Vacuum Testing",
    category: "R&D"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1000&auto=format&fit=crop",
    title: "Propulsion Systems",
    category: "Engineering"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1535378437321-29e904b3dd43?q=80&w=1000&auto=format&fit=crop",
    title: "Tube Infrastructure",
    category: "Site"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1580983218765-f663bec07b37?q=80&w=1000&auto=format&fit=crop",
    title: "Control Center",
    category: "Operations"
  }
];

export const VIDEO_STACK: VideoItem[] = [
  {
    id: 1,
    title: "Avishkar Hyperloop Progress",
    category: "TESTING",
    thumbnail: "https://img.youtube.com/vi/LcGnVSn1CJQ/maxresdefault.jpg",
    duration: "02:14",
    youtubeId: "LcGnVSn1CJQ"
  },
  {
    id: 2,
    title: "Propulsion System",
    category: "SIMULATION",
    thumbnail: "https://img.youtube.com/vi/SUOMVRJ_LhA/maxresdefault.jpg",
    duration: "01:45",
    youtubeId: "SUOMVRJ_LhA"
  },
  {
    id: 3,
    title: "Vacuum Tube Infrastructure",
    category: "INFRASTRUCTURE",
    thumbnail: "https://img.youtube.com/vi/WbYyf4tdxO8/maxresdefault.jpg",
    duration: "03:30",
    youtubeId: "WbYyf4tdxO8"
  },
  {
    id: 4,
    title: "Team Overview",
    category: "CULTURE",
    thumbnail: "https://img.youtube.com/vi/6_NGm9N-YS0/maxresdefault.jpg",
    duration: "04:15",
    youtubeId: "6_NGm9N-YS0"
  },
  {
    id: 5,
    title: "Feature Highlights",
    category: "EVENTS",
    thumbnail: "https://img.youtube.com/vi/039TV1s141Q/maxresdefault.jpg",
    duration: "05:00",
    youtubeId: "039TV1s141Q"
  }
];

// export const POD_MODELS: PodModel[] = [
//   {
//     id: 'p1',
//     name: 'AVISHKAR 1.0',
//     tagline: 'THE PROTOTYPE',
//     description: 'The genesis of our journey. Built in 2019, this pod successfully demonstrated the core feasibility of linear induction propulsion on a sub-scale track, securing top honors at the SpaceX Hyperloop Pod Competition.',
//     image: 'https://images.unsplash.com/photo-1581093583449-ed2521344db5?q=80&w=2500&auto=format&fit=crop', // Industrial mechanical look
//     stats: {
//       maxSpeed: '120 KM/H',
//       weight: '250 KG',
//       propulsion: 'Single-Sided LIM',
//       levitation: 'Wheeled (Gen 1)'
//     }
//   },
//   {
//     id: 'p2',
//     name: 'GARUDA',
//     tagline: 'CURRENT GENERATION',
//     description: 'Our current champion. Garuda features a lightweight carbon-fiber chassis and a custom-designed double-sided linear induction motor. It is engineered for high-speed stability and rapid braking.',
//     image: 'https://images.unsplash.com/photo-1535970793482-07de93762dc4?q=80&w=2500&auto=format&fit=crop', // Sleek carbon fiber look
//     stats: {
//       maxSpeed: '463 KM/H',
//       weight: '180 KG',
//       propulsion: 'Double-Sided LIM',
//       levitation: 'Electro-Dynamic'
//     }
//   },
//   {
//     id: 'p3',
//     name: 'AGNI',
//     tagline: 'FUTURE CONCEPT',
//     description: 'The future of intercity travel. Agni is designed for the vacuum tube environment, targeting Mach 1.0 speeds. It integrates passenger life-support systems and fully autonomous navigation.',
//     image: 'https://images.unsplash.com/photo-1532976695276-80540d57fd3a?q=80&w=2500&auto=format&fit=crop', // Futuristic concept art
//     stats: {
//       maxSpeed: '1200 KM/H',
//       weight: '2200 KG',
//       propulsion: 'Superconducting Maglev',
//       levitation: 'Active Magnetic'
//     }
//   }
// ];

export const AVISHKAR_INFO = `Avishkar Hyperloop is a student team from IIT Madras, working on developing a scalable Hyperloop system. The team is competing in global competitions to prove the viability of this fifth mode of transport.`;

export const PARTNER_LOGOS = [
  { id: 1, name: "IITMAA", url: "/partners/IITMAA.png" },
  { id: 2, name: "TE Connectivity", url: "/partners/polamcote-logo2.png" },
  { id: 3, name: "Arcelor Mittal", url: "/partners/Arcelormittal-logo.svg.png" },
  { id: 4, name: "Indian Railways", url: "/partners/IndianRailways.png" },
  { id: 5, name: "Wabtec", url: "/partners/wabtec.png" },
  { id: 6, name: "Harting", url: "/partners/Harting.png.png" },
  { id: 7, name: "Ansys", url: "/partners/image.png" },
  { id: 8, name: "Vector", url: "/partners/vector.png" },
  { id: 9, name: "Swagelok", url: "/partners/swagelok.png" },
  { id: 10, name: "Aditya Birla (Hindalco)", url: "/partners/Hindalco.png" },
  { id: 11, name: "Composites Tomorrow", url: "/partners/CompositesTomorrow.png" },
];


export const RESEARCH_AREAS = [
  {
    id: 1,
    title: 'Aerodynamics',
    description: 'Computational Fluid Dynamics (CFD) analysis of pod geometry in transonic regimes to minimize drag coefficient and shockwave formation.',
    icon: Wind
  },
  {
    id: 2,
    title: 'Levitation Systems',
    description: 'Development of Electro-Dynamic Suspension (EDS) using Halbach arrays for stable, passive levitation at high velocities.',
    icon: Magnet
  },
  {
    id: 3,
    title: 'Propulsion',
    description: 'Design of double-sided Linear Induction Motors (LIM) optimized for vacuum environments and high-frequency switching.',
    icon: Zap
  },
  {
    id: 4,
    title: 'Structures',
    description: 'Finite Element Analysis (FEA) of carbon fiber monocoque chassis to ensure structural integrity under 10G loads.',
    icon: Box
  }
];

export const PUBLICATIONS = [
  {
    id: 1,
    title: "Optimization of Linear Induction Motor for Hyperloop Applications",
    year: "2023",
    abstract: "A comparative study of single-sided vs double-sided LIM topologies focusing on end-effects and thermal dissipation in vacuum.",
    link: "#"
  },
  {
    id: 2,
    title: "Passive Magnetic Levitation Stability Analysis",
    year: "2022",
    abstract: "Investigating the 6-DOF dynamics of a Halbach array-based suspension system at subsonic speeds.",
    link: "#"
  },
  {
    id: 3,
    title: "CFD Simulation of Pods in Low-Pressure Tubes",
    year: "2021",
    abstract: "Analyzing the Kantrowitz limit and aerodynamic drag reduction techniques for tube-based transport.",
    link: "#"
  }
];

export const LAB_FACILITIES = [
  {
    id: 1,
    name: "Vacuum Chamber",
    description: "A 3-meter diameter chamber capable of simulating pressures down to 0.001 atm for component testing.",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Winding Lab",
    description: "Dedicated facility for precision winding of linear motor stators and electromagnetic coils.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Control Center",
    description: "Real-time telemetry station for monitoring pod subsystems and track conditions during runs.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop"
  }
];


// src/Constants.ts
export const POD_MODELS = [
  {
    id: 1,
    name: "POD V1",
    modelUrl: "/models/pod-v1.glb",
    image: "/images/pod-v1.jpg",
    description:
      "Our first-generation prototype focusing on aerodynamic stability and low-friction levitation.",
    stats: {
      maxSpeed: "220 km/h",
      weight: "145 kg",
      propulsion: "Magnetic Linear Drive",
      levitation: "Hybrid Air-Cushion System",
    },
  },
  {
    id: 2,
    name: "POD V2",
    modelUrl: "/models/pod-v2.glb",
    image: "/images/pod-v2.jpg",
    description:
      "Second-generation prototype with improved structural integrity and optimized aerodynamics.",
    stats: {
      maxSpeed: "310 km/h",
      weight: "137 kg",
      propulsion: "Enhanced Linear Motor",
      levitation: "EML-Based System",
    },
  }
];

export const ARTICLES = [
  {
    id: "1",
    title: "Hyperloop Design By IIT-Madras Enters SpaceX Finals",
    date: "2019",
    link: "https://www.iitm.ac.in/happenings/press-releases-and-coverages/hyperloop-design-iit-madras-enters-spacex-finals",
    category: "News"
  },
  {
    id: "2",
    title: "IIT Madras Avishkar Hyperloop unveils pod for the SpaceX Competition",
    date: "2019",
    link: "https://www.indiatoday.in/education-today/news/story/iit-madras-avishkar-hyperloop-unveils-pod-for-the-spacex-competition-1554558-2019-06-22",
    category: "Competition"
  },
  {
    id: "3",
    title: "IIT-M Avishkar Hyperloop team zooms into SpaceX contest final",
    date: "2019",
    link: "https://www.thehindubusinessline.com/news/science/iit-m-avishkar-hyperloop-team-zooms-into-spacex-contest-final/article28669431.ece",
    category: "Competition"
  },
  {
    id: "4",
    title: "Avishkar Hyperloop - The Journey So Far",
    date: "2020",
    link: "https://youtu.be/hDm0-lZwqxs?si=dK8usvmTRV9z318f",
    category: "Video"
  },
  {
    id: "5",
    title: "IIT Madras' Avishkar Team Gets Funding & Technical Support from L&T",
    date: "2022",
    link: "https://www.iitm.ac.in/happenings/press-releases-and-coverages/iit-madras-avishkar-team-gets-funding-technical-support",
    category: "Funding"
  },
  {
    id: "6",
    title: "IIT Madras Students' Hyperloop Team Avishkar emerges among top 3 Global",
    date: "2023",
    link: "https://www.iitm.ac.in/happenings/press-releases-and-coverages/iit-madras-students-hyperloop-team-avishkar-emerges-among",
    category: "Achievement"
  },
  {
    id: "7",
    title: "India's first Hyperloop test track, built by IIT Madras teams, revealed",
    date: "2024",
    link: "https://www.hindustantimes.com/india-news/indias-first-hyperloop-test-track-built-by-iit-madras-teams-revealed-video-101733467491909.html",
    category: "Infrastructure"
  },
  {
    id: "8",
    title: "Avishkar Hyperloop 2025 Vision",
    date: "2025",
    link: "https://youtu.be/zsP-px1QUZo?si=ykCjabzUwV5LRUxo",
    category: "Video"
  },
  {
    id: "9",
    title: "IIT Madras’ Avishkar Hyperloop bags top spots at European Hyperloop Week 2025",
    date: "2025",
    link: "https://www.indiatoday.in/education-today/news/story/iit-madras-avishkar-hyperloop-bags-top-spots-at-european-hyperloop-week-2025-2574512-2025-07-25",
    category: "Achievement"
  },
  {
    id: "10",
    title: "10 Km In 3 Minutes: India To Launch First Hyperloop Cargo Project",
    date: "2025",
    link: "https://www.outlookindia.com/travel/10-km-in-3-minutes-india-to-launch-first-hyperloop-cargo-project-at-mumbai-port-work-starts-next-month-news-313456",
    category: "Future"
  },
  {
    id: "11",
    title: "IIT Madras develops test track for 1100 kmph hyperloop speed",
    date: "2024",
    link: "https://www.indiatoday.in/education-today/news/story/iit-madras-develops-test-track-for-1100-kmh-hyperloop-speed-2645956-2024-12-06",
    category: "Technology"
  },
  {
    id: "12",
    title: "IIT team SpaceX Hyperloop competition Elon Musk",
    date: "2019",
    link: "https://yourstory.com/2019/03/iit-team-spacex-hyperloop-competition-elon-musk",
    category: "History"
  },
  {
    id: "13",
    title: "Avishkar Blog - Progress Report",
    date: "2024",
    link: "https://avishkarhyperloop.com/blog/3.php",
    category: "Blog"
  },
  {
    id: "14",
    title: "IIT Madras, Railways collaborate to develop Hyperloop system",
    date: "2022",
    link: "https://www.ndtv.com/india-news/iit-madras-railways-collaborate-to-develop-made-in-india-hyperloop-system-2993286",
    category: "Collaboration"
  },
  {
    id: "15",
    title: "India Advances with Hyperloop Test Track",
    date: "2024",
    link: "https://www.gktoday.in/india-advances-with-hyperloop-test-track/",
    category: "Infrastructure"
  },
  {
    id: "16",
    title: "Avishkar Brochure",
    date: "2024",
    link: "https://avishkarhyperloop.com/Brochure%207.0.pdf",
    category: "Brochure"
  },
  {
    id: "17",
    title: "IIT Madras completes 410 meter hyperloop test track",
    date: "2025",
    link: "https://currentaffairs.adda247.com/iit-madras-completes-410-meter-hyperloop-test-track/",
    category: "Infrastructure"
  },
  {
    id: "18",
    title: "Hyperloop Concept Video 2018",
    date: "2018",
    link: "https://www.youtube.com/watch?v=DZFigucPv-o",
    category: "Video"
  },
  {
    id: "19",
    title: "Team Introduction 2022",
    date: "2022",
    link: "https://www.youtube.com/watch?v=039TV1s141Q",
    category: "Video"
  },
  {
    id: "20",
    title: "Avishkar Promotional Video",
    date: "2022",
    link: "https://www.youtube.com/watch?v=6y2mBF1gx7k",
    category: "Video"
  },
  {
    id: "21",
    title: "Will IIT Madras' Hyperloop Revolutionize Transport?",
    date: "2024",
    link: "https://acr.iitm.ac.in/iitm_in_news/will-iit-madrass-hyperloop-research-revolutionize-transportation-in-the-country/",
    category: "News"
  },
  {
    id: "22",
    title: "Garuda: The New Pod",
    date: "2025",
    link: "https://satyaagrah.com/global/global-science-and-technology/3312-garud",
    category: "News"
  },
  {
    id: "23",
    title: "Hyperloop Testing Phase 2025",
    date: "2025",
    link: "https://www.youtube.com/watch?v=hokdJEzlVFE",
    category: "Video"
  },
  {
    id: "24",
    title: "Instagram Reel Update 2024",
    date: "2024",
    link: "https://www.instagram.com/reel/C5XtjGVvTWY/",
    category: "Social"
  }
];
