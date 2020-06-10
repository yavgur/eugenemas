import React, { Component } from 'react'
import Header from './Components/Header'
import Prayertime from './Components/Prayertime'
import PrayerTable from './Components/PrayerTable'
import Footer from './Components/Footer'
import Tevhid from './Components/Tevhid'
import Ourmasjid from './Components/Ourmasjid'
import Madina from './Components/Madina'
import Donate from './Components/Donate'

class App extends Component {
  render() {
    return (
      <div>
       <Header />
       <Prayertime />
       <PrayerTable />
       <Tevhid />
       <Ourmasjid />
       <Madina />
       <Donate />
       <Footer />
      </div>
    )
  }
}

export default App
