import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SocialContext from '../context/SocialContext';
import MainContentArea from '../components/MainContentArea';


import Footer from '../components/Footer';


const MainContainer = () => {

const [socialMedia, setSocialMedia] = useState ([
    {
    name: 'website',
    url:'https://www.kevinmuldoon.com/',
    icon: 'fa-solid fa-house'
    },
    {
    name: 'email',
    url:'https://www.kevinmuldoon.com/contact/',
    icon: 'fa-brands fa-at'
    },
    {
        name: 'facebook',
        url:'https://www.facebook.com/kevinmuldoondotcom',
        icon: 'fa-brands fa-facebook'
    },
    {
        name: 'twitter',
        url:'https://twitter.com/KevinMuldoon',
        icon: 'fa-brands fa-twitter'
    },
    {
        name: 'linkedin',
        url:'https://www.linkedin.com/in/kevinmuldoon/',
        icon: 'fa-brands fa-linkedin'
    },
    {
        name: 'youtube',
        url:'https://www.youtube.com/user/KevinMuldoonDotCom',
        icon: 'fa-brands fa-youtube'
    }
    ,
    {
        name: 'github',
        url:'https://github.com/kevinmuldoon-github/',
        icon: 'fa-brands fa-github'
    }
]);

const [blogRSSFeed, setBlogRSSFeed] = useState([]);

// Create useEffect for retrieving RSS feed from blog
// useEffect ( () => {
//     getRSSFeed();
// }, []);

// const getRSSFeed = function () {
//     fetch ('https://www.youtube.com/feeds/videos.xml?channel_id=UCUcokjNJXd8LVpBkRN0eqHA')
//         .then (response => response.text())
//         .then (posts => setBlogRSSFeed(posts))
// };

    return (
        <>
        <SocialContext.Provider value={{socialMedia}}>
            <Header />
            <MainContentArea />
            <Footer />
        </SocialContext.Provider>
        </>
    );

};

export default MainContainer;