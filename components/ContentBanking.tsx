"use client"
import { findOneBilling } from '@/lib/action/banking.action'
import { formatter, getPrice } from '@/lib/utils'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useState } from 'react'

interface IProps {
    packed:string ,
    quantity:number,
    contentBilling:string
}
const ContentBanking = (params:IProps) => {
    const [loading , setLoading] = useState(false)
    const [correctBilling , setCorrectBilling] = useState(0)

    const handleChecking = async () => {
        setLoading(true)
        try {
            let data
            const fetchInterval = setInterval(async () => {
                data = await findOneBilling(params?.contentBilling);
                console.log('res:',data)
              }, 5000); // 5 minutes in milliseconds
              
            (async () => {
                fetchInterval;
                console.log(data)
                if(data) {
                    clearInterval(fetchInterval)
                    setLoading(false)
                }
            })();
           
        } catch (error) {
            console.log(error)
        
    }}

  return (
    <div className='dark:bg-nft-black-4 bg-nft-gray-0 p-8 rounded-md  mt-8 md:p-6 sm:p-4'>
        {!loading  ?
        <>
          {correctBilling == 0 ? (
             <div>
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
                        <div className='p-6 dark:bg-nft-black-1 bg-gray-200 xl:w-full w-[388px]  flex flex-col rounded-lg'>
                            <h2 className='text-xl md:text-lg font-semibold text-text-light-green dark:text-dark-green '>THÔNG TIN NẠP TIỀN</h2>
                            <div className='flex sm:flex-col sm:items-start items-center gap-3 mt-7'>
                                <p className='dark:text-gray-200 text-gray-600'>Ngân hàng:</p>
                                <p className='font-semibold sm:ml-3'>VietinBank</p>
                            </div>
                            <div className='w-full h-[1px] dark:bg-nft-gray-3 bg-nft-gray-2 my-4'/>  
                            <div className='flex flex-col gap-3'>
                                <p className='dark:text-gray-200 text-gray-600'>Số tài khoản:</p>
                                <p className='ml-3 font-semibold '>108880363341</p>
                            </div>
                            <div className='w-full h-[1px] dark:bg-nft-gray-3 bg-nft-gray-2 my-4'/>  
                            <div className='flex flex-col gap-3'>
                                <p className='dark:text-gray-200 text-gray-600'>Chủ tài khoản:</p>
                                <p className='ml-3 font-semibold'>NGUYEN DUC ANH</p>
                            </div>
                            <div className='w-full h-[1px] dark:bg-nft-gray-3 bg-nft-gray-2 my-4'/>  
                            <div className='flex flex-col gap-3'>
                                <p className='dark:text-gray-200 text-gray-600'>Số tiền cần thanh toán:</p>
                                <p className='ml-3 font-semibold'>{formatter.format(getPrice(params.packed,params.quantity))} VNĐ</p>
                            </div>
                            <div className='w-full h-[1px] dark:bg-nft-gray-3 bg-nft-gray-2 my-4'/>  
                            <div className='flex flex-col gap-3'>
                                <p className='dark:text-gray-200 text-gray-600'>Nội dung chuyển khoản:</p>
                                <p className='ml-3 font-semibold'>{params.contentBilling}</p>
                            </div>

                            <p className='mt-14 text-sm dark:text-gray-400 text-gray-600'>Lưu ý : Nội dung chuyển khoản phải chính xác tuyệt đối, vui lòng quét mã QR hoặc copy để không sai sót, nếu bạn đã lỡ sai ndck hãy liên hệ với AD qua Telegram để được hỗ trợ</p>
                        </div>

                        <div className='flex  flex-col items-center gap-3'>
                            <h2 className='text-lg md:text-lg font-semibold text-text-light-green dark:text-dark-green'>Quét mã QR để thanh toán</h2>
                            <p className='w-3/4 sm:w-full sm:text-sm text-center'>Sử dụng App Internet Banking hoặc ứng dụng camera hỗ trợ QR code để quét mã</p>
                            <Image
                            src={`https://img.vietqr.io/image/vietinbank-108880363341-print.jpg?amount=${getPrice(params.packed,params.quantity)}&addInfo=${params.contentBilling}&accountName="Nguyen Duc Anh"`}
                            alt='qr'
                            width={350}
                            height={350}
                            className='rounded-lg mt-5'
                            />
                            <button onClick={() => handleChecking()} className='p-3 dark:bg-dark-green hover:opacity-90 bg-green-lightmode mt-3 text-sm dark:text-gray-700 font-semibold rounded-md'>Xác nhận chuyển khoản</button>
                        </div>
                    </div>
            </div>):<></>}  
          {correctBilling == 1 ? (
            <div className='min-h-[300px] grid place-items-center'>
                CK thanh cong
             </div>
          ):<></>}   
          {correctBilling == 2 ? (
            <div className='min-h-[300px] grid place-items-center'>
                CK that bai
             </div>
          ):<></>} 
        
        </> :
        <>
         <div className='min-h-[300px] grid place-items-center'>
          <FontAwesomeIcon icon={faSpinner} style={{width:60,height:60,color:'#1ed5a7'}} spin={true} />
         </div>
        </>} 
        
    </div>
  )
}

export default ContentBanking