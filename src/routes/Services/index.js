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
                        <img src={buy} alt="buy" width="45%" className="image"/>
                        <div className="Services__Content__Service--text">
                            <div className="Services__Content__Service--heading">Buying House Services</div>
                            <div className="Services__Content__Service--subheading">
                            Patterns India is a buying house bringing sourced products from different ends under one roof, with an array of products in garments, made ups and accessories.
We develop and create new products using fabrics adn all small elements of your choice, bringing imagination to life. 
All this while ensuring 100% quality control and timely delivery
                            </div>
                        </div> 
                    </div>
                    <div className="Services__Content__Service">
                        <img src={manuf} alt="manuf" width="45%" className="image"/>
                        <div className="Services__Content__Service--text">
                            <div className="Services__Content__Service--heading">Brand Collections</div>
                            <div className="Services__Content__Service--subheading">
                            We deal in Client based labels, enabling you to create a complete brand related products experience. assurance of no copyright issues, exclusive developments, premium quality, creative freedom, transparency.

We have our own private in-house labels Angel Bay and Kailasa by Angel Bay. 
Trademarked in US and India.
                            </div>
                        </div>
                    </div>
                    <div className="Services__Content__Service">
                        <img src={brand} alt="brand" width="45%"  className="image"/>
                        <div className="Services__Content__Service--text">
                            <div className="Services__Content__Service--heading">Manufacturing</div>
                            <div className="Services__Content__Service--subheading">
                            We manufacture products for both domestic and export usage, and have a satisfied 
		client base across many countries.</div>                           
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
