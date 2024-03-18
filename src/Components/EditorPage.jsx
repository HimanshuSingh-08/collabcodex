import { useState } from "react"

import Client from "./Client"

export default function EditorPage() {

  const [clients , setClients] = useState([
    {socket_id :1 , username :"user1"},
    {socket_id :2 ,  username: "user2"},
    {socket_id :3 , username :"user3"},
    {socket_id :4 , username : "user4"},
  ])


  return (
    <>
    <h1>this is the editor page </h1>
     <div className="mainWrapper" >
      <h1>hello this is me </h1>
        <div className="aside" >
            <div className="asideInner" >
                <div className="logo">
                  <img className="logoImage"  src="logo.jpg" alt="logo" />
                </div>
                <h3>Connected</h3>
                <div className="clientsList" >
                       {clients.map((client)=>{
                          return  <Client username={client.username} key={client.socket_id} />
                       })}
                </div>
            </div>
        </div>

        <div className="editorWrap" >
          editor Goes here..
        </div>

     </div>
    </>
  )
}
