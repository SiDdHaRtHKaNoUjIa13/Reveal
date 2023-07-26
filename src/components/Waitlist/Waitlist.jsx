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
        <section className="join_section aos-init" data-aos="fade-down">
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

        // <div className="Join" id="join-us">
        //     <div className="left-j">
        //         <hr />
        //         <div>
        //             <span className="stroke-text">READY TO</span>
        //             <span>BELIEVE</span>
        //         </div>

        //         <div>
        //             <span>JOIN OUR</span>
        //             <span className="stroke-text">WAIT LISTERS</span>
        //         </div>
        //     </div>
        //     <div className="right-j">
        //         <div className="email-container">
        //             <span>We will Ping You Once We Let YOU IN!!!</span>
        //             <button className="btn-j">
        //                 <a href="mailto:team@theblufff.com">Join</a>
        //             </button>
        //         </div>


        //     </div>
        // </div>
        // <Fade down distance="15%">

        /* <ScrollTrigger onEnter={() => setStart(true)} onExit={() => setStart(false)}>
                    <span className="waiting" >
                        {Start && <CountUp start={175000} end={347381} duration={6} />}

                    </span>
                </ScrollTrigger> */

        /* <section class="join_section aos-init aos-animate" data-aos="fade-down">
            <div class="container ">
                <div class="join_text ">
                    <h2>Join Our Wait List</h2>
                    <ScrollTrigger onEnter={() => setStart(true)} onExit={() => setStart(false)}>
                        <span className="counter" >
                            {Start && <CountUp start={175000} end={347381} duration={6} />}

                        </span>
                    </ScrollTrigger>
                    <p>Wait lister</p>
                    <a href="mailto:team@theblufff.com;" class="join_btn">Join</a>
                    <p>Join our wait list and we will ping you once we let you in.</p>
                </div>
            </div>
        </section> */


        //  </Fade>
    )
}
export default Waitlist;