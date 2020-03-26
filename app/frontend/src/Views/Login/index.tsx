import * as React from 'react';
import { NavLink, RouteComponentProps } from 'react-router-dom';
import * as actions from '../../store/actions/auth';
import { connect } from 'react-redux';
import './styles.css';

interface LoginProps extends RouteComponentProps {
  onAuth: (userName: string, password: string) => void;
}

interface LoginState { }

class Login extends React.Component<LoginProps, LoginState> {
  render() {
    const handleSubmit = (e: any) => {
      e.preventDefault();
      const userName = e.target.elements.username.value;
      const password = e.target.elements.password.value;
      this.props.onAuth(userName, password);
      this.props.history.push('/');

    }
    return (
      <div className={'login'}>
        <form
          onSubmit={(e) => handleSubmit(e)}
        >
          <p>Please fill in the login details</p>
          <input type={'text'} name={'username'} placeholder={'Enter your username'} />
          <input type={'password'} name={'password'} placeholder={'Enter your password'} />
          <input type={'submit'} name={'Login'} />
          <br />
        </form>
        Dont have an account ?
        <p>Please Sign Up <NavLink to={'/signup'}>here</NavLink></p>
      </div >
    )
  }

}

const mapStateToProps = (state: any) => {
  return {
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAuth: (username: string, password: string) => dispatch(actions.authLogin(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);