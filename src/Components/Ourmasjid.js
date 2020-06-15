import React from 'react'

const Ourmasjid = () => {
    return (
        <section className="section container scrollspy" id="events">
            <div className="row">
                <div className="col s12 l4">
                    <h3 className="grey-text text-darken">Our masjid...</h3>
                    <p>
                    Eugene Islamic Center is an islamic community center in the heart of Oregon.</p> 
                    <p>It offers a place of worship, 
                    provides a variety of islamic education to congregants and the local community.
                    </p>
                </div>
                <div className="col s12 l6 offset-l2">
                    <ul className="tabs">
                        <li className="tab col s6">
                            <a href="#dailyprayer" className="grey-text text-darken-4">Salah</a>
                        </li>
                        <li className="tab col s6">
                            <a href="#halaqa" className="grey-text text-darken-4">Halaqa</a>
                        </li>
                    </ul>
                    <div className="col s12" id="dailyprayer">
                        <p className="flow-text grey-text text-darken-3">Salah (Worship)</p>
                        <p>Salah or Salat, is the second of the five pillars in the Islamic faith as daily obligatory standardized prayers.</p>
                        <p>Most of the prayers hold with jamaah in our masjid daily.</p>
                        <p>Sisters have their own individual resting and vudu area to relax and join the prayer.</p>
                    </div>
                    <div className="col s12" id="halaqa">
                        <p className="flow-text grey-text text-darken-3">Halaqa</p>
                        <p>Halaqa in Islamic terminology is a religious gathering or meeting for the study of Islam and the Quran.</p>
                        <p>Pragrams hold by weekly. General knowledge and study on Quran, Sunnah, and Fiqh.</p>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Ourmasjid
