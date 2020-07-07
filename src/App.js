import React, { Component } from 'react';
import Header from './Components/Header';
import Prayertime from './Components/Prayertime';
import PrayerTable from './Components/PrayerTable';
import Footer from './Components/Footer';
import Tevhid from './Components/Tevhid';
import Ourmasjid from './Components/Ourmasjid';
import Madina from './Components/Madina';
import Donate from './Components/Donate';
import WhyIslam from './Components/WhyIslam';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>     
        <div>
          <Switch>
          <Route exact path="/">
            <Header />
            <Prayertime />
            <PrayerTable />
            <Tevhid />
            <Ourmasjid />
            <Madina />
            <Donate />
            <Footer />
          </Route>  
          <Route path="/whyislam" exact component={WhyIslam}/>          
          </Switch>          
        </div>
      </BrowserRouter>      
    )
  }
}

export default App;
