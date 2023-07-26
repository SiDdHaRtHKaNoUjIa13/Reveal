import React from "react";
import './Stream.css'
import Fade from 'react-reveal/Fade';
const Stream =()=>{
    return(
        <section className="stream-section py">
            <div className="container">
                <div className="d-flex align">
                    <div className="w-6 w-xl-100">
                    <Fade left>
                        <div className="stream-img aos-init aos-animate" data-aos="fade-right">
                            <img src="../stream.png " alt="stream.png" />
                        </div>
                        </Fade>
                    </div>
                    <div className="w-4 w-xl-100">
                    <Fade right>
                        <div className="stream-text aos-init aos-animate" data-aos="fade-left">
                            <h2>Stream</h2>
                            <p>your content seamlessly</p>
                        </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Stream;