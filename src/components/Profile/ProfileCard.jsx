import React from "react";
import './Profile.css';

function ProfileCard(props){
    return(
        <div id="portfolio">
        <div class="container">
            <div class="worklist">
                <div class="work">
                    <img src={props.image} alt="" />                        
                    <div class="layer">
                        <h3 className="heading">{props.heading} </h3>
                        <p className="para"> {props.text}</p>
                        <a href="#"><i class="uil uil-external-link-alt"></i></a>
                    </div>

                </div>
            </div>  
        </div>
    </div>
    )
}

export default ProfileCard;