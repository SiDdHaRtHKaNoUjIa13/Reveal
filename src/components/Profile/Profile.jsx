import React from "react";
import "./Profile.css"
import ProfileCard from "./ProfileCard";


function Profile() {

    return (
    <div className="card-align">
        <ProfileCard
            image={'../clips.png'}
            heading='Clips'
            text='Quick Entertainments'
            
        />
        <ProfileCard
            image={'../stream.png'}
            heading='Stream'
            text='your content seamlessly '
            
        />
        <ProfileCard
            image={'../explore.png'}
            heading='Explore'
            text='News, People & Trends'
            
        />


    </div>

        




    )

}

export default Profile;





