export default function EmptyState({ hasTasks, onCreate }) {
  return (
    <div className="empty-state">
      <span className="empty-illustration" aria-hidden="true">{hasTasks ? "⌕" : "✦"}</span>
      <h3>{hasTasks ? "No tasks match your filters" : "Your task list is clear"}</h3>
      <p>{hasTasks ? "Try a different search or adjust your filters." : "A clear mind starts with a clear plan. Add your first task to get going."}</p>
      {!hasTasks && <button className="button primary-button" type="button" onClick={onCreate}>＋ Create your first task</button>}
    </div>
  );
}
