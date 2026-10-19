# TaskFlow

TaskFlow is a polished, responsive task management dashboard built with React and Vite. It helps you capture work, prioritize it, track deadlines, and see your progress at a glance.

> **Privacy note:** This version saves tasks in `localStorage` in the current browser. Data is not synchronized across browsers, devices, or users.

## Features

- Create, edit, complete, reopen, and delete tasks.
- Required title validation, with optional descriptions, priorities, due dates, and categories.
- Dashboard statistics calculated from the task list, including overdue tasks and completion rate.
- Combined status, priority, and text search filters; sort by recently added, due date, or priority.
- Accessible controls, visible keyboard focus, destructive-action confirmation, and responsive layouts.
- Browser-local persistence with safe handling of unavailable or invalid storage.
- No backend, paid service, or API key required.

## Technology

- React 18, JavaScript (ES modules), and HTML5
- Vite
- CSS3
- Browser `localStorage`
- Vitest, jsdom, and Testing Library

## Screenshots

No screenshots are included yet. To add real screenshots, run the app locally, capture the dashboard at desktop and mobile widths, and save the images in a folder such as `screenshots/`. Replace this paragraph with Markdown image links to the committed screenshots.

## Project structure

```text
src/
  components/       Reusable dashboard, form, filter, and task components
  hooks/            Task state and persistence hook
  styles/           Global and component styles
  test/             Test setup
  utils/            Task creation, filtering, date, and storage utilities
  App.jsx           Application composition and interactions
  main.jsx          React entry point
```

## Prerequisites

- Node.js 18 or newer
- npm (included with Node.js)

## Install and run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build and tests

```bash
npm test
npm run build
npm run preview
```

`npm test` runs the automated utility and task-state tests. `npm run build` creates the production site in `dist/`; `npm run preview` serves that build locally.

## Persistence and known limitations

Tasks are stored under the `taskflow.tasks` key in the browser's local storage. They remain available after refresh in the same browser profile, but are not backed up or shared across devices. Clearing browser site data removes them. If browser storage is disabled or inaccessible, TaskFlow remains usable for the current page session, but changes cannot be saved persistently. Invalid stored data is ignored safely.

This is a frontend-only portfolio project: it has no accounts, server-side storage, collaboration, notifications, or synchronization.

## Deployment

### Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Use the Vite preset (or set build command to `npm run build` and output directory to `dist`).
4. Deploy. No environment variables are needed.

### Netlify

1. Push this repository to GitHub and import it in Netlify.
2. Set build command to `npm run build` and publish directory to `dist`.
3. Deploy. No environment variables are needed.

The app is a client-side Vite site and does not need a server-side rewrite for its current routes.

## Project links

- **Live demo:** _Add the deployed URL here; no demo has been published yet._
- **GitHub repository:** _Add the repository URL here after publishing._

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE).
