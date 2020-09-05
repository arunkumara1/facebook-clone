import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import GamesIcon from '@material-ui/icons/Games';
import MessageIcon from '@material-ui/icons/Message';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useStateValue } from '../../store/StateProvider';

const Sidebar = () => {

    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="sidebar">
           <SidebarRow src={user.photoURL} title={user.displayName}/>
           <SidebarRow Icon={NotificationsNoneIcon} title="Home"/>
           <SidebarRow Icon={GamesIcon}  title="Notification" />
           <SidebarRow Icon={MessageIcon}  title="Message" />
           <SidebarRow Icon={AccountCircleIcon}  title="More" />
        </div>
    )
}

export default Sidebar;
