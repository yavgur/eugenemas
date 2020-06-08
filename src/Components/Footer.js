import React from 'react'

const Footer = () => {
    return (
        <footer className="page-footer grey darken-3">
            <div className="container">
                <div className="row">
                    <div className="col s12 l6">
                        <h4>About Our Masjid</h4>
                        <p>Eugene Islamic Center is an Islamic Community Center in the heart of Oregon. 
                            It offers a place of worship, provides a variety of Islamic education to congregants and the local community.</p>
                    </div>
                    <div className="col s12 l4 offset-l2">
                        <h4>Connect</h4>
                        <ul> 
                            <li><a href="https://www.facebook.com/Eugene-Islamic-Center-223157417714274/" target="_blank" without rel="noopener noreferrer"><span className="blue-text text-lighten-2 hoverable">Facebook</span></a>
                            <i className="tooltipped fab fa-facebook left blue-text text-lighten-1" data-position="top" data-tooltip="Facebook"></i>
                            </li>
                            <li><a href="/"><span className="orange-text text-darken-2 hoverable">Instagram</span></a>
                            <i className="tooltipped fab fa-instagram left orange-text text-darken-1" data-position="left" data-tooltip="Instagram"></i>
                            </li>
                            {/* <li><a href="/"><span className="blue-text text-darken-2 hoverable">Twitter</span></a>
                            <i className="tooltipped fab fa-twitter left blue-text text-lighten-1" data-tooltip="Twitter"></i>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright grey darken-4">
                    <div className="container center-align">
                        &copy; 2020 Eugene Islamic Center | 1856 W Broadway, Eugene, OR 97402 | 541-844-2872
                    </div>
                </div>
        </footer>
    )
}

export default Footer
