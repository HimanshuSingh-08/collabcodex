import { useState } from "react"
import Client from "./Client"
import './Editor.css';
import Editor from "./Editor"

export default function EditorPage() {

  const [clients , setClients] = useState([
    {socket_id :1 , username :"user1"},
    {socket_id :2 ,  username: "user2"},
    {socket_id :3 , username :"user3"},
    {socket_id :4 , username : "user4"},
  ])


  return (
    <>
     <div className="mainWrapper" >
        <div className="aside" >
            <div className="asideInner" >
                <div className="logo">
                  <img className="logoImage"  src="code.png" alt=" " />
                </div>
                <h3>Connected</h3>
                <div className="clientsList" >
                       {clients.map((client)=>{
                          return  <Client username={client.username} key={client.socket_id} />
                       })}
                </div>
            </div>
            <button className="copybtn btn" > Copy ROOM ID</button>
            <button className="leavebtn btn" >Leave ROOM</button>

        </div>

        <div className="editorWrapper" >
          <Editor/>
        </div>

     </div>
    </>
  )
}
