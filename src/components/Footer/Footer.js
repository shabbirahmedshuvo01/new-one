import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className=' bg-black text-white' style={{ height: '100px' }}>
            <p>All Credit or copyright © deserve by nature work {year}</p>
        </div>
    );
};

export default Footer;