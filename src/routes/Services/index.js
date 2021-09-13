import React, { Component } from 'react'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import ContactUs from '../components/ContactUs'
import './Services.scss'

import buy from '../../Resources/images/buy.jpg'
import  manuf from '../../Resources/images/manuf.jpg'
import brand from '../../Resources/images/brand.jpg'

export class Services extends Component {


    scrollToBottom = () => {
        this.contactUs.scrollIntoView({behavior:"smooth"})
    }

    render() {
        return (
            <div>
                <div className="Header">
                    <TopBar/>
                    <Navbar scrollToBottom={this.scrollToBottom}/>
                </div>

                <div className="Services__Content">
                    <div className="Services__Content__Service">
                        <img src={buy} alt="." width="45%" className="image"/>
                        <div className="Services__Content__Service--text">
                            <div className="Services__Content__Service--heading">Buying House Services</div>
                            <div className="Services__Content__Service--subheading"></div>
                        </div> 
                    </div>
                    <div className="Services__Content__Service">
                        <img src={manuf} alt="." width="45%" className="image"/>
                        <div className="Services__Content__Service--text">
                            <div className="Services__Content__Service--heading">Brand Collections</div>
                            <div className="Services__Content__Service--subheading"></div>
                        </div>
                    </div>
                    <div className="Services__Content__Service">
                        <img src={brand} alt="." width="45%"  className="image"/>
                        <div className="Services__Content__Service--text">
                            <div className="Services__Content__Service--heading">Manufacturing</div>
                            <div className="Services__Content__Service--subheading"></div>                           
                        </div>
                    </div>
                </div>
                <div ref={(el)=>{this.contactUs = el}}>
                    <ContactUs toggleForm={this.props.toggleForm}/>
                </div>
            </div>
        )
    }
}

export default Services
