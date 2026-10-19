<div align="center">

TaskFlow

Plan smarter. Prioritize better. Get things done.

A modern, responsive task management dashboard built with React and Vite. Organize your workload, manage priorities, track deadlines, and monitor your productivity in one place.

<br />
<br />

View Source Code · Developer Profile

Live Demo: Coming soon

</div>

⸻

📌 About the Project

TaskFlow is a task management application designed to make planning, organizing, and tracking everyday work easier.

The application provides a central dashboard where users can create tasks, assign priorities, manage deadlines, and monitor completion progress through a clean, intuitive interface.

Built with React and Vite, TaskFlow demonstrates practical frontend development, reusable components, state management, CRUD operations, data persistence, and responsive user interface design.

This project is part of my software development portfolio, where I build practical applications to demonstrate my technical skills and problem-solving abilities.

✨ Features

📋 Task Management

* Create tasks with titles and optional descriptions.
* Edit existing tasks.
* Delete tasks with confirmation.
* Mark tasks as completed or reopen them.
* Organize tasks using optional categories.

🎯 Priorities & Deadlines

* Assign Low, Medium, or High priority.
* Set due dates for tasks.
* Identify overdue tasks.
* Sort tasks by due date or priority.

🔎 Search & Filtering

* Search by task title or description.
* Filter by All, Active, Completed, or Overdue.
* Combine search, status, and priority filters.

📊 Productivity Dashboard

* View total tasks.
* Track active tasks.
* Monitor completed tasks.
* Identify overdue tasks.
* View completion progress calculated from task data.

💾 Persistent Storage

* Save tasks in browser local storage.
* Retain saved tasks after refreshing the page.
* Handle invalid stored data safely.
* Continue working during the current session when persistent storage is unavailable.

📱 Responsive User Interface

* Responsive desktop, tablet, and mobile layouts.
* Accessible form controls.
* Visible keyboard focus indicators.
* Input validation and helpful feedback.
* Clear empty states.
* Confirmation before destructive actions.

⸻

🛠️ Technology Stack

Technology	Purpose
React 18	Component-based user interface
JavaScript ES6+	Application logic and interactivity
Vite	Development server and production build
HTML5	Semantic page structure
CSS3	Responsive styling and visual design
localStorage	Browser-based data persistence
Vitest	Automated testing
jsdom	Browser-like testing environment
Testing Library	Component and interaction testing

🖥️ Application Preview

Screenshots will be added once the final application preview has been captured.

Recommended screenshots:

Screenshot	Description
Dashboard	Main dashboard and task statistics
Task Management	Task creation, priorities, and task list
Mobile View	Responsive layout on a smaller screen

To display a screenshot, save it in a screenshots/ directory and add:

![TaskFlow Dashboard](screenshots/dashboard.png)

Only add screenshots of the actual working application.

🚀 Getting Started

Follow these instructions to run TaskFlow on your local machine.

Prerequisites

Install:

* Node.js — version 18 or newer.
* npm — included with Node.js.
* Git.
* Visual Studio Code or another code editor.

1. Clone the Repository

git clone https://github.com/rampai-k/taskflow-task-manager.git

2. Navigate to the Project

cd taskflow-task-manager

3. Install Dependencies

npm install

4. Start the Development Server

npm run dev

Open the local URL displayed in your terminal. Vite typically uses:

http://localhost:5173

You can now interact with the TaskFlow application in your browser.

⚙️ Available Commands

Command	Description
npm install	Installs project dependencies
npm run dev	Starts the development server
npm test	Runs automated tests
npm run build	Creates the production build
npm run preview	Previews the production build locally

Before publishing changes, run:

npm test
npm run build

These commands assume the corresponding scripts are configured in package.json.

📁 Project Structure

taskflow-task-manager/
├── public/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── styles/
│   ├── test/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── screenshots/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
├── .gitignore
└── LICENSE

The structure above is illustrative. Refer to the actual repository for the complete implementation.

💾 Data Persistence & Limitations

TaskFlow stores tasks in the browser’s local storage under the key:

taskflow.tasks

This allows tasks to remain available after a page refresh without requiring a backend server or external database.

Current limitations:

* Tasks are stored in the current browser profile.
* Data is not synchronized across browsers or devices.
* The application does not currently provide user accounts or cloud backups.
* Clearing browser site data may permanently remove saved tasks.
* If browser storage is unavailable, changes may not persist after the current session.

TaskFlow is currently a frontend portfolio project. It does not provide multi-user collaboration or server-side data storage.

🌐 Deployment

TaskFlow can be deployed to a static hosting platform.

Deploy with Vercel

1. Sign in to Vercel.
2. Import the rampai-k/taskflow-task-manager GitHub repository.
3. Configure the project:

Setting	Value
Framework	Vite
Build command	npm run build
Output directory	dist
Install command	npm install

4. Deploy the application.
5. Open the generated URL and test the deployed features.
6. Update the live demo link in this README.

No environment variables are required for the current implementation.

Deploy with Netlify

1. Sign in to Netlify.
2. Import the GitHub repository.
3. Set the build command to npm run build.
4. Set the publish directory to dist.
5. Deploy and test the published application.

Update the live demo link once deployment has succeeded.

🧪 Testing Checklist

Before considering a release complete, verify:

* Tasks can be created successfully.
* Empty task titles are rejected.
* Existing tasks can be edited.
* Tasks can be completed and reopened.
* Tasks can be deleted.
* Search returns relevant results.
* Filters work correctly together.
* Priority and due-date sorting work.
* Dashboard statistics update correctly.
* Tasks persist after refreshing the browser.
* The layout works on mobile devices.
* Automated tests pass.
* The production build succeeds.
* The deployed application works correctly.

🗺️ Future Improvements

Potential enhancements for future versions include:

* Backend integration.
* User authentication and personal accounts.
* Cloud database and cross-device synchronization.
* Project-specific task boards.
* Task reminders and notifications.
* Drag-and-drop task organization.
* Enhanced productivity analytics.

These are possible future additions, not features currently included in this version.

👨🏽‍💻 About the Developer

Katlego Rampai
Software Development Student | Aspiring Software Engineer
Gauteng, South Africa 🇿🇦

I am interested in application development, web technologies, APIs, databases, and building practical digital solutions.

Through projects like TaskFlow, I am developing my technical skills, improving my software engineering practices, and building a portfolio of applications that demonstrate my ability to solve real-world problems.

Connect with me:

* 💻 GitHub: @rampai-k
* 🌐 Portfolio: Developer Portfolio
* 💼 LinkedIn: Add your LinkedIn profile URL.

📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

⸻

<div align="center">

Built with purpose by Katlego Rampai 🇿🇦

TaskFlow — Plan your work. Track your progress.

</div>
