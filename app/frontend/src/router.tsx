import * as React from 'react';
import Home from './Views/Home';
import Profile from './Views/Profile';
import Login from './Views/Login';
import SignUp from './Views/Signup';
import Upload from './Views/Upload';
import { Switch, Route } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

interface BaseRouterProps {
  isAuthenticated: boolean;
}

const BaseRouter: React.FC<BaseRouterProps> = ({ isAuthenticated }) => (
  <Switch>
    <Route exact path='/' render={() => <Home isAuth={isAuthenticated} />} />
    <Route exact path='/:id/profile' render={(props: RouteComponentProps) =>
      <Profile urlParams={props.match.params} />} />
    <Route exact path='/:id/upload' render={(props: RouteComponentProps) =>
      <Upload urlParams={props.match.params} history={props.history} />} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={SignUp} />
  </Switch>
)

export default (BaseRouter);