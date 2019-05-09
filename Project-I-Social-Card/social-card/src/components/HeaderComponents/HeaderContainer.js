import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return (
    <div className ="header-container">
        <div className="header-image-block">
            <ImageThumbnail />
        </div>
        <div className="header-content-block">
            <HeaderTitle />
            <HeaderContent />
        </div>
    </div>
)};

export default HeaderContainer;