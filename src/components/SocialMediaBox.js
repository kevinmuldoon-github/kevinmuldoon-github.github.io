import React, { useContext } from "react";
import SocialMediaDetail from "./SocialMediaDetail";
import SocialContext from "../context/SocialContext";

const SocialMediaBox = () => {

    const {socialMedia} = useContext(SocialContext); // Deconstruct social media array

    const SocialNodes = socialMedia.map( (item, index) => {
        return <SocialMediaDetail key={index} item={item} />
    });



return (
    <div id="social-media-box">
        {SocialNodes}
    </div>
);

};

export default SocialMediaBox;
