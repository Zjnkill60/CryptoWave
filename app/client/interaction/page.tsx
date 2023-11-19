import CardItem from '@/components/shared/CardItem'
import { OPTION_SELECT_ITEM } from '@/constant/constant'
import React from 'react'

const page = ({searchParams} : {searchParams : {packed : string}}) => {
  return (
    <div className='min-h-screen'>
        <h2 className=' font-semibold font-poppins md:text-xl text-2xl sm:text-lg'> Dịch Vụ Tăng Tương Tác MXH Twitter </h2>
        <div className='dark:bg-nft-black-4 bg-nft-gray-0 p-8 rounded-md min-h-screen mt-8 md:p-6 sm:p-4'>

            <div className='flex items-center gap-7 sm:gap-5'>
                <div className='w-7 h-7 rounded-full dark:bg-white bg-nft-black-2 dark:text-black text-white grid place-items-center font-semibold text-sm '>1</div>
                <div>
                    <h4 className='text-xl font-medium md:text-lg sm:text-base'>Chọn dịch vụ mong muốn</h4>
                    <p className='text-sm md:text-xs sm:hidden dark:text-gray-400 text-gray-600 mt-1'>Nếu bạn chưa chắc chắn hãy nhắn tin qua website ! 
                    <span className='dark:text-dark-green ml-3 text-text-light-green' >Click here. </span>
                    </p>
                </div>
            </div>

            <p className='text-sm md:text-xs minsm:hidden dark:text-gray-400 text-gray-600 mt-3'>Nếu bạn chưa chắc chắn hãy nhắn tin qua website ! 
                    <span className='dark:text-dark-green ml-3 text-text-light-green' >Click here. </span>
            </p>

            <div className='flex justify-between items-center mt-10 sd:mt-7 gap-5 sd:flex-col'>
                {OPTION_SELECT_ITEM.map(item => {
                    return <CardItem key={item.name} name={item.name} description={item.description} price={item.price} fakePrice={item.fakePrice} id={item.id} />
                })}    
             </div>   

        </div>

        

    </div>
  )
}

export default page