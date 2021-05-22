import React from 'react';

const Todo = ({
  text,
  completed,
  onClickHandler
}) => (
  <li
    onClick={onClickHandler}
    style={{
      textDecoration: completed ?
        'line-through' :
        'none'
    }}
  >
    {text}
  </li>
);

export default Todo;
