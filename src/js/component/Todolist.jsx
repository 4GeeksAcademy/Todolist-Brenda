import React, { useState } from 'react';
import '../../styles/index.css';

function TodoContainer() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const addTask = (event) => {
        if (event.key === 'Enter' && input.trim() !== '') {
            setTasks([...tasks, input.trim()]);
            setInput('');
        }
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="todo-container">
            <h1>To Do's</h1>
            <input
                type="text"
                placeholder="What needs to be done?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={addTask}
            />
            <ul>
                {tasks.length === 0 ? (
                    <li id="no-tasks">No tasks, add a task</li>
                ) : (
                    tasks.map((task, index) => (
                        <li key={index}>
                            {task}
                            <span className="delete-icon" onClick={() => deleteTask(index)}>✖</span>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default TodoContainer;
