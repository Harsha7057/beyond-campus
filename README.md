# Beyond Campus 🌐🚀
> **Bridging Students and Tech Industry Professionals Worldwide.**

Beyond Campus is a modern, high-performance web platform designed to connect ambitious high school and college students with experienced software engineers, designers, and tech leaders. We empower the next generation of builders through 1:1 mentorship, global virtual hackathons, cutting-edge masterclasses, and local campus community hubs.

![Beyond Campus Banner](./public/logo.jpg)

---

## 🌟 Key Highlights & Feature Suite

- **✨ Visual Identity & Portal Motif**: Directly extrapolated from the Beyond Campus architectural "B" portal emblem. Features deep midnight void navy (`#070B14`), sunrise amber (`#F59E0B`), radiant coral (`#F97316`), and crisp sandstone ivory (`#F8FAFC`).
- **🌌 Interactive Global Network Canvas**: An ambient, high-fps HTML5 canvas rendering interconnected global nodes (students & mentors) that react dynamically to cursor movements.
- **⚡ Live Impact Metric Counters**: Dynamically counting up on scroll via `IntersectionObserver` (15,400+ Students, 680+ Mentors, 135+ Hackathons, 48 Countries).
- **🏛️ Four Core Pillars of Growth**:
  1. *Student-Professional Mentorship* (1:1 sessions, career roadmaps, system design mock interviews)
  2. *Global Hackathons & Real Projects* (collaborative sprints, open-source incubation, $30k+ prize pools)
  3. *Online Tech Talks & Webinars* (AMAs, cutting-edge AI engineering, cloud scale)
  4. *Real-Life Local Meetups & Community Hubs* (26 active city chapters across 5 continents)
- **📅 Filterable Events & Digital Pass Generator**: Filter by Hackathons, Webinars, and Meetups with real-time topic search and an interactive **Ticket Claim Modal** that issues digital passes with simulated QR codes.
- **👨‍💻 Mentor Directory & 1:1 Booking**: Filterable mentor roster from Google, Stripe, OpenAI, Meta, Vercel, and DeepMind with an interactive 1:1 session request modal.
- **💬 Student Voices Carousel**: Success stories and testimonials from students at Stanford, IIT Delhi, Waterloo, and KTH who landed internships and launched startups.
- **📝 Dual-Mode Community Application**: Interactive tabs for **"I'm a Student"** vs. **"I'm a Working Professional"** with client-side validation, confetti animations, and instant Discord invite links.
- **🚀 Automated GitHub Actions Deployment**: Continuous deployment directly to GitHub Pages on every push to the `main` branch.

---

## 🎨 Visual Identity & Design System

| Element | Specification | Hex / Value |
| :--- | :--- | :--- |
| **Primary Void Background** | Deep Midnight Space Slate | `#070B14` |
| **Surface Glass Navy** | Frosted Slate Navy | `#0B1325` / `rgba(13, 21, 38, 0.7)` |
| **Horizon Sunrise Glow** | Radiant Coral / Orange | `#F97316` to `#FB923C` |
| **Guiding Star Gold** | Warm Amber | `#F59E0B` / `#FDE047` |
| **Monolith Ivory** | Sandstone Off-White | `#F8FAFC` / `#E2E8F0` |
| **Display Typography** | Outfit (Modern Geometric Sans) | Weights: 600, 700, 800 |
| **Body Typography** | Plus Jakarta Sans | Weights: 400, 500, 600 |
| **Technical Badges** | JetBrains Mono | Monospace for tags & codes |

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom glassmorphism and keyframe animations
- **Icons**: [Lucide React](https://lucide.dev/) + Custom High-Fidelity SVG Brand Icons
- **Animation & FX**: Native HTML5 Canvas (60fps interactive network) + `canvas-confetti`
- **Deployment**: [GitHub Actions](https://github.com/features/actions) + [GitHub Pages](https://pages.github.com/)

---

## 📁 Repository Structure

```
beyond-campus/
├── .github/
│   └── workflows/
│       └── deploy.yml           # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg             # Custom vector architectural portal favicon
│   └── logo.jpg                # Beyond Campus official emblem
├── src/
│   ├── assets/                 # Bundled static assets
│   ├── components/
│   │   ├── Navbar.jsx          # Glassmorphic header with active indicator
│   │   ├── Hero.jsx            # Impact headline, dual CTAs & 3D portal
│   │   ├── GlobalNetworkCanvas.jsx # Interactive starry mesh canvas
│   │   ├── AboutSection.jsx    # Mission story & animated count-up metrics
│   │   ├── PillarsSection.jsx  # 4 core programs & curriculum modals
│   │   ├── EventsSection.jsx   # Filterable events grid & topic search
│   │   ├── EventModal.jsx      # Ticket registration & digital pass generator
│   │   ├── MentorsSection.jsx  # Mentor spotlights & specialty filters
│   │   ├── MentorModal.jsx     # 1:1 session booking modal
│   │   ├── TestimonialsSection.jsx # Student voices carousel
│   │   ├── JoinSection.jsx     # Dual-tab application & community hubs
│   │   ├── Footer.jsx          # Newsletter form, navigation & back-to-top
│   │   ├── Toast.jsx           # Global feedback toast notification
│   │   └── SocialIcons.jsx     # SVG brand iconography
│   ├── data/
│   │   └── mockData.js         # Community statistics, events, & mentors
│   ├── App.jsx                 # Main application layout
│   ├── index.css               # Design tokens, fonts, & custom utilities
│   └── main.jsx                # Application root entry
├── index.html                  # SEO metadata, OpenGraph & Google Fonts
├── vite.config.js              # Vite configuration with relative base './'
└── package.json
```

---

## 💻 Local Development

### Prerequisites
- Node.js 18+ (tested on Node 22/24)
- npm 9+

### 1. Clone & Install
```bash
git clone <your-repository-url>
cd beyond-campus
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates optimized static bundles in `dist/`.

---

## 🚀 Deployment to GitHub Pages

This project is fully pre-configured for automated continuous deployment using GitHub Actions.

### Setup Instructions:
1. **Create a new repository** on GitHub (e.g. `beyond-campus`).
2. **Push this code to your GitHub repository**:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of Beyond Campus platform"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/beyond-campus.git
   git push -u origin main
   ```
3. **Enable GitHub Pages via Actions**:
   - Navigate to your repository on GitHub.
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. That's it! Every push to `main` will trigger `.github/workflows/deploy.yml`, build the production bundle, and publish it to:
   ```
   https://<YOUR_USERNAME>.github.io/beyond-campus/
   ```

Because `vite.config.js` sets `base: './'`, all assets and routing resolve cleanly whether deployed at the root domain or a repository subpath.

---

## 📜 License
Distributed under the MIT License. See `LICENSE` for more information.

---
*Built with ❤️ for student builders and industry mentors worldwide.*
