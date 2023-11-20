"use client"
import { formatter } from '@/lib/utils';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useEffect } from 'react'

interface Item {
    name:string,
    description:string,
    price:number,
    fakePrice:number,
    id:string
}
const CardItem = (params:Item) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const packedParams = useSearchParams().get("packed")
    const pathname = usePathname()

   

    const createQueryString = useCallback(
        (name: string, value: string) => {
          const params = new URLSearchParams(searchParams)
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
    )  

    const getSubString = () => {
      if(params.id == "view") return "/ 1M View"
      if(params.id == "folow") return "/ 100 Follow"
      if(params.id == "combo") return ""
      return ""
    }

    useEffect(() => {
      if(!packedParams) {
        router.push(pathname + '?' + createQueryString('packed', "view"),{scroll:false})
      }
    },[])
      
  return (
    <div onClick={() =>  router.push(pathname + '?' + createQueryString('packed', params.id),{scroll:false})} className=' z-0 p-4 dark:bg-nft-black-1 bg-gray-200 hover:opacity-80 cursor-pointer w-full rounded-lg min-h-[200px] flex flex-col justify-between sd:min-h-[150px] relative overflow-hidden'>
       {packedParams == params.id ?<div className='absolute -top-1 -right-1 w-10 h-10 dark:bg-dark-green bg-green-lightmode rounded-xl grid place-items-center'>
         <FontAwesomeIcon icon={faCheck} className='dark:invert' />
        </div>:<></> } 
       <div>
            <h4 className='font-semibold line-clamp-2 '>{params.name}</h4>
            <p className='text-sm md:text-xs  dark:text-gray-400 text-gray-700 mt-3 line-clamp-2'>{params.description}</p>
       </div>

        <div className=''>
            <div className='w-full h-[1px] dark:bg-nft-gray-3 bg-nft-gray-2 my-5 '/>
            <div className='flex  justify-between mt-auto xl:flex-col-reverse '>
               <div className='flex items-center gap-3'>
                    <h4 className='font-semibold text-sm  dark:text-dark-green  text-text-light-green '>{formatter.format(params.price)}đ  {getSubString()}</h4>
                    <h4 className='font-semibold text-xs  dark:text-dark-green  text-text-light-green line-through opacity-80'>{formatter.format(params.fakePrice)}đ</h4>
               </div>
                <h4 className='dark:text-dark-green xl:text-end  text-text-light-green text-xs opacity-80'>Có Bảo Hành</h4>
            </div>
        </div>
    </div>
  )
}

export default CardItem