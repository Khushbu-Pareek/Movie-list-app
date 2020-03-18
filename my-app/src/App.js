import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MyShow from './components/MyShow';
import MyContent from './components/MyContent';
import './assests/App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
            <Fragment>
              <nav className="my-content">
                <Link to={'/'} className='nav-link'> Home </Link>
                <Link to={'/content'} className='nav-link'> My Favourites</Link>
              </nav>
              <Switch>
                  <Route exact path='/' component={MyShow} />
                  <Route path='/content' component={MyContent} />
              </Switch>
            </Fragment>
          </Router>
      </header>
    </div>
  );
}

export default App;
