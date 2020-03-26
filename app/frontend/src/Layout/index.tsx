import * as React from 'react';
import Header from './components/Header';
import './styles.css';

const Layout: React.FC = (props) => (
  <div>
    <Header />
    {props.children}
  </div>
);

export default Layout;