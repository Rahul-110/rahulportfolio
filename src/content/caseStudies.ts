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
    slug: "quickcart-online-delivery",
    title: "Quickcart Online Delivery",
    role: "UI/UX · Mobile · Research",
    year: "2025",
    tags: ["Problem", "Process", "Final UI"],
    accent: "rgba(34, 197, 94, 0.22)",
    cover: {
      src: "/quickcart-cover.png",
      alt: "Quickcart Grocery Delivery App UX Case Study",
    },
    summary: "A comprehensive online delivery app with UX research-driven design for e-commerce and shopping experience.",
    problem: [
      "Complex e-commerce flows causing user drop-offs during checkout.",
      "Need for intuitive navigation across multiple product categories.",
    ],
    process: [
      {
        title: "Discover",
        points: ["UX research", "User journey mapping", "Pain point analysis"],
      },
      {
        title: "Define",
        points: ["Information architecture", "UX strategy", "Wireframing"],
      },
      {
        title: "Design",
        points: ["High-fidelity UI", "Design system", "Usability testing"],
      },
    ],
    finalUI: [
      "Streamlined product discovery and search experience.",
      "Simplified checkout flow reducing cart abandonment.",
      "Consistent design patterns across all screens.",
    ],
    outcomes: [
      { label: "Conversion", value: "Improved" },
      { label: "UX", value: "Researched" },
      { label: "Experience", value: "Seamless" },
    ],
    links: [{ label: "View on Behance", href: "https://www.behance.net/gallery/245190999/Quickcart-Online-Delivery-App" }],
  },
  {
    slug: "juice-rush-delivery-app",
    title: "Juice Rush Online Delivery",
    role: "UI/UX · Mobile · Branding",
    year: "2024",
    tags: ["Problem", "Process", "Final UI"],
    accent: "rgba(249, 115, 22, 0.22)",
    cover: {
      src: "https://images.unsplash.com/photo-1557825835-70d97c4aa567?auto=format&fit=crop&w=1600&q=80&fm=webp",
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
    links: [{ label: "View on Behance", href: "https://www.behance.net/gallery/232240055/Juice-Rush-Online-Delivery-Mobile-Application" }],
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
    slug: "juice-rush-operator-portal",
    title: "Juice Rush Operator Portal",
    role: "Product Design · Dashboard",
    year: "2024",
    tags: ["Problem", "Process", "Final UI"],
    accent: "rgba(249, 115, 22, 0.25)",
    cover: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80&fm=webp",
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
  },
  {
    slug: "be-my-eye-email-marketing",
    title: "Be My Eye Email Marketing",
    role: "UI/UX · Marketing",
    year: "2024",
    tags: ["Problem", "Design", "Final UI"],
    accent: "rgba(59, 130, 246, 0.2)",
    cover: {
      src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80&fm=webp",
      alt: "Email marketing design template",
    },
    summary: "A modern email marketing campaign design focused on engagement and conversion with responsive templates.",
    problem: [
      "Existing email templates had low engagement rates.",
      "Need for mobile-responsive designs that work across all devices.",
      "Brand consistency across different email clients.",
    ],
    process: [
      {
        title: "Discover",
        points: ["Email audit", "Client analysis", "Competitor research"],
      },
      {
        title: "Design",
        points: ["Template system", "Visual hierarchy", "CTA optimization"],
      },
      {
        title: "Test",
        points: ["A/B testing", "Cross-client testing", "Performance optimization"],
      },
    ],
    finalUI: [
      "Clean, scannable email layouts with clear CTAs.",
      "Responsive designs that work on all devices.",
      "Brand-consistent visual system across templates.",
    ],
    outcomes: [
      { label: "Open Rate", value: "Improved" },
      { label: "Click Rate", value: "Higher" },
      { label: "Mobile", value: "Optimized" },
    ],
    links: [{ label: "View on Behance", href: "https://www.behance.net/gallery/223730661/Be-my-eye-Email-Marketing-Design" }],
  },
  {
    slug: "parallax-webpage-design",
    title: "Webpage Design in Parallax Effect",
    role: "UI/UX · Web · Motion",
    year: "2024",
    tags: ["Story", "Depth", "Performance"],
    accent: "rgba(167, 139, 250, 0.16)",
    cover: {
      src: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1600&q=80&fm=webp",
      alt: "Parallax scrolling webpage design",
    },
    summary: "An immersive webpage using parallax scrolling effects to create depth and engage users with storytelling.",
    problem: [
      "Need to create a memorable first impression for brand storytelling.",
      "Balance visual impact with performance and usability.",
      "Ensure smooth scrolling experience across devices.",
    ],
    process: [
      {
        title: "Define",
        points: ["Motion budget", "Layer planning", "Performance targets"],
      },
      {
        title: "Design",
        points: ["Visual layers", "Scroll triggers", "Animation timing"],
      },
      {
        title: "Develop",
        points: ["Parallax implementation", "Performance optimization", "Cross-browser testing"],
      },
    ],
    finalUI: [
      "Smooth parallax scrolling with multiple depth layers.",
      "Engaging visual storytelling through scroll-based animations.",
      "Optimized performance with 60fps scrolling.",
    ],
    outcomes: [
      { label: "Engagement", value: "High" },
      { label: "Performance", value: "Optimized" },
      { label: "Experience", value: "Immersive" },
    ],
    links: [{ label: "View on Behance", href: "https://www.behance.net/gallery/203548819/Webpage-design-in-Parallex-Effect" }],
  },
  {
    slug: "architecture-webpage-design",
    title: "Webpage Design for Architecture",
    role: "UI/UX · Web",
    year: "2024",
    tags: ["Problem", "Design", "Final UI"],
    accent: "rgba(139, 92, 246, 0.18)",
    cover: {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80&fm=webp",
      alt: "Architecture firm website design",
    },
    summary: "A modern architecture firm website showcasing projects with elegant typography and stunning imagery.",
    problem: [
      "Need to showcase architectural portfolio with visual impact.",
      "Balance large imagery with fast loading times.",
      "Create intuitive navigation for project exploration.",
    ],
    process: [
      {
        title: "Discover",
        points: ["Brand analysis", "Portfolio audit", "User journey mapping"],
      },
      {
        title: "Design",
        points: ["Visual system", "Gallery layout", "Typography hierarchy"],
      },
      {
        title: "Develop",
        points: ["Responsive implementation", "Image optimization", "Performance tuning"],
      },
    ],
    finalUI: [
      "Elegant gallery layout with large, high-quality project images.",
      "Clean typography that complements architectural aesthetics.",
      "Smooth transitions and intuitive project navigation.",
    ],
    outcomes: [
      { label: "Portfolio", value: "Showcased" },
      { label: "Performance", value: "Fast" },
      { label: "Aesthetics", value: "Premium" },
    ],
    links: [{ label: "View on Behance", href: "https://www.behance.net/gallery/201780691/Webpage-design-for-Architecture" }],
  },
  {
    slug: "eco-friendly-mobile-app",
    title: "Eco-Friendly Product Buying App",
    role: "UI/UX · Mobile",
    year: "2024",
    tags: ["Problem", "Process", "Final UI"],
    accent: "rgba(34, 197, 94, 0.22)",
    cover: {
      src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=80&fm=webp",
      alt: "Eco-friendly mobile app interface",
    },
    summary: "A mobile app for discovering and purchasing eco-friendly products with sustainability metrics and ethical sourcing information.",
    problem: [
      "Consumers struggle to find verified eco-friendly products.",
      "Lack of transparency in sustainability claims and sourcing.",
      "Need for easy comparison of environmental impact across products.",
    ],
    process: [
      {
        title: "Discover",
        points: ["User research", "Market analysis", "Sustainability standards"],
      },
      {
        title: "Define",
        points: ["Product taxonomy", "Trust indicators", "Comparison features"],
      },
      {
        title: "Design",
        points: ["Mobile UI", "Sustainability badges", "Comparison cards"],
      },
    ],
    finalUI: [
      "Clean product cards with clear sustainability badges.",
      "Easy comparison of environmental impact metrics.",
      "Trust indicators for verified eco-friendly claims.",
    ],
    outcomes: [
      { label: "Trust", value: "Built" },
      { label: "Discovery", value: "Easy" },
      { label: "Impact", value: "Transparent" },
    ],
    links: [{ label: "View on Behance", href: "https://www.behance.net/gallery/189683889/Mobile-app-Eco-Friendly-product-buying-app" }],
  },
];

