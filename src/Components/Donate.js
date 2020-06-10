import React from 'react'

const Donate = () => {
    return (
        <section className="section container scrollspy" id="contact">
            <div className="row">
                <div className="col s12 l6">
                <div className="z-depth-3 card-panel blue lighten-2 white-text center">
                    <h4>Give with Love</h4>
                        <p>Abu Harayrah (may Allah be pleased with him) from the Prophet (ﷺ), who said:</p>
                        <p className="flow-text">Allah (mighty and sublime be He) said: Spend (on charity), O son of Adam, and I shall spend on you.</p>
                        <p className="center">[Al- Bukhari and Muslim]</p>
                        <p>We depend on the generous support of our community and are extremely thankful for your contribution!</p>
                </div>
            </div>
                <div className="col s12 l5 offset-l1" id="donation-box">
                <div className="z-depth-1 card-panel grey lighten-1 white-text center">
                    <h5>You can donate our masjid and show your support.</h5>
                        <p className="hoverable"><span><i className="fab fa-paypal small" aria-hidden="true"></i>
                        </span> PayPal : paypal@eugeneislamiccenter.org</p>
                        <p className="hoverable"> Zelle : treasurer@eugeneislamiccenter.org</p>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Donate
