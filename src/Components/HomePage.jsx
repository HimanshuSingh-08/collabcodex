import { useState } from "react";
import "./HomePage.css";

import {v4} from 'uuid';
import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";

export default function HomePage() {

  const navigate = useNavigate();

  const [roomId , setroomId] = useState('');
  const [username , setuserName] = useState('');

  const CreateNewRoom = (e)=>{
      // to stop the default 
      e.preventDefault();
      const id = v4();
      setroomId(id);
      toast.success('Joining room Id Created !!');
  }

  const joinRoom = () =>{
      //check if valid user or name input
      if(!roomId || ! username){
        console.log(roomId);
        toast.error('Invalid username or roomId');
        return;
      }
      console.log(roomId);
      navigate(`/editor/${roomId}`,{
        
        state :{
          username
        }
      });
  }

  
  return (
    <>
      <div className="homePageWrapper">
        <div className="formWrapper">
          <img className="homeImage" src="logo.jpg" alt="" />
          <h4 className="mainLabel">Paste the invitation Room ID </h4>
          <div className="inputGroup">
            <input type="text" className="inputBox" placeholder="ROOM ID" value={roomId} onChange={(e)=>setroomId(e.target.value)} />
            <input type="text" className="inputBox" placeholder="USERNAME" value={username} onChange={(e)=>setuserName(e.target.value)} />
            <button className="btn joinbtn" onClick={joinRoom} >Join</button>
            <span className="createInfo">
              If you dont have invite then create &nbsp;
              <a onClick={CreateNewRoom} href="" className="createNewBtn">
                new Room
              </a>
            </span>
          </div>
        </div>
       
        <footer>
        <h4>Building for Web.</h4>
      </footer>
      </div>
     
    </>
  );
}
