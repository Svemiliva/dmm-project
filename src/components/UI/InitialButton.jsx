import React from "react";
import "./InitialButton.css"


const InitialButton = ({bgColor, txtColor, mrSize, pdSize, children  })=> 
    
    (<button className="button" type="button" style={{background: bgColor, color: txtColor, margin: mrSize, padding: pdSize}}>{children}</button>)


export default InitialButton;