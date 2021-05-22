import { connect } from 'react-redux';
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
const mapStateToTodosProps = (state, ownProps) => ({
  todos: filterTodos(
    state.todos,
    state.visibilityFilter
  )
});

const mapDispatchToTodosProps = (dispatch) => ({
  onTodoClick(id) {
    dispatch(
      toggleTodo(id)
    );
  }
});

const VisibleTodoList = connect(
  mapStateToTodosProps,
  mapDispatchToTodosProps
)(TodoList);

export default VisibleTodoList;
