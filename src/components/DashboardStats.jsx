export default function DashboardStats({ tasks, overdueCount }) {
  const completed = tasks.filter((task) => task.completed).length;
  const active = tasks.length - completed;
  const progress = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;

  const stats = [
    { label: "Total tasks", value: tasks.length, icon: "▤", tone: "blue" },
    { label: "Completed", value: completed, icon: "✓", tone: "green" },
    { label: "In progress", value: active, icon: "◷", tone: "violet" },
    { label: "Overdue", value: overdueCount, icon: "!", tone: "orange" },
  ];

  return (
    <section className="stats-grid" aria-label="Task overview">
      {stats.map((stat) => (
        <article className="stat-card" key={stat.label}>
          <span className={`stat-icon ${stat.tone}`} aria-hidden="true">{stat.icon}</span>
          <div className="stat-details">
            <span className="stat-label">{stat.label}</span>
            <strong className="stat-value">{stat.value}</strong>
          </div>
        </article>
      ))}
      <article className="progress-card">
        <div className="progress-heading">
          <div><span className="stat-label">Completion rate</span><strong className="progress-value">{progress}%</strong></div>
          <span className="progress-ring" aria-hidden="true">{progress}%</span>
        </div>
        <div className="progress-track" role="progressbar" aria-label="Completion rate" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
          <span style={{ width: `${progress}%` }} />
        </div>
        <p>{completed} of {tasks.length} tasks completed</p>
      </article>
    </section>
  );
}
