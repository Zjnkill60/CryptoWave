import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { ISearchParams } from '../interaction/page'
import { formatter, getPrice } from '@/lib/utils'
import Image from 'next/image'

const page = ({searchParams} : {searchParams :ISearchParams}) => {
  return (
    <div className='min-h-screen'>
        <div className='px-8 md:px-4'>
            <h2 className='font-semibold font-poppins md:text-xl text-2xl sm:text-lg'>Thanh Toán</h2>

            <div className='dark:bg-nft-black-4 bg-nft-gray-0 p-8 rounded-md  mt-8 md:p-6 sm:p-4'>
                <div className='flex items-center gap-7 sm:gap-5'>
                    <div className='w-7 h-7 rounded-full dark:bg-white bg-nft-black-2 dark:text-black text-white grid place-items-center font-semibold text-sm '>1</div>
                    <div>
                        <h4 className='text-xl font-medium md:text-lg sm:text-base'>Cùng nhìn lại đơn hàng của bạn</h4>
                        <p className='text-sm md:text-xs sm:hidden  dark:text-gray-400 text-gray-600 mt-1'>
                            Hãy kiểm tra lại chi tiết đơn hàng,  tránh sai sót không đáng có
                        </p>
                    </div>
                </div>
                <p className='text-sm md:text-xs minsm:hidden  dark:text-gray-400 text-gray-600 mt-2'> Hãy kiểm tra lại chi tiết đơn hàng,  tránh sai sót không đáng có</p>
                <div className='w-full h-[1px] dark:bg-nft-gray-3 bg-nft-gray-2 my-6'/>  

                <div className='mt-10 flex flex-col gap-4 '>
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
                            <span className=' text-text-light-green dark:text-dark-green font-semibold font-sans ml-3 text-lg'>
                             {formatter.format(getPrice(searchParams.packed,searchParams.quantity))}đ
                            </span>  
                        </p>
                    </div>
                </div>
            </div>

            <div className='dark:bg-nft-black-4 bg-nft-gray-0 p-8 rounded-md  mt-8 md:p-6 sm:p-4'>
                <div className='flex items-center gap-7 sm:gap-5'>
                    <div className='w-7 h-7 rounded-full dark:bg-white bg-nft-black-2 dark:text-black text-white grid place-items-center font-semibold text-sm '>2</div>
                    <div>
                        <h4 className='text-xl font-medium md:text-lg sm:text-base'>Thực hiện chuyển khoản</h4>
                        <p className='text-sm md:text-xs sm:hidden  dark:text-gray-400 text-gray-600 mt-1'>
                            Đơn hàng sẽ được xác nhận tự động sau 3-5 phút, Nếu ngoài 2 tiếng hãy nhắn qua telegram để được hỗ trợ
                        </p>
                    </div>
                </div>
                <p className='text-sm md:text-xs minsm:hidden  dark:text-gray-400 text-gray-600 mt-2 line-clamp-2'> Đơn hàng sẽ được xác nhận tự động sau 3-5 phút, Nếu ngoài 2 tiếng hãy nhắn qua telegram để được hỗ trợ</p>
                <div className='w-full h-[1px] dark:bg-nft-gray-3 bg-nft-gray-2 my-6'/>  

                <div className='mb-32 flex justify-evenly mt-14 xl:flex-col xl:gap-10'>
                    <div className='p-5 dark:bg-nft-black-1 bg-gray-200 xl:w-full w-[388px]  flex flex-col rounded-lg'>
                        <h2 className='text-xl md:text-lg font-semibold text-text-light-green dark:text-dark-green '>THÔNG TIN NẠP TIỀN</h2>
                        <div className='flex sm:flex-col sm:items-start items-center gap-3 mt-7'>
                            <p className='dark:text-gray-200 text-gray-600'>Ngân hàng:</p>
                            <p className='font-semibold sm:ml-3'>TP Bank (TienPhong Bank)</p>
                        </div>
                        <div className='w-full h-[1px] dark:bg-nft-gray-3 bg-nft-gray-2 my-4'/>  
                        <div className='flex flex-col gap-3'>
                            <p className='dark:text-gray-200 text-gray-600'>Số tài khoản:</p>
                            <p className='ml-3 font-semibold '>03757289001</p>
                        </div>
                        <div className='w-full h-[1px] dark:bg-nft-gray-3 bg-nft-gray-2 my-4'/>  
                        <div className='flex flex-col gap-3'>
                            <p className='dark:text-gray-200 text-gray-600'>Chủ tài khoản:</p>
                            <p className='ml-3 font-semibold'>NGUYEN DUC ANH</p>
                        </div>
                        <div className='w-full h-[1px] dark:bg-nft-gray-3 bg-nft-gray-2 my-4'/>  
                        <div className='flex flex-col gap-3'>
                            <p className='dark:text-gray-200 text-gray-600'>Số tiền cần thanh toán:</p>
                            <p className='ml-3 font-semibold'>{formatter.format(getPrice(searchParams.packed,searchParams.quantity))} VNĐ</p>
                        </div>
                        <div className='w-full h-[1px] dark:bg-nft-gray-3 bg-nft-gray-2 my-4'/>  
                        <div className='flex flex-col gap-3'>
                            <p className='dark:text-gray-200 text-gray-600'>Nội dung chuyển khoản:</p>
                            <p className='ml-3 font-semibold'>david123</p>
                        </div>

                        <p className='mt-14 text-sm dark:text-gray-400 text-gray-600'>Hệ thống sẽ tự động cộng tiền vào tài khoản của bạn sau khoảng 1-5 phút. Nếu quá 2 tiếng tiền chưa được cộng vui lòng liên hệ Telegram để được hỗ trợ.</p>
                    </div>

                    <div className='flex  flex-col items-center gap-3'>
                        <h2 className='text-lg md:text-lg font-semibold text-text-light-green dark:text-dark-green'>Quét mã QR để thanh toán</h2>
                        <p className='w-3/4 sm:w-full sm:text-sm text-center'>Sử dụng App Internet Banking hoặc ứng dụng camera hỗ trợ QR code để quét mã</p>
                        <Image
                         src={"https://img.vietqr.io/image/TPB-03757289001-print.png"}
                         alt='qr'
                         width={350}
                         height={350}
                         className='rounded-lg mt-5'
                        />
                        <button className='p-3 dark:bg-dark-green hover:opacity-90 bg-green-lightmode mt-3 text-sm dark:text-gray-700 font-semibold rounded-md'>Xác nhận chuyển khoản</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page