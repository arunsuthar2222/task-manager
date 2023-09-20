import React from 'react'
import { useTask } from '../context/ContextProvider'
import { CSVLink } from 'react-csv'

import {HiDownload} from "react-icons/hi"

export const CsvDownload = () => {
  const {data} = useTask();
  const headers = [
    {
      label:"First Name",
      key: "firstName"
    },
    {
      label:"Last Name",
      key: "lastName"
    },
    {
      label:"Age",
      key: "age"
    },
    {
      label:"Email",
      key: "email"
    }];

    const csvLink = {
      filename:'file.csv',
      headers,
      data
    }
  return (
    <button className='fixed bottom-32 right-24 rounded-full p-2 bg-blue-600'>
      <CSVLink {...csvLink}><HiDownload  className='text-3xl text-gray-200'/></CSVLink>
    </button>
  )
}
