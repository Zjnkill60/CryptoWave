"use client"

import React from 'react'
import { useTheme } from '@/context/ThemeProvider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon
} from "@fortawesome/free-solid-svg-icons";


const Theme = () => {
    const {mode , setMode} = useTheme()

    const handleChangeTheme = () => {
      if(mode === "light") {
        setMode("dark")
        localStorage.setItem("theme","dark")
      }else {
        setMode("light")
        localStorage.setItem("theme","")
      }
    }
  return (
    <div>
         <input type='checkbox' className='checkbox' id='checkbox' onChange={() => handleChangeTheme()}/>
         <label htmlFor='checkbox' className='flex justify-between items-center rounded-2xl px-1 relative bg-black w-10 h-5 label'>
          <FontAwesomeIcon icon={faSun} style={{fontSize : 13}} />
          <FontAwesomeIcon icon={faMoon} style={{fontSize : 13}}/>
          <div className='h-4 w-4 bg-white rounded-full ball absolute'/>
         </label>
    </div>
  )
}

export default Theme