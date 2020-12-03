import React , {Component} from 'react';
import BaseLayout from './layouts/baseLayout'
import {Main} from './pages/main'
import { connect } from 'react-redux';
import { userActions } from './_actions';

class App extends Component {
  
  render() {
    const {loggedIn, user} = this.props;
    return (
      <div>
          <BaseLayout>
            <Main/>
          </BaseLayout>
      </div>

    )
  }
}


function mapState(state) {
  const { authentication } = state;
  const { loggedIn, user } = authentication;
  return { loggedIn, user };
}

const actionCreators = {
}

const connectedApp= connect(mapState, actionCreators)(App);
export { connectedApp as App };