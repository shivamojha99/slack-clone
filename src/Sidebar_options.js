import React from 'react'
import './sidebaroption.css'
import db from './firebase'
import {useHistory} from "react-router-dom";
function Sidebar_options({Icon,title,id,addChannelOption,}) {
    const history= useHistory();
    const selectChannel =() =>{
        if(id)
        {
            history.push(`/room/${id}`)
        }else{
            history.push('title')
        }
    }
    const addChannel=()=>{
        const channelName=prompt('Please enter the channel Name')
        if(channelName)
        {
            db.collection("rooms").add({
                name:channelName,
            })
        }
    }

    

    return (
        <div className="sidebaroption" onClick={addChannelOption ? addChannel : selectChannel}>
            
            {Icon && <Icon className="sidebaroption_icon"/>}

            {Icon ? 
            (
                <h3>{title}</h3>
            ):(
                <h3 className="sidebaroption_channel">
                  <span className=" sidebaroption_hash">#</span> {title}
                </h3>

            )}

        </div>
    )
}

export default Sidebar_options
