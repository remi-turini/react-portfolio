import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free';
import React from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Mesprojets from "./components/Mesprojets";
import Apropos from "./components/Apropos";
import Contact from "./components/Contact";
import { Route, Switch } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart, faCommentDots } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faShoppingCart, faCommentDots);

function App() {
  
  return (     
  <Switch>
    <div className="body">
      <Route exact path="/">
        <Navbar/>
        <Header/>
      </Route>
      <Route path="/mesprojets">
        <Navbar/>
        <Mesprojets/> 
      </Route>
      <Route path="/apropos">
        <Navbar/>
        <Apropos/>
      </Route>
      <Route path="/contact">
        <Navbar/>
        <Contact/>
      </Route>
    </div>
  </Switch>
  );
}

export default App;