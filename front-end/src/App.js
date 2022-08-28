import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import allContactsPage from './pages/AllContactsPage';
import AddContactsPage from './pages/AddContactsPage';
import UpdateContactsPage from './pages/UpdateContactsPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={ () => <Redirect to="/AllContacts" /> } />
      <Route exact path="/AllContacts" component={ allContactsPage } />
      <Route exact path="/AddContact" component={ AddContactsPage } />
      <Route exact path="/UpdateContact" component={ UpdateContactsPage } />
    </Switch>
  );
}

export default App;
