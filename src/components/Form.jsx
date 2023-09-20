import React from 'react'
import { useTask } from '../context/ContextProvider'

const Form = () => {
  const {handleChange, user, handleSubmit, updateState} = useTask()
  return (
    <div className='my-10'>
         <h2 className='text-2xl font-semibold text-center text-gray-100'>Add And Update Your Task</h2>
         <div className='w-[60%] mx-auto my-3 text-gray-300'>
         <form onSubmit={handleSubmit}>
             <div className='flex flex-col my-3'>
                 <label htmlFor="firstName" className='text-lg pb-0.5' >First Name</label>
                 <input type="text" value={user.firstName} name="firstName" id="firstName" className='py-2 outline-none px-4 bg-[#222] focus:outline-blue-300 focus:outline-[0.2px]' onChange={handleChange} required/>
             </div>
             <div className='flex flex-col my-3'>
                 <label htmlFor="lastName"  className='text-lg pb-0.5'>Last Name</label>
                 <input type="text" name="lastName" value={user.lastName} id="lastName" className='py-2 outline-none px-4 bg-[#222] focus:outline-blue-300 focus:outline-[0.2px]' onChange={handleChange} required/>
             </div>
             <div className='flex flex-col my-3'>
                 <label htmlFor="age" className='text-lg pb-0.5'>Age</label>
                 <input type="text" value={user.age} name="age" id="age" className='py-2 outline-none px-4 bg-[#222] focus:outline-blue-300 focus:outline-[0.2px]' onChange={handleChange} required/>
             </div>
             <div className='flex flex-col my-3'>
                 <label htmlFor="email" className='text-lg pb-0.5'>Email</label>
                 <input type="email" value={user.email} name="email" id="email" className='py-2 outline-none px-4 bg-[#222] focus:outline-blue-300 focus:outline-[0.2px]' onChange={handleChange} required/>
         </div>
         <button type='submit' className={`${updateState ? "bg-blue-500 hover:bg-blue-600" : "bg-green-500 hover:bg-green-600"} my-3 rounded py-2 px-4 text-gray-100 text-lg font-semibold`}>{updateState ? "Update Task" : "Add Task"}</button>
         </form>
     </div>
     </div>
  )
}

export default Form