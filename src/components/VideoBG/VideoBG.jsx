import React, { useRef } from "react";
import './VideoBG.css';





const VideoBG =()=>{
    

    const videoRef = useRef();
  

    const handlePlay=()=>{
        videoRef.current.play();
    };
    const handlePause=()=>{
        videoRef.current.pause();
    };
    return(
        // <section className="video">
        //     <video src="../Blufff_Promo.mp4" autoPlay muted loop className="player" />
        // </section>
// {/* <Fade down distance="15%"> */}
        <div className="grid-btn">
            <button className="btn-play" onClick={handlePlay}>
                Play
            </button>

            <button className="btn-pause" onClick={handlePause}>
                Pause
            </button>
            <div className="video">
                <video className="xyz" width={720} height={420} ref={videoRef} >
                    <source src="../Blufff_Promo.mp4"></source>
                </video>
            </div>
        </div>

// </Fade>
       


        




      


        


        
    )
}

export default VideoBG;