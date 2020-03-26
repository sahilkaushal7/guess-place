import * as React from 'react';
import Home from './views/Home';
import Profile from './views/Profile';
import Login from './views/Login';
import SignUp from './views/Signup';
import Upload from './views/Upload';
import { Switch, Route } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

const BaseRouter = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/:userId/profile' component={Profile} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={SignUp} />
    <Route exact path='/:userId/upload' render={(props: RouteComponentProps) =>
      <Upload urlParams={props.match.params} history={props.history}/>} />
  </Switch>
)

export default BaseRouter;