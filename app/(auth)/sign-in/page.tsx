import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
        <SignIn 
        afterSignInUrl={'/client'} 
        afterSignUpUrl={'/client'} 
        />
    </div>
  )
}

export default page