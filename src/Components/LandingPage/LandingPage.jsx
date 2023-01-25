import React from "react";
import InitialButton from "./InitialButton";
import LandingTitle from "./LandingTitle";

const LandingPage=()=> {
return(
    <div className="App">
      <header className="App-header">
        <LandingTitle txtColor='white'>WELCOME TO DMM...</LandingTitle>
        <InitialButton bgColor='white' txtColor='#849cca' mrSize='5px' pdSize='10px'>events</InitialButton>
      </header>
    </div>
)
}
export default LandingPage;




