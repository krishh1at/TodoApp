import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../app/action';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input
        placeholder='Enter Todo'
        ref={node => {
        input = node;
      }}
      required={true} />

      <button onClick={() => {
        dispatch(
          addTodo(input.value)
        );

        input.value = '';
      }}> Add Todo </button>
    </div>
  )
}

AddTodo = connect()(AddTodo);
export default AddTodo;
