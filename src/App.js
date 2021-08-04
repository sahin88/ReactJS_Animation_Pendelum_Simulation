import React, { } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from './hocs/Layout';
import './App.css';
import Home from './components/Home';
import Table from './components/Table';
function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/table" component={Table} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
