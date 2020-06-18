import React, { Component } from 'react'
import axios from 'axios';


const getFormattedTime = (fourDigitTime) => {
  var hours24 = parseInt(fourDigitTime.substring(0,2));
  var hours = ((hours24 + 11) % 12) + 1;
  var amPm = hours24 > 11 ? ' PM' : ' AM';
  var minutes = fourDigitTime.substring(2);

  return hours + minutes + amPm;
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
                       <div className="center grey darken-1 card-panel">
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
                              <td>{getFormattedTime(prayertimes.data.timings.Fajr)}</td>
                            </tr>
                            <tr>
                              <td>Dhuhr</td>
                              <td>{getFormattedTime(prayertimes.data.timings.Dhuhr)}</td>
                              <td>{getFormattedTime(prayertimes.data.timings.Dhuhr)}</td>
                            </tr>
                            <tr>
                              <td>Asr</td>
                              <td>{getFormattedTime(prayertimes.data.timings.Asr)}</td>
                              <td>time</td>
                            </tr>
                            <tr>
                              <td>Maghrib</td>
                              <td>{getFormattedTime(prayertimes.data.timings.Maghrib)}</td>
                              <td>{getFormattedTime(prayertimes.data.timings.Maghrib)}</td>
                            </tr>
                            <tr>
                              <td>Isha</td>
                              <td>{getFormattedTime(prayertimes.data.timings.Isha)}</td>
                              <td>{getFormattedTime(prayertimes.data.timings.Isha)}</td>
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
      <p>No times show up</p>
    )
  return (
    prayertime
  );
}
}
export default PrayerTable