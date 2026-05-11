# AI Spend Audit

AI Spend Audit is a SaaS-style web application that helps startups and teams analyze AI subscription spending, identify optimization opportunities, and generate shareable audit reports.

---

# Live Demo

https://ai-spend-audit-omega.vercel.app

---

# Features

- Multi-tool AI spend auditing
- Cost optimization recommendations
- Monthly and annual savings calculations
- AI-generated audit summaries
- Firebase Firestore backend integration
- Shareable public audit report URLs
- Persistent cloud-stored reports
- Responsive SaaS-style UI
- Loading states and validation handling

---

# Supported Tools

- ChatGPT
- Claude
- Cursor
- GitHub Copilot
- Gemini

---

# Tech Stack

Frontend:
- Next.js
- React
- Tailwind CSS

Backend:
- Firebase Firestore

Deployment:
- Vercel

---

# Architecture Highlights

- Next.js App Router
- Dynamic route generation
- Firestore document storage
- Client-side state management
- SaaS-style report sharing workflow

---

# Screenshots

## Homepage

![Homepage](/screenshots/home.png)

## Audit Results

![Results](/screenshots/results.png)

## Shared Audit Report

![Shared Report](/screenshots/shared-report.png)

---

# Local Development

Clone repository:

```bash
git clone YOUR_GITHUB_REPO_URL
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

# Firebase Setup

Create a Firebase project and configure:
- Firestore Database
- Firebase Web App SDK

Add Firebase configuration inside:

```txt
src/firebase/config.js
```

---

# Deployment

Deployment is handled using Vercel.

Production URL:
https://ai-spend-audit-omega.vercel.app

---

# Why JavaScript Instead of TypeScript

TypeScript was considered during project initialization. However, JavaScript was selected to optimize rapid MVP iteration speed and reduce implementation overhead during the assignment timeline.

The primary focus was delivering:
- full-stack functionality
- backend integration
- dynamic routing
- deployment
- persistent storage
- documentation quality

within a constrained development window.

Future iterations could migrate to TypeScript for stronger type safety and maintainability.

---

# Future Improvements

Potential future enhancements:
- authentication
- private/public report permissions
- OpenAI API integration
- advanced analytics dashboards
- recurring subscription monitoring
- TypeScript migration
- automated testing

---

# Documentation Files

- ARCHITECTURE.md
- DEVLOG.md
- REFLECTION.md
- TESTS.md
- PROMPTS.md
- GTM.md
- ECONOMICS.md
- USER_INTERVIEWS.md
- LANDING_COPY.md
- METRICS.md
- PRICING_DATA.md

---

# Author

Komala Karanam