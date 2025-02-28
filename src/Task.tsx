import React from 'react';

interface TaskProps {
    task: { text: string; completed: boolean; quote: string };
    onToggle: () => void;
    onDelete: () => void;
}

const Task: React.FC<TaskProps> = ({ task, onToggle, onDelete }) => {
    return (
        <li className={task.completed ? 'completed' : ''}>
            <input type="checkbox" checked={task.completed} onChange={onToggle} />
            <span>{task.text}</span>
            <span className="quote">{task.quote}</span>
            <button onClick={onDelete}>Удалить</button>
        </li>
    );
};

export default Task;