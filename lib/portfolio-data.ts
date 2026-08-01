export interface HeroConfig {
  fullName: string;
  greeting: string;
  dynamicAdjectives: string[];
  headlinePrefix: string;
  headlineSuffix: string;
  fullTagline: string;
  bio: {
    location: string;
    specialties: Array<{
      title: string;
      tech: string;
    }>;
  };
}

export const heroConfig: HeroConfig = {
  fullName: "Eyob Tesfaye.",
  greeting: "Hi, I am",
  dynamicAdjectives: [
    "intelligent",
    "scalable",
    "high-performance",
    "resilient",
    "AI-driven",
  ],
  headlinePrefix: "I build ",
  headlineSuffix: " mobile apps, robust backends & AI solutions.",
  fullTagline: "I build intelligent mobile apps, robust backends & AI solutions.",
  bio: {
    location: "Addis Ababa, Ethiopia",
    specialties: [
      { title: "mobile app development", tech: "Flutter & Bloc" },
      { title: "fullstack application development", tech: "React & Next.js" },
      { title: "scalable backend microservices", tech: "Go, Gin & Django" },
      { title: "AI-driven systems", tech: "LSP & LLM multi-agent pipelines" },
    ],
  },
};
