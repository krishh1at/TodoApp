// import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { setVisibilityFilter } from '../app/filter';
import Link from './Link';

/*
class FilterLink extends React.Component {
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
    const props = this.props;
    const state = store.getState();

    return (
      <Link
        active={
          props.filter === state.visibilityFilter
        }
        onClick={ () => {
            store.dispatch({
              type: 'SET_VISIBILITY_FILTER',
              filter: props.filter
            });
          }
        }
      >{props.children}</Link>
    );
  }
}
FilterLink.contextTypes = {
  store: React.PropTypes
}
*/

// Improved one
const mapStateToLinkProps = (
  state,
  ownProps
) => ({
  active: (ownProps.filter === state.visibilityFilter)
});

const mapDispatchToLinkProps = (
  dispatch,
  ownProps
) => ({
  onClick() {
    dispatch(
      setVisibilityFilter(ownProps.filter)
    );
  }
});

const FilterLink = connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link);

// const FilterLink = ({
//   filter,
//   children
// }) => (
//   <Link
//     to={filter === 'all' ? '' : filter}
//     activeStyle={{
//         textDecoration: 'none',
//         color: 'black'
//     }}
//   >
//     { children }
//   </Link>
// );

export default FilterLink;
