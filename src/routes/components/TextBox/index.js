import React from 'react'
import './TextBox.scss'

function TextBox(props) {
    const{heading,text} = props;
    return (
        <div className="TextBox">
            <div className="TextBox__Heading">
                {heading}
            </div>
            <div className="TextBox__Body">
                {text && text.map((d)=> <p className="TextBox__Body--para">{d}</p>)}
            </div>
        </div>
    )
}

export default TextBox
