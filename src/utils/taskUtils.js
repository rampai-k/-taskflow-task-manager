export const STORAGE_KEY = "taskflow.tasks";
export const PRIORITIES = ["Low", "Medium", "High"];

export function getLocalDateString(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function isTask(task) {
  const hasValidDueDate =
    task?.dueDate === "" ||
    (typeof task?.dueDate === "string" &&
      /^\d{4}-\d{2}-\d{2}$/.test(task.dueDate) &&
      !Number.isNaN(new Date(`${task.dueDate}T00:00:00.000Z`).getTime()) &&
      new Date(`${task.dueDate}T00:00:00.000Z`).toISOString().slice(0, 10) === task.dueDate);
  return (
    task !== null &&
    typeof task === "object" &&
    typeof task.id === "string" &&
    typeof task.title === "string" &&
    task.title.trim().length > 0 &&
    typeof task.description === "string" &&
    PRIORITIES.includes(task.priority) &&
    hasValidDueDate &&
    typeof task.category === "string" &&
    typeof task.completed === "boolean" &&
    typeof task.createdAt === "string"
  );
}

export function readTasks(storage) {
  let stored;
  try {
    stored = storage.getItem(STORAGE_KEY);
  } catch {
    return { tasks: [], issue: "unavailable" };
  }
  if (stored === null) return { tasks: [], issue: null };

  let parsed;
  try {
    parsed = JSON.parse(stored);
  } catch {
    return { tasks: [], issue: "invalid" };
  }
  if (!Array.isArray(parsed) || !parsed.every(isTask)) return { tasks: [], issue: "invalid" };
  return { tasks: parsed, issue: null };
}

export function writeTasks(storage, tasks) {
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    return true;
  } catch {
    return false;
  }
}

export function createTask(values, id = crypto.randomUUID()) {
  return {
    id,
    title: values.title.trim(),
    description: values.description.trim(),
    priority: values.priority,
    dueDate: values.dueDate,
    category: values.category.trim(),
    completed: Boolean(values.completed),
    createdAt: new Date().toISOString(),
  };
}

export function isOverdue(task, today = getLocalDateString()) {
  return !task.completed && Boolean(task.dueDate) && task.dueDate < today;
}

export function filterTasks(tasks, { status = "all", priority = "all", search = "", sort = "created" } = {}, today) {
  const query = search.trim().toLocaleLowerCase();
  const filtered = tasks.filter((task) => {
    const matchesStatus =
      status === "all" ||
      (status === "active" && !task.completed) ||
      (status === "completed" && task.completed) ||
      (status === "overdue" && isOverdue(task, today));
    const matchesPriority = priority === "all" || task.priority === priority;
    const matchesSearch =
      !query ||
      task.title.toLocaleLowerCase().includes(query) ||
      task.description.toLocaleLowerCase().includes(query);
    return matchesStatus && matchesPriority && matchesSearch;
  });

  if (sort === "dueDate") {
    return filtered.sort((a, b) => {
      if (!a.dueDate) return b.dueDate ? 1 : 0;
      if (!b.dueDate) return -1;
      return a.dueDate.localeCompare(b.dueDate);
    });
  }
  if (sort === "priority") {
    const order = { High: 0, Medium: 1, Low: 2 };
    return filtered.sort((a, b) => order[a.priority] - order[b.priority]);
  }
  return filtered.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}
