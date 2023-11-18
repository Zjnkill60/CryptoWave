"use client"
import Cloud from 'vanta/dist/vanta.clouds.min.js'
import { useEffect, useRef, useState } from "react"
import Image from 'next/image'
import Theme from './Theme'
import { useTheme } from '@/context/ThemeProvider'
import { SignedIn, UserButton } from "@clerk/nextjs";
import { useRouter } from 'next/navigation'

export const Background = () => {
    const vantaRef = useRef(null)
    const router = useRouter()

    const {mode} = useTheme()

    useEffect(() => {
       let effect:any
        if(vantaRef.current) {
          effect =  mode === "light" ? 
          Cloud({
          el:vantaRef?.current,
          skyColor:0x68b8d7,
          cloudColor:0xadc1de,
          cloudShadowColor:0x183550,
          sunColor:0xd4b48c,
          sunGlareColor:0xff6633,
          sunlightColor:0xff9933,
          speed:2
        }) : 
        Cloud({
          el:vantaRef?.current,
          skyColor:0x334952,
          cloudColor:0x141e2d,
          cloudShadowColor:0x183550,
          sunColor:0x785428,
          sunGlareColor:0xcdaf91,
          sunlightColor:0xcdaf91,
          speed:2
        }) 
        }
    },[mode])
  
    return (
      <>

      {<div className=' min-h-screen  w-screen relative  flex justify-center items-center dark:text-nft-gray-1 text-nft-gray-3 font-normal ' ref={vantaRef}>
      <div className='z-10 absolute top-8 right-10 flex gap-10 items-center'>
        
        <div className='flex gap-5 md:gap-3'>
           {['/assets/twitter.png','/assets/discord.png','/assets/telegram.png','/assets/instagram.png'].map((item,index) => {
            return (
            <Image 
              src={item}
              key={index}
              alt='social'
              width={20}
              height={20}
              className='invert dark:invert-0 cursor-pointer hover:opacity-80 '
            />)
           })}
        </div>
        <SignedIn>
          <UserButton 
            afterSignOutUrl="/" 
            appearance={{
                elements: {
                  avatarBox: "h-9 w-9",
                },
              }}/>
          </SignedIn>
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
          <h4 className='mt-7 md:mt-10 text- md:text-sm sm:text-xs text-center'>Thân thiện, hỗ trợ nhiệt tình nhất với khách hàng. Làm việc đặt cái tâm lên hàng đầu </h4>
          <button onClick={() => router.push('/client')} className='mt-10 md:mt-5  hover:opacity-90  px-8 nft-gradient  text-sm font-semibold py-3 text-nft-gray-3  rounded-md'>Get started !</button>
      </div>
    </div>}
      </>
    )
  }