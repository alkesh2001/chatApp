import React from 'react'

function UserCard({items}) {
  
    // console.log(items)

  return (
    <div className='w-full'>
       <div className='flex gap-4 items-center'>
         <div className='h-16 w-16'>
            <img src={items.avatar.url} alt="" className='h-14 w-14 rounded-full'/>
         </div>
         <div className=''>
            <div>{items.username}</div>
         </div>
       </div>
    </div>
  )
}

export default UserCard
