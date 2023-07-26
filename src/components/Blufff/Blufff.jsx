import React from "react";
import './Blufff.css';
import { DefaultPlayer as video } from 'react-html5video';
// import 'react-html5video/dist/styles.css';S
// import introVideo from '../Blufff_Promo.mp4'
const Blufff = () => {

    return (
        <div className="rocket">
            <video className="eer" controls autoPlay width={720} height={420}>

                <source src="../Blufff_Promo.mp4" type="video/webm"></source>

            </video>
        </div>
    )
}

export default Blufff;