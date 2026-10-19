<div align="center">

# ✦ TaskFlow

### A calmer way to get things done.

Plan your day, focus on the next right task, and watch your progress add up.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=20232A)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=20232A)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tests](https://img.shields.io/badge/tests-Vitest-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-8B5CF6.svg)](./LICENSE)

<br />

[Explore the code](https://github.com/rampai-k/-taskflow-task-manager) ·
[Meet the developer](https://github.com/rampai-k) ·
**Live demo coming soon**

</div>

---

## ✨ Your work, in focus

TaskFlow is a responsive, personal task dashboard for turning a busy to-do list into a clear next step. Capture tasks, set priorities and due dates, and keep an eye on your momentum—all from one focused workspace.

> **Made for everyday progress.** No account, backend, API key, or setup beyond installing the project. Your tasks stay in your browser.

## 🚀 What you can do

| 📝 Manage | 🎯 Prioritize | 🔎 Find your focus | 📈 See your progress |
|:--|:--|:--|:--|
| Create, edit, complete, reopen, and delete tasks. | Set Low, Medium, or High priority, a due date, and an optional category. | Search titles and descriptions; combine status and priority filters. Sort by newest, due date, or priority. | Track total, active, completed, and overdue tasks, plus your completion rate. |

Also included: required-title validation, overdue indicators, delete confirmation, responsive layouts, visible keyboard focus, helpful empty states, and safe handling when saved browser data is invalid or unavailable.

## 🖥️ A peek at the experience

The dashboard is designed to keep the important things close: your daily workspace, task overview, progress, and a searchable list you can shape around the moment.

> **Screenshots coming soon.** This repository does not yet include captured app screenshots. Only real screenshots of the running application will be added here.

## ⚡ Get started

### You’ll need

- [Node.js](https://nodejs.org/) 18 or newer
- npm (included with Node.js)

### Run it locally

```bash
# Clone the repository
git clone https://github.com/rampai-k/-taskflow-task-manager.git
cd ./-taskflow-task-manager

# Install dependencies and start the dev server
npm install
npm run dev
```

Open the local URL printed in your terminal—usually [`http://localhost:5173`](http://localhost:5173)—and you’re ready to go.

## 🧰 Project commands

| Command | What it does |
|:--|:--|
| `npm run dev` | Starts the Vite development server |
| `npm test` | Runs the automated test suite |
| `npm run build` | Creates the production build in `dist/` |
| `npm run preview` | Serves the production build locally |

Before sharing a change, run:

```bash
npm test
npm run build
```

## 🧱 Built with

- **React 18** for a component-based interface
- **JavaScript (ES modules)** for application logic
- **Vite** for local development and production builds
- **CSS** for responsive styling
- **localStorage** for browser-based task persistence
- **Vitest, jsdom, and Testing Library** for automated tests

## 📂 How the project is organized

```text
src/
├── components/       Dashboard, task form, filters, and task list UI
├── hooks/            Task state and browser persistence
├── styles/           Global and component styles
├── test/             Test environment setup
├── utils/            Task creation, filtering, dates, and storage helpers
├── App.jsx           Dashboard composition and interactions
└── main.jsx          React entry point
```

## 💾 Your data stays in your browser

Tasks are saved in local storage using the `taskflow.tasks` key. They remain available after a refresh in the same browser profile, with no account or server involved.

- Data is **not** synced across browsers, devices, or users.
- Clearing browser site data can permanently remove saved tasks.
- If browser storage is unavailable, the app remains usable for the current page session, but changes will not persist after it closes.
- Invalid saved data is ignored safely so the workspace can start fresh.

TaskFlow is a frontend portfolio project; accounts, cloud backups, collaboration, and notifications are not currently included.

## ☁️ Deploy

TaskFlow is a static Vite app and needs no environment variables.

| Platform | Build command | Publish directory |
|:--|:--|:--|
| [Vercel](https://vercel.com/) | `npm run build` | `dist` |
| [Netlify](https://www.netlify.com/) | `npm run build` | `dist` |

Import the repository into your hosting provider, use the settings above, and deploy. When the live site is ready, replace “Live demo coming soon” at the top with its URL.

## 🛣️ What’s next

Ideas for future versions—not features currently in the app:

- Cloud sync and user accounts
- Project-based task boards
- Reminders and notifications
- Drag-and-drop organization
- Deeper productivity insights

## 👋 About the developer

**Katlego Rampai** · Software Development Student · Gauteng, South Africa 🇿🇦

I’m building practical applications as I grow my software engineering skills, with a special interest in web development, APIs, and databases.

[GitHub](https://github.com/rampai-k) · [Portfolio](https://github.com/rampai-k/developer-portfolio) · LinkedIn: *add your profile link*

## 📄 License

TaskFlow is open source under the [MIT License](./LICENSE).

<div align="center">

---

**Built with purpose by Katlego Rampai 🇿🇦**

*Plan your work. Track your progress. Keep moving.*

</div>
