export const TASK_VIEWS = [
  { id: "all", label: "All tasks", icon: "▤" },
  { id: "active", label: "Active", icon: "◷" },
  { id: "completed", label: "Completed", icon: "✓" },
  { id: "overdue", label: "Overdue", icon: "!" },
];

export default function TaskFilters({ filters, onChange, counts }) {
  return (
    <>
      <nav className="view-tabs" aria-label="Filter tasks by status">
        {TASK_VIEWS.map((view) => (
          <button key={view.id} type="button" className={`view-tab ${filters.status === view.id ? "selected" : ""}`} onClick={() => onChange({ status: view.id })} aria-pressed={filters.status === view.id}>
            <span aria-hidden="true">{view.icon}</span>{view.label}<span className="tab-count">{counts[view.id]}</span>
          </button>
        ))}
      </nav>
      <div className="filter-tools">
        <label className="search-box">
          <span aria-hidden="true">⌕</span>
          <span className="visually-hidden">Search tasks</span>
          <input type="search" value={filters.search} onChange={(event) => onChange({ search: event.target.value })} placeholder="Search tasks..." />
        </label>
        <label className="select-filter">
          <span className="visually-hidden">Filter by priority</span>
          <select value={filters.priority} onChange={(event) => onChange({ priority: event.target.value })}>
            <option value="all">All priorities</option><option>High</option><option>Medium</option><option>Low</option>
          </select>
        </label>
        <label className="select-filter sort-filter">
          <span className="visually-hidden">Sort tasks</span>
          <select value={filters.sort} onChange={(event) => onChange({ sort: event.target.value })}>
            <option value="created">Recently added</option><option value="dueDate">Due date</option><option value="priority">Priority</option>
          </select>
        </label>
      </div>
    </>
  );
}
