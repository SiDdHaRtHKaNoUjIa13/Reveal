import React from 'react'
import "./Hero.css"
import CountUp from 'react-countup'
import Fade from 'react-reveal/Fade';


const Hero = () => {
    return (
        <Fade top distance="20%" duration={1000}>

            <section className="banner-section py" >
                <div className="contra">

                    <div className="d-flex align">

                        <div className="banner-in w-xl-100 ">
                            {/* <div className='orange-circle' /> */}
                            <h1 >Emotion <div className='orange-circle' /> <span>Sensitive Social</span> Network</h1>
                            {/* <div className='orange-circle' /> */}

                            <div className='flexCenter stats'>

                                <div className='flexColStart stat'>
                                    <span>
                                        <CountUp start={147000} end={347381} duration={6} />
                                        <span>+</span>
                                    </span>
                                    <span className='secondaryText'>
                                        Wait Listers
                                    </span>
                                </div>
                                <div className='flexColStart stat'>
                                    <span>
                                        <CountUp start={1000} end={9578} duration={6} />
                                        <span>+</span>
                                    </span>
                                    <span className='secondaryText'>
                                        Beta Testers
                                    </span>
                                </div>
                            </div>
                            <a href="https://onelink.to/q5zp4m">Download App</a>
                        </div>
                        <div className="banner-in w-xl-100">
                            <img src='http://reveal.co.in/image/banner-img.png' alt="bannerimg " />
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className='hero-wrapper'>
                <div className="paddings innerWidth flexCenter hero-container">  */}
            {/* left side*/}

            {/* <div className='flexColStart hero-left'>
                        <div className='hero-title'>
                            <div className='orange-circle' />

                            <div className='hero-des '>
                                <h1>Emotion</h1>
                                <p>Sensitive Social</p>
                                <h1>Network</h1>
                            </div>
                        </div>



                        <div className='flexCenter stats'>
                            <div className='flexColStart stat'>
                                <span>
                                    <CountUp start={147000} end={347381} duration={4} />
                                    <span>+</span>
                                </span>
                                <span className='secondaryText'>
                                    Wait Listers
                                </span>
                            </div>
                        </div>

                        <div class="mobile-btn">
                            <a href="https://onelink.to/q5zp4m" target="_blank " class="click-lg ">Download App</a>
                        </div>
                    </div> */}


            {/* right side */}
            {/* <div className='flexCenter hero-right'>
                        <div className='image-container'>
                            <img src='http://reveal.co.in/image/banner-img.png' alt=''></img>
                        </div>
                    </div>
                </div>


            </section>  */}
        </Fade>
    )
}

export default Hero