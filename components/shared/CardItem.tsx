"use client"
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

interface Item {
    name:string,
    description:string,
    price:number,
    fakePrice:number,
    id:string
}
const CardItem = (params:Item) => {
    const router = useRouter()
    const searchParams = useSearchParams().get('packed')

    const formatter = new Intl.NumberFormat('en-US', {
        currency: 'vnd',
      
      });
      
      
  return (
    <div onClick={() => router.push(`?packed=${params.id}`)} className='p-4 dark:bg-nft-black-1 hover:opacity-80 cursor-pointer w-full rounded-lg min-h-[180px] flex flex-col justify-between sd:min-h-[150px] relative overflow-hidden'>
       {searchParams == params.id ?<div className='absolute -top-1 -right-1 w-10 h-10 dark:bg-dark-green rounded-xl grid place-items-center'>
         <FontAwesomeIcon icon={faCheck} className='dark:invert' />
        </div>:<></> } 
       <div>
            <h4 className=' md:text-base font-semibold'>{params.name}</h4>
            <p className='text-sm md:text-xs  dark:text-gray-400 text-gray-700 mt-2'>{params.description}</p>
       </div>

        <div className=''>
            <div className='w-full h-[1px] dark:bg-nft-gray-3 my-5 '/>
            <div className='flex items-center justify-between mt-auto'>
               <div className='flex items-center gap-3'>
                    <h4 className='font-semibold text-sm  dark:text-dark-green  text-text-light-green '>{formatter.format(params.price)}đ</h4>
                    <h4 className='font-semibold text-xs  dark:text-dark-green  text-text-light-green line-through opacity-80'>{formatter.format(params.fakePrice)}đ</h4>
               </div>
                <h4 className='dark:text-dark-green  text-text-light-green text-xs opacity-80'>Có Bảo Hành</h4>
            </div>
        </div>
    </div>
  )
}

export default CardItem