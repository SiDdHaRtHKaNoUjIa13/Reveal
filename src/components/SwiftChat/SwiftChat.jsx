import React from "react";
import './SwiftChat.css';
import Fade from 'react-reveal/Fade';

const SwiftChat =()=>{
    return(
        <section className="swiftchat-section py">
            <div className="container">
                <div className="d-flex align">
                    <div className="w-6 w-xl-100 ">
                    <Fade left>
                        <div className="swiftchat-inn aos-init aos-animate" data-aos="fade-right">
                            <img src="../swiftchat.png " alt="swiftchat.png" />
                        </div>
                    </Fade>
                    </div>
                    <div className="w-4 w-xl-100">
                    <Fade right>
                        <div className="swiftchat-text aos-init aos-animate" data-aos="fade-left">
                            <h2>Swiftchat <span>Beta</span></h2>
                            <p>Text your feelings, not just words!</p>
                            <span><a href="swiftchat.html " class="feel-btn ">Try Now</a></span>
                        </div>
                    </Fade>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SwiftChat;