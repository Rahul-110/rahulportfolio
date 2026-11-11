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
  reflection: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "lumora-ai",
    title: "Lumora AI",
    role: "Conversational AI · Product Design",
    year: "2026",
    tags: ["Product Design", "AI Interaction", "Design System"],
    accent: "rgba(169, 112, 255, 0.25)",
    cover: {
      src: "/images/lumora-cover.webp",
      alt: "Lumora AI Conversational Interface Case Study",
    },
    summary: "Exploring a trust-first conversational AI experience through contextual interactions, transparency, and user control.",
    problem: [
      "Users often struggle to maintain context across complex multi-turn AI conversations.",
      "Lack of transparent control over data privacy and state management in conversational tools.",
    ],
    process: [
      {
        title: "Discover",
        points: ["AI interaction patterns", "User mental models", "Trust & transparency research"],
      },
      {
        title: "Define",
        points: ["Conversational architecture", "Prompt ergonomics", "Design system primitives"],
      },
      {
        title: "Design",
        points: ["Interactive prototypes", "Multi-modal components", "User testing & refinement"],
      },
    ],
    finalUI: [
      "Context-aware assistant interface with clear state indicators.",
      "Modular components for code, data visualizations, and text output.",
      "Seamless switching between autonomous agent workflows and direct control.",
    ],
    outcomes: [
      { label: "Clarity", value: "High" },
      { label: "Trust", value: "Verified" },
      { label: "Adoption", value: "Seamless" },
    ],
    links: [{ label: "View on Behance", href: "https://www.behance.net/gallery/257469569/Lumora-AI" }],
    reflection: "Designing for AI requires a careful balance between autonomous automation and explicit user control. This project taught me the importance of building transparent state indicators so users always understand what the AI is doing and why.",
  },
  {
    slug: "juice-rush-delivery-app",
    title: "Juice Rush Online Delivery",
    role: "UI/UX · Mobile · Branding",
    year: "2024",
    tags: ["Problem", "Process", "Final UI"],
    accent: "rgba(249, 115, 22, 0.22)",
    cover: {
      src: "/images/juice-rush-cover.png",
      alt: "Juice Rush mobile app UI mockup",
    },
    summary: "A vibrant juice and smoothie delivery experience with fresh visual identity and seamless ordering flow.",
    problem: [
      "Users needed a quick way to order healthy beverages with customization options.",
      "The brand needed a fresh, energetic visual identity to stand out in the delivery market.",
    ],
    process: [
      {
        title: "Discover",
        points: ["Market research", "User interviews", "Competitor analysis"],
      },
      {
        title: "Define",
        points: ["Brand identity system", "User flow mapping", "Feature prioritization"],
      },
      {
        title: "Design",
        points: ["Visual design system", "UI components", "Prototyping & testing"],
      },
    ],
    finalUI: [
      "Bright, fresh UI that reflects the healthy brand personality.",
      "Quick customization for smoothie add-ons and preferences.",
      "Smooth checkout with real-time delivery tracking.",
    ],
    outcomes: [
      { label: "Engagement", value: "High" },
      { label: "Orders", value: "Increased" },
      { label: "Brand", value: "Recognizable" },
    ],
    links: [{ label: "View on Behance", href: "https://www.behance.net/gallery/232240055/Juice-Rush" }],
    reflection: "In high-frequency delivery apps, reducing friction in checkout and customization is critical. Focusing on micro-interactions and clear visual hierarchy significantly improved conversion flow.",
  },
  {
    slug: "juice-rush-operator-portal",
    title: "Juice Rush Operator Portal",
    role: "Product Design · Dashboard",
    year: "2024",
    tags: ["Dashboard", "SaaS", "Operations"],
    accent: "rgba(249, 115, 22, 0.25)",
    cover: {
      src: "/images/juice-rush-operator-cover.png",
      alt: "Juice Rush operator dashboard interface",
    },
    summary: "A comprehensive operator portal for managing juice delivery operations, orders, and inventory with real-time analytics.",
    problem: [
      "Operators needed a centralized dashboard to manage multiple delivery zones efficiently.",
      "Manual order processing led to delays and errors in fulfillment.",
      "Lack of real-time visibility into inventory and delivery status.",
    ],
    process: [
      {
        title: "Discover",
        points: ["Operator interviews", "Workflow analysis", "Pain point mapping"],
      },
      {
        title: "Define",
        points: ["Dashboard architecture", "Role-based access", "Real-time data flow"],
      },
      {
        title: "Design",
        points: ["Dashboard UI", "Order management system", "Analytics visualization"],
      },
    ],
    finalUI: [
      "Clean dashboard with real-time order tracking and status updates.",
      "Intuitive inventory management with low-stock alerts.",
      "Analytics dashboard for performance metrics and insights.",
    ],
    outcomes: [
      { label: "Efficiency", value: "40% faster" },
      { label: "Errors", value: "Reduced" },
      { label: "Visibility", value: "Real-time" },
    ],
    links: [{ label: "View on Behance", href: "https://www.behance.net/gallery/251855431/Juice-Rush-Operator-Portal-Product-Design-Case-Study" }],
    reflection: "Designing B2B SaaS operational tools taught me that information density must be balanced with visual clarity. Prioritizing actionable alerts and keyboard shortcuts drastically improved operator task completion speed.",
  },
];
