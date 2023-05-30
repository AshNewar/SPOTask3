import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { server } from "../../main";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {

      const { data } = await axios.post(
        `${server}/signup`,
        { name, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, //or cookie will not work
        }
      );

      toast.success(data.msg);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className='body'>
      <section className='loginpage'>
        <div className='head'>
          <h1 id='login'>SignUp</h1>
        </div>
        <div id='l_des'>Welcome to the Family</div>
        <form onSubmit={submitHandler}>
          <div className='inp_name'>
            <div className='name_placeholder'>Name</div>
            <input
              type='text'
              name='name'
              value={name}
              className='username'
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className='inp_name'>
            <div className='name_placeholder'>Email</div>
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
            <Link className='mem' to={"/login"}>
              Already a Member?
            </Link>
            <button type='submit' className='continue'>
              Create
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SignUp;
