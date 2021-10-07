import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './hocs/Layout';
import Home from './components/Home';
import Feed from './components/Feed';
import FeedDetail from './components/FeedDetail';
import Category from './components/Category';


function App() {
  return (
    <div className="App">
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/feed' component={Feed} />
                    <Route exact path='/category/:id' component={Category} />
                    <Route exact path='/feed/:id' component={FeedDetail} />
                </Switch>
            </Layout>
        </Router>
    </div>
  );
}

export default App;
