import React from 'react';
import {render} from 'react-dom';
import Home from './src/home/home.js';
import About from './src/about/about.js';
import Research from './src/research/research.js';
import './normalize.less';

import {
  Router,
  Route,
  hashHistory,
  browserHistory,
  IndexRoute,
} from 'react-router';

// console.log(About, Research);

const RouterMap = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="research" component={Research} />
      </Route>
      {/* <Route path="/about" component={About} />
      <Route path="/research" component={Research} />
      <Route path="/leadership" component={Research} /> */}
    </Router>
  )
}

render(< RouterMap />, document.getElementById('container'));
