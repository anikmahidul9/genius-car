import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { AuthContext } from "../../context/AuthProvider";

export default function Login() {
  const { user,logIn} = useContext(AuthContext);
  const [inputUser, setinputUser] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const handleSubmit = (event) => {
    event.preventDefault();
    logIn((inputUser.email),(inputUser.password))
    .then(result=>{
      const user = result.user;
      console.log(user)
      navigate(from,{replace:true});
     
      event.target.reset();
    })
    .catch(err => console.error(err));
  
  };
  const inputValue = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...inputUser };
    newUser[field] = value;
    setinputUser(newUser);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-row ">
        <div className="text-center lg:text-left">
          <h1 className="text-center text-5xl font-bold mb-6">Login now!</h1>
          <img className="w-3/4" src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                onBlur={inputValue}
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                onBlur={inputValue}
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          <p className="text-center">Are you new?  <Link className="text-orange-600" to='/register'>Sign Up</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}
