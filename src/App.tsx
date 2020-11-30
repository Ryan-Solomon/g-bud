import React from 'react';
import './App.css';
import GroceryPage from './pages/GroceryPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <h1>Home</h1>
        </Route>
        <Route exact path='/groceries'>
          <GroceryPage />;
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
