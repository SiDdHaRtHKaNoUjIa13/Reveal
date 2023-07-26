import React from "react";
import './Hooks.css';
import { addPointerEvent } from "framer-motion";
import Fade from 'react-reveal/Fade';


const Hooks =() =>{
    return(
        <section className="profile-section py aos-init aos-animate" id="app-hook-section " data-aos="fade-left">
            <div className="container ">
                <div className="d-flex align w-xl-flex ">
                    <div className="w-5 w-xl-100">
                    <Fade left>
                        <div className="profile-text pt aos-init aos-animate" data-aos="fade-right">
                            <h2>App Hook</h2>
                            <p>Try it before you buy it.</p>
                            <div  className="btnn"><a href="http://reveal.co.in/app-hook.html" >Try Now</a></div>
                        </div>
                    </Fade>
                    </div>
                    <div className="w-5 w-xl-100 ">
                    <Fade right>
                        <div className="profile-img aos-init aos-animate" data-aos="fade-left ">
                            <img src="../app-hook.svg" alt="app-hook.pn " />
                        </div>
                    </Fade>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hooks;