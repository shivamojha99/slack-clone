import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import "./ChatInput.css"
import db from './firebase';
import firebase from "firebase"
import {useStateValue} from "./StateProvider"

function ChatInput({ChannelName, ChannelId}) {
   const [input,setInput]= useState("");
   const [{user}]=useStateValue();
    const sendMessage = (e)=>{
            e.preventDefault();

    console.log(ChannelId)
    if(ChannelId)
    {
        db.collection("rooms").doc(ChannelId).collection("messages").add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            user:user.displayName,
            userImage:user.photoURL,
        });

    } setInput("");
}
    return (
        <div className="chatInput">
            <form>
                <input
                value={input}
                onChange={e=> setInput(e.target.value)}
                placeholder={`Message# ${ChannelName?.toLowerCase()}`}/>
                <button type="submit" onClick={sendMessage}>SEND</button>
            </form>
        </div>
    )
}

export default ChatInput
