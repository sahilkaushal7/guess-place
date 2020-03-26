import * as React from 'react';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';

interface HeaderState { }

interface HeaderProps extends RouteComponentProps, HeaderState {
  isAuth: boolean;
  logout: () => void;
  userId: number;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  render() {
    const { isAuth, logout, userId } = this.props;
    return (
      <div className='navbar'>
        {isAuth ?
          <>
            <NavLink to={'/'} exact>Home</NavLink>
            <NavLink to={`${userId}/upload`}>Upload Image</NavLink>
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


const mapStateToProps = (state: any) => {
  return {
    userId: state.userId,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => dispatch(actions.logout())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));