import React, { Component } from 'react'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import CategorySection from './CategorySection';
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
                    <div className="Collections__Content" id="Collections1">
                        <div className="Collections__Content__CategoryTop">
                            <div className="Collections__Content__CategoryTop--first imageHolder">
                                <img className="image" src={products} alt="" width="100%"/>
                                <button className="categoryButtons" onClick={()=> this.changeCategory(1)}>Products</button>
                            </div>
                            <div className="Collections__Content__CategoryTop--second imageHolder">
                                <img className="image" src={fabrics} alt="" width="100%"/>
                                <button className="categoryButtons" onClick={()=> this.changeCategory(2)}>Fabrics</button>
                            </div>
                        </div>
                        <div className="Collections__Content__CategoryBottom imageHolder">
                            <img className="image" src={valueadds} at="" width="100%"/>
                            <button className="categoryButtons" onClick={()=> this.changeCategory(3)}>Value Additions</button>
                        </div>
                    </div>
                ) : (
                    <CategorySection categorySelected={categorySelected} changeCategory={(e) => this.setState({categorySelected:e})}/>
                )}

            </div>
        )
    }
}

export default Collections
