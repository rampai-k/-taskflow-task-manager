import { describe, expect, it } from "vitest";
import { createTask, filterTasks, isOverdue, readTasks, writeTasks } from "./taskUtils.js";

const task = (overrides = {}) => ({
  id: "task-1",
  title: "Plan portfolio",
  description: "Write the project outline",
  priority: "High",
  dueDate: "2026-10-18",
  category: "Work",
  completed: false,
  createdAt: "2026-10-17T10:00:00.000Z",
  ...overrides,
});

describe("task utilities", () => {
  it("creates a normalized task with a stable id and default completion state", () => {
    const created = createTask({ title: "  Review code  ", description: " notes ", priority: "Low", dueDate: "", category: " " }, "stable-id");
    expect(created).toMatchObject({ id: "stable-id", title: "Review code", description: "notes", category: "", completed: false });
    expect(created.createdAt).toEqual(expect.any(String));
  });

  it("calculates overdue tasks against a local calendar date and ignores completed tasks", () => {
    expect(isOverdue(task(), "2026-10-19")).toBe(true);
    expect(isOverdue(task({ dueDate: "2026-10-19" }), "2026-10-19")).toBe(false);
    expect(isOverdue(task({ completed: true }), "2026-10-19")).toBe(false);
  });

  it("combines status, priority, and search filters", () => {
    const tasks = [task(), task({ id: "task-2", title: "Read docs", priority: "Low", completed: true, dueDate: "" })];
    expect(filterTasks(tasks, { status: "active", priority: "High", search: "outline" }, "2026-10-19")).toHaveLength(1);
    expect(filterTasks(tasks, { status: "overdue" }, "2026-10-19")).toHaveLength(1);
    expect(filterTasks(tasks, { search: "missing" })).toHaveLength(0);
  });

  it("reads, writes, and safely rejects invalid stored task data", () => {
    const values = new Map();
    const storage = {
      getItem: (key) => values.get(key) ?? null,
      setItem: (key, value) => values.set(key, value),
    };
    expect(writeTasks(storage, [task()])).toBe(true);
    expect(readTasks(storage)).toEqual({ tasks: [task()], issue: null });
    values.set("taskflow.tasks", "{broken");
    expect(readTasks(storage)).toEqual({ tasks: [], issue: "invalid" });
    values.set("taskflow.tasks", JSON.stringify([{ nope: true }]));
    expect(readTasks(storage)).toEqual({ tasks: [], issue: "invalid" });
    expect(readTasks({ getItem: () => { throw new Error("blocked"); } })).toEqual({ tasks: [], issue: "unavailable" });
    expect(writeTasks({ setItem: () => { throw new Error("blocked"); } }, [task()])).toBe(false);
    values.set("taskflow.tasks", JSON.stringify([task({ dueDate: "2026-02-31" })]));
    expect(readTasks(storage)).toEqual({ tasks: [], issue: "invalid" });
  });
});
