import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import GamesIcon from '@material-ui/icons/Games';
import AddIcon from '@material-ui/icons/Add';
import MessageIcon from '@material-ui/icons/Message';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Avatar } from '@material-ui/core';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
            <img src={require('../../assets/fb.png')} alt="" />
            <div className="header__input">
                <SearchIcon />
                <input placeholder="Search Facebook"/>
            </div>
            </div>
            <div className="header__center">
                <div className="header__options">
                    <HomeIcon />
                </div>
                <div className="header__options">
                    <WatchLaterIcon />
                </div>
                <div className="header__options">
                    <AddToQueueIcon />
                </div>
                <div className="header__options">
                    <NotificationsNoneIcon />
                </div>
                <div className="header__options">
                    <GamesIcon />
                </div>
            </div>
            <div className="header__right">
                <Avatar src="https://firebasestorage.googleapis.com/v0/b/instagram-clone-app-76737.appspot.com/o/images%2F12_08_2020-dhoni8_20619565.jpg?alt=media&token=19f4d73c-0c25-4408-8ff8-d2cd1ac07e66" />
                <h2>ZAG</h2>
                <div className="header__right__options">
                    <AddIcon />
                </div>
                <div className="header__right__options">
                    <MessageIcon />
                </div>
                <div className="header__right__options">
                    <NotificationsNoneIcon />
                </div>
                <div className="header__right__options">
                    <AccountCircleIcon />
                </div>
            </div>
        </div>
    )
}

export default Header;
