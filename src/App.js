import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'

import Home from './pages/home/home.comp'
import Bio from './pages/bio/bio.comp'
import Contact from './pages/contact/contact.comp'
import Header from './comps/header/header.comp'
import Portfolio from './pages/portfolio/portfolio.comp'
import Cv from './pages/cv/cv.comp'

import Logo from './comps/logo/logo.comp';

function App() {
  return (
    <div className="App">
    <Logo className='logo'/> 
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/cv" component={Cv}/>
        <Route path="/bio" component={Bio}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/portfolio" component={Portfolio}/>
      </Switch>
      <Header/>
    </div>
  );
}

export default App;
