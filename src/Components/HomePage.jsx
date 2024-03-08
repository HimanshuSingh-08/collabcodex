import "./HomePage.css";

import {v4} from 'uuid';

export default function HomePage() {

  const CreateNewRoom = (e)=>{
      // to stop the default 
      e.preventDefault();
      const id = v4();
      console.log(id);
  }
  
  return (
    <>
      <div className="homePageWrapper">
        <div className="formWrapper">
          <img className="homeImage" src="logo.jpg" alt="" />
          <h4 className="mainLabel">Paste the invitation Room ID </h4>
          <div className="inputGroup">
            <input type="text" className="inputBox" placeholder="ROOM ID" />
            <input type="text" className="inputBox" placeholder="USERNAME" />
            <button className="btn joinbtn">Join</button>
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
