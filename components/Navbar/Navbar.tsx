import { SignedIn, UserButton } from '@clerk/nextjs'
import React from 'react'
import Theme from '../Theme'

const Navbar = () => {
  return (
    <div className='flex  fixed z-10  py-4  w-full md:px-4 px-6 text-center bg-nft-gray-0 dark:bg-nft-black-4 border-b dark:border-nft-black-1 border-gray-300'>
        <div className='flex justify-end w-full items-center gap-10'>

         <Theme/>
        <SignedIn>
          <UserButton
            afterSignOutUrl="/" 
            appearance={{
                elements: {
                  avatarBox: "h-8 w-8 border-1",
                  
                },
              }}/>
          </SignedIn>
        </div>
      
    </div>
  )
}

export default Navbar