import React from 'react'; // Import React
import { connect } from 'react-redux';
import { completeTodo, deleteTodo, editTodo, clearCompletedTasks } from '../actions/todoAction';
import TodoItem from './TodoItem';
import './TodoList.css';


const TodoList = React.memo(({ todos, completeTodo, deleteTodo, editTodo, clearCompletedTasks, darkMode }) => {
    const handleEdit = (id, title, description) => {
        editTodo(id, title, description);
    };
    console.log(darkMode);

    const handleClearCompleted = () => {
        clearCompletedTasks();
    };

    return (
        <div className={darkMode ? 'todo-list-dark' : 'todo-list'}>
            <h2 className='heading'>Todo List</h2>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onComplete={() => completeTodo(todo.id)}
                    onDelete={() => deleteTodo(todo.id)}
                    onEdit={handleEdit}
                    darkMode={darkMode} 
                />
            ))}
            <button className={`clear-button ${darkMode ? 'dark-mode' : ''}`} onClick={handleClearCompleted}>Clear Completed</button>
        </div>
    );
});

const mapStateToProps = state => ({
    todos: state.todos,
});

export default connect(mapStateToProps, { completeTodo, deleteTodo, editTodo, clearCompletedTasks })(TodoList);
