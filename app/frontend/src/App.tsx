import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './router';
import Layout from './Layout';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Layout >
          <BaseRouter />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
