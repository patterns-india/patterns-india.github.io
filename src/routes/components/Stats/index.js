import React from 'react'
import './Stats.scss'

import experience from '../../../Resources/images/exp.png';
import manufacture from '../../../Resources/images/manuf.png';
import clients from '../../../Resources/images/clients.png';
import world from '../../../Resources/images/world.png';


function Stats() {
    return (
        <div className="Stats">
            <div className="Stats__Card">
                <img src={experience} alt="" height="80px" width="80px"/>
                <div className="Stats__Card--text">
                    30+ Years of industry experience
                </div>
            </div>
            <div className="Stats__Card">
                <img src={manufacture} alt="" height="80px" width="80px"/>
                <div className="Stats__Card--text">
                    6M+ Pieces Manufactured
                </div>
            </div>
            <div className="Stats__Card">
                <img src={clients} alt="" height="80px" width="80px"/>
                <div className="Stats__Card--text">
                    100+ Satisfied Clients
                </div>
            </div>
            <div className="Stats__Card">
                <img src={world} alt="" height="80px" width="80px"/>
                <div className="Stats__Card--text">
                    Exports to more than 20 Countries
                </div>
            </div>
        </div>
    )
}

export default Stats
