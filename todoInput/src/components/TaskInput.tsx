import React, { useState } from "react";
import "./TaskInput.scss";

interface Task {
    text: string;
    completed: boolean;
}

interface TaskInputProps {
    addTask: (task: Task) => void;
}

export default function TaskInput({ addTask }: TaskInputProps) {
    const [task, setTask] = useState<string>("");

    const handleAdd = () => {
        if (task.trim()) {
            addTask({ text: task, completed: false });
            setTask("");
        }
    };

    return (
        <div className="task-input">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a task..."
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}
