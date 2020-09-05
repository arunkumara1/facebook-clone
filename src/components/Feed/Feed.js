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
                    image={post.data.image}
                    message={post.data.message}
                    profilePic={post.data.profilePic}
                    timeStamp={post.data.timeStamp}
                    user={post.data.user} />

            ))
            }

        </div>
    )
}


export default Feed;