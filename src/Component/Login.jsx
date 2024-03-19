import React from "react";
import { Input } from "./index";
import { Link, json, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import axios from 'axios'
import { login as authLogin, userAccessToken } from "../Store/authSlice";

function SignUp() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const submit = async (userData) =>{
      try {
        const response = await axios.post("http://localhost:8080/api/v1/users/login",
        userData,{
          headers : {
            'accept' : 'application/json',
            'content-type' : 'application/json'
          }
        });
        localStorage.setItem('response' , JSON.stringify(response))
        dispatch(userAccessToken(response.data.data.accessToken))
        if(response.status === 200){
          const getCurrentUser = await axios.get('http://localhost:8080/api/v1/users/current-user',{
            headers:{
              'accept' : 'application/json',
              Authorization : `Bearer ${response.data.data.accessToken}`
            }
          }) 
         if(getCurrentUser.data){
          console.log(getCurrentUser)
          dispatch(authLogin(getCurrentUser.data))
         }
         navigate('/Home')
        }
      } catch (error) {
        console.error("error when user login" , error)
      }
  }



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
                Please , LogIn.
              </p>
            </div>
            <div>
             <form action="" onSubmit={handleSubmit(submit)}>
              <div className="px-8">
                <Input
                type='email'
                   {...register('email' ,{
                    required: true
                   })}
                  placeholder="Email"
                  className="h-12 my-3 rounded-3xl border-gray-400"
                />
                <Input
                {...register('password' ,{
                  required: true
                })}
                type='password'
                  placeholder="Password"
                  className="h-12 rounded-3xl border-gray-400"
                />
              </div>
              <div className="flex justify-center my-6 px-8 ">
                <button type="submit"
                  className=" text-xl font-medium py-3 w-full flex justify-center items-center rounded-3xl "
                  style={{ backgroundColor: "#b8dbd9" }}
                >
                  Continue
                  <span className="mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-chevron-right"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </span>
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
                  <Link to={"/SignUP"}>Create an Account</Link>
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
