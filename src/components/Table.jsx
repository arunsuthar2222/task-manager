import React from 'react'
import {MdDelete} from 'react-icons/md'
import {IoIosCreate} from "react-icons/io"
import { useTask } from '../context/ContextProvider'

const Table = () => {
    const {data, handleDelete, handleUpdate} = useTask()
  return (
    <>
    <div className='w-[60%] mx-auto my-8'>
    <h3 className='text-2xl font-semibold text-center text-gray-100 my-5'>Your Data</h3>
        
       <table className='w-full table-fixed'>
        <thead className='bg-[#333]'>
            <th className='text-xl font-medium py-3 text-gray-200'>First Name</th>
            <th className='text-xl font-medium py-3 text-gray-200'>Last Name</th>
            <th className='text-xl font-medium py-3 text-gray-200'>Age</th>
            <th className='text-xl font-medium py-3 text-gray-200'>Email</th>
            <th className='text-xl font-medium py-3 text-gray-200'>Delete</th>
            <th className='text-xl font-medium py-3 text-gray-200'>Update</th>
        </thead>
        <tbody>
            {
              data.length > 0 && 
              data.map((item, index) => (
                <tr className='bg-[#222] shadow-lg' key={index}>
                <td className='pl-12 py-2 text-gray-300 text-lg'>{item.firstName}</td>
                <td  className='pl-12 py-2 text-gray-300 text-lg'>{item.lastName}</td>
                <td className='pl-12 py-2 text-gray-300 text-lg'>{item.age}</td>
                <td className='pl-0 py-2 text-gray-300 text-lg'>{item.email}</td>
                <td className='pl-12 py-2 text-gray-300 text-lg'>
                    <button className='text-red-500 font-bold hover:text-red-600 pl-7 text-2xl' onClick={()=> handleDelete(index)}><MdDelete /></button>
                </td>
                <td className='pl-8 py-4'>
                <button className='text-blue-500 font-bold hover:text-blue-600 text-2xl' onClick={()=> handleUpdate(item, index)}><IoIosCreate /></button>
                </td>
            </tr>      
              ))
            }        
        </tbody>
       </table>
      </div> 
      </>
  )
}

export default Table