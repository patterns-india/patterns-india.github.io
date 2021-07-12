import React from 'react'
import './ContactUs.scss'
import fbColor from '../../../Resources/images/fbcolor.png';
import igColor from '../../../Resources/images/igcolor.png';
import twColor from '../../../Resources/images/twcolor.png';
import pin from '../../../Resources/images/pin.png'

function ContactUs() {
    return (
        <div className="ContactUs">
            <div>
                <div className="ContactUs__Head">Contact Us</div>
                <div className="ContactUs__Text">
                    <img src={pin} alt="." height="20px" width="20px"/>
                    M/S. PATTERNS INDIA F-134<br/>SITAPURA IND. AREA
                    , OPP- GENPACT <br/>JAIPUR-302022,Rajasthan, India.
                </div>
                <div className="ContactUs__Text">
                    +91-8233933313<br/>
                    +91-9829367777
                </div>
                <div className="ContactUs__Text">
                    patterns.india92@gmail.com<br/>patterns@datainfosys.net
                </div>
            </div>
            <div>
                <div className="ContactUs__Head">Other Links</div>
                <div className="ContactUs__Text">Frequently Asked Questions</div>
                <div className="ContactUs__Text">Like our designs?<br/>Get In Touch!</div>
            </div>
            <div>
                <div className="ContactUs__Head">Social Media</div>
                <div className="ContactUs__Text">
                   <img src={fbColor} alt="." height="20px" width="20px"/>
                    <div>facebook</div>
                </div>
                <div className="ContactUs__Text">
                    <img src={igColor} alt="." height="20px" width="20px"/>
                    <div>instagram</div>
                </div>
                <div className="ContactUs__Text">
                  <img src={twColor} alt="." height="20px" width="20px"/>
                    <div>twitter</div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
