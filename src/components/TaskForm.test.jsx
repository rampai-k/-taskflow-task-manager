import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import TaskForm from "./TaskForm.jsx";

describe("TaskForm", () => {
  it("rejects blank and whitespace-only titles, then saves a trimmed title", () => {
    const onSave = vi.fn();
    render(<TaskForm onSave={onSave} onCancel={vi.fn()} />);
    const title = screen.getByRole("textbox", { name: "Task title" });
    const submit = screen.getByRole("button", { name: "Create task" });

    fireEvent.click(submit);
    expect(screen.getByRole("alert")).toHaveTextContent("Please enter a task title.");
    fireEvent.change(title, { target: { value: "   " } });
    fireEvent.click(submit);
    expect(screen.getByRole("alert")).toHaveTextContent("Please enter a task title.");

    fireEvent.change(title, { target: { value: "  Prepare portfolio  " } });
    fireEvent.click(submit);
    expect(onSave).toHaveBeenCalledWith(expect.objectContaining({ title: "Prepare portfolio" }));
  });
});
