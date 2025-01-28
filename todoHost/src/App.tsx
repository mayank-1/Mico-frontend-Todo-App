import React, { useState } from "react";

// Dynamically importing the micro-frontend components
const TaskInput = React.lazy(() => import("taskInput/TaskInput"));
const TaskList = React.lazy(() => import("taskList/TaskList"));
const TaskFilter = React.lazy(() => import("taskFilter/TaskFilter"));

interface Task {
  text: string;
  completed: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<string>("all");

  // Handle adding a new task
  const addTask = (task: Task) => setTasks([...tasks, task]);

  // Filtering tasks based on the selected filter
  const filteredTasks = tasks.filter((task) =>
    filter === "completed" ? task.completed : filter === "active" ? !task.completed : true
  );

  return (
    <div>
      <h1>Todo App</h1>

      {/* Lazy loading each micro-frontend component */}
      <React.Suspense fallback={<div>Loading...</div>}>
        <TaskInput addTask={addTask} />
        <TaskFilter setFilter={setFilter} />
        <TaskList tasks={filteredTasks} />
      </React.Suspense>
    </div>
  );
}
