import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { AuthContext } from '../../context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

export default function Register() {
  const {createUser,user,updateUser,googleSignIn} = useContext(AuthContext)
    const [inputUser, setinputUser] = useState({});
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleSubmit = (event) => {
      event.preventDefault();
      createUser((inputUser.email),(inputUser.password))
      .then(result=>{
        const user = result.user;
        console.log(user);
        handleUserProfile(inputUser.name,inputUser.photoUrl)
        event.target.reset();
        navigate(from,{replace:true});
       
    })
    .catch(error=>console.error(error))
      console.log(inputUser)
    };
    const inputValue = (event) => {
      const field = event.target.name;
      const value = event.target.value;
      const newUser = { ...inputUser };
      newUser[field] = value;
      setinputUser(newUser);
   
    };
    const handlegooglesign=()=>{
      googleSignIn(provider)
      .then(result=>{
        const user = result.user;
        console.log(user);
      })
      .catch(error=>console.error(error))
    }
    const handleUserProfile = (name,photoUrl)=>{
      const profile = {
        displayName:name,
        photoURL:photoUrl
      }
      updateUser(profile)
      .then(()=>{ })
      .catch(error=>console.error(error))
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-row ">
        <div className="text-center lg:text-left">
          <h1 className="text-center text-5xl font-bold mb-6">SignUP now!</h1>
          <img className="w-3/4" src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                onBlur={inputValue}
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                onBlur={inputValue}
                name="photoUrl"
                type="text"
                placeholder="photoUrl"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                onBlur={inputValue}
                name="email"
                type="email"
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
            
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="SignUp" />
            </div>
            <p className='text-center'>Or sign up with</p>
            <div className='flex justify-center gap-6 text-4xl'>
                <FcGoogle onClick={handlegooglesign}></FcGoogle>
                <FaGithub></FaGithub>
            </div>
          <p className="text-center">Already have an account?  <Link className="text-orange-600" to='/login'>Log In</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}
