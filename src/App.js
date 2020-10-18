import React from 'react';
import {Switch,Route} from 'react-router-dom'

import CardList from './Components/CardList/CardList'
import ProfileView from './Components/ProfileView/ProvileView'

function App() {
  return (
    <Switch>
      <Route path="/user/:id" component={ProfileView} />
      <Route path="/" exact component={CardList} />
    </Switch>
  );
}

export default App;
