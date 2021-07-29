import React, { Component } from 'react'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import './Collections.scss'

import fabrics from '../../Resources/images/fabrics.jpg'
import products from '../../Resources/images/products.jpg'
import valueadds from '../../Resources/images/valueadds.jpg'

export class Collections extends Component {
    constructor(props){
        super(props);
    }

    scrollToBottom = () => {
        this.contactUs.scrollIntoView({behavior:"smooth"})
    }

    render() {
        return (
            <div className="Collections"> 
                <div className="Header">
                    <TopBar/>
                    <Navbar scrollToBottom={this.scrollToBottom}/>
                </div>

                <div className="Collections__Content">
                    <div className="Collections__Content__CategoryTop">
                        <div className="Collections__Content__CategoryTop--first imageHolder">
                            <img className="image" src={products} alt="" width="100%"/>
                            <button className="categoryButtons">PRODUCTS</button>
                        </div>
                        <div className="Collections__Content__CategoryTop--second imageHolder">
                            <img className="image" src={fabrics} alt="" width="100%"/>
                            <button className="categoryButtons">Fabrics</button>
                        </div>
                    </div>
                    <div className="Collections__Content__CategoryBottom imageHolder">
                        <img className="image" src={valueadds} at="" width="100%"/>
                        <button className="categoryButtons">Value Additions</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Collections
