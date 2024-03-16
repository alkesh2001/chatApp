import React from 'react'
import {Input} from './index'

function Login() {
  return (
    <div className='h-screen w-screen '>
        <div className='h-full ' style={{backgroundColor:'#f4f4f9'}}>
           <div className='h-1/5 '>
           </div>
           <div className='pt-6'> 
              <div className=''>
                <div className='py-5'>
                   <p className='text-md  font-medium text-gray-400 text-center '>Welcome</p>
                   <p className='text-2xl font-medium text-black text-center my-2'>Let's Get Started</p>
                </div>
                <div>

                  <div className='px-8'>
                    <Input placeholder='Username' className="h-12 rounded-3xl"/>
                    <Input placeholder='Email' className="h-12 my-3 rounded-3xl"/>
                    <Input placeholder='Password' className="h-12 rounded-3xl"/>
                  </div>
                  <div className='flex justify-center my-6 px-8 '>
                    <button className=' text-xl py-3 w-full rounded-3xl ' style={{backgroundColor:'#b8dbd9'}}>
                       Create an Account
                    </button>
                  </div>
                </div>
                <div className=''>
                    <div className='flex justify-center items-center gap-3'>
                      <span className='border-gray-300 border w-32'></span>
                      <span  className='text-md font-medium'> Or</span>
                      <span  className='border-gray-300 border w-32'></span>
                    </div>
                    <div className='flex justify-center my-5 px-8 '>
                      <button className=' text-xl py-3 w-full rounded-3xl'  style={{backgroundColor:'#b8dbd9'}}> 
                        Login
                      </button>
                    </div>
                </div>
              </div>
           </div>
        </div>
    </div>
)
}

export default Login
                    