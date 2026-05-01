export type CaseStudy = {
  slug: string;
  title: string;
  role: string;
  year: string;
  tags: string[];
  accent: string;
  cover: {
    src: string;
    alt: string;
  };
  summary: string;
  problem: string[];
  process: { title: string; points: string[] }[];
  finalUI: string[];
  outcomes: { label: string; value: string }[];
  links?: { label: string; href: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "quickcart-delivery-app",
    title: "Quickcart Delivery App",
    role: "UI/UX · Mobile",
    year: "2026",
    tags: ["Problem", "Process", "Final UI"],
    accent: "rgba(240, 171, 252, 0.22)",
    cover: {
      // WebP via Unsplash CDN params (responsive in markup)
      src: "https://images.unsplash.com/photo-1557825835-70d97c4aa567?auto=format&fit=crop&w=1600&q=80&fm=webp",
      alt: "Mobile UI mockup on a premium dark surface",
    },
    summary: "A modern ordering experience designed for speed, trust, and low-friction repeat purchases.",
    problem: [
      "Users struggled to find items quickly and felt uncertain about delivery ETA.",
      "The ordering flow had too many steps and inconsistent UI patterns.",
    ],
    process: [
      {
        title: "Discover",
        points: ["Competitor scan", "Heuristic review", "Top user journeys + edge cases"],
      },
      {
        title: "Define",
        points: ["IA + navigation model", "Checkout flow simplification", "Success metrics + states"],
      },
      {
        title: "Design",
        points: ["Component-first UI kit", "Motion spec for feedback", "High-fidelity screens + prototyping"],
      },
    ],
    finalUI: [
      "Clear hierarchy for browsing and search.",
      "Confident checkout with strong feedback + states.",
      "Consistent components for scale and handoff clarity.",
    ],
    outcomes: [
      { label: "Flow steps", value: "Reduced" },
      { label: "Clarity", value: "Higher" },
      { label: "Consistency", value: "Systemized" },
    ],
    links: [{ label: "Behance", href: "https://www.behance.net/" }],
  },
  {
    slug: "indoor-plant-3d-carousel",
    title: "Indoor Plant 3D Carousel",
    role: "UI/UX · Web",
    year: "2026",
    tags: ["Problem", "System", "Final UI"],
    accent: "rgba(96, 165, 250, 0.18)",
    cover: {
      src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1600&q=80&fm=webp",
      alt: "Minimal UI design sketch with premium lighting",
    },
    summary: "A minimal interface that supports a high-impact 3D interaction without compromising usability.",
    problem: [
      "3D UI easily becomes distracting and heavy if not structured.",
      "Users need clear control affordances and stable navigation.",
    ],
    process: [
      { title: "Define", points: ["Interaction states", "Control affordances", "Keyboard + focus considerations"] },
      { title: "Design", points: ["Minimal UI shell", "Depth cues", "Motion with restraint"] },
    ],
    finalUI: ["Clean layout that frames the 3D object.", "Controls that feel obvious and responsive."],
    outcomes: [
      { label: "Delight", value: "High" },
      { label: "Noise", value: "Low" },
      { label: "Focus", value: "Strong" },
    ],
  },
  {
    slug: "doctor-appointment-booking",
    title: "Doctor Appointment Booking",
    role: "UI/UX · Web",
    year: "2026",
    tags: ["Problem", "Flow", "Final UI"],
    accent: "rgba(167, 139, 250, 0.22)",
    cover: {
      src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80&fm=webp",
      alt: "Product team reviewing UI on a laptop",
    },
    summary: "A trust-driven booking flow designed to reduce uncertainty and improve scheduling confidence.",
    problem: [
      "Healthcare booking UX breaks when availability and expectations aren’t clear.",
      "Users need reassurance: doctor context, slot clarity, confirmation states.",
    ],
    process: [
      { title: "Discover", points: ["User anxiety points", "Booking drop-off drivers", "Information needs"] },
      { title: "Define", points: ["Flow map + slot rules", "Information hierarchy", "Error prevention states"] },
      { title: "Design", points: ["Accessible components", "Clear confirmation UX", "Mobile-first layout"] },
    ],
    finalUI: ["Transparent slots + doctor info.", "Clear confirmation, reschedule/cancel affordances."],
    outcomes: [
      { label: "Trust", value: "Improved" },
      { label: "Errors", value: "Reduced" },
      { label: "Speed", value: "Faster booking" },
    ],
  },
  {
    slug: "parallax-landing-experience",
    title: "Parallax Landing Experience",
    role: "UI/UX · Motion",
    year: "2026",
    tags: ["Story", "Depth", "Performance"],
    accent: "rgba(167, 139, 250, 0.16)",
    cover: {
      src: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1600&q=80&fm=webp",
      alt: "Abstract lights and gradients for premium motion design",
    },
    summary: "A storytelling landing page that uses depth and easing to guide attention—without heavy effects.",
    problem: [
      "Parallax can feel gimmicky if hierarchy is weak.",
      "Performance drops quickly when too many layers animate per frame.",
    ],
    process: [
      { title: "Define", points: ["Motion budget", "Layer count limits", "Reduced-motion fallback"] },
      { title: "Design", points: ["Depth map", "Micro-interaction spec", "GPU-friendly transforms only"] },
    ],
    finalUI: ["Subtle depth layers reinforce hierarchy.", "Smooth scrolling with accessible fallback."],
    outcomes: [
      { label: "Performance", value: "Budgeted" },
      { label: "Hierarchy", value: "Reinforced" },
      { label: "Feel", value: "Premium" },
    ],
  },
];

