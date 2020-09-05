import React from 'react'
import './Login.css'
import GoogleButton from 'react-google-button';
import { auth, provider } from '../../firebase/firebase';
import { actionTypes } from '../../store/reducer';
import { useStateValue } from '../../store/StateProvider'



const Login = () => {

    const [ state , dispatch ] = useStateValue(); 

    const loginHandler = () => {

        auth.signInWithPopup(provider).then(response => {
            dispatch({
                type:actionTypes.SET_USER,
                user:response.user
            })
        }).catch(err => {
            //error
        });

    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="load" />
                <div className="login__text">
                    <GoogleButton onClick={() => loginHandler()} />
                </div>
            </div>
        </div>
    )
}

export default Login;
