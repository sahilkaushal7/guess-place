import * as React from 'react';
import Header from './components/Header';
import './styles.css';

interface LayoutProps {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: boolean;
}

const Layout: React.FC<LayoutProps> = (props) => (
  <div>
    {props.isLoading ?
      <h1 className={'layout'}>...loading</h1> :
      <>
        <Header isAuth={props.isAuthenticated} />
        <div className={'layout'}>{props.children}</div>
      </>
    }
  </div>
);

export default Layout;