import React from "react";
import SocialMediaBox from '../components/SocialMediaBox';

const MainContentArea = ({}) => {


    return (
        <>
        <div id="main-container">
            <div><SocialMediaBox /></div>
            <div id="main-content-area">
                <div className="info">
                    <h2><i class="fa-solid fa-circle-info"></i> About Me</h2>
                    <ul>
                        <li>&#9632; Live in Edinburgh</li>
                        <li>&#9632; Working Online Since 2000</li>
                        <li>&#9632; Background in Mathematics, Finance & Computing</li>
                    </ul>
                </div>

                <div className="info">
                    <h2><i class="fa-solid fa-screwdriver-wrench"></i> What I Do</h2>
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
                    <h2><i class="fa-solid fa-code"></i> Languages</h2>
                    <ul>
                        <li>&#9632; HTML</li>
                        <li>&#9632; CSS</li>
                        <li>&#9632; Python</li>
                        <li>&#9632; Javascript</li>
                        <li>&#9632; PostgreSQL</li>
                        <li>&#9632; Java</li>

                    </ul>
                </div>
                <div className="info">
                    <h2><i class="fa-solid fa-pen"></i> Blog</h2>
                </div>

                <div className="info">
                    <h2><i class="fa-brands fa-youtube"></i> YouTube</h2>
                </div>
            </div>

        </div>
        </>
    );

};

export default MainContentArea;