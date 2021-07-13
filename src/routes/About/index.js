import React, { Component } from 'react'
import Gallery from 'react-photo-gallery';
import {photos} from '../photos';

import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import TextBox from '../components/TextBox';
import ContactUs from '../components/ContactUs';


import './About.scss'

const text1 = {
    heading: "Our mission",
    text : [
        "We nurture integrity in partnerships and negotiations with suppliers and employees alike to deliver products with originality and maximum customer satisfaction"
    ]
}

const text2 = {
    heading: "",
    text: [
        "We work with a variety of fabrics from cotton, polyester, rayon, crepe, voile, types of denim, silk, linens, knits, chiffon, lycra, embroidered fabrics, schiffli, cutwork, Bamber, their blends etc. Moreover, value additions such as sequins, embroideries, heavy beadwork, laces, handwork, studs, heatset printing, foil printing, placement prints, digital prints, denim enzyme wash etc. are our strengths.",
        "Moving forward, we have been exploring newer fields and are proud to announce that Patterns India is now not only a manufacturing but a trading house as well. We have our own private label, Angel Bay, which has been released on Amazon US recently. Further, a range of sourcing options extending beyond garments to home furnishings are available for our clients at competitive prices. We bring to you a range of options in fabrics and styles with assured quality and timely deliverance."
    ]
}

export class About extends Component {

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
                <TextBox text={text1.text} heading={text1.heading}/>
                <TextBox text={text2.text} heading={text2.heading}/>

                <div className="Gallery__Container">
                    <Gallery photos={photos} direction={"column"} columns={5}/>
                </div>
                <ContactUs/>
            </div>
        )
    }
}

export default About;
