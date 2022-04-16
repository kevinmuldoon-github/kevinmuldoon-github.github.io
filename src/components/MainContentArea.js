import React from "react";
import youtubelogo from '../assets/youtube-logo-black.jpeg'


const MainContentArea = ({}) => {


    return (
        <>

        <div id="main-container">
            {/* <div>
                <div className="info">
                    <a href="https://www.youtube.com/user/KevinMuldoonDotCom" target="_blank"><img src={youtubelogo} width="300"/></a>
                    <br /><h2>My YouTube Channel</h2>
                </div>


            </div> */}
            <div id="main-content-area">

            <div>

            <p>Hello and welcome to my portfolio page. 
                I am an experienced webmaster and internet marketer who has a 
                passion for development. </p>
                <p>For more information about me, please check out <a href="https://www.kevinmuldoon.com/">my personal website</a>.
                The website has been online for over 20 years and features tutorials, extensive guides and reviews of product and services</p>
           

                <div className="info">
                    <h2><i className="fa-solid fa-circle-info"></i> About Me</h2>
                    <ul>
                        <li>&#9632; Live in Edinburgh</li>
                        <li>&#9632; Working Online Since 2000</li>
                        <li>&#9632; Background in Mathematics, Finance & Computing</li>
                    </ul>
                </div>

                <div className="info">
                    <h2><i className="fa-solid fa-screwdriver-wrench"></i> What I Do</h2>
                    <ul>
                        <li>&#9632; Content Creation</li>
                        <li>&#9632; Video Editing</li>
                        <li>&#9632; Social Media</li>
                        <li>&#9632; SEO</li>
                        <li>&#9632; Website Optimisation</li>
                        <li>&#9632; Development</li>
                        <li>&#9632; WordPress</li>
                    </ul>
                </div>
                <div className="info">
                    <h2><i className="fa-solid fa-code"></i> Languages</h2>
                    <ul>
                        <li>&#9632; HTML</li>
                        <li>&#9632; CSS</li>
                        <li>&#9632; Python</li>
                        <li>&#9632; Javascript</li>
                        <li>&#9632; PostgreSQL</li>
                        <li>&#9632; Java</li>

                    </ul>
                </div>


            </div>

            </div>

        </div>
        </>
    );

};

export default MainContentArea;