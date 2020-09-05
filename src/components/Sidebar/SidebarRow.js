import React from 'react';
import './SidebarRow.css';
import { Avatar } from '@material-ui/core';

const SidebarRow = ({ src , Icon , title }) => {

    return (
        <div className="sidebar_row">
           {src &&  <div className="sidebar__info">
                <Avatar src={src}  className="sidebar__avatar"/>
    </div> }
    {Icon && <div className="sidebar__icon">
            <Icon />
        </div>}
    <h3>{title}</h3>
        </div>
    )
}

export default SidebarRow;
