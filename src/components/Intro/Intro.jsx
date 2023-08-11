import React from "react";
import "./intro.css";
import Fade from 'react-reveal/Fade';


const Intro = () => {
    return (
        <section className="profile-section">
            <div className="container">
                <div className="d-flex align w-xl-flex ">
                    <div className="w-5 w-xl-100 ">
                        
                        <Fade left>
                            <div className="profile-text ">
                                <h1>Profile</h1>
                                <span>Groom your way in.</span>
                            </div>
                        </Fade>
                    </div>
                    <div className="w-5 w-xl-100 ">
                        <Fade right>
                            <div className="profile-img ">
                                <img src="../profile.png " alt="profile.png " />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro;