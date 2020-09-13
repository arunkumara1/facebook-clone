import React, { useState, useEffect } from 'react'
import './Widget.css';
import 'react-chat-elements/dist/main.css';
import { MessageBox } from 'react-chat-elements'
import { Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import db from '../../firebase/firebase';
import { useStateValue } from '../../store/StateProvider';
import $ from 'jquery';

const Widget = () => {

    const [{ user }, dispatch] = useStateValue();
    const [chat, setChat] = useState([]);
    const [isMessaged, setIsMessaged] = useState(false);
    const [message, setMessage] = useState('');


    useEffect(() => {
        db.collection('chats').doc('WsczBJz8dgjrLnSaULty').onSnapshot(snapshot => (
            setChat(snapshot.data().chat)
        ))
        console.log(chat);
    }, []);

    const messageHandler = (e) => {
        e.preventDefault();
        console.log(chat);
        let chatDB = [...chat];
        const toDB = {
            image: user.photoURL,
            timeStamp: new Date(),
            title: message,
            username: user.displayName
        }
        chatDB.push(toDB);

        db.collection('chats').doc('WsczBJz8dgjrLnSaULty').update({
            "chat": chatDB
        })

        setMessage('');
        
        $('#chat_scro').animate({

            scrollTop: $('#chat_scro').offset().top + $('#chat_scro')[0].scrollHeight

        },200)
        
    }

    return (
        <div className="widget">


            {isMessaged ? (
                <div className="widget__chat__area">
                    <div className="widget__chat__top">
                        <img src={require('../../assets/fbmsg.png')} />
                    </div>
                    <div id="chat_scro" className="widget__chat__body">
                        {chat.map(data => (
                            <MessageBox
                                position={user.displayName === data.username ? 'right' : 'left'}
                                text={data.title}
                                title={data.username}
                                avatar={data.image}
                                date={new Date(data.timeStamp.toDate())}
                            />
                        ))

                        }


                    </div>
                    <div className="widget__chat__bottom">
                        <Avatar src={user.photoURL} />
                        <form>
                            <div className="widget__chat__container">
                                <input placeholder={"Write a Message"} value={message} onChange={(e) => setMessage(e.target.value)} />
                            </div>

                            <button type="submit" className="widget__chat__button" onClick={(e) => messageHandler(e)} >Hidden button</button>
                        </form>
                    </div>
                </div>
            ) :


                (<div className="widget__chat__new">
                    <div className='widget__chat__cont'>
                        <img src={require('../../assets/messenger.jpg')} />
                        <Button variant="contained" color="primary" onClick={() => setIsMessaged(true)}>
                            Open Messenger
                 </Button>
                    </div>


                </div>)}


        </div >
    )
}

export default Widget;
