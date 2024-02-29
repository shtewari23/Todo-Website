// TodoForm.js

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoAction';
import './TodoForm.css'; // Import CSS file for styling

const TodoForm = React.memo(({ addTodo, darkMode }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  console.log(darkMode);

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim()) return;
    addTodo(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <form className={`todo-form ${darkMode ? 'dark-mode' : ''}`} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write a new task..."
        value={title}
        onChange={e => setTitle(e.target.value)}
        className={`todo-input ${darkMode ? 'dark-mode' : ''}`}
      />
      <textarea
        placeholder="Details..."
        value={description}
        onChange={e => setDescription(e.target.value)}
        className={`todo-textarea ${darkMode ? 'dark-mode' : ''}`}
      />
      <button type="submit" className={`add-button ${darkMode ? 'dark-mode' : ''}`}>Add Task</button>
    </form>
  );
});

export default connect(null, { addTodo })(TodoForm);
