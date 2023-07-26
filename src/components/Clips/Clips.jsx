import React from "react";
import './Clips.css'
import Fade from 'react-reveal/Fade';

const Clips = () => {


    return (

        <section className="clip-section py ">
            <div className="container">
                <div className="d-flex align">
                    <Fade left>
                        <div className="clips-img ">
                            <img src="../clips.png " alt="clips-image " />
                        </div>
                    </Fade>
                    
                        <div class="clips-text aos-init" data-aos="fade-left">
                            <Fade right><h2>Clips <span>Beta</span></h2></Fade>
                            <Fade right><p>Quick entertainments</p></Fade>
                        </div>
                    
                </div>
            </div>

        </section>




    )
}

export default Clips;