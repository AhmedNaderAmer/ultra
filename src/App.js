import React ,{Component}  from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import './App.css';


import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navebar';
import Index from './Components/Index/Index';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Index} />
      <Route  path="/contact" component={Contact} />
      </BrowserRouter>

    </div>
  );
}

export default App;
