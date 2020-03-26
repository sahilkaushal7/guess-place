import * as React from 'react';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../Store/actions/auth';

interface HeaderProps extends RouteComponentProps{
  isAuth: boolean;
  logout: () => void;
}

interface HeaderState { }

class Header extends React.Component<HeaderProps, HeaderState> {
  render() {
    const { isAuth, logout } = this.props;
    return (
      <div className='navbar'>
        {isAuth ?
          <>
            <NavLink to={'/'} exact>Home</NavLink>
            <NavLink to={'/upload'}>Upload Image</NavLink>
            <a href={'/#'} className='right' onClick={logout}>Logout</a>
          </> :
          <>
            <NavLink to={'/login'}>Login</NavLink>
            <NavLink to={'/signup'}>Sign Up</NavLink>
          </>}
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => dispatch(actions.logout())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Header));