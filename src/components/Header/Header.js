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
import Tooltip from '@material-ui/core/Tooltip';
import { useStateValue } from '../../store/StateProvider';

const Header = () => {


    const [{ user }, dispatch] = useStateValue();


    return (
        <div className="header">
            <div className="header__left">
                <img src={require('../../assets/fb.png')} alt="" />
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder="Search Facebook" />
                </div>
            </div>
            <div className="header__center">
                <div className="header__options header__options__active">
                    <Tooltip title="Home" placement="bottom-end">
                        <HomeIcon />
                    </Tooltip>
                </div>
                <div className="header__options">
                    <Tooltip title="Watch" placement="bottom-end">
                        <WatchLaterIcon />
                    </Tooltip>
                </div>
                <div className="header__options">
                    <Tooltip title="Queue" placement="bottom-end">
                        <AddToQueueIcon />
                    </Tooltip>
                </div>
                <div className="header__options">
                    <Tooltip title="Notification" placement="bottom-end">
                        <NotificationsNoneIcon />
                    </Tooltip>
                </div>
                <div className="header__options">
                    <Tooltip title="Games" placement="bottom-end">
                        <GamesIcon />
                    </Tooltip>
                </div>
            </div>
            <div className="header__right">
                <Avatar src={user.photoURL} />
                <h2>{user.displayName}</h2>
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
