import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Components/Login"
import Navbar from "./Components/Navbar"
import EditorPage from "./Components/EditorPage"
import HomePage from "./Components/HomePage.jsx"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <>
    <div>
      <Toaster 
      position="top-center"
      />
      
    </div>
    
      {/* <Navbar/> */}
      <BrowserRouter>
       <Routes>
          <Route path="/" element={<HomePage/>} ></Route>
          <Route path="/login" element={<Login/>} ></Route>
          <Route path="/editor/:roomID" element={<EditorPage/>} ></Route>

       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
