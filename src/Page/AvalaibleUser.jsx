import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { UserCard } from '../Component'

function AvalaibleUser() {

    const Token = useSelector(state => state.auth.accessToken)
     
    const [userData , setUserData] = useState(null)
    const [selectedData , setSelectedData] = useState(null)

    const [showChat , setShowChat] = useState(false)


    const Chatopen = (index) =>{
        setSelectedData(index)
             setShowChat(!showChat)
            //  userData
    }
    // console.log(userData(selectedData))

  const user = async() =>{
       try {
        const response = await axios.get('http://localhost:8080/api/v1/chat-app/chats/users',{
            headers:{
                'accept': 'application/json',
                Authorization : `Bearer ${Token}`
            }
        })
        if(response.status === 200){
            // console.log(response.data.data)
            setUserData(response.data.data)
        }
       } catch (error) {
         console.error('user list no fetch' , error)
       }
  }

    useEffect(()=>{
        user();     
    },[])

//    console.log(userData)

  return (
    <div className='h-screen w-screen'>
         <div className='px-5 py-5'>
            {userData && userData.map((items,index)=> (
                <div key={index._id} onClick={()=> Chatopen(index)}>
                    <UserCard  items={items} />
                </div>
            ))}
         </div>
         {
            selectedData !== null &&

         (<div className={`${showChat ? '' : 'hidden'} bg-green-500 w-full h-1/2 fixed  bottom-0 left-0`}>
            <div className='px-4 py-2'>
                <div className='h-14 flex gap-6 items-center'>
                    <div className='h-14 w-14 '>
                         <img src={userData[selectedData].avatar.url} alt=""  className='h-12 w-12  rounded-full'/>
                    </div>    
                    <div>{userData[selectedData].username}</div>    
                </div>   
                <div className='h-full bg-blue-400'>

                </div>
            </div>

         </div>)
         }
    </div>
  )
}

export default AvalaibleUser
