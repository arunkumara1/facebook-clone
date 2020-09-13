import React, { useState, useEffect } from 'react'
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from '../../firebase/firebase';

const Feed = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timeStamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })
            ))))
    }, [])

    return (
        <div className="feed" >
            <StoryReel />

            <MessageSender />

            {posts.map((post) => (
                <Post
                    key={post.id}
                    val={post.id}
                    post={post.data}
                    />

            ))
            }

        </div>
    )
}


export default Feed;