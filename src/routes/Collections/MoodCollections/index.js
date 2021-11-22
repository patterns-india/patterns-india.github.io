import React from 'react'
import { withRouter } from 'react-router'
import ContactUs from '../../components/ContactUs'
import './MoodCollections.scss'

import image1 from '../../../Resources/images/collections/image1.jpg'
import image2 from '../../../Resources/images/collections/image2.jpg'
import image3 from '../../../Resources/images/collections/image3.jpg'
import image4 from '../../../Resources/images/collections/image4.jpg'
import image5 from '../../../Resources/images/collections/image5.jpg'
import moodboard1 from '../../../Resources/images/collections/moodboard1.png'
import moodboard2 from '../../../Resources/images/collections/moodboard2.png'
import moodboard3 from '../../../Resources/images/collections/moodboard3.png'
import moodboard4 from '../../../Resources/images/collections/moodboard4.png'
import moodboard5 from '../../../Resources/images/collections/moodboard5.png'
import moodboard6 from '../../../Resources/images/collections/moodboard6.png'



const cards = [
    "COTTON","LINEN","VISCOSE","BAMBER","DENIM","SEQUINS","PRINTS","YARNDYED","DIGITAL PRINTS","SCHIFFLI","EMBROIDERIES","CUTWORK","BEADWORK","LACES","",
]

