import React, { useState, useEffect } from 'react'
import './Post.css';
import { Avatar, IconButton } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import CommentIcon from '@material-ui/icons/Comment';
import db from '../../firebase/firebase';
import useStyles from './style';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import Tooltip from '@material-ui/core/Tooltip';
import CommentComponent from './CommentComponent';
import { useStateValue } from '../../store/StateProvider';

const Post = ({ post: { image, comments, likes, message, profilePic, timeStamp, username }, val }) => {

    const classes = useStyles();
    
    const [{ user }, dispatch] = useStateValue();
    const [expanded, setExpanded] = useState(false);
    const [comment, setComment] = useState('');
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikesCount] = useState('');

    useEffect(() => {
        setLikesCount(likes);
    }, [])


    useEffect(() => {
        db.collection('posts').doc(val).update({
            "likes": likeCount
        });
    }, [likeCount]);

    const commentHandler = (event) => {
        event.preventDefault();

        const toDb = {
            comm: comment,
            image: user.photoURL,
            user: user.displayName
        }

        let commDB = [...comments];
        commDB.push(toDb);
        console.log(commDB);

        db.collection('posts').doc(val).update({
            "comments": commDB
        })

        setComment('');

    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    


    const likeHandler = (event) => {
        if (event.target.id === 'like1') {
            setLikesCount((parseInt(likes) - 1).toString());
            setIsLiked(false);
        } else {
            setLikesCount((parseInt(likes) + 1).toString());
            setIsLiked(true);
        }
    }

    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} />
                <div className="post__top__info">
                    <h3>{user.displayName}</h3>
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
                    {isLiked ? (
                        <IconButton id="like1" onClick={(event) => likeHandler(event)} >
                            <ThumbUpIcon />
                        </IconButton>
                    ) : (
                            <IconButton id="like2" onClick={(event) => likeHandler(event)}>
                                <ThumbUpAltOutlinedIcon />
                            </IconButton>)}


                    <h4>{likeCount === '0' ? '' : likeCount} Likes</h4>
                </div>
                <div className="post_bottom__option">
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="comment section"
                    >
                        <Tooltip title="Comments" placement="bottom">
                            <CommentIcon />
                        </Tooltip>
                    </IconButton>
                    <h4>{comments.length === 0 ? '' : comments.length} Comments</h4>
                </div>

            </div>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <div className="post__comment">
                    <div className="post__comment__top">
                        <Avatar src={user.photoURL} />
                        <form>
                            <div className="post__comment__container">
                                <input placeholder={"Write a comment"} value={comment} onChange={(event) => setComment(event.target.value)} />
                            </div>

                            <button type="submit" onClick={commentHandler} className="post__comment__button" >Hidden button</button>
                        </form>
                    </div>
                    <div className='post__comment-bottom'>
                    <div id="chat" className="post__comment__bottom_container">

                        {

                            comments.map((comment, index) => (
                                <CommentComponent
                                    key={index}
                                    comm={comment.comm}
                                    image={comment.image}
                                    user={comment.user}
                                />
                            ))

                        }


                    </div>
                    </div>


                </div>
            </Collapse>

        </div>
    )
}

export default Post;
