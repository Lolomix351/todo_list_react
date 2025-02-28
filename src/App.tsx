import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

interface Task {
    text: string;
    completed: boolean;
    quote: string;
}

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>(() => {
        return JSON.parse(localStorage.getItem('tasks') || '[]');
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleToggle = (index: number) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const handleDelete = (index: number) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const handleAdd = (task: Task) => {
        setTasks([...tasks, task]);
    };

    const handleSort = () => {
        const sortedTasks = [...tasks].sort((a, b) => a.text.localeCompare(b.text));
        setTasks(sortedTasks);
    };

    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;

    return (
        <div className="App">
            <header>
                <h1>Мой Todo List</h1>
            </header>
            <AddTaskForm onAdd={handleAdd} />
            <p className="stats">Всего задач: {total}, выполнено: {completed}</p>
            <button className='sort-buttonя заве' onClick={handleSort}>Сортировать по алфавиту</button>
            <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
        </div>
    );
};

export default App;