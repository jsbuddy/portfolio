import type { IconType } from "react-icons";
import { FaSlack } from "react-icons/fa";
import { TbBrandOpenai } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import {
  SiBun,
  SiClaude,
  SiClickup,
  SiCursor,
  SiDocker,
  SiFastapi,
  SiFigma,
  SiGithub,
  SiJavascript,
  SiJetpackcompose,
  SiKotlin,
  SiLangchain,
  SiLanggraph,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOllama,
  SiPostgresql,
  SiPosthog,
  SiPython,
  SiReact,
  SiSpotify,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVivaldi,
} from "react-icons/si";

export type StackItem = {
  title: string;
  description: string;
  icon: IconType;
  /** Position on the homepage featured grid; omit to hide from it. */
  featured?: number;
};

export type StackCategory = {
  name: string;
  items: StackItem[];
};

export const stack: StackCategory[] = [
  {
    name: "Languages and Frameworks",
    items: [
      {
        title: "TypeScript",
        description: "Programming Language",
        icon: SiTypescript,
        featured: 1,
      },
      {
        title: "JavaScript",
        description: "Programming Language",
        icon: SiJavascript,
      },
      {
        title: "Python",
        description: "Programming Language",
        icon: SiPython,
        featured: 2,
      },
      {
        title: "Node.js",
        description: "JavaScript Runtime",
        icon: SiNodedotjs,
        featured: 5,
      },
      {
        title: "Bun",
        description: "JavaScript Runtime",
        icon: SiBun,
      },
      {
        title: "React",
        description: "JavaScript Library",
        icon: SiReact,
      },
      {
        title: "Next.js",
        description: "React Framework",
        icon: SiNextdotjs,
        featured: 4,
      },
      {
        title: "FastAPI",
        description: "Python Framework",
        icon: SiFastapi,
      },
      {
        title: "Tailwind CSS",
        description: "CSS Framework",
        icon: SiTailwindcss,
      },
    ],
  },
  {
    name: "AI",
    items: [
      {
        title: "Claude Code",
        description: "AI Coding Agent",
        icon: SiClaude,
        featured: 7,
      },
      {
        title: "Codex",
        description: "AI Coding Agent",
        icon: TbBrandOpenai,
      },
      {
        title: "Cursor",
        description: "AI Code Editor",
        icon: SiCursor,
        featured: 8,
      },
      {
        title: "LangChain",
        description: "AI Framework",
        icon: SiLangchain,
      },
      {
        title: "LangGraph",
        description: "Agent Orchestration Framework",
        icon: SiLanggraph,
        featured: 9,
      },
      {
        title: "Ollama",
        description: "Local Model Runtime",
        icon: SiOllama,
      },
    ],
  },
  {
    name: "Mobile",
    items: [
      {
        title: "Kotlin",
        description: "Programming Language",
        icon: SiKotlin,
        featured: 3,
      },
      {
        title: "Jetpack Compose",
        description: "Android UI Toolkit",
        icon: SiJetpackcompose,
      },
      {
        title: "Compose Multiplatform",
        description: "Cross-platform UI Framework",
        icon: SiJetpackcompose,
      },
    ],
  },
  {
    name: "Tools",
    items: [
      {
        title: "Visual Studio Code",
        description: "Code Editor",
        icon: VscVscode,
      },
      {
        title: "GitHub",
        description: "Code Repository",
        icon: SiGithub,
      },
      {
        title: "PostgreSQL",
        description: "Database",
        icon: SiPostgresql,
        featured: 6,
      },
      {
        title: "MongoDB",
        description: "Database",
        icon: SiMongodb,
      },
      {
        title: "PostHog",
        description: "Product Analytics",
        icon: SiPosthog,
      },
      {
        title: "Docker",
        description: "Containerization Platform",
        icon: SiDocker,
      },
      {
        title: "Vercel",
        description: "Deployment Platform",
        icon: SiVercel,
      },
      {
        title: "Figma",
        description: "Design Tool",
        icon: SiFigma,
      },
    ],
  },
  {
    name: "Productivity",
    items: [
      {
        title: "Vivaldi",
        description: "Browser",
        icon: SiVivaldi,
      },
      {
        title: "Slack",
        description: "Communication Tool",
        icon: FaSlack,
      },
      {
        title: "ClickUp",
        description: "Project Management",
        icon: SiClickup,
      },
      {
        title: "Spotify",
        description: "Music Streaming",
        icon: SiSpotify,
      },
    ],
  },
];

export const featuredStack: StackItem[] = stack
  .flatMap((category) => category.items)
  .filter((item) => item.featured !== undefined)
  .sort((a, b) => a.featured! - b.featured!);
