import React, {useContext} from "react";
import SocialContext from "../context/SocialContext";
import FooterLinks from "./FooterLinks";

const Footer = () => {

    const {socialMedia} = useContext(SocialContext); // Deconstruct social media array

    const SocialNodes = socialMedia.map( (item, index) => {
        return <FooterLinks key={index} item={item} />
    });



return (
    <footer>
        {SocialNodes}
    </footer>
);

};

export default Footer;