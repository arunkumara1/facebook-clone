import React, { useState } from 'react'
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import DuoIcon from '@material-ui/icons/Duo';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import { useStateValue } from '../../store/StateProvider';
import db from '../../firebase/firebase'
import firebase from 'firebase'
const MessageSender = () => {

    const [{ user }, dispatch] = useStateValue();

    const [message, setMessage] = useState('');
    const [image, setImage] = useState('');



    const messagehandler = (event) => {
        event.preventDefault();

        db.collection('posts').add({
            image: image,
            message: message,
            profilePic: user.photoURL,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName

        })


        setMessage('');
        setImage('');
    }

    return (
        <div className="message">
            <div className="message__top">
                <Avatar src={user.photoURL} />
                <form>
                    <div className="message__container">
                        <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder={"What's on your mind  " + user.displayName} />
                    </div>

                    <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Enter Image URL" />

                    <button type="submit" className="message__button" onClick={(event) => messagehandler(event)}>Hidden button</button>
                </form>
            </div>
            <div className="message__bottom">
                <div className="message__bottom__option" >
                    <DuoIcon style={{ color: 'red' }} />
                    <h4>Live Video</h4>
                </div>
                <div className="message__bottom__option" >
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h4>Photo/Video</h4>
                </div>
                <div className="message__bottom__option" >
                    <SentimentVerySatisfiedIcon style={{ color: 'yellow' }} />
                    <h4>Feeling/Activity</h4>
                </div>
            </div>
        </div>
    )
}

export default MessageSender;
