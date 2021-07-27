import React from 'react'
import './Navbar.scss'
import {useHistory} from 'react-router-dom'
import patternsBlack from '../../../Resources/images/patterns-black.png'
import patternsOld from '../../../Resources/images/patternsOld.png'
import logo2 from '../../../Resources/images/logo2.png'

function Navbar(props) {
    const history = useHistory();
    const {scrollToBottom} = props;

    return (
        <div class="Nav">
        <div class="Nav__Left">
            <div><img className="Nav__Left--logo" src={[patternsOld]} alt="." 
            style={{height:"60px"}}/></div>
        </div>

        <div class="Nav__Right">
            <div 
            class="Nav__Right--item"
            onClick= {() => history.push('/')}
            >Home</div>
        
            <div 
            class="Nav__Right--item"
            onClick={() => history.push('/about')}
            >About Us</div>
        
        
            <div 
            class="Nav__Right--item"
            onClick={() => history.push('/collections')}
            >Collections</div>
        
        
            <div 
            class="Nav__Right--item"
            onClick={() => history.push('/services')}
            >Services</div>
         
            <div 
            class="Nav__Right--item" 
            onClick={()=>scrollToBottom()}
            >Contact Us</div>

        </div>
    </div>
    )
}

export default Navbar
