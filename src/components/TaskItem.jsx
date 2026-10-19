import { isOverdue } from "../utils/taskUtils.js";

function formatDate(date) {
  return new Date(`${date}T12:00:00`).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

export default function TaskItem({ task, onToggle, onEdit, onDelete, today }) {
  const overdue = isOverdue(task, today);
  return (
    <article className={`task-item ${task.completed ? "is-completed" : ""} ${overdue ? "is-overdue" : ""}`}>
      <button className="completion-control" type="button" onClick={() => onToggle(task.id)} aria-label={task.completed ? `Reopen ${task.title}` : `Complete ${task.title}`} aria-pressed={task.completed}>
        {task.completed ? "✓" : ""}
      </button>
      <div className="task-content">
        <div className="task-title-row">
          <h3>{task.title}</h3>
          {overdue && <span className="overdue-label"><span aria-hidden="true">!</span> Overdue</span>}
        </div>
        {task.description && <p className="task-description">{task.description}</p>}
        <div className="task-meta">
          <span className={`priority-badge priority-${task.priority.toLowerCase()}`}><span aria-hidden="true">●</span>{task.priority}</span>
          {task.dueDate && <span className={`task-meta-item ${overdue ? "due-overdue" : ""}`}><span aria-hidden="true">◷</span>{formatDate(task.dueDate)}</span>}
          {task.category && <span className="category-badge"><span aria-hidden="true">▧</span>{task.category}</span>}
        </div>
      </div>
      <div className="task-actions">
        <button className="icon-button" type="button" onClick={() => onEdit(task)} aria-label={`Edit ${task.title}`} title="Edit task">✎</button>
        <button className="icon-button delete-action" type="button" onClick={() => onDelete(task)} aria-label={`Delete ${task.title}`} title="Delete task">⌫</button>
      </div>
    </article>
  );
}
