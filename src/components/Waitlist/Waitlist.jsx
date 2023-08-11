import React from "react";
import './Waitlist.css';

import CountUp from 'react-countup';
import ScrollTrigger from "react-scroll-trigger";
import { useState } from 'react';
import Fade from 'react-reveal/Fade';

const Waitlist = () => {
    const [Start, setStart] = useState(false);
    return (
        <Fade down distance="15%">
        <section className="join_section ">
            <div className="container ">
                <div className="join_text ">
                <hr />
                
                    <h2 >
                        <span className="stroke-text">READY TO </span>
                        
                        <span>BELIEVE ! </span>
                        
                        </h2><br/>
                    <ScrollTrigger onEnter={() => setStart(true)} onExit={() => setStart(false)}>
                        <span className="count" >
                            {Start && <CountUp start={175000} end={347381} duration={6} />}

                        </span>
                    </ScrollTrigger>
                    <p>Wait lister</p>
                    <a href="mailto:team@theblufff.com;" className="join_btn">JOIN US</a>
                    <p>Join our wait list and we will ping you once we let you in.</p>
                </div>
            </div>
        </section>
        </Fade>

        
    )
}
export default Waitlist;