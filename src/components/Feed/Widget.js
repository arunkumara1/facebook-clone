import React from 'react'
import './Widget.css';
import 'react-chat-elements/dist/main.css';
import { MessageBox } from 'react-chat-elements'
import { Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const Widget = () => {

    const [click, setClick] = React.useState(false);

    return (
        <div className="widget">


            {click ? (
                <div className="widget__chat__area">
                    <div className="widget__chat__top">
                        <img src={require('../../assets/fbmsg.png')} />
                    </div>
                    <div className="widget__chat__body">

                        <MessageBox
                            position={'right'}
                            // type={'photo'}
                            text={'HElloooo'}
                            avatar={'https://lh3.googleusercontent.com/a-/AOh14GiLIriToFUsO3dU8mUABAqz-ppZ17BGTdKmU-bjFg'}
                        />
                        <MessageBox
                            position={'left'}
                            // type={'photo'}
                            text={'Heyy da'}
                            avatar={'https://lh3.googleusercontent.com/a-/AOh14GhHFrtVyHkbkoYhsjyJpM3A5aM3UAkk7_tcwUBHtw'}
                        />
                        <MessageBox
                            position={'left'}
                            // type={'photo'}
                            text={'flower'}
                            avatar={'https://lh3.googleusercontent.com/a-/AOh14GgYTMBvKYdV9XWG6GjcRQIyp_g-lgqYk4GjAaQ-'}
                        />

                    </div>
                    <div className="widget__chat__bottom">
                        <Avatar src="" />
                        <form>
                            <div className="widget__chat__container">
                                <input placeholder={"Write a Message"} />
                            </div>

                            <button type="submit" className="widget__chat__button" >Hidden button</button>
                        </form>
                    </div>
                 </div>
            ) :


                (<div className="widget__chat__new">
                    <div className='widget__chat__cont'>
                    <img src={require('../../assets/messenger.jpg')} />
                    <Button variant="contained" color="primary" onClick={() => setClick(true)}>
                        Join Messenger
                 </Button>
                    </div>


                </div>)} 


        </div >
    )
}

export default Widget;
