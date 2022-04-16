import React from "react";
import kevin from '../assets/bio-image.jpeg';
import SocialMediaBox from '../components/SocialMediaBox';

const Header = () => {


    return (
        <header>
        <div id="header-box">
            <div className="left-column">
                <img src={kevin} width="244" height="167" />
            </div>
            <div>
                <h1>The Portfolio of Kevin Muldoon</h1>
                <SocialMediaBox />
            </div>

        </div>
        </header>

    );
};

export default Header;