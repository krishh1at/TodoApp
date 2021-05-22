import { combineReducers } from 'redux';

const todo = (
  state,
  action
) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state;
  }
};

const todos = (
  state = [],
  action
) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (
  state = 'all',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

/*
// Reducer composition pattern
const todoApp = (
  state = {},
  action
) => {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
};

const store = createStore(todoApp);

const todoApp = combineReducers({
  todos: todos, //=> todos field in state object will be updated by todos reducer.
  visibilityFilter: visibilityFilter //=> visibilityFilter field in state object will be updated by visibilityFilter reducer.
});

const store = createStore(todoApp);

// From ES6 shorthand notation we can write above code as =>
const todoApp = combineReducers({
  todos, //=> todos field in state object will be updated by todos reducer.
  visibilityFilter//=> visibilityFilter field in state object will be updated by visibilityFilter reducer.
});

const store = createStore(todoApp);

// Write combineReducer from scratch:

const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](
          state[key],
          action
        );

        return nextState;
      },
      {}
    )
  }
};
*/

export const todoApp = combineReducers({
  todos, //=> todos field in state object will be updated by todos reducer.
  visibilityFilter//=> visibilityFilter field in state object will be updated by visibilityFilter reducer.
});
