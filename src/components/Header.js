import React from "react";
import kevin from '../assets/bio-image.jpeg';

const Header = () => {


    return (
        <header>
        <div id="header-box">
            <div>
                <img src={kevin} width="244" height="167" />
            </div>
            <div>
                <h1>The Portfolio of Kevin Muldoon</h1>
                <h2>My sub header will go here</h2>
            </div>

        </div>
        </header>

    );
};

export default Header;