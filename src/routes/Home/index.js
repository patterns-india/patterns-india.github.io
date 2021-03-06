import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import HomeSlideshow from '../components/HomeSlideshow';
import TextBox from '../components/TextBox';
import Stats from '../components/Stats';
import ContactUs from '../components/ContactUs';
import 'semantic-ui-css/semantic.min.css'
import './Home.scss'

export class Home extends Component {

    constructor(props) {
        super(props);

        this.state={}
    }


    scrollToBottom = () => {
        this.contactUs.scrollIntoView({behavior:"smooth"})
    }

    homeText = {
        aboutUs :{
            heading: "About Us",
            text: [
                "Established in 1991, Patterns India is a premium quality conscious garment manufacturer and exporter. Our production caters to men/women/children ‘s fashion garments, accessories and home furnishings, delivering through private and client-based labels. With a competent workforce, 30+ years of experience and cut-to-pack facilities, we offer a flexible production capacity with an average of 200000 pieces per month or more, manufactured at multiple sites.",
                "Located in Jaipur (India), we are a Sedex certified, ethically compliant company that promotes transparency. Our global reach of clients in the foreign markets of USA,Europe,Latin America ,Argentina,Uruguay,Paraguay, Spain, Japan, Australia, Brazil, Turkey and Portugal as well as the Indian domestic market is a testament to our services. "
            ]
        },

    }

    render() {

        const {toggleForm,history} = this.props;

        return (
            <div className="Home">
                <div className="Header">
                    <TopBar/>
                    <Navbar scrollToBottom={this.scrollToBottom}/>
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
                    <div ref={(el)=>{this.contactUs = el}}>
                        <ContactUs toggleForm={toggleForm}/>
                    </div>
                </div>
              
            </div>
        )
    }
}

export default withRouter(Home)
