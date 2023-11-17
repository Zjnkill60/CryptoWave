/* eslint-disable */
"use client"

// import Cloud from '../vanta/src/vanta.clouds.js'
//@ts-ignore

import Cloud from '../node_modules/vanta/src/vanta.clouds.js'

import { useEffect, useState } from "react"
import Image from 'next/image'
import Theme from './Theme'
import { useTheme } from '@/context/ThemeProvider'

export const Background = () => {

    const {mode} = useTheme()
    useEffect(() => {
        mode == "light" ? 
        Cloud({
        el: "#vanta",
        skyColor:0x68b8d7,
        cloudColor:0xadc1de,
        cloudShadowColor:0x183550,
        sunColor:0xd4b48c,
        sunGlareColor:0xff6633,
        sunlightColor:0xff9933,
        speed:2
      }) : 
      Cloud({
        el: "#vanta",
        skyColor:0x334952,
        cloudColor:0x141e2d,
        cloudShadowColor:0x183550,
        sunColor:0x785428,
        sunGlareColor:0xcdaf91,
        sunlightColor:0xcdaf91,
        speed:2
      }) 
    },[mode])
  
    return (
      <div className=' min-h-screen  w-screen relative  flex justify-center items-center dark:text-nft-gray-1 text-nft-gray-3 font-normal ' id='vanta'>
        <div className='z-10 absolute top-8 right-10'>
          <Theme/>
        </div>
        <div className=' z-10  flex flex-col justify-center items-center p-4'>
            <div className='flex items-center  gap-5 '>
                <h2  className='text-6xl md:text-4xl	 '>Crypto.wave </h2>
                <Image 
                src={"/assets/avatar.jpg"}
                height={10}
                width={40}
                alt='avatar'
                className='rounded-full  '
                />
            </div>
            <h4 className='mt-7 text- md:text-sm sm:text-xs text-center'>Thân thiện, hỗ trợ nhiệt tình nhất với khách hàng. Làm việc đặt cái tâm lên hàng đầu </h4>
            <button className='mt-10  px-8 nft-gradient  text-sm font-semibold py-3 text-nft-gray-3  rounded-md'>Get started !</button>
        </div>
      </div>
    )
  }