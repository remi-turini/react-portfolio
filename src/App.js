import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free';
import React from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Mesprojets from "./components/Mesprojets";
import Apropos from "./components/Apropos";
import Contact from "./components/Contact";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart, faCommentDots } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faShoppingCart, faCommentDots);

function App() {
  
  return (   
    <BrowserRouter>
      <Switch>
        <div className="body">
          <Route path="/" component={Navbar}/>
          <Route exact path="/" component={Header}/>
          <Route path="/mesprojets" component={Mesprojets}/>
          <Route path="/apropos" component={Apropos}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </Switch>
    </BrowserRouter>  
  );
}

export default App;