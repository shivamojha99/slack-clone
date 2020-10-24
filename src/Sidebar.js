import React,{useState,useEffect} from 'react'
import  "./Sidebar.css"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import CreateIcon from "@material-ui/icons/Create"
import Sidebar_options from './Sidebar_options';
import InsertCommentIcon from "@material-ui/icons/InsertComment"
import InboxIcon from "@material-ui/icons/Inbox"
import DraftsIcon from "@material-ui/icons/Drafts"
import BookmarkIcon from "@material-ui/icons/Bookmark"
import PeopleAltIcon from "@material-ui/icons/PeopleAlt"
import AppsIcon from "@material-ui/icons/Apps"
import AddIcon from "@material-ui/icons/Add"
import db from "./firebase";
import { useStateValue } from './StateProvider';

function Sidebar() {

    const[channels,setChannels]=useState([]);
    const [{user}]= useStateValue();
    useEffect(()=>{
        db.collection("rooms").onSnapshot(snapshot=>(
            setChannels(
                snapshot.docs.map(doc=>({
                    id:doc.id,
                    name:doc.data().name,      
                }))
            )
        ))
    },[])

    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>CodeChamps</h2>
                    <h3>
                    <FiberManualRecordIcon/>
                    {user?.displayName}
                    </h3>
                </div>
                <CreateIcon/>
               
            </div>
            <Sidebar_options Icon={InsertCommentIcon} title="shivam" />
            <Sidebar_options  title="Youtube Channel" />
            <Sidebar_options Icon={InboxIcon} title="Inbox" />
            <Sidebar_options Icon={DraftsIcon} title="Drafts" />
            <Sidebar_options Icon={BookmarkIcon} title="Bookmark" />
            <Sidebar_options Icon={PeopleAltIcon} title="People" />
            <Sidebar_options Icon={AppsIcon} title="Apps" />
            <Sidebar_options Icon={AddIcon} addChannelOption title="Add Channel" />
            {channels.map(channel=>(
                    <Sidebar_options title={channel.name} id={channel.id}/> 
            ))}
        </div>
    )
}

export default Sidebar
