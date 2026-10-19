import { useCallback, useEffect, useState } from "react";
import { createTask, readTasks, writeTasks } from "../utils/taskUtils.js";

function loadInitialState() {
  try {
    return readTasks(window.localStorage);
  } catch {
    return { tasks: [], issue: "unavailable" };
  }
}

export default function useTasks() {
  const [initialState] = useState(loadInitialState);
  const [tasks, setTasks] = useState(initialState.tasks);
  const [storageIssue, setStorageIssue] = useState(initialState.issue);

  useEffect(() => {
    try {
      if (!writeTasks(window.localStorage, tasks)) setStorageIssue("unavailable");
    } catch {
      setStorageIssue("unavailable");
    }
  }, [tasks]);

  const addTask = useCallback((values) => {
    const task = createTask(values);
    setTasks((current) => [task, ...current]);
    return task;
  }, []);

  const updateTask = useCallback((id, values) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id
          ? { ...task, ...values, title: values.title.trim(), description: values.description.trim(), category: values.category.trim() }
          : task,
      ),
    );
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks((current) => current.filter((task) => task.id !== id));
  }, []);

  const toggleTask = useCallback((id) => {
    setTasks((current) =>
      current.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    );
  }, []);

  return { tasks, addTask, updateTask, deleteTask, toggleTask, storageIssue };
}
