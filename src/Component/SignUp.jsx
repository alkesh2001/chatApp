import React from "react";
import { Input } from "./index";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../Store/authSlice";

function SignUp() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submit = async (userdata) => {
     try {
       const response = await axios.post("http://localhost:8080/api/v1/users/register",
       userdata,
       {
        headers: {
            'accept' : 'application/json',
            'content-type' : 'application/json'
        }
       });
       if(response.status === 200) {
          const getCurrentUser = await axios.get('http://localhost:8080/api/v1/users/current-user',{
            headers:{
              'accept' : 'application/json'
            }
          }) 
         if(getCurrentUser.data){
          console.log(getCurrentUser.data)
          dispatch(login(getCurrentUser.data))
         }
        }
        navigate('/Home')
     } catch (error) {
       console.error('error in signup when user ' ,error)
     }
  };

  return (
    <div className="h-screen w-screen ">
        <div className="h-full " style={{ backgroundColor: "#f4f4f9" }}>
          <div className="h-1/5 "></div>
          <div className="pt-6">
            <div className="">
              <div className="py-5">
                <p className="text-md  font-medium text-gray-400 text-center ">
                  Welcome
                </p>
                <p className="text-2xl font-medium text-black text-center my-2">
                  Let's Get Started
                </p>
              </div>
              <div>
               <form action="" onSubmit={handleSubmit(submit)}>
                <div className="px-8">
                  <Input
                    {...register("username", {
                      required: true,
                    })}
                    placeholder="Username"
                    type="text"
                    className="h-12 border-gray-400 rounded-3xl"
                  />
                  <Input
                    {...register("email", {
                      required: true,
                    })}
                    placeholder="Email"
                    type="email"
                    className="h-12 my-3 rounded-3xl border-gray-400"
                  />
                  <Input
                      type="password"
                    {...register("password", {
                      required: true,
                    })}
                    placeholder="Password"
                    className="h-12 rounded-3xl border-gray-400"
                    />
                </div>
                <div className="flex justify-center my-6 px-8 ">
                  <button
                  type="submit"
                  className=" text-xl font-medium py-3 w-full rounded-3xl "
                  style={{ backgroundColor: "#b8dbd9" }}
                  >
                    Create an Account
                  </button>
                </div>
                    </form>
              </div>
              <div className="">
                <div className="flex justify-center items-center gap-3">
                  <span className="border-gray-300 border w-32"></span>
                  <span className="text-md font-medium"> Or</span>
                  <span className="border-gray-300 border w-32"></span>
                </div>
                <div className="flex justify-center my-5 px-8 ">
                  <button
                    className=" text-xl py-3 font-medium w-full rounded-3xl"
                    style={{ backgroundColor: "#b8dbd9" }}
                    >
                    <Link to={"/Login"}>Login</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default SignUp;
