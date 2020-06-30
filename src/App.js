import React, { Component } from 'react'
import Header from './Components/Header'
import Prayertime from './Components/Prayertime'
import PrayerTable from './Components/PrayerTable'
import Footer from './Components/Footer'
import Tevhid from './Components/Tevhid'
import Ourmasjid from './Components/Ourmasjid'
import Madina from './Components/Madina'
import Donate from './Components/Donate'
import WhyIslam from './Components/WhyIslam'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>     
        <div>
          <Header />
          <Prayertime />
          <PrayerTable />
          <Tevhid />
          <Ourmasjid />
          <Madina />
          <Donate />
          <Switch>
          <Route exact path="/whyislam" component={WhyIslam}/>
          <Footer />
          </Switch>
        </div>
        </BrowserRouter>
      
    )
  }
}

export default App

/*
   <div>
          <Route component={Header} />
          <Route component={Prayertime} />
          <Route component={PrayerTable} />
          <Route component={Tevhid} />
          <Route component={Ourmasjid} />
          <Route component={Madina} />
          <Route component={Donate} />
          <Switch>
          <Route path="/whyislam" render={() => (
            <WhyIslam />
          )}/>
          </Switch>
          <Footer />
        </div>
  */