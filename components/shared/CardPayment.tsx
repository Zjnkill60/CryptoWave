"use client"
import { ISearchParams } from '@/app/client/interaction/page'
import { formatter, getPrice } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import React from 'react'


const CardPayment = (params:ISearchParams) => {
    const router = useRouter()
   

    const handleNavigate = () => {
        if(params.packed !== "combo"){
            router.push(`/client/checkout?packed=${params.packed}&payment=${params.payment}&avatarSelect=${params.avatarSelect}&nameSelect=${params.nameSelect}&timeZone=${params.timeZone}&quantity=${params.quantity}`)

        }else {
            router.push(`/client/checkout?packed=${params.packed}&payment=${params.payment}&avatarSelect=${params.avatarSelect}&nameSelect=${params.nameSelect}&timeZone=${params.timeZone}`)

        }
    }
  return (
    <div className='z-10 fixed bottom-0 w-full min-h-[110px]  bg-gray-300 dark:bg-nft-black-3 border-t dark:border-nft-black-1 border-gray-300 flex items-center gap-40 md:justify-between'>
            <div className='flex flex-col gap-2 py-5 px-8 z-20 md:px-4'>
                <h4 className='font-medium sm:text-sm dark:text-gray-400 text-black'>Thanh Toán</h4>
                
                <h2 className='text-3xl sm:text-2xl text-text-light-green dark:text-dark-green font-semibold font-sans'>{formatter.format(getPrice(params.packed,params.quantity))}đ</h2>
            </div>
            <div className='flex flex-col gap-4 md:mr-4'>
                <button onClick={() => handleNavigate()}  className='py-2 px-3 dark:bg-dark-green text-sm bg-text-light-green text-white dark:text-nft-gray-3 font-poppins font-semibold rounded-md hover:opacity-90'>CONTINUE</button>
                <p className='font-medium dark:text-gray-400 text-gray-600 text-xs sm:text-center line-clamp-1'>Chưa áp dụng mã giảm giá</p>
            </div>
    </div>
  )
}

export default CardPayment