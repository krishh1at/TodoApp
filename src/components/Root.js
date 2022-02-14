import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoApp from './TodoApp';

/*
// We can import Provider from 'react-redux' library
class Provider extends React.Component {
  getChildContext() {
    return {
      store: this.props.store
    };
  }

  render() {
    return this.props.children;
  }
}
Provider.childContextTypes = {
  store: React.PropTypes
}
*/


const Root = ({
  store
}) => (
  <Provider store={store} >
    <Router>
      <Switch>
        <Route path='/:filter?' component={TodoApp} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
