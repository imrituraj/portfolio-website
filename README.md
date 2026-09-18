# Neo-Brutalist Portfolio — M.Tech CSE Student

An authentic, responsive **Neo-Brutalist** portfolio website engineered for an **M.Tech in Computer Science & Engineering** student or researcher. Features high-contrast solid borders, tactile offset shadows, sticker badges, dynamic marquee ribbons, an interactive terminal console, a real-time color theme switcher, and centralized data configuration.

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```

---

## 🛠️ How to Add Your Real Information

All personal data, projects, research papers, and technical skills are completely decoupled from UI components and stored in **one single file**:

📁 **[`src/data/portfolioData.ts`](./src/data/portfolioData.ts)**

Inside `portfolioData.ts`, you can update:
- `personal`: Name, role, university, email, LinkedIn, GitHub, resume link.
- `researchFocus`: M.Tech thesis topic, advisor name, research lab, active investigation.
- `publications`: Research papers, preprints, conference venues, paper URLs, and BibTeX citations.
- `projects`: Featured engineering works, metrics, architecture notes, GitHub URLs, live demos.
- `skills`: Categorized skill matrices (Languages, Systems & Cloud, AI/ML, Theoretical CS).
- `experience`: Graduate Teaching Assistantships (GTA), research appointments, and internships.
- `education`: M.Tech and B.Tech degrees, CGPA, and coursework.
- `achievements`: GATE exam rank/percentile, hackathon awards, competitive programming ratings.

---

## 🎨 Neo-Brutalist Design Features

- **Hard-Edged Tactile Interactions**: $3\text{px}-4\text{px}$ black borders, unblurred offset box shadows, and button click press animations (`translate(2px, 2px)`).
- **Interactive Theme Switcher**: Instant toggle between 4 vibrant palettes:
  - 🍌 *Cyber Lemon* (`#FFE600`)
  - 🌊 *Electric Cyan* (`#00F0FF`)
  - 🧪 *Acid Lime* (`#99FF33`)
  - 🍬 *Bubblegum Pop* (`#FF5E7E`)
- **Interactive Retro Terminal**: Visitors can query `help`, `bio`, `research`, `projects`, `skills`, and `contact` directly inside a simulated Unix shell.
- **Academic Focus**: Dedicated spotlight for M.Tech thesis, advisor, preprints, and BibTeX citation export.
- **Copy Email with Confetti**: One-click email copy with instant toast and particle burst.
- **Responsive Architecture**: Fully optimized for desktop, tablet, and mobile with a custom brutalist navigation drawer.
# portfolio-website
