import TaskItem from "./TaskItem.jsx";

export default function TaskList({ tasks, onToggle, onEdit, onDelete, today }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onEdit={onEdit} onDelete={onDelete} today={today} />
      ))}
    </div>
  );
}
