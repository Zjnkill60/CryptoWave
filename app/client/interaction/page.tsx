import CardItem from '@/components/shared/CardItem'
import CardPayment from '@/components/shared/CardPayment'
import CardSelect from '@/components/shared/CardSelect'
import { OPTION_SELECT_AVATAR, OPTION_SELECT_FOLLOW, OPTION_SELECT_ITEM, OPTION_SELECT_NAME, OPTION_SELECT_PAY, OPTION_SELECT_TIMESPACE, OPTION_SELECT_TIMEZONE, OPTION_SELECT_VIEW } from '@/constant/constant'
import { formatter } from '@/lib/utils'

import React from 'react'

export interface ISearchParams {
    packed:string,
    payment:string,
    timeZone:string,
    quantity:number,
    avatarSelect:string,
    nameSelect:string
}

const page = ({searchParams} : {searchParams :ISearchParams}) => {

    
  return (
    <div className='min-h-screen '>

        <CardPayment 
         packed={searchParams.packed}
         payment={searchParams.payment} 
         timeZone={searchParams.timeZone} 
         quantity={searchParams.quantity} 
         avatarSelect={searchParams.avatarSelect} 
         nameSelect={searchParams.nameSelect}
         />

        <div className='px-8 md:px-2'>
            <h2 className=' font-semibold font-poppins md:text-xl text-2xl sm:text-lg sm:ml-1'> Dịch Vụ Tăng Tương Tác MXH Twitter </h2>
            <div className='dark:bg-nft-black-4 bg-nft-gray-0 p-8 rounded-md  mt-8 md:p-6 sm:p-4'>

                <div className='flex items-center gap-7 sm:gap-5'>
                    <div className='w-7 h-7 rounded-full dark:bg-white bg-nft-black-2 dark:text-black text-white grid place-items-center font-semibold text-sm '>1</div>
                    <div>
                        <h4 className='text-xl font-medium md:text-lg sm:text-base'>Chọn dịch vụ mong muốn</h4>
                        <p className='text-sm md:text-xs sm:hidden dark:text-gray-400 text-gray-600 mt-1'>Nếu bạn chưa chắc chắn hãy nhắn tin qua website ! 
                        <span className='dark:text-dark-green ml-3 text-text-light-green' >Click here. </span>
                        </p>
                    </div>
                </div>

                
                <div className='z-0 flex justify-between items-center mt-10 sd:mt-7 gap-5 md:flex-col'>
                    {OPTION_SELECT_ITEM.map(item => {
                        return <CardItem  key={item.name} name={item.name} description={item.description} price={item.price} fakePrice={item.fakePrice} id={item.id} />
                    })}    
                </div> 
                <div className='w-full h-[1px] dark:bg-nft-gray-3 bg-nft-gray-2 my-6'/>  
                

                <div className='mt-5 flex flex-col gap-5 pb-6'>
                    {searchParams.packed !== "combo" ? <> 
                    <h4 className='font-semibold text-sm'>Số Lượng {searchParams.packed == "view" ? "View" : "Follow"}</h4>
                    <CardSelect option={searchParams.packed == "view" ? OPTION_SELECT_VIEW : OPTION_SELECT_FOLLOW} id="quantity"/>
                    </> : <></>}

                    <h4 className='font-semibold text-sm'>Thời Gian Hoàn Thành</h4>
                    <CardSelect option={OPTION_SELECT_TIMEZONE} id="timeZone"/>
                   
                </div>
            </div>

            <div className='dark:bg-nft-black-4 bg-nft-gray-0 p-8 rounded-md  mt-8 md:p-6 sm:p-4 '>
                <div className='flex items-center gap-7 sm:gap-5'>
                    <div className='w-7 h-7 rounded-full dark:bg-white bg-nft-black-2 dark:text-black text-white grid place-items-center font-semibold text-sm '>2</div>
                    <div>
                        <h4 className='text-xl font-medium md:text-lg sm:text-base'>Chọn cấu hình tài nguyên </h4>
                        <p className='text-sm md:text-xs sm:hidden  dark:text-gray-400 text-gray-600 mt-1'>
                            Lựa chọn các cấu hình tài bạn mong muốn, có thể để ngẫu nhiên
                        </p>
                    </div>
                </div>


                <div className='w-full h-[1px] dark:bg-nft-gray-3 bg-nft-gray-2 my-6'/>  
                    

                <div className='mt-5 flex flex-col gap-5 pb-6'>
                    <h4 className='font-semibold text-sm'>Cấu Hình Tên Clone</h4>
                    <CardSelect option={OPTION_SELECT_NAME} id="nameSelect"/>
                    <h4 className='font-semibold text-sm'>Cấu Hình Avatar Clone</h4>
                    <CardSelect option={OPTION_SELECT_AVATAR} id="avatarSelect"/>
                    
                </div>
            </div>

            <div className='dark:bg-nft-black-4 bg-nft-gray-0 p-8 rounded-md  mt-8 md:p-6 sm:p-4 mb-52'>
                <div className='flex items-center gap-7 sm:gap-5'>
                    <div className='w-7 h-7 rounded-full dark:bg-white bg-nft-black-2 dark:text-black text-white grid place-items-center font-semibold text-sm '>3</div>
                    <div>
                        <h4 className='text-xl font-medium md:text-lg sm:text-base'>Chọn hình thức thanh toán</h4>
                        <p className='text-sm md:text-xs sm:hidden  dark:text-gray-400 text-gray-600 mt-1'>
                            Lựa chọn hình thức thanh toán phù hợp với bạn
                        </p>
                    </div>
                </div>


                <div className='w-full h-[1px] dark:bg-nft-gray-3 bg-nft-gray-2 my-6'/>  
                

                <div className='mt-5 flex flex-col gap-5 pb-6'>
                    <h4 className='font-semibold text-sm'>Hình Thức Thanh Toán</h4>
                    <CardSelect option={OPTION_SELECT_PAY} id="payment"/>       
                </div>
            </div>
        </div>

        

    </div>
  )
}

export default page