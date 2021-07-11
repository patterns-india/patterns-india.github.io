import React, { Component } from 'react'

import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import TextBox from '../components/TextBox';
import ContactUs from '../components/ContactUs';

import './About.scss'

const text1 = {
    heading: "Our Vision & Mission",
    text : [
        "Our production is dedicated to ladies’ fashion garments, men's, children’s, accessories, home furnishings and handbags produced for their own branding as well as for private labels - a product with the brand and specifications required by the client.",
        "Along with punctuality, we provide you with a variety of fabrics from cotton, polyester, rayon, crepe, voile, types of denim, silk, linens, knits, chiffon, lycra, embroidered fabrics, schiffli, cutwork, Bamber, their blends etc. Value additions such as sequins, embroideries, heavy beadwork, laces, handwork, studs, heatset printing, foil printing, placement prints, digital prints, denim enzyme wash etc. are our strengths"
    ]
}


export class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="About">
                <div className="Header">
                    <TopBar/>
                    <Navbar/>
                </div>
                
                <div className="Content">
                    <div className="About__Video">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/62_ZPmG0CIQ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <TextBox text={text1.text}/>
                <ContactUs/>
            </div>
        )
    }
}

export default About;
