import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { ISearchParams } from '../interaction/page'
import { formatter, generateRandomString, getPrice } from '@/lib/utils'
import { auth } from '@clerk/nextjs'
import { getUserByClerkId } from '@/lib/action/user.action'
import ContentBanking from '@/components/ContentBanking'

const page = async ({searchParams} : {searchParams :ISearchParams}) => {
    const {userId} = auth() as any
    const userInfo = await getUserByClerkId(userId)
    const contentBilling = `${userInfo?.username}${generateRandomString()}`  
    
  return (
    <div className='min-h-screen'>
        <div className='px-8 md:px-2'>
            <h2 className='font-semibold font-poppins md:text-xl text-2xl sm:text-lg'>Thanh Toán</h2>

            
            <ContentBanking 
            user={userInfo?._id} 
            packed={searchParams.packed} 
            quantity={searchParams.quantity} 
            nameSelect={searchParams.nameSelect}
            avatarSelect={searchParams.avatarSelect}
            timeZone={searchParams.timeZone}
            contentBilling={contentBilling}/>

            <div className='dark:bg-nft-black-4 bg-nft-gray-0 p-8 rounded-md  mt-8 md:p-6 sm:p-4'>
                <div className='flex items-center gap-7 sm:gap-5'>
                    <div className='w-7 h-7 rounded-full dark:bg-white bg-nft-black-2 dark:text-black text-white grid place-items-center font-semibold text-sm '>2</div>
                    <div>
                        <h4 className='text-xl font-medium md:text-lg sm:text-base'>Cùng nhìn lại đơn hàng của bạn</h4>
                        <p className='text-sm md:text-xs sm:hidden  dark:text-gray-400 text-gray-600 mt-1'>
                            Hãy kiểm tra lại chi tiết đơn hàng,  tránh sai sót không đáng có
                        </p>
                    </div>
                </div>
                <p className='text-sm md:text-xs minsm:hidden  dark:text-gray-400 text-gray-600 mt-2'> Hãy kiểm tra lại chi tiết đơn hàng,  tránh sai sót không đáng có</p>
                <div className='w-full h-[1px] dark:bg-nft-gray-3 bg-nft-gray-2 my-6'/>  

                <div className='mt-10 flex flex-col gap-4 sm:text-sm'>
                    <div className='flex items-center gap-7 '>
                        <FontAwesomeIcon icon={faCircleCheck} style={{color:'#1ed5a7',width:20,height:20}}  />
                        <p>Bạn đang chọn gói tăng {searchParams.packed}</p>
                    </div>
                    <div className='flex items-center gap-7 '>
                        <FontAwesomeIcon icon={faCircleCheck} style={{color:'#1ed5a7',width:20,height:20}}  />
                        <p>Bạn đang chọn số lượng {searchParams.quantity}{searchParams.packed == "view" ? "M view" :"Follower"}</p>
                    </div>
                    <div className='flex items-center gap-7 '>
                        <FontAwesomeIcon icon={faCircleCheck} style={{color:'#1ed5a7',width:20,height:20}}  />
                        <p>Bạn đang chọn thời gian hoàn thành là {searchParams.timeZone}</p>
                    </div>
                    <div className='flex items-center gap-7 '>
                        <FontAwesomeIcon icon={faCircleCheck} style={{color:'#1ed5a7',width:20,height:20}}  />
                        <p>Bạn đang chọn tên tài khoản là  {searchParams.nameSelect}</p>
                    </div>
                    <div className='flex items-center gap-7 '>
                        <FontAwesomeIcon icon={faCircleCheck} style={{color:'#1ed5a7',width:20,height:20}}  />
                        <p>Bạn đang chọn  avatar tài khoản là  {searchParams.avatarSelect}</p>
                    </div>
                    <div className='flex items-center gap-7 '>
                        <FontAwesomeIcon icon={faCircleCheck} style={{color:'#1ed5a7',width:20,height:20}}  />
                        <p >Số tiền bạn cần thanh toán là : 
                            <span className=' text-text-light-green dark:text-dark-green font-semibold font-sans ml-3 text-base'>
                             {formatter.format(getPrice(searchParams.packed,searchParams.quantity))}đ
                            </span>  
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default page