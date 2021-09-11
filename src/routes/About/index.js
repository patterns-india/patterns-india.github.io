import React, { Component } from 'react'
import collage from '../../Resources/images/mosaic/collage.jpg';
import sedex from '../../Resources/images/sedex.png';

import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import TextBox from '../components/TextBox';
import ContactUs from '../components/ContactUs';


import './About.scss'

const text1 = {
    heading: "Our mission",
    text : [
        "Our services focus on flexible pricing, intricate design elements, punctual delivery, superior quality and transparent communication. We nurture integrity in partnerships and negotiations with suppliers and employees alike to deliver products with originality and maximum customer satisfaction. "
    ]
}

const text2 = {
    heading: "",
    text: [
        "Our production is dedicated to ladies’ fashion garments, men's, children’s, accessories, home furnishings and handbags produced for their own branding as well as for private labels - a product with the brand and specifications required by the client.",
        "We provide you with a variety of fabrics from cotton, polyester, rayon, crepe, voile, types of denim,yarn dyed blends, silk, linens, knits, chiffon,georgette, lycra, embroidered fabrics, schiffli, cutwork, Bamber, their blends etc. Moreover, value additions such as sequins, embroideries, heavy beadwork, laces, handwork, studs, heatset printing, foil printing, placement prints, digital prints, denim enzyme wash etc. are our strengths. ",
        "Moving forward, we have been exploring newer fields and are proud to announce that Patterns India is now not only manufacturing but a trading house as well. We have our own private label, Angel Bay, which has been released on Amazon US recently. Further, a range of sourcing options extending beyond garments to home furnishings is available for our clients at competitive prices. We bring to you a range of options in fabrics and styles with assured quality and timely deliverance. "
    ]
}

// const text3 = {
//     heading :'',
//     text : [
//         "Our production is dedicated to ladies’ fashion garments, men's, children’s, accessories, home furnishings and handbags produced for their own branding as well as for private labels - a product with the brand and specifications required by the client.",
//         "We provide you with a variety of fabrics from cotton, polyester, rayon, crepe, voile, types of denim,yarn dyed blends, silk, linens, knits, chiffon,georgette, lycra, embroidered fabrics, schiffli, cutwork, Bamber, their blends etc. Moreover, value additions such as sequins, embroideries, heavy beadwork, laces, handwork, studs, heatset printing, foil printing, placement prints, digital prints, denim enzyme wash etc. are our strengths."
//     ]
// }

export class About extends Component {
    constructor(props) {
        super(props);
        this.scrollToBottom = this.scrollToBottom.bind(this)
    }

    

    scrollToBottom = () => {
        this.contactUs.scrollIntoView({behavior:"smooth"})
    }
    
    render() {
        const {showForm,toggleForm} = this.props;
        return (
            <div className="About">
                <div className="Header">
                    <TopBar/>
                    <Navbar scrollToBottom={this.scrollToBottom}/>
                </div>
                
                <div className="Content">
                    <div className="About__Video" ref={(el)=>{this.aboutVideo = el}}>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/f5N1_ew6re0?autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="fullscreen;accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <TextBox text={text2.text} heading={text2.heading}/>
                <TextBox text={text1.text} heading={text1.heading}/>
                
                {/* <TextBox text={text3.text} heading={text3.heading}/> */}

                <div className="Gallery__Container">
                    <img src={collage} alt="" width="100%" height="100%" />
                </div>

                <div className="Sedex">
                    <img src={sedex} alt="." height="100px" width="100px" style={{marginRight:"20px"}}/>
                    <div>We Are Sedex Certified</div>
                </div>

                <div ref={(el)=>{this.contactUs = el}}>
                    <ContactUs toggleForm={toggleForm}/>
                </div>

            </div>
        )
    }
}

export default About;
<iframe width="560" height="315" src="https://www.youtube.com/embed/f5N1_ew6re0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>