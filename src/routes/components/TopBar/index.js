import React from 'react'
import './TopBar.scss'

import phoneWhite from '../../../Resources/images/phone-white.svg';
import mailWhite from '../../../Resources/images/mail-white.svg';
import fbIcon from '../../../Resources/images/fb-white.svg';
import twIcon from '../../../Resources/images/tw-white.svg';
import igIcon from '../../../Resources/images/ig-white.svg';

function TopBar() {
    return (
        <div class="TopBar">
            <div class="TopBar__Left">
                <div class="TopBar__Left--item"><img src={phoneWhite} alt="" height="15px" width="15px"/>+91-8233933313</div>
                <div class="TopBar__Left--item"><img src={mailWhite} alt="" height="15px" width="15px"/>patterns.india92@gmail.com</div>
            </div>
            <div class="TopBar__Right">
                <img src={fbIcon} alt="" />
                <img src={twIcon} alt="" />
                <img src={igIcon} alt="" />
            </div>
        </div>
    )
}

export default TopBar
