import React, { Component } from 'react'
import axios from 'axios';
import moment from 'moment';

const getFormattedTime = (fourDigitTime, diff) => {
  let newTime = moment(fourDigitTime, 'HH:mm').format('hh:mm a');  
  if (diff) { newTime = moment(newTime, 'hh:mm a').add(diff, 'minutes').format('hh:mm a'); }
  return newTime;
};

class PrayerTable extends Component {
  state = {
    prayertimes: []
  }
  componentDidMount() {
    // axios.get('http://api.aladhan.com/v1/timingsByCity?city=Eugene&country=United%20States&method=2')
    axios.get('http://api.aladhan.com/v1/timingsByCity?city=Eugene&country=United%20States&method=99&methodSettings=15,null,15')
    .then(res => {
      this.setState({
        prayertimes: res.data
      })
    })
  }

  render() {
    const { prayertimes } = this.state;
    const prayertime = prayertimes.data ? (
          <section className="section container" id="prayertable">
                 <div className="row">
                     <div className="col s12">
                       <div className="center grey darken-1 card-panel white-text">
                          <h5>{prayertimes.data.date.readable}</h5>
                          <h5>Hijri: {prayertimes.data.date.hijri.date}</h5>
                       </div>
                     <table>
                          <thead>
                            <tr>
                                <th>Salah</th>
                                <th>Adhan</th>
                                <th>Iqama</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td>Fajr</td>
                              <td>{getFormattedTime(prayertimes.data.timings.Fajr)}</td>
                              <td>{getFormattedTime(prayertimes.data.timings.Fajr, 45)}</td>
                            </tr>
                            <tr>
                              <td>Dhuhr</td>
                              <td>{getFormattedTime(prayertimes.data.timings.Dhuhr)}</td>
                              <td>{getFormattedTime(prayertimes.data.timings.Dhuhr)}</td>
                            </tr>
                            <tr>
                              <td>Asr</td>
                              <td>{getFormattedTime(prayertimes.data.timings.Asr)}</td>
                              <td>{getFormattedTime(prayertimes.data.timings.Asr, 45)}</td>
                            </tr>
                            <tr>
                              <td>Maghrib</td>
                              <td>{getFormattedTime(prayertimes.data.timings.Maghrib)}</td>
                              <td>{getFormattedTime(prayertimes.data.timings.Maghrib, 5)}</td>
                            </tr>
                            <tr>
                              <td>Isha</td>
                              <td>{getFormattedTime(prayertimes.data.timings.Isha)}</td>
                              <td>{getFormattedTime(prayertimes.data.timings.Isha, 5)}</td>
                            </tr>
                             <tr>
                              <td>Friday(Jummah)</td>
                              <td>1.30 pm</td>
                              <td>1.30 pm</td>
                            </tr>
                          </tbody>
                        </table>
                     </div>
                 </div>
           </section>
              
    ) : (
      <p>Please check the masjid's time table for the current prayer times</p>
    )
  return (
    prayertime
  );
}
}
export default PrayerTable