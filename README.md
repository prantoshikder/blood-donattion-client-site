# RedDrop — Blood Donation Platform (Frontend)

A modern blood donation web application built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Frontend only — no backend wired up.

## Tech Stack
- Next.js 15 (App Router) + React 19
- TypeScript 5
- Tailwind CSS 3.4
- lucide-react icons

## Getting Started

```bash
npm install
npm run dev
```

Open <http://localhost:3000> in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              Root layout (Inter font + globals)
│   ├── globals.css             Tailwind directives + custom components
│   ├── page.tsx                Landing page
│   ├── about/                  About us
│   ├── donors/                 Public find-donors page
│   ├── requests/               Public blood requests
│   ├── contact/                Contact form
│   ├── faq/                    FAQ accordion
│   ├── login/                  Sign in
│   ├── signup/                 Role-based sign up
│   ├── not-found.tsx           404 page
│   └── dashboard/              Authenticated dashboard
│       ├── layout.tsx          Sidebar + topbar shell
│       ├── page.tsx            Dashboard home
│       ├── donations/          Donations history
│       ├── donors/             Donor search inside dashboard
│       ├── requests/           Request management
│       └── settings/           Profile + privacy
└── components/
    ├── Logo.tsx
    ├── Navbar.tsx
    ├── Footer.tsx
    ├── SiteShell.tsx
    ├── AuthShell.tsx
    └── dashboard/
        ├── Sidebar.tsx
        └── Topbar.tsx
```

## Roles Supported
1. **Donor** — donates blood
2. **Receiver** — requests blood
3. **Volunteer** — organizes camps
4. **Hospital / Blood Bank** — manages inventory
5. **Admin** — manages the platform

## Pages

| Route               | Description                          |
| ------------------- | ------------------------------------ |
| `/`                 | Landing page                         |
| `/about`            | Mission, values, team                |
| `/donors`           | Public donor directory               |
| `/requests`         | Active blood requests                |
| `/contact`          | Contact form                         |
| `/faq`              | Frequently asked questions           |
| `/login`            | Sign in                              |
| `/signup`           | Role-based registration              |
| `/dashboard`        | Authenticated home                   |
| `/dashboard/donors` | In-app donor search                  |
| `/dashboard/donations` | Donation history + achievements   |
| `/dashboard/requests`  | Request management table          |
| `/dashboard/settings`  | Profile / privacy / notifications |
# blood-donattion-client-site
