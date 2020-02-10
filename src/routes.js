import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main'
import Infos from './pages/Infos';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Main}/>
        <Route path='/infos/:userName' component={Infos}/>
      </Switch>
    </BrowserRouter>
  )
}