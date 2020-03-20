import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import FunctionCounter from './components/use-state-samples/FunctionCounter';
import FunctionPosts from './components/use-effect-samples/FunctionPosts';
import FunctionTimer from './components/cleanup-samples/FunctionTimer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <div>
            <Link to='/use-state'>Use State</Link>&nbsp;|&nbsp;
            <Link to='/use-effect'>Use Effect</Link>&nbsp;|&nbsp;
            <Link to='/use-effect-cleanup'>Cleanup Sample</Link>
          </div>
          <Switch>
            <Route exact path='/use-state'>
              <FunctionCounter />
            </Route>
            <Route exact path='/use-effect'>
              <FunctionPosts />
            </Route>
            <Route exact path='/use-effect-cleanup'>
              <FunctionTimer />
            </Route>
          </Switch>
        </div>
      </Router>
    </div >
  );
}

export default App;
