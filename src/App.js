import React from "react";
import OrderForm from './OrderForm'
import Homepage from './Homepage'
import { Route, Switch } from 'react-router-dom'


const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/Pizza' component={OrderForm} />
    </Switch>
  );
};


export default App;