import React from "react";

interface TitleProps {
    txtColor: string;
    children: string;
}

const LandingTitle: React.FC<TitleProps> = ({txtColor, children  })=> 
    
    (<p style={{ color: txtColor}}>{children}</p>)


export default LandingTitle;