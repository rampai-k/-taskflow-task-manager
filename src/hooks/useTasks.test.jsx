import { act, renderHook, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import useTasks from "./useTasks.js";

describe("useTasks", () => {
  beforeEach(() => localStorage.clear());

  it("creates, completes, reopens, edits, and deletes tasks while persisting changes", async () => {
    const { result } = renderHook(() => useTasks());
    act(() => result.current.addTask({ title: "Build dashboard", description: "", priority: "Medium", dueDate: "", category: "" }));
    const id = result.current.tasks[0].id;
    await waitFor(() => expect(JSON.parse(localStorage.getItem("taskflow.tasks"))).toHaveLength(1));

    act(() => result.current.toggleTask(id));
    expect(result.current.tasks[0].completed).toBe(true);
    act(() => result.current.toggleTask(id));
    expect(result.current.tasks[0].completed).toBe(false);
    act(() => result.current.updateTask(id, { title: "Updated dashboard", description: "", category: "", priority: "High", dueDate: "", completed: false }));
    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0].title).toBe("Updated dashboard");
    act(() => result.current.deleteTask(id));
    expect(result.current.tasks).toEqual([]);
  });
});
