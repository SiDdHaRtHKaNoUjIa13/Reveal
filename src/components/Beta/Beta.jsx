import React, { useState } from "react";
import './Beta.css';
import Fade from 'react-reveal/Fade';
import CountUp from 'react-countup';
import ScrollTrigger from "react-scroll-trigger";


const Beta = () => {
    const [counterStart,setCounterStart]=useState(false);
        return (
        
        <Fade down distance="15%">
            <section className="about-section ">
                <div className="cont ">
                    <div className="about align ">
                        <div className="about-inn ">
                            <p className="first ">Join our beta testers group and get early Access to new and cool features</p>
                            <div  className="about-text d-flex">
                            <ScrollTrigger onEnter={()=>setCounterStart(true)} onExit={()=> setCounterStart(false)}>
                                <span className="count" >
                                {counterStart && <CountUp start={5000} end={9578} duration={6} />}
                                    
                                    
                                </span>
                                </ScrollTrigger>
                                <p>our precious advisor and tester</p>
                            </div>
                        </div>
                        <div className="about_img ">
                            <img src="http://reveal.co.in/image/blufff_onelink.svg " alt="qr_code" />
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
       

    )
}

export default Beta;