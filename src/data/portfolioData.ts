export interface PersonalInfo {
  name: string;
  pronouns: string;
  role: string;
  degree: string;
  institution: string;
  location: string;
  statusBadge: string;
  shortBio: string;
  fullBio: string[];
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  scholar?: string;
  resumeUrl: string;
}

export interface ResearchHighlight {
  id: string;
  title: string;
  type: 'Thesis' | 'Conference Paper' | 'Preprint' | 'Workshop';
  venue?: string;
  year: string;
  coAuthors?: string[];
  description: string;
  highlights: string[];
  paperUrl?: string;
  codeUrl?: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Systems' | 'AI / ML' | 'Full-Stack' | 'Cloud & DevOps';
  featured: boolean;
  tagline: string;
  description: string;
  architectureDetails?: string[];
  metrics?: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  accentColor: string; // Tailwind neo color or hex
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  department?: string;
  period: string;
  location: string;
  type: 'Teaching Assistant' | 'Industry Internship' | 'Research';
  responsibilities: string[];
  techStack?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  grade?: string;
  coursework: string[];
  thesisOrCapstone?: string;
}

export interface SkillCategory {
  title: string;
  accent: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient' | 'Familiar';
    iconName?: string;
  }[];
}

export interface Achievement {
  title: string;
  event: string;
  year: string;
  description: string;
  badge: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  researchFocus: {
    title: string;
    description: string;
    currentWork: string;
    coreAreas: string[];
    advisor?: string;
    labName?: string;
  };
  publications: ResearchHighlight[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillCategory[];
  achievements: Achievement[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Rituraj",
    pronouns: "he/him",
    role: "M.Tech CSE Student & Systems Researcher",
    degree: "M.Tech in Computer Science and Engineering",
    institution: "Premier Technical Institute",
    location: "India",
    statusBadge: "⚡ OPEN FOR FULL-TIME SDE / R&D ROLES (2025-2026)",
    shortBio: "Master's student in Computer Science & Engineering passionate about distributed consensus, high-throughput systems, and scalable AI infrastructure.",
    fullBio: [
      "I am currently pursuing my M.Tech in Computer Science and Engineering. My academic journey combines a rigorous theoretical foundation with building real-world distributed systems and machine learning pipelines.",
      "My research interests lie at the convergence of High-Performance Distributed Systems, Consensus Protocols (Raft/Paxos), and optimizing AI/LLM inference runtimes. I enjoy debugging tricky concurrency issues, profiling memory allocations in Go and C++, and designing fault-tolerant backend architectures.",
      "When I am not in the lab reading systems research papers or writing code, you will find me participating in hackathons, contributing to open-source software, and solving competitive programming problems."
    ],
    email: "rituraj.cse@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    scholar: "https://scholar.google.com",
    resumeUrl: "#resume-download"
  },

  researchFocus: {
    title: "Distributed Fault-Tolerance & Edge-Cloud Consensus",
    description: "Investigating performance bottlenecks and tail latency degradation in geographically replicated state machines under intermittent network partitions.",
    currentWork: "Designing an adaptive leader election and batch-commit protocol for Raft that minimizes WAN cross-datacenter round trips while preserving strict serializability.",
    coreAreas: [
      "Distributed Consensus & Replication (Raft/Paxos)",
      "High-Performance Network I/O (eBPF & io_uring)",
      "Distributed Cache Invalidation & Consistency",
      "LLM Model Serving & KV Cache Optimization"
    ],
    advisor: "Dr. Systems Advisor",
    labName: "Advanced Distributed Systems & Cloud Lab"
  },

  publications: [
    {
      id: "pub-1",
      title: "Adaptive Batch-Commit Strategies for Geo-Distributed Raft Consensus",
      type: "Conference Paper",
      venue: "IEEE International Conference on Distributed Computing Systems (Under Review)",
      year: "2025",
      coAuthors: ["Rituraj", "Dr. Systems Advisor"],
      description: "Proposed an adaptive windowing algorithm for Raft log replication that dynamically adjusts batch sizes based on measured EWMA network jitter across multi-region clusters.",
      highlights: [
        "Reduced 99th-percentile tail latency by 34.2% across simulated trans-continental link latencies.",
        "Zero data-loss guarantee during arbitrary node failovers proven with TLA+ specifications.",
        "Implemented in Go with 10k+ synthetic transactions per second."
      ],
      paperUrl: "#",
      codeUrl: "https://github.com",
      tags: ["Distributed Systems", "Raft Consensus", "Go", "TLA+"]
    },
    {
      id: "pub-2",
      title: "Low-Overhead Cache Coherence Mechanisms for Edge Micro-Datacenters",
      type: "Preprint",
      venue: "arXiv Preprint cs.DC",
      year: "2024",
      coAuthors: ["Rituraj", "Research Colleague"],
      description: "An empirical investigation into gossip-assisted invalidation vectors for intermittent edge computing nodes handling high-velocity IoT streams.",
      highlights: [
        "Eliminates centralized broker lock contention by 65%.",
        "Tested over a 50-node Raspberry Pi cluster emulator running Kubernetes."
      ],
      paperUrl: "#",
      codeUrl: "https://github.com",
      tags: ["Edge Computing", "Gossip Protocols", "Cache Consistency"]
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "RaftKV: Distributed In-Memory Key-Value Store",
      category: "Systems",
      featured: true,
      tagline: "High-throughput fault-tolerant Raft-based state machine with log compaction and dynamic cluster membership.",
      description: "A production-grade distributed key-value store built from scratch in Go implementing the complete Raft consensus protocol. Features snapshotting, log compaction via LSM-tree storage, and linearizable reads with leader leases.",
      architectureDetails: [
        "Engineered leader lease mechanisms to bypass round-trips for read-only queries.",
        "Custom WAL (Write-Ahead-Log) engine with zero-copy binary serialization using Protobuf.",
        "Benchmarked with Chaos Mesh to verify consensus recovery during simulated split-brain partitions."
      ],
      metrics: "18,500 ops/sec with <4ms p99 latency",
      technologies: ["Go", "Raft Consensus", "gRPC", "Protobuf", "Docker", "Prometheus"],
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      accentColor: "#FFE600"
    },
    {
      id: "proj-2",
      title: "NeuroServe: Low-Latency LLM Inference Engine",
      category: "AI / ML",
      featured: true,
      tagline: "Custom model serving gateway with continuous dynamic batching and PagedAttention KV-cache management.",
      description: "Designed a distributed inference runtime for open-source LLMs (Llama 3 / Mistral) optimizing GPU memory fragmentation. Implemented continuous batching inspired by vLLM to maximize token generation throughput.",
      architectureDetails: [
        "Built dynamic PagedAttention memory manager reducing GPU VRAM waste by 40%.",
        "Async token streaming pipeline over HTTP/2 SSE with sub-15ms time-to-first-token.",
        "Multi-worker scheduler supporting tensor-parallel model partitioning."
      ],
      metrics: "2.4x throughput boost compared to vanilla PyTorch serving",
      technologies: ["Python", "PyTorch", "CUDA", "FastAPI", "Redis", "Triton"],
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      accentColor: "#00F0FF"
    },
    {
      id: "proj-3",
      title: "KubeTrace: eBPF Microservice Observability Mesh",
      category: "Cloud & DevOps",
      featured: true,
      tagline: "Zero-instrumentation network latency monitor for Kubernetes pods using Linux eBPF kernel probes.",
      description: "An ultra-lightweight kernel-space observability tool that taps TCP sock events (`sys_enter_connect`, `tcp_rcv_established`) to track microservice call graphs, DNS latency, and packet drops without modifying application code.",
      architectureDetails: [
        "eBPF C bytecode compiled with CO-RE (Compile Once - Run Everywhere) portability.",
        "Ring buffer kernel-to-userspace bridge transmitting metrics to a Grafana dashboard in real-time.",
        "Negligible CPU overhead (<1.2% under full load)."
      ],
      metrics: "Sub-1.2% CPU overhead on 500+ container nodes",
      technologies: ["C", "eBPF", "Go", "Linux Kernel", "Kubernetes", "Prometheus"],
      githubUrl: "https://github.com",
      accentColor: "#99FF33"
    },
    {
      id: "proj-4",
      title: "Algoverse: Interactive Algorithm Visualizer & Benchmarker",
      category: "Full-Stack",
      featured: false,
      tagline: "Interactive visual debugger for complex graph algorithms, tree re-balancing, and network flows.",
      description: "A full-featured web-based learning platform for CS students to visualize and step through advanced algorithms (Tarjan's SCC, Dinic's Max Flow, Red-Black Trees, Segment Trees) with execution traces and custom datasets.",
      architectureDetails: [
        "WebAssembly (WASM) compute engine compiled from C++ for smooth 60fps frame rendering.",
        "Step-by-step state machine with forward/backward time-travel execution.",
        "Real-time complexity analysis graphs comparing experimental vs asymptotic bounds."
      ],
      metrics: "Used by 1,200+ students in undergraduate CS classes",
      technologies: ["TypeScript", "React", "WebAssembly (C++)", "Tailwind CSS", "Canvas API"],
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      accentColor: "#FF5E7E"
    },
    {
      id: "proj-5",
      title: "ByteStream: Distributed Message Broker",
      category: "Systems",
      featured: false,
      tagline: "Append-only commit log message queue with consumer group rebalancing and disk persistence.",
      description: "Lightweight distributed publish-subscribe message broker inspired by Apache Kafka. Implements partitioned append-only segmented logs on disk, zero-copy socket transfers via `sendfile`, and leader-follower replication.",
      metrics: "Zero-copy IO reaching disk write throughput of 210MB/s",
      technologies: ["Rust", "Tokio", "TCP Sockets", "Zero-Copy I/O"],
      githubUrl: "https://github.com",
      accentColor: "#B794F4"
    },
    {
      id: "proj-6",
      title: "CodeSense: Semantic Code Search & QA Agent",
      category: "AI / ML",
      featured: false,
      tagline: "Tree-sitter AST parser coupled with local embedding vector search for codebase understanding.",
      description: "An intelligent CLI and VS Code extension that builds hierarchical vector embeddings of code AST symbols, enabling contextual natural language codebase search and automated refactoring suggestions.",
      metrics: "Index 50k lines of code in under 4 seconds",
      technologies: ["Python", "Tree-sitter", "ChromaDB", "FastAPI", "TypeScript"],
      githubUrl: "https://github.com",
      accentColor: "#FF7B00"
    }
  ],

  experience: [
    {
      id: "exp-1",
      role: "Graduate Teaching Assistant (GTA)",
      organization: "Department of Computer Science & Engineering",
      department: "Algorithms & Distributed Systems",
      period: "August 2024 - Present",
      location: "On-Campus",
      type: "Teaching Assistant",
      responsibilities: [
        "Conduct weekly lab sessions and problem-solving tutorials for 140+ undergraduate students in 'Design and Analysis of Algorithms'.",
        "Design programming assignments involving graph decomposition, dynamic programming, and amortized data structures with automated test suites.",
        "Mentor students on their semester-long distributed systems course projects (building miniature Raft clusters and gRPC backends)."
      ],
      techStack: ["C++", "Python", "Linux", "Distributed Systems"]
    },
    {
      id: "exp-2",
      role: "Graduate Research Assistant",
      organization: "Advanced Systems & Networking Lab",
      department: "Cloud & Consensus Research",
      period: "January 2024 - July 2024",
      location: "On-Campus",
      type: "Research",
      responsibilities: [
        "Formulated formal verification specifications for fault-tolerant state-machine replication using TLA+ and TLC model checker.",
        "Benchmarked consensus latency bottlenecks across inter-datacenter simulations on AWS EC2 across 5 geographical regions.",
        "Co-authored research findings submitted to a premier distributed systems symposium."
      ],
      techStack: ["Go", "TLA+", "AWS EC2", "Docker", "Prometheus"]
    },
    {
      id: "exp-3",
      role: "Software Engineering Intern",
      organization: "CloudScale Technologies",
      department: "Infrastructure & Platform Team",
      period: "May 2023 - July 2023",
      location: "Bangalore, India",
      type: "Industry Internship",
      responsibilities: [
        "Architected an automated multi-tenant Redis cluster provisioning operator using Kubernetes Custom Resource Definitions (CRDs).",
        "Implemented health probes and automatic failover hooks that dropped database failover downtime from 45 seconds to 6 seconds.",
        "Integrated OpenTelemetry distributed tracing across 12 microservices, uncovering database connection pool exhaustion bugs."
      ],
      techStack: ["Go", "Kubernetes", "Redis", "Docker", "OpenTelemetry"]
    }
  ],

  education: [
    {
      id: "edu-1",
      degree: "Master of Technology (M.Tech)",
      field: "Computer Science & Engineering",
      institution: "National Institute of Technology / IIT / Premier Institute",
      location: "India",
      duration: "2024 - 2026",
      grade: "CGPA: 9.1 / 10.0 (Current)",
      coursework: [
        "Advanced Operating Systems",
        "Distributed Systems & Cloud Computing",
        "Advanced Algorithms & Complexity",
        "Machine Learning & Deep Neural Nets",
        "Computer Network Architectures",
        "Database System Internals"
      ],
      thesisOrCapstone: "Thesis: High-Throughput Adaptive Consensus in Heterogeneous Edge-Cloud Clusters"
    },
    {
      id: "edu-2",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      institution: "State Technological University",
      location: "India",
      duration: "2020 - 2024",
      grade: "CGPA: 8.8 / 10.0",
      coursework: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Database Management Systems",
        "Computer Organization & Architecture",
        "Theory of Computation",
        "Compiler Design"
      ],
      thesisOrCapstone: "Capstone: Decentralized File Sharing with Deduplication and End-to-End Encryption"
    }
  ],