function MoodCollections(props) {
    const {categorySelected,changeCategory} = props;

    const goBack = () => {
        document.getElementById('CategorySectionId').classList += ' fadeOut';

        setTimeout(()=>{
            changeCategory(0);
            props.history.push('/collections')
        },500)
        
    }

    // scrollToBottom = () => {
    //     this.contactUs.scrollIntoView({behavior:"smooth"})
    // }

    return (
        <>
        <div className="MoodCollections" id="CategorySectionId">
            <div className="MoodCollections__Section">
                <div className="MoodCollections__CategoryBox">
                    <div className="MoodCollections__CategoryBox--label">PRODUCTS</div>
                    <div className="MoodCollections__CategoryBox--text">Dresses</div>
                    <div className="MoodCollections__CategoryBox--text">Tops/Blouses</div>
                    <div className="MoodCollections__CategoryBox--text">Bottoms</div>
                    <div className="MoodCollections__CategoryBox--text">Shirts</div>
                    <div className="MoodCollections__CategoryBox--text">Jackets</div>
                    <div className="MoodCollections__CategoryBox--text">Overalls/Cover ups</div>
                    <div className="MoodCollections__CategoryBox--text">Kaftan</div>
                    <div className="MoodCollections__CategoryBox--text">Made Ups</div>
                </div>
                <div className="MoodCollections__ImageBox">
                    <img 
                        className="MoodCollections__Image" 
                        src={moodboard1} alt="mood1" 
                        height="400px" 
                        width="400px"
                        style={{transform:"translate(0px,-80px)"}}
                    />
                    <img 
                        className="MoodCollections__Image" 
                        src={image1} 
                        alt="mood2" 
                        height="420px" 
                        width="280px"
                        style={{transform:"translate(80px,50px)"}}
                    />
                </div>
            </div>
            <div className="MoodCollections__Section">
                <div className="MoodCollections__ImageBox">
                    <div>
                        <img className="MoodCollections__Image" src={moodboard2} alt="mood3" height="400px" width="400px"
                            style={{transform:"translate(-100px,-50px)"}}
                        />
                        <img className="MoodCollections__Image" src={image2} alt="mood4" height="340px" width="250px"
                            // style={{transform:"translate()"}}
                        />  
                    </div>
                    <div>
                        <img className="MoodCollections__Image" src={image3} alt="mood5" height="350px" width="250px"
                            style={{transform:"translate(-30px,-60px)"}}
                        />
                        <img className="MoodCollections__Image" src={moodboard3} alt="mood6" height="400px" width="400px"
                            style={{transform:"translate(50px,50px)"}}
                        /> 
                    </div>
                    <div>
                        <img className="MoodCollections__Image" src={moodboard6} alt="mood7" height="400px" width="440px"
                        style={{transform:"translate(-70px,0)"}}
                        />
                        <img className="MoodCollections__Image" src={image5} alt="mood8" height="300px" width="230px"
                        style={{transform:"translate(20px,0)"}}/> 
                    </div>
                </div>
                <div className="MoodCollections__CategoryBox">
                    <div className="MoodCollections__CategoryBox--label">FABRICS</div>
                    <div className="MoodCollections__CategoryBox--text">Cotton</div>
                    <div className="MoodCollections__CategoryBox--text">Linens</div>
                    <div className="MoodCollections__CategoryBox--text">Viscose</div>
                    <div className="MoodCollections__CategoryBox--text">Denim</div>
                    <div className="MoodCollections__CategoryBox--text">YarnDyed</div>
                    <div className="MoodCollections__CategoryBox--text">Knits</div>
                    <div className="MoodCollections__CategoryBox--text">Hoisery</div>
                    <div className="MoodCollections__CategoryBox--text">Lurex</div>
                    <div className="MoodCollections__CategoryBox--text">Bamber</div>
                    <div className="MoodCollections__CategoryBox--text">Polyester</div>
                    <div className="MoodCollections__CategoryBox--text">Guipure Lace Fabric</div>
                    <div className="MoodCollections__CategoryBox--text">Net</div>
                    <div className="MoodCollections__CategoryBox--text">Georgette</div>
                    <div className="MoodCollections__CategoryBox--text">Chiffon</div>
                    <div className="MoodCollections__CategoryBox--text">Schiffli</div>
                    <div className="MoodCollections__CategoryBox--text">Sequins</div>

                    <div className="MoodCollections__CategoryBox--label">Blends Of Fabric</div>
                    <div className="MoodCollections__CategoryBox--text">Cotton Blends</div>
                    <div className="MoodCollections__CategoryBox--text">Viscose Blends</div>
                    <div className="MoodCollections__CategoryBox--text">YarnDyed Blends</div>
                    <div className="MoodCollections__CategoryBox--text">PolyBlends</div>
                    <div className="MoodCollections__CategoryBox--text">Lycra Blends</div>
                    <div className="MoodCollections__CategoryBox--text">Denim Blends</div>
                </div>
                
            </div>
            <div className="MoodCollections__Section">
                <div className="MoodCollections__CategoryBox">
                    <div className="MoodCollections__CategoryBox--label">VALUE ADDITIONS</div>
                    <div className="MoodCollections__CategoryBox--text">Embroideries</div>
                    <div className="MoodCollections__CategoryBox--text">Cutwork</div>
                    <div className="MoodCollections__CategoryBox--text">Beadwork</div>
                    <div className="MoodCollections__CategoryBox--text">Sequins</div>
                    <div className="MoodCollections__CategoryBox--text">Schiffli</div>
                    <div className="MoodCollections__CategoryBox--text">Laces</div>
                    <div className="MoodCollections__CategoryBox--text">Prints</div>
                    <div className="MoodCollections__CategoryBox--text">Digital Prints</div>
                    <div className="MoodCollections__CategoryBox--text">Handwork</div>
                    <div className="MoodCollections__CategoryBox--text">Heatset Printing</div>
                    <div className="MoodCollections__CategoryBox--text">Foil Printing</div>
                    <div className="MoodCollections__CategoryBox--text">Enzyme Wash</div>
                    <div className="MoodCollections__CategoryBox--text">Acid Wash</div>
                    <div className="MoodCollections__CategoryBox--text">Sulphur Wash</div>
                </div>
                <div className="MoodCollections__ImageBox">
                    <div>
                        <img className="MoodCollections__Image" src={moodboard4} alt="mood9" height="400px" width="400px"
                        style={{transform:"translate(0,-30px)"}}
                        />
                        <img className="MoodCollections__Image" src={image4} alt="mood10" height="340px" width="250px"
                        style={{transform:"translate(100px,0)"}}
                        /> 
                    </div>
                    <div>
                        <img className="MoodCollections__Image" src={moodboard5} alt="mood11s" height="450px" width="450px"
                        style={{transform:"translate(0,50px)"}}/>
                        {/* <img className="MoodCollections__Image" src={image5} alt="" height="300px" width="300px"/> */}
                    </div>
                    
                </div>
            </div>
        </div>
        {/* <ContactUs/> */}
        </>
    )
}

export default withRouter(MoodCollections)
