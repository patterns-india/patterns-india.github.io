import React from 'react'
import './Navbar.scss'

import patternsBlack from '../../../Resources/images/patterns-black.png'

function Navbar() {
    return (
        <div class="Nav">
        <div class="Nav__Left">
            <div><img src={[patternsBlack]} height="100px"/></div>
        </div>

        <div class="Nav__Right">
            <a href="/home">
                <div class="Nav__Right--item">Home</div>
            </a>
            <a href="./About/">
                <div class="Nav__Right--item">About Us</div>
            </a>
            <a href="/collections">
                <div class="Nav__Right--item">Collections</div>
            </a>
            <a>
                <div class="Nav__Right--item">Services</div>
            </a>
            <div class="Nav__Right--item" onclick="scrollBottom()">Contact Us</div>

        </div>
    </div>
    )
}

export default Navbar
