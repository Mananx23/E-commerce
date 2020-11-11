import React from 'react'
import Login from './components/login/Login'; 
import Landing from './components/home/landing/Landing'
import {Switch , Route } from 'react-router-dom';

const App = ()=> (

    <>
  
      <Switch>
          <Route path="/" component={Login} />
          <Route path="/home" component={Landing}/>
      </Switch>
    
       
    </>
 
)

export default App;
