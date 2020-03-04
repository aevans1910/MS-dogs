import React from 'react';
import './App.css';
import PageHeader from './PageHeader'
import PageFooter from './PageFooter';
import PageContent from './PageContent'
import SelectedProject from './SelectedProject'
import data from './data'
import { HashRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <PageHeader />
        <Route exact path='/' component={PageContent} />
        <Route exact path='/:index' component={SelectedProject} />
        <PageFooter />
      </div>
    </Router>
  );
}

export default App;
