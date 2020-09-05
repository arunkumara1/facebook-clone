import React from 'react'
import './Post.css';
import { Avatar, IconButton } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';



const Post = ({ image, message, profilePic, timeStamp, user }) => {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} />
                <div className="post__top__info">
                    <h3>{user}</h3>
                    <p>{new Date(!timeStamp ? '' : timeStamp.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            {image && <div className="post__image">
                <img src={image} alt="" />
            </div>}
            <div className="post_bottom__options">
                <div className="post_bottom__option">
                    <IconButton >
                        <ThumbUpIcon />
                    </IconButton>
                    <h3>Like</h3>
                </div>
                <div className="post_bottom__option">
                    <IconButton >
                        <CommentIcon />
                    </IconButton>
                    <h3>Comment</h3>
                </div>
                <div className="post_bottom__option">
                    <IconButton >
                        <ShareIcon />
                    </IconButton>
                    <h3>Share</h3>
                </div>
            </div>
        </div>
    )
}

export default Post;
