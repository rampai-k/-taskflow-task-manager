import { useMemo, useState } from "react";
import DashboardStats from "./components/DashboardStats.jsx";
import EmptyState from "./components/EmptyState.jsx";
import Header from "./components/Header.jsx";
import TaskFilters from "./components/TaskFilters.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import useTasks from "./hooks/useTasks.js";
import { filterTasks, getLocalDateString, isOverdue } from "./utils/taskUtils.js";

const INITIAL_FILTERS = { status: "all", priority: "all", search: "", sort: "created" };

function formatGreetingDate(date = new Date()) {
  return date.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" });
}

export default function App() {
  const { tasks, addTask, updateTask, deleteTask, toggleTask, storageIssue } = useTasks();
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [formTask, setFormTask] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const [toast, setToast] = useState("");
  const today = getLocalDateString();
  const visibleTasks = useMemo(() => filterTasks(tasks, filters, today), [tasks, filters, today]);
  const overdueCount = tasks.filter((task) => isOverdue(task, today)).length;
  const counts = {
    all: tasks.length,
    active: tasks.filter((task) => !task.completed).length,
    completed: tasks.filter((task) => task.completed).length,
    overdue: overdueCount,
  };

  function showToast(message) {
    setToast(message);
    window.setTimeout(() => setToast(""), 3200);
  }

  function openCreateForm() {
    setFormTask(null);
    setFormOpen(true);
  }

  function openEditForm(task) {
    setFormTask(task);
    setFormOpen(true);
  }

  function closeForm() {
    setFormOpen(false);
    setFormTask(null);
  }

  function saveTask(values) {
    if (formTask) {
      updateTask(formTask.id, values);
      showToast("Task updated successfully.");
    } else {
      addTask(values);
      showToast("Task created successfully.");
    }
    closeForm();
  }

  function confirmDelete(task) {
    if (window.confirm(`Delete "${task.title}"? This action cannot be undone.`)) {
      deleteTask(task.id);
      showToast("Task deleted.");
    }
  }

  function updateFilters(changes) {
    setFilters((current) => ({ ...current, ...changes }));
  }

  return (
    <div className="app-shell" id="top">
      <Header />
      <main className="main-content">
        <header className="topbar">
          <div className="breadcrumb"><span>Workspace</span><span aria-hidden="true">/</span><strong>My tasks</strong></div>
          <div className="topbar-right">
            <span className="today-label">{formatGreetingDate()}</span>
            <span className="topbar-avatar" aria-label="Katlego Rampai">KR</span>
          </div>
        </header>
        <div className="page-content">
          <section className="welcome-section">
            <div>
              <p className="eyebrow">YOUR PERSONAL WORKSPACE</p>
              <h1>Good things take <span>time.</span></h1>
              <p className="welcome-copy">Make space for what matters. One task at a time.</p>
            </div>
            <button className="button primary-button add-task-button" type="button" onClick={openCreateForm}><span aria-hidden="true">＋</span> Add a task</button>
          </section>

          {storageIssue && (
            <div className="storage-notice" role="status">
              <span aria-hidden="true">ⓘ</span>
              {storageIssue === "invalid"
                ? "Saved task data could not be read, so the workspace started fresh."
                : "Browser storage is unavailable. Your changes will not persist after this page closes."}
            </div>
          )}

          <DashboardStats tasks={tasks} overdueCount={overdueCount} />

          <section className="tasks-section" aria-labelledby="tasks-heading">
            <div className="section-heading">
              <div>
                <h2 id="tasks-heading">Your tasks <span className="heading-count">{tasks.length}</span></h2>
                <p>Keep your priorities clear and your momentum going.</p>
              </div>
              <button className="button secondary-button desktop-add-button" type="button" onClick={openCreateForm}><span aria-hidden="true">＋</span> New task</button>
            </div>
            {formOpen && (
              <div className="form-card">
                <TaskForm task={formTask} onSave={saveTask} onCancel={closeForm} />
              </div>
            )}
            <TaskFilters filters={filters} onChange={updateFilters} counts={counts} />
            {visibleTasks.length > 0 ? (
              <TaskList tasks={visibleTasks} onToggle={toggleTask} onEdit={openEditForm} onDelete={confirmDelete} today={today} />
            ) : (
              <EmptyState hasTasks={tasks.length > 0} onCreate={openCreateForm} />
            )}
          </section>
        </div>
      </main>
      {toast && <div className="toast" role="status"><span aria-hidden="true">✓</span>{toast}</div>}
    </div>
  );
}
