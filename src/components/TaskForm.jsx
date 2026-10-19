import { useEffect, useState } from "react";
import { PRIORITIES } from "../utils/taskUtils.js";

const EMPTY_FORM = { title: "", description: "", priority: "Medium", dueDate: "", category: "", completed: false };

export default function TaskForm({ task, onSave, onCancel }) {
  const [values, setValues] = useState(EMPTY_FORM);
  const [error, setError] = useState("");

  useEffect(() => {
    setValues(task ? { ...EMPTY_FORM, ...task } : EMPTY_FORM);
    setError("");
  }, [task]);

  function updateField(event) {
    const { name, value, checked, type } = event.target;
    setValues((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
    if (name === "title") setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!values.title.trim()) {
      setError("Please enter a task title.");
      return;
    }
    onSave({ ...values, title: values.title.trim() });
  }

  return (
    <form className="task-form" onSubmit={handleSubmit} noValidate>
      <div className="form-heading">
        <div>
          <h2>{task ? "Edit task" : "Create a task"}</h2>
          <p>{task ? "Make changes to your task details." : "Add the next thing you want to get done."}</p>
        </div>
        <button type="button" className="icon-button close-form" onClick={onCancel} aria-label="Cancel and close form">×</button>
      </div>
      <div className="form-field">
        <label htmlFor="task-title">Task title <span aria-hidden="true">*</span></label>
        <input id="task-title" name="title" value={values.title} onChange={updateField} placeholder="e.g. Prepare project proposal" autoFocus required aria-invalid={Boolean(error)} aria-describedby={error ? "title-error" : undefined} />
        {error && <span className="field-error" id="title-error" role="alert">{error}</span>}
      </div>
      <div className="form-field">
        <label htmlFor="task-description">Description <span className="optional">(optional)</span></label>
        <textarea id="task-description" name="description" value={values.description} onChange={updateField} placeholder="Add a few details to help you get started..." rows="3" />
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="task-priority">Priority</label>
          <select id="task-priority" name="priority" value={values.priority} onChange={updateField}>
            {PRIORITIES.map((priority) => <option key={priority}>{priority}</option>)}
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="task-due-date">Due date <span className="optional">(optional)</span></label>
          <input id="task-due-date" name="dueDate" type="date" value={values.dueDate} onChange={updateField} />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="task-category">Project or category <span className="optional">(optional)</span></label>
        <input id="task-category" name="category" value={values.category} onChange={updateField} placeholder="e.g. Work, Personal" />
      </div>
      {task && (
        <label className="checkbox-field">
          <input name="completed" type="checkbox" checked={values.completed} onChange={updateField} />
          <span>Mark this task as completed</span>
        </label>
      )}
      <div className="form-actions">
        <button className="button secondary-button" type="button" onClick={onCancel}>Cancel</button>
        <button className="button primary-button" type="submit">{task ? "Save changes" : "Create task"}</button>
      </div>
    </form>
  );
}
