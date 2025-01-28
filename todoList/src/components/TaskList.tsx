import React from "react";
import "./TaskList.scss";

interface Task {
    text: string;
    completed: boolean;
}

interface TaskListProps {
    tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
    return (
        <ul className="task-list">
            {tasks.map((task, index) => (
                <li key={index} className={task.completed ? "completed" : ""}>
                    {task.text}
                </li>
            ))}
        </ul>
    );
}
