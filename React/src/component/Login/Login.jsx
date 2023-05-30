import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { server } from "../../main";

import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {

      const { data } = await axios.post(
        `${server}/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, //or cookie will not work
        }
      );

      toast.success(data.msg + " "+data.name);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className='body'>
      <section className='loginpage'>
        <div className='head'>
          <h1 id='login'>Login</h1>
        </div>
        <div id='l_des'>Please enter your credentials here</div>
        <form onSubmit={submitHandler}>
          <div className='inp_name'>
            <div>
              <span className='name_placeholder'>Email</span>
            </div>
            <input
              type='email'
              name='email'
              value={email}
              required
              className='username'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className='inp_name' id='pass_inp_name'>
            <div>
              <span className='name_placeholder'>Password</span>
            </div>
            <input
              type='password'
              name='password'
              value={password}
              required
              className='username'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className='bottom'>
            <Link className='continue' to={"/signup"}>
              SignUp
            </Link>
            <button type='submit' className='continue'>
              Login now
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
