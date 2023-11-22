import { SignedIn, UserButton } from '@clerk/nextjs'
import React from 'react'
import Theme from '../Theme'
import MenuMobile from './MenuMobile'


const Navbar = () => {
  return (
    <div className='flex  fixed left-0 right-0 z-10  py-4  w-full text-center bg-nft-gray-0 dark:bg-nft-black-4 border-b dark:border-nft-black-1 border-gray-300'>
        <div className='flex items-center justify-between w-full   md:px-4 px-6'>

          <MenuMobile/>

          <div className='flex items-center gap-10'>
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
      
    </div>
  )
}

export default Navbar