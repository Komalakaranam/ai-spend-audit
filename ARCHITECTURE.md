# Architecture Overview

## Project Summary

AI Spend Audit is a SaaS-style web application that helps teams analyze AI subscription spending, identify optimization opportunities, and generate shareable audit reports.

The platform focuses on:
- AI tool cost analysis
- savings recommendations
- persistent audit storage
- public shareable reports

---

# Frontend Architecture

The frontend is built using:

- Next.js App Router
- React
- Tailwind CSS

The application uses a component-driven structure with client-side state management for rapid MVP iteration.

Key frontend responsibilities:
- form handling
- audit generation
- recommendation rendering
- report sharing UX
- loading states and validation

---

# Backend Architecture

Firebase Firestore was selected as the backend database.

Reasoning:
- rapid MVP development
- reduced backend operational complexity
- scalable document storage
- easy integration with Next.js
- automatic document ID generation for shareable reports

Firestore collections:
- audits

Each audit document stores:
- tools
- savings calculations
- generated recommendations
- timestamps

---

# Dynamic Routing

Next.js dynamic routes were used to support shareable audit pages.

Example:
```txt
/audit/[id]