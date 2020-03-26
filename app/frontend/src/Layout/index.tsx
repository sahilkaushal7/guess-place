import * as React from 'react';
import Header from './components/Header';
import './styles.css';

interface LayoutProps {
  isAuthenticated: boolean;
}

const Layout: React.FC<LayoutProps> = (props) => (
  <div>
    <Header isAuth={props.isAuthenticated}/>
    <div className={'layout'}>{props.children}</div>
  </div>
);

export default Layout;