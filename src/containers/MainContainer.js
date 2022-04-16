import React, { useState, useEffect } from 'react';
import * as rssParser from 'react-native-rss-parser';
import Header from '../components/Header';
import SocialContext from '../context/SocialContext';
import MainContentArea from '../components/MainContentArea';

import Footer from '../components/Footer';


const MainContainer = () => {

const [socialMedia, setSocialMedia] = useState ([
    {
    name: 'website',
    url:'https://www.kevinmuldoon.com/',
    icon: 'fa-brands fa-wordpress'
    },
    {
    name: 'email',
    url:'https://www.kevinmuldoon.com/contact/',
    icon: 'fa-solid fa-at'
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

// const getRSSFeed = function (items=10) {
    // fetch ('https://www.kevinmuldoon.com/feed/')
//     fetch('http://www.nasa.gov/rss/dyn/breaking_news.rss')
//         .then (response => response.text())
//     //     .then (posts => setBlogRSSFeed(posts.slice(0,items)))
//     .then((responseData) => rssParser.parse(responseData))
//     .then((rss) => {
//     console.log(rss.title)
//     console.log(rss.items.length) })
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