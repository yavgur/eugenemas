import React, { Component } from 'react'
import Header from './Components/Header'
import Prayertime from './Components/Prayertime'
import PrayerTable from './Components/PrayerTable'
import Footer from './Components/Footer'

class App extends Component {
  render() {
    return (
      <div>
       <Header />
       <Prayertime />
       <PrayerTable />
       <Footer />
      </div>
    )
  }
}

export default App
