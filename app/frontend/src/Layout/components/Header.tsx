import * as React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className='navbar'>
      <Link to={'/'}>Home</Link>
      <Link to={'/upload'}>Upload Image</Link>
      <Link to={'/login'}>Login</Link>
      <Link to={'/signup'}>Sign Up</Link>
      <a href={'/#'} className='right'>Logout</a>
    </div>
  );
};

export default Header;