export const milestones = [
  {
    id: 1,
    period: "February 2023 – Present",
    title: "Senior Software Engineer",
    company: "Egen.ai (Client: Tempus AI)",
    location: "Toronto, Ontario",
    description: "Architected Agentic clinical trial matching application with reasoning model. Built Citation Agent for data integrity validation and QA.",
    tech: ["Python", "Langchain", "Postgres", "Google ADK", "GCP", "BigQuery", "LLM"],
  },
  {
    id: 2,
    period: "November 2021 – February 2023",
    title: "Senior Software Engineer",
    company: "Egen.ai (Client: Peapod)",
    location: "Hyderabad, India",
    description: "Migrated historical order database from SQL to NoSQL schema. Improved storage/retrieval performance by 60%.",
    tech: ["Java", "Spring Boot", "Docker", "Kafka", "Azure", "Kubernetes", "CosmosDB", "Datadog", "Splunk"],
  },
  {
    id: 3,
    period: "May 2019 – November 2021",
    title: "Software Engineer",
    company: "Peapod",
    location: "Chicago, IL",
    description: "Transformed order processing to event-driven architecture (50K orders: 4hrs → 15min). Decomposed monolith into containerized microservices.",
    tech: ["Java", "Spring Boot", "Docker", "Kafka", "Azure", "Kubernetes", "HashiCorp Vault", "Splunk"],
  },
  {
    id: 4,
    period: "January 2018 – April 2018",
    title: "Software Engineer Intern",
    company: "Veracode",
    location: "Burlington, MA",
    description: "Worked on AWS backend infrastructure for Veracode Greenlight (100K+ users). Revamped Python decryption module for CSV data retrieval.",
    tech: ["AWS", "Python"],
  },
  {
    id: 5,
    period: "August 2015 – February 2016",
    title: "Web Developer (Freelance)",
    company: "Sujay Child Development Center",
    location: "",
    description: "Built client-specific UIs with HTML5, CSS3, jQuery, JavaScript.",
    tech: ["PHP", "JavaScript", "HTML5", "CSS3", "Bootstrap", "AJAX", "jQuery", "MySQL"],
  },
];

export const techStack = {
  backend: {
    title: "Backend & Languages",
    items: ["Python", "Java", "Go", "TypeScript", "Node.js", "GraphQL", "REST APIs"],
  },
  aiMl: {
    title: "AI/ML Frameworks",
    items: ["Langchain", "Google ADK", "PyTorch", "TensorFlow", "scikit-learn", "Hugging Face"],
  },
  llm: {
    title: "LLM & Search",
    items: ["GPT-4", "Claude", "Gemini", "RAG", "Vector DBs", "Embeddings", "Pinecone"],
  },
  data: {
    title: "Data & Infrastructure",
    items: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "Docker", "Kubernetes", "GCP", "Azure"],
  },
};

export const featuredVideos = [
  {
    id: "video1",
    title: "Building AI Agents from Scratch",
    thumbnail: "/api/placeholder/400/225",
    views: "125K",
    duration: "18:42",
    category: "AI Agents",
  },
  {
    id: "video2",
    title: "Langchain & RAG Tutorial",
    thumbnail: "/api/placeholder/400/225",
    views: "89K",
    duration: "24:15",
    category: "GenAI",
  },
  {
    id: "video3",
    title: "Automation Workflows Demo",
    thumbnail: "/api/placeholder/400/225",
    views: "67K",
    duration: "12:30",
    category: "Automation",
  },
];