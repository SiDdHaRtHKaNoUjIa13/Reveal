import React from "react";
import './Feeling.css'
import Zoom from 'react-reveal/Zoom';

const Feeling = () =>{
    return(
        <Zoom zoom duration={1500} distance ="10%">
        <section className="feeling-section py ">
            <div className="feeling-bg ">
                <img src="./fellings.png " alt="feelings" />
            </div>
            <div className="container">
                <div className="d-flex align w-xl-flex">
                    <div className="w-5 ">
                        <div className="feel-text">
                            <h2><span>Feel's</span>
                                <p>Express your feeling <br /> digitally</p>
                            </h2>
                            <span><a href="http://reveal.co.in/feels.html " className="feel-btn ">Try Now</a></span>
                        </div>
                    </div>
                    <div className="w-5">
                        <div className="feel-inn-img ">
                            <img src="./feeling screen.png " alt="screen"/>
                        </div>
                    </div>
                </div>
            </div>
 
        </section>
        </Zoom>
    )
}

export default Feeling