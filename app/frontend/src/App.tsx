import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import BaseRouter from './router';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <BaseRouter />
      </Router>
    </div>
  );
}

export default App;
