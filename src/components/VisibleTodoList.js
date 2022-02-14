import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TodoList from './TodoList';
import { toggleTodo } from '../app/action';
import { filterTodos } from '../app/filter';

/*
class VisibleTodoList extends React.Component {
  componentDidMount() {
    const { store } = this.context;

    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    const state = store.getState();

    return (
      <TodoList
        onTodoClick={id => {
          store.dispatch({
            type: 'TOGGLE_TODO',
            id
          });
        }}
      />
    )
  }
}
VisibleTodoList.contextTypes = {
  store: React.PropTypes
};
*/

// Improved one
const mapStateToTodosProps = (state, {match}) => ({
  todos: filterTodos(
    state,
    (match.params.filter || 'all')
  )
});

// const mapDispatchToTodosProps = (dispatch) => ({
//   onTodoClick(id) {
//     dispatch(
//       toggleTodo(id)
//     );
//   }
// });

const VisibleTodoList = withRouter(connect(
  mapStateToTodosProps,
  { onTodoClick: toggleTodo }
)(TodoList));

export default VisibleTodoList;
