import React, { Component } from 'react'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import CategorySection from './CategorySection';
import MoodCollections from './MoodCollections';
import ContactUs from '../components/ContactUs';
import './Collections.scss'

import fabrics from '../../Resources/images/fabrics2.jpg'
import products from '../../Resources/images/products.jpg'
import valueadds from '../../Resources/images/valueadds.jpg'

export class Collections extends Component {
    constructor(props){
        super(props);

        this.state = {
            categorySelected: 0,
        }
    }

    scrollToBottom = () => {
        this.contactUs.scrollIntoView({behavior:"smooth"})
    }

    changeCategory = (category) => {

        if(this.state.categorySelected === 0) {
            document.getElementById('Collections1').classList += ' fadeOut';
        }

        setTimeout(()=>{
            this.setState({
                categorySelected: category
            })
        },900)
    }

    render() {
        const {categorySelected} = this.state

        return (
            <div className="Collections"> 
                <div className="Header">
                    <TopBar/>
                    <Navbar scrollToBottom={this.scrollToBottom}/>
                </div>
                { categorySelected === 0 ? (
                    <>
                    <div className="Collections__Content" id="Collections1">
                        <div className="Collections__Video" ref={(el)=>{this.aboutVideo = el}}>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/znHdUv58vR8?autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="fullscreen;accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="Collections__Content__CategoryTop">
                            <div className="Collections__Content__CategoryTop--first imageHolder">
                                <img className="image" src={products} alt="products" width="100%"/>
                                <button className="categoryButtons" onClick={()=> this.changeCategory(1)}>View More</button>
                            </div>
                            <div className="Collections__Content__CategoryTop--second imageHolder">
                                <img className="image" src={fabrics} alt="fabrics" width="100%"/>
                                <button className="categoryButtons" onClick={()=> this.changeCategory(2)}>View More</button>
                            </div>
                        </div>
                        <div className="Collections__Content__CategoryBottom imageHolder">
                            <img className="image" src={valueadds} at="valueadd" width="100%"/>
                            <button className="categoryButtons" onClick={()=> this.changeCategory(3)}>View More</button>
                        </div>
                    </div>
                    <div ref={(el)=>{this.contactUs = el}}>
                        <ContactUs toggleForm={this.props.toggleForm} isCollection={true} categorySelected={categorySelected}/>
                    </div>
                    </>
                ) : (
                    // <CategorySection categorySelected={categorySelected} changeCategory={(e) => this.setState({categorySelected:e})}/>
                    <>
                    <MoodCollections categorySelected={categorySelected} changeCategory={(e) => this.setState({categorySelected:e})}/>
                    <div ref={(el)=>{this.contactUs = el}}>
                        <ContactUs toggleForm={this.props.toggleForm} isCollection={true} categorySelected={categorySelected}/>
                    </div>
                    </>
                )}
            </div>
        )
    }
}

export default Collections
