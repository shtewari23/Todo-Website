// todoActions.js

export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CLEAR_COMPLETED_TASKS = 'CLEAR_COMPLETED_TASKS'; // New action type

export const addTodo = (title, description) => ({
  type: ADD_TODO,
  payload: { title, description }
});

export const editTodo = (id, title, description) => ({
  type: EDIT_TODO,
  payload: { id, title, description }
});

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  payload: id
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
});

export const clearCompletedTasks = () => ({
  type: CLEAR_COMPLETED_TASKS
});

