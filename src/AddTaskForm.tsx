import React, { useState } from 'react';

interface AddTaskFormProps {
    onAdd: (task: { text: string; completed: boolean; quote: string }) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAdd }) => {
    const [text, setText] = useState('');

    const fetchQuote = async (): Promise<string> => {
        try {
            const response = await fetch('https://dummyjson.com/quotes/random');
            if (!response.ok) throw new Error('API не отвечает');
            const data = await response.json();
            return data.quote;
        } catch (error) {
            console.error('Ошибка:', error);
            return 'Сделай это сегодня!';
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            const quote = await fetchQuote();
            onAdd({ text: text.trim(), completed: false, quote });
            setText('');
        }
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                className="task-input"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Введите задачу"
            />
            <button type="submit">Добавить</button>
        </form>
    );
};

export default AddTaskForm;