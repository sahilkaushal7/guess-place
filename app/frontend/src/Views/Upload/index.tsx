import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './styles.css';

interface UploadProps extends RouteComponentProps { }


const Upload: React.FC<UploadProps> = (props) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    props.history.push('/');
  }
  return (
    <div className={'upload'}>
      <form
        onSubmit={(e) => handleSubmit(e)}
      >
        <p>Please fill in the Upload details</p>
        <input type={'text'} name={'username'} placeholder={'Enter your username'} />
        <input type={'email'} name={'email'} placeholder={'Enter your email'} />
        <input type={'password'} name={'password'} placeholder={'Enter your password'} />
        <input type={'submit'} name={'Upload'} />
        <br />
      </form>
    </div >
  );
};

export default Upload;