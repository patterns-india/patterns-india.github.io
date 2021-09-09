import React from 'react'
import './ContactUs.scss'
import patternsOld from '../../../Resources/images/patternsOld.png'
import fbColor from '../../../Resources/images/fbcolor.png';
import igColor from '../../../Resources/images/igcolor.png';
import twColor from '../../../Resources/images/twcolor.png';
import pin from '../../../Resources/images/pin.png'

function ContactUs(props) {
    const {toggleForm,isCollection,categorySelected} = props;

    return (
        <div className={`ContactUs ${isCollection ? 'nomargintop':''}`}>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                <div className="ContactUs__Logo">
                    <img src={patternsOld} alt="." width="100%"/>
                </div>
                <div className="ContactUs__Text" onClick={()=>window.open('https://maps.app.goo.gl/ekALvQagTmExt2Bb6')}>
                    <img src={pin} alt="." height="20px" width="20px"/>
                     C-84 ,Ram das Marg<br/>Tilak Nagar,Jaipur - 302004,
                    <br/>Rajasthan, India.
                </div>
            </div>
            <div>
                <div className="ContactUs__Head">Other Useful Links</div>
                <div className="ContactUs__Text getintouch" onClick={()=> toggleForm()}>Like our designs? Get In Touch!</div>
            </div>
            <div>
                <div className="ContactUs__Head">Contact Us</div>
                <div className="ContactUs__Text">
                    +91-8233933313<br/>+91-9829067777<br/>+91-9829367777
                </div>
                <div className="ContactUs__Text">
                    patterns.india92@gmail.com<br/>patterns@datainfosys.net
                </div>
            </div>
        </div>
    )
}

export default ContactUs
