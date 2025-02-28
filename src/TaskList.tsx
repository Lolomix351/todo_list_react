import React from 'react';
import Task from './Task';

interface TaskListProps {
    tasks: { text: string; completed: boolean; quote: string }[];
    onToggle: (index: number) => void;
    onDelete: (index: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => {
    return (
        <ul className="task-list">
            {tasks.map((task, index) => (
                <Task
                    key={index}
                    task={task}
                    onToggle={() => onToggle(index)}
                    onDelete={() => onDelete(index)}
                />
            ))}
        </ul>
    );
};

export default TaskList;