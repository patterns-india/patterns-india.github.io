import React from 'react'
import { withRouter } from 'react-router'
import './CatSec.scss'

import back from '../../../Resources/images/back.png'
import f1 from '../../../Resources/images/flower1.png'
import f2 from '../../../Resources/images/flower2.png'

const cards = [
    "","","","","","","","","","","","","","","",
]

function CategorySection(props) {
    const {categorySelected,changeCategory} = props;

    const goBack = () => {
        document.getElementById('CategorySectionId').classList += ' fadeOut';

        setTimeout(()=>{
            changeCategory(0);
            props.history.push('/collections')
        },500)
        
    }

    return (
        <div className="CategorySection" id="CategorySectionId">
            <div className="CategorySection__Nav slideInLeft">
                <img src={back} height="20px" width="20px" style={{position:"absolute",top:"10px",left:"10px",cursor:"pointer"}} onClick={()=> goBack()}/>
                <div className="CategorySection__Nav--header">
                    Collections
                </div>
                <div className="CategorySection__Nav--category" onClick={()=> changeCategory(1)}>
                    <img src={ categorySelected === 1 ? f2 : f1} alt="" height="15px" width="15px" className="flower"/>
                    Products</div>
                <div className="CategorySection__Nav--category" onClick={()=> changeCategory(2)}>
                    <img src={ categorySelected === 2 ? f2 : f1} alt="" height="15px" width="15px" className="flower"/>
                    Fabrics
                </div>
                <div className="CategorySection__Nav--category" onClick={()=> changeCategory(3)}>
                    <img src={ categorySelected === 3 ? f2 : f1} alt="" height="15px" width="15px" className="flower"/>
                    Value Additions
                </div>
            </div>

            <div className="CategorySection__Cards fadeIn">
                { cards && cards.map((data) => (
                    <div className="CategorySection__Cards--Card">
                        <img alt="" height="70%" width="90%" style={{marginTop:"20px"}}/>
                        <div className="CategorySection__Cards--Card--head"> Product Heading </div>
                        <div className="CategorySection__Cards--Card--text"> This is a sample one line text for the product </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default withRouter(CategorySection)
