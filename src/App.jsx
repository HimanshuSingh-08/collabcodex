import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Components/Login"
import Navbar from "./Components/Navbar"
import EditorPage from "./Components/EditorPage"
import HomePage from "./Components/HomePage.jsx"

function App() {

  return (
    <>
    <HomePage/>
      {/* <Navbar/>
      <BrowserRouter>
       <Routes>
          <Route path='/login' element={<Login/>} ></Route>
          <Route path='/editor/:roomid' element={<EditorPage/>} ></Route>

       </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
