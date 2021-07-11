import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import HomeSlideshow from '../components/HomeSlideshow';
import TextBox from '../components/TextBox';
import Stats from '../components/Stats';
import ContactUs from '../components/ContactUs';
import ContactForm from '../components/Form';
import 'semantic-ui-css/semantic.min.css'
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
                "Established in 1991, Patterns India is a premium quality conscious garment manufacturer and exporter delivering through both, private and client-based labels. Our production caters to men/women/children ‘s fashion garments, accessories and home furnishings. With technically skilled employees, in-house cut-to-pack facilities and an industrial site of approximately 50,000 sqft., we offer a flexible production capacity of 75,000 pieces per month. Located in Jaipur (India), we are a Sedex certified, ethically compliant company that promotes transparency. ",
                "Our business partners and importers are located in the domestic market and at the foreign market: France, Holland, Spain, Japan, USA, Australia,, England and Portugal. We nurture integrity in partnerships and negotiations with suppliers and our employees alike to obtain our mission of delivering products with originality and maximum customer satisfaction. "
            ]
        },

    }

    render() {

        const {toggleForm,history} = this.props;

        return (
            <div className="Home">
                <div className="Header">
                    <TopBar/>
                    <Navbar/>
                </div>

                <div className="Content">
                    <HomeSlideshow/>
                    <TextBox heading={this.homeText.aboutUs.heading} text={this.homeText.aboutUs.text}/>
                    <Stats/>
                    <div className="KnowMoreButton" onClick={()=>history.push('/about')}>
                        Know More
                    </div>
                    <div className="GetInTouch__Button" onClick={()=>toggleForm()}>
                        Get in Touch!
                    </div>
                </div>

                <div className="Footer">
                    <ContactUs/>
                </div>
              
            </div>
        )
    }
}

export default withRouter(Home)
