import React from 'react'
import { forwardRef } from 'react'

const Input = forwardRef( function Input({
    type = 'text',
    className = '',
    ...props
}, ref)

{
    return (
    <div className='w-full'>
       <input type="text" {...props}  className={`w-full border border-black text-lg font-medium px-3 py-1 outline-none ${className}`} ref={ref}/>
    </div>
  )
}
)

export default Input
