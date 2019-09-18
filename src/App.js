import React from 'react';
import Layout from './components/SiteLayout';
import Dashboard from './views/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
        <Layout>
          <Dashboard />
        </Layout>
    </div>
  );
}

export default App;
