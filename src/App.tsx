import React from 'react';
import './App.css';
import GroceryPage from './pages/GroceryPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './nav/Nav';
import GroceryProductsPage from './pages/GroceryProductsPage';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/grocery-list'>
            <GroceryPage />
          </Route>
          <Route exact path='/grocery-products'>
            <GroceryProductsPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
