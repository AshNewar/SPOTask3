import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className='header section_padding'>
        <div className='logo'>Tasks</div>
        <div className='links'>
            <Link className='Link' to={"/"}>Home</Link>
            <Link className='Link' to={"/login"}>Login</Link>
            <Link className='Link' to={"/signup"}>SignUp</Link>
        </div>
      
    </div>
  )
}

export default Header
