import React from "react";

const OurPerkQuote = () => {
  return (
  <div className=".d-none .d-sm-block .d-md-none">
     <div>
     <div className="ourPerkQuoteContainer">
      <h1 className="quoteTitleMobile">
        “Can’t ignore the great perks! We work hard every day so we can have a
        healthy work/life balance”
      </h1>
      <p className="quoteInfo">SCOTT PRATHER</p>
      <p className="quoteFoot">Creative Director</p>
    </div>
     </div>
    <div className='.d-none .d-sm-block'>
    <div className="ourPerkQuoteContainer">
      <h1 className="quoteTitle">
        “Can’t ignore the great perks! We work hard every day so we can have a
        healthy work/life balance”
      </h1>
      <p className="quoteInfo">SCOTT PRATHER</p>
      <p className="quoteFoot">Creative Director</p>
    </div>
    </div>
  </div>
    
  );
};

export default OurPerkQuote;
