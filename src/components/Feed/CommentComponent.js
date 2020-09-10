import React from 'react'
import './CommentComponent.css';
import { Avatar } from '@material-ui/core';

const CommentComponent = ({ comm, image, user }) => {

    return (
        <div className="comment_section">
            <div className="comment_section__image">
                <Avatar src={image} />
            </div>
            <div className="comment_section__name">
                <span ><strong>{user}</strong></span>
                <span className="comment_usr">{comm}</span>
            </div>
        </div>
    )
}

export default CommentComponent;
