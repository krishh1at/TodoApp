import React from 'react';
import Todo from './Todo';

const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo => {
      return(
        <Todo
          key={todo.id}
          {...todo}
          onClickHandler={() => onTodoClick(todo.id)}
        />
      )
    })}
  </ul>
);

export default TodoList;
