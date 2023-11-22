"use client"
import { ITEM_SIDEBAR } from '@/constant/constant'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const LeftSideBar = () => {
  const pathName = usePathname()
  return (
    <div className='min-h-screen z-20 fixed left-0 bg-nft-gray-0 dark:bg-nft-black-2  min-w-256 md:hidden border-r dark:border-nft-black-4 border-gray-300 px-4 py-5'>
       <Link href="/client" className='flex items-center  dark:text-dark-green font-sans'>
           <Image
              src={"/assets/avatar.jpg"}
              height={10}
              width={27}
              alt='avatar'
              className='rounded-full mr-2 '
              />
            <h4 className=' font-semibold text-xl dark:text-white'>CryptoWave</h4>
            <h4 className=' font-semibold text-xl'>.com</h4>
       </Link>
       
      <div className='flex flex-col mt-14 gap-5 text-sm dark:text-white'>
        {ITEM_SIDEBAR.map(item => {
          return (
            <Link key={item.name} href={item.link} className={`${pathName ==(item.link) ? 'bg-green-lightmode dark:bg-green-darkmode text-text-light-green dark:text-white':''} 
            flex items-center gap-10 p-3  rounded-lg hover:dark:bg-green-darkmode hover:bg-green-lightmode hover:opacity-90`}>
              <Image
                    src={item.icon}
                    height={10}
                    width={17}
                    alt='avatar'
                    className='dark:invert text-green-lightmode'
                    />
                <h4>{item.name}</h4>
          </Link>
          )
        })}
      </div>
       
    </div>
  )
}

export default LeftSideBar