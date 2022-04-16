import React from "react";

const SocialMediaDetail = ({item}) => {


    return (

        <div className="social-media-item">
            <a href={item.url} target='_blank'><h3><i className={item.icon}></i><br />{item.name}</h3></a>   
        </div>

    );

};

export default SocialMediaDetail;