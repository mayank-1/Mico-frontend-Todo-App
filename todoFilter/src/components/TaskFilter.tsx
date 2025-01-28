import React from "react";
import "./TaskFilter.scss";

interface TaskFilterProps {
    setFilter: (filter: string) => void;
}

export default function TaskFilter({ setFilter }: TaskFilterProps) {
    return (
        <div className="task-filter">
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("active")}>Active</button>
            <button onClick={() => setFilter("completed")}>Completed</button>
        </div>
    );
}
