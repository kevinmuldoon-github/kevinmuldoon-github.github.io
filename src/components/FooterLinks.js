import React from "react";

const FooterLinks = ({item}) => {


    return (
        <>
        &nbsp;  <a href={item.url} target='_blank'>{item.name}</a>
        </>
    );

};

export default FooterLinks;