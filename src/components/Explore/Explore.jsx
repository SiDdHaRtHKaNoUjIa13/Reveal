import React from "react";
import './Explore.css'
import Fade from 'react-reveal/Fade';
const Explore = () => {
    return (
        <section className="explore-section py">
            <div className="container">
                <div className="d-flex justify w-xl-flex">
                    <div className="w-4 w-xl-100 ">
                        <Fade left>
                            <div className="explore-text ">
                                <h2> Explore</h2>
                                <p>News, People &amp; Trends</p>
                            </div>
                        </Fade>
                    </div>
                    <div className="w-6 w-xl-100">
                        <Fade right>
                            <div className="explore-img ">
                                <img src="../explore.png " alt="explore.png" />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Explore;