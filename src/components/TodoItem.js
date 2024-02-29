// TodoItem.js

import React, { useState } from 'react';
import './TodoItem.css'; 
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TodoItem = React.memo(({ todo, onComplete, onDelete, onEdit, darkMode }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(todo.title);
    const [editedDescription, setEditedDescription] = useState(todo.description);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSaveEdit = () => {
        onEdit(todo.id, editedTitle, editedDescription);
        setIsEditing(false);
    };
    console.log(darkMode);

    return (
        <div className={`todo-item ${isEditing ? 'editing' : ''}` } style={{ backgroundColor: darkMode ? '#333' : 'white' }}>
            <div className="todo-content">
                <input type="checkbox" checked={todo.completed} onChange={onComplete} />
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                            className="edit-title"
                            style={{ backgroundColor: darkMode ? '#888' : 'white' }}
                        />
                        <textarea
                            value={editedDescription}
                            onChange={(e) => setEditedDescription(e.target.value)}
                            className="edit-description"
                            style={{ backgroundColor: darkMode ? '#888' : 'white' }}
                        />
                    </>
                ) : (
                    <>
                        <span className={todo.completed ? 'completed' : ''}>{todo.title}</span>
                        <p className={todo.completed ? 'completed' : ''}>{todo.description}</p>
                    </>
                )}
            </div>
            <div className="button-group">
                {isEditing ? (
                    <button className="save-button" onClick={handleSaveEdit}>Save</button>
                ) : (
                    <>
                        <button className="edit-button" onClick={handleEdit}><EditIcon /></button>
                        <button className="delete-button" onClick={onDelete}><DeleteIcon /></button>
                    </>
                )}
            </div>
        </div>
    );
});

export default TodoItem;
