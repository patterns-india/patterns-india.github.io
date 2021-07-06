import React, { Component } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import HomeSlideshow from '../components/HomeSlideshow';
import TextBox from '../components/TextBox';
import Stats from '../components/Stats';
import ContactUs from '../components/ContactUs';
import './Home.scss'

export class Home extends Component {

    constructor(props) {
        super(props);

        this.state={}
    }

    homeText = {
        aboutUs :{
            heading: "About Us",
            text: [
                "Established in 1991, Patterns India is a premium quality conscious garment manufacturer and exporter delivering through both, private and client-based labels. Our production caters to men/women/children ‘s fashion garments, accessories and home furnishings. With technically skilled employees, in-house cut-to-pack facilities and an industrial site of approximately 50,000 sqft., we offer a flexible production capacity of 75,000 pieces per month. Our global reach of clients in the foreign markets of France, Holland, Spain, Japan, USA, Australia, Kuwait, England, Turkey and Portugal as well as the Indian domestic market is a testament to our services. Located in Jaipur (India), we are a Sedex certified, ethically compliant company that promotes transparency. ",
                "Our business partners and importers are located in the domestic market and at the foreign market: France, Holland, Spain, Japan, USA, Australia, Kuwait, England, Turkey and Portugal."
            ]
        },

    }
    
    render() {
        return (
            <div className="Home">
                <TopBar/>
                <Navbar/>
                <HomeSlideshow/>
                <TextBox heading={this.homeText.aboutUs.heading} text={this.homeText.aboutUs.text}/>
                <Stats/>
                <ContactUs/>
            </div>
        )
    }
}

export default Home
