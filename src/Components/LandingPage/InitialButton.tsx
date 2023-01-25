import React from "react";
import "./InitialButton.css"

interface ButtonProps {
    bgColor: string;
    txtColor: string;
    mrSize: any;
    pdSize: any;
    children: string;
}

const InitialButton: React.FC<ButtonProps> = ({bgColor, txtColor, mrSize, pdSize, children  })=> 
    
    (<button className="button" type="button" style={{background: bgColor, color: txtColor, margin: mrSize, padding: pdSize}}>{children}</button>)


export default InitialButton;