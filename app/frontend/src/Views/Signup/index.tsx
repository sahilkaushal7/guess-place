import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import * as actions from '../../store/actions/auth';
import { connect } from 'react-redux';
import './styles.css';

interface SignupProps extends RouteComponentProps {
  onAuth: (username: string, email: string, password1: string, password2: string) => void;
}

interface SignupState { }

class Signup extends React.Component<SignupProps, SignupState> {
  render() {
    const handleSubmit = (e: any) => {
      e.preventDefault();
      const username = e.target.elements.username.value;
      const email = e.target.elements.email.value;
      const password = e.target.elements.password.value;
      this.props.onAuth(username, email, password, password);
      this.props.history.push('/');

    }
    return (
      <div className={'signup'}>
        <form
          onSubmit={(e) => handleSubmit(e)}
        >
          <p>Please fill in the Signup details</p>
          <input type={'text'} name={'username'} placeholder={'Enter your username'} />
          <input type={'email'} name={'email'} placeholder={'Enter your email'} />
          <input type={'password'} name={'password'} placeholder={'Enter your password'} />
          <input type={'submit'} name={'Signup'} />
          <br />
        </form>
        Already have an account ?
        <p>Please Login < Link to={'/login'}>here</Link ></p>
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
    onAuth: (username: string, email: string, password1: string, password2: string) =>
      dispatch(actions.authSignup(username, email, password1, password2))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);