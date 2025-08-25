export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  videoUrl?: string;
  youtubeUrl?: string;
  videoPoster?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface TechStack {
  name: string;
  icon: string;
  category:
    | "frontend"
    | "backend"
    | "database"
    | "tools"
    | "language"
    | "testing"
    | "architecture"
    | "ai";
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
