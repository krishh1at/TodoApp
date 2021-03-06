import { v4 } from 'node-uuid';

export const addTodo = (text) => {
  if(text === '') {
    return {
      type: ''
    };
  }

  return {
    type: 'ADD_TODO',
    id: v4(),
    text
  };
};

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});
