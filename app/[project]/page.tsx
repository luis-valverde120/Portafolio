import { notFound } from 'next/navigation';
import ProjectView from './project-view';

interface ProjectDetails {
  description: string;
  stackJson: Record<string, string>;
  logFile: string;
  logs: string[];
  links: string[];
}

const projectsRegistry: Record<string, ProjectDetails> = {
  "wardrobe-ai": {
    description: "Wardrobe-AI is a cross-platform mobile application that uses artificial intelligence for virtual clothing simulation. Designed with a serverless architecture for real-time inference.",
    stackJson: {
      "Framework": "Flutter",
      "State_Management": "Riverpod",
      "AI_Inference": "fal.ai",
      "Database_Storage": "Supabase"
    },
    logFile: "wardrobe_system.log",
    logs: [
      "[INFO] Initializing Riverpod asynchronous providers...",
      "[ OK ] Connected to Supabase PostgreSQL instance.",
      "[INFO] Establishing WebSocket to fal.ai inference node...",
      "[ OK ] Generative diffusion model loaded successfully. Latency: 42ms."
    ],
    links: [
      "View Source Code on GitHub",
      "Run Live Demo"
    ]
  },
  "t-world": {
    description: "T-World is a high-performance Full-Stack E-commerce platform for themed clothing. Designed with Server Actions to reduce latency and a strict relational data schema to manage complex inventories.",
    stackJson: {
      "Core_Framework": "Next.js (App Router)",
      "Database": "PostgreSQL",
      "ORM": "Prisma",
      "Security": "NextAuth.js",
      "Styling": "Tailwind CSS"
    },
    logFile: "tworld_server.log",
    logs: [
      "[INFO] Initializing Next.js Serverless runtime...",
      "[ OK ] Prisma Client connected to PostgreSQL database.",
      "[INFO] Synchronizing relational models (Products, Categories, Sizes).",
      "[ OK ] NextAuth session middleware successfully bound to /checkout.",
      "[ OK ] Static assets cached. Ready to accept connections."
    ],
    links: [
      "View Source Code on GitHub",
      "Inspect Database Schema"
    ]
  },
  "zyrex": {
    description: "Zyrex is a digital marketplace designed to empower artisans in Tulcan. Built on a robust Node.js architecture with Server-Side Rendering (SSR) to ensure optimal SEO indexing.",
    stackJson: {
      "Runtime": "Node.js",
      "Backend_Framework": "Express.js",
      "Language": "TypeScript",
      "Template_Engine": "EJS",
      "Session_Store": "express-session"
    },
    logFile: "zyrex_core.log",
    logs: [
      "[INFO] Compiling TypeScript interfaces for Data Models...",
      "[ OK ] Express server listening on port 3000.",
      "[INFO] Mounting express-session with secure cookies...",
      "[ OK ] EJS Template Engine initialized for SSR rendering.",
      "[ OK ] Multi-role auth system (Client/Artisan) ready."
    ],
    links: [
      "View Source Code on GitHub",
      "Visit Live Platform"
    ]
  },
  "organigrama": {
    description: "Hierarchical structure management system built under the Hexagonal Architecture pattern. Guarantees complete decoupling between business rules (Domain), database, and user interface.",
    stackJson: {
      "Architecture": "Hexagonal (Ports & Adapters)",
      "Backend_API": "Python / Flask",
      "Frontend_UI": "Streamlit",
      "Database_ORM": "SQLAlchemy"
    },
    logFile: "hex_architecture.log",
    logs: [
      "[INFO] Bootstrapping Domain Layer...",
      "[ OK ] Business rules isolated from external dependencies.",
      "[INFO] Binding Infrastructure Adapters (PostgreSQL -> SQLAlchemy)...",
      "[ OK ] Flask REST API exposed at /api/v1/hierarchy.",
      "[ OK ] Streamlit UI successfully connected to Application Layer."
    ],
    links: [
      "View Source Code on GitHub",
      "Review Architecture Documentation"
    ]
  },
  "netlife-challenge": {
    description: "Automated Competitive Intelligence tool developed for the Netlife Innovation Challenge. A complete data pipeline that extracts, processes, and analyzes the ISP market using Scraping and Generative AI.",
    stackJson: {
      "Data_Extraction": "Selenium / Playwright",
      "LLM_Engine": "Anthropic Claude API",
      "Data_Validation": "Pydantic",
      "Dashboard": "Streamlit",
      "Storage": "Parquet / SQLite"
    },
    logFile: "competitive_intelligence.log",
    logs: [
      "[INFO] Initiating web scraping sequence on target competitors...",
      "[ OK ] Raw data extracted and validated via Pydantic schemas.",
      "[WARN] Unstructured data detected. Passing to OCR extractor...",
      "[ OK ] Semantic analysis completed via Anthropic LLM Engine.",
      "[INFO] Generating Parquet files for dashboard visualization.",
      "[ OK ] Streamlit Command Center synchronized."
    ],
    links: [
      "View Pipeline Repository",
      "View Executive Report (Dashboard)"
    ]
  }
};

export default async function ProjectPage({ params }: { params: Promise<{ project: string }> }) {
  const { project } = await params;
  
  const data = projectsRegistry[project];
  
  if (!data) {
    notFound();
  }

  return <ProjectView project={project} data={data} />;
}
