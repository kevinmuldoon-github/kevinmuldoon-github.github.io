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
                <p>Hello and welcome to my portfolio page. 
                I am an experienced webmaster and internet marketer who has a 
                passion for development. This page gives an overview of who I am and what I do.</p>
            </div>

        </div>
        </header>

    );
};

export default Header;