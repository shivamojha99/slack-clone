import React,{useState} from 'react'
import "./login.css"
import {Button }from "@material-ui/core"
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
  const[state, dispatch]= useStateValue();
    const SignIn = () =>{
        auth
        .signInWithPopup(provider)
        .then(result =>{
            console.log(result)
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user

            })
        } )
        .catch(error =>{
            alert(error.message);
        });
    }
    return (
        <div className="login">
            <div className="login_container">
                <img
                src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
                alt=""
             />
             <h1> Sign in to CodeChamps HQ</h1>
             <p> CodeChamps.slack.com</p>
             <Button onClick={SignIn}>Sign in with GOOGLE</Button>

            </div>
            
        </div>
    )
}

export default Login
