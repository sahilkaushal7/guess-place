import * as React from 'react';
import Home from './views/Home';
import Profile from './views/Profile';
import Login from './views/Login';
import SignUp from './views/Signup';
import Upload from './views/Upload';
import { Switch, Route } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

interface BaseRouterProps {
  isAuthenticated: boolean;
}

const BaseRouter: React.FC<BaseRouterProps> = ({ isAuthenticated }) => (
  <Switch>
    <Route exact path='/' render={() => <Home isAuth={isAuthenticated} />} />
    <Route exact path='/:userId/profile' component={Profile} />
    <Route exact path='/:userId/upload' render={(props: RouteComponentProps) =>
      <Upload urlParams={props.match.params} history={props.history} />} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={SignUp} />
  </Switch>
)

export default BaseRouter;