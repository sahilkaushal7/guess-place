import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './router';
import Layout from './layout';
import { connect } from 'react-redux';
import * as actions from './store/actions/auth';

interface AppState {
  isLoading: boolean;
  error: boolean;
}

interface AppProps extends AppState {
  isAuthenticated: boolean;
  onTryAutoSignup: () => void;
}

class App extends React.Component<AppProps, {}> {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div>
        <Router>
          <Layout
            isAuthenticated={this.props.isAuthenticated}
            isLoading={this.props.isLoading}
            error={this.props.error}
          >
            <BaseRouter
              isAuthenticated={this.props.isAuthenticated}
            />
          </Layout>
        </Router>
      </div >
    );
  }

}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.token !== null,
    isLoading: state.loading,
    error: state.error,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
