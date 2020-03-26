import * as React from 'react';
import Home from './Views/Home';
import Profile from './Views/Profile';
import Login from './Views/Login';
import SignUp from './Views/Signup';
import Upload from './Views/Upload';
import { Switch, Route } from 'react-router-dom';

const BaseRouter = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/profile' component={Profile} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={SignUp} />
    <Route exact path='/upload' component={Upload} />
  </Switch>
)

export default BaseRouter;