  skills: [
    {
      title: "Core Languages",
      accent: "#FFE600",
      skills: [
        { name: "C / C++ (17/20)", level: "Advanced" },
        { name: "Go (Golang)", level: "Advanced" },
        { name: "Python", level: "Advanced" },
        { name: "Rust", level: "Proficient" },
        { name: "TypeScript / JavaScript", level: "Proficient" },
        { name: "SQL (PostgreSQL)", level: "Proficient" },
        { name: "Java", level: "Familiar" }
      ]
    },
    {
      title: "Systems, Cloud & DevOps",
      accent: "#00F0FF",
      skills: [
        { name: "Linux Internals & Bash", level: "Advanced" },
        { name: "Docker & Containers", level: "Advanced" },
        { name: "Kubernetes (K8s)", level: "Proficient" },
        { name: "gRPC & Protocol Buffers", level: "Advanced" },
        { name: "eBPF & Kernel Tracing", level: "Proficient" },
        { name: "Kafka & Redis", level: "Proficient" },
        { name: "AWS (EC2, S3, IAM)", level: "Proficient" },
        { name: "Git & CI/CD Pipelines", level: "Advanced" }
      ]
    },
    {
      title: "AI, ML & Data Systems",
      accent: "#99FF33",
      skills: [
        { name: "PyTorch", level: "Proficient" },
        { name: "LLM Serving & RAG", level: "Proficient" },
        { name: "CUDA Basics", level: "Familiar" },
        { name: "Vector Databases (Chroma/FAISS)", level: "Proficient" },
        { name: "NumPy & Pandas", level: "Advanced" },
        { name: "Hugging Face Ecosystem", level: "Proficient" }
      ]
    },
    {
      title: "Theoretical CS & Architecture",
      accent: "#FF5E7E",
      skills: [
        { name: "Distributed Consensus (Raft/Paxos)", level: "Advanced" },
        { name: "Data Structures & Algorithms", level: "Advanced" },
        { name: "Concurrent Programming & Locks", level: "Advanced" },
        { name: "TLA+ Formal Verification", level: "Familiar" },
        { name: "Database Storage Engines (LSM/B-Tree)", level: "Proficient" },
        { name: "System Design & Microservices", level: "Advanced" }
      ]
    }
  ],

  achievements: [
    {
      title: "GATE Computer Science & IT",
      event: "Graduate Aptitude Test in Engineering",
      year: "2024",
      description: "Secured top 99th percentile among 100,000+ candidates across India, qualifying for premier M.Tech admission.",
      badge: "TOP 1%"
    },
    {
      title: "Winner - National Hackathon",
      event: "Smart Infrastructure Hackathon",
      year: "2023",
      description: "Built an autonomous distributed sensor network anomaly detection pipeline in 36 hours.",
      badge: "1ST PLACE"
    },
    {
      title: "Knight on LeetCode",
      event: "Competitive Programming",
      year: "2024",
      description: "Rating 2050+ with 800+ algorithmic problems solved across graphs, dynamic programming, and binary search.",
      badge: "TOP 2.5%"
    },
    {
      title: "Open Source Contributor",
      event: "Cloud & CNCF Ecosystem",
      year: "Ongoing",
      description: "Contributed documentation improvements and bug fixes to CNCF ecosystem repositories and distributed toolchains.",
      badge: "OPEN SOURCE"
    }
  ]
};
