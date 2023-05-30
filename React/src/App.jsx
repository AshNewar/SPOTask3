import {Route, BrowserRouter as Router, Routes}  from "react-router-dom";
import Login from "./component/Login/Login";
import SignUp from "./component/Login/SignUp";
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <Router>
    <Header/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/signup"} element={<SignUp/>}/>
      </Routes>
      <Toaster/>
    </Router>
      
    
  )
}

export default App
