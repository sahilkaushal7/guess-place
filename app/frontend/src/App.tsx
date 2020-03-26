import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './router';
import Layout from './Layout';
import { connect } from 'react-redux';
import * as actions from './Store/actions/auth';

interface AppProps {
  isAuthenticated: boolean;
  onTryAutoSignup: () => void;
}

interface AppState { }

class App extends React.Component<AppProps, AppState> {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div>
        <Router>
          <Layout isAuthenticated={this.props.isAuthenticated}>
            <BaseRouter />
          </Layout>
        </Router>
      </div >
    );
  }

}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
