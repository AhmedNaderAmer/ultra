import React ,{Component}  from 'react';

import Home from '../Home/Home' ;
import About from '../About/About';
import Footer from '../Footer/Footer';
import Portfolio from '../Portfolio/Portfolio';
import Profile from '../Profile/Profile';
import SocailMedia from '../SocailMedia/SocailMedia';
import Work from '../Work/Work';

function Index() {
  return (
    <div >
      <Home />
      <Work />
      <Portfolio />
      <Profile />
      <About />
      <SocailMedia />
      <Footer />

    </div>
  );
}

export default Index;
