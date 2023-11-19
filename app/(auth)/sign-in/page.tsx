import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen relative flex justify-center items-center  bg-nft-black-4 overflow-hidden'>
       <div className='absolute min-w-[600px] min-h-[600px] md:min-w-[300px] md:min-h-[300px]  -top-40 -left-40 bg-nft-black-1 rounded-full'/>
       <div className='absolute min-w-[600px] min-h-[600px]  md:min-w-[300px] md:min-h-[300px] -bottom-40 -right-40 bg-nft-black-1 rounded-full'/>

        <SignIn 
        afterSignInUrl={'/client'} 
        afterSignUpUrl={'/client'} 
        />
    </div>
  )
}

export default page