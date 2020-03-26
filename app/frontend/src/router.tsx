import * as React from 'react';
import Home from './Views/Home';
import Profile from './Views/Profile';
import Login from './Views/Login';
import SignUp from './Views/Signup';
import Upload from './Views/Upload';
import { Switch, Route } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

const BaseRouter = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/:userId/profile' component={Profile} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={SignUp} />
    <Route exact path='/:userId/upload' render={(props: RouteComponentProps) =>
      <Upload urlParams={props.match.params} />} />
  </Switch>
)

export default BaseRouter;