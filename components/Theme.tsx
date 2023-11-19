"use client"

import React, { useEffect, useRef } from 'react'
import { useTheme } from '@/context/ThemeProvider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon
} from "@fortawesome/free-solid-svg-icons";


const Theme = () => {
    const {mode , setMode} = useTheme()
    const refChecked = useRef(null)
    const refBall = useRef(null)
    const handleChangeTheme = () => {
      if(mode === "light") {
        setMode("dark")
        localStorage.setItem("theme","dark")
         //@ts-ignore
        refBall.current.style.transform = "translateX(0px)"

      }else {
        setMode("light")
        localStorage.setItem("theme","")
         //@ts-ignore
        refBall.current.style.transform = "translateX(19px)"

      }
    }
  useEffect(() => {
     if(mode == "light") {
  
      //@ts-ignore
      refBall.current.style.transform = "translateX(19px)"
     }
  },[])
  return (
    <div >
         <input ref={refChecked}   type='checkbox'  className='checkbox' id='checkbox' onChange={() => handleChangeTheme()}/>
         <label htmlFor='checkbox' className={`flex justify-between items-center rounded-2xl px-1 relative bg-nft-gray-3 dark:bg-black   w-10 h-5 label`}>
          <FontAwesomeIcon icon={faSun} style={{fontSize : 13}} />
          <FontAwesomeIcon icon={faMoon} style={{fontSize : 13}}/>
          <div ref={refBall} className='h-4 w-4 bg-white rounded-full ball absolute cursor-pointer'/>
         </label>
    </div>
  )
}

export default Theme