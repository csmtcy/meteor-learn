export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

/*
 * action creators
 */

export function addTodo(text) {
  return { type: ADD_TODO, text: text };
}

export function toggleTodo(id, checked) {
  return { type: TOGGLE_TODO, id: id, checked: checked };
}

export function deleteTodo(id) {
  return { type: REMOVE_TODO, id: id};
}
