"use client"
import { findOneBilling } from '@/lib/action/banking.action'
import { formatter, getPrice } from '@/lib/utils'
import { faCheckCircle, faCircleXmark, faSpinner, faTicket, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, {  useState } from 'react'

export interface IPropsContent {
    user:string,
    nameSelect:string,
    avatarSelect:string,
    timeZone:string,
    packed:string ,
    quantity:number,
    contentBilling:string
}
const ContentBanking = (params:IPropsContent) => {
    const router = useRouter()
    const [loading , setLoading] = useState(false)
    const [correctBilling , setCorrectBilling] = useState(0)
    const price = getPrice(params.packed,params.quantity)

    let audioElement:any
    if(typeof Audio != "undefined") {
        audioElement = new Audio("/assets/Tieng-ting-www_tiengdong_com.mp3");
      }
  

    const handleChecking = async () => {
        setLoading(true)
        try {
            let data
            let attempTime = 0
            const fetchInterval = setInterval(async () => {
                data = await findOneBilling(params , price);
                console.log('res:',data)
                if(data) {
                    //@ts-ignore
                    clearInterval(fetchInterval)
                    setLoading(false)
                    setCorrectBilling(1)
                    audioElement.play()
                    document.body.scroll({top : 0,behavior:"smooth"})
                    
                }
                if(attempTime >= 10) {
                    clearInterval(fetchInterval)
                    setLoading(false)
                    setCorrectBilling(2)
                    audioElement.play()
                }
                attempTime++
              }, 5000); // 5 minutes in milliseconds
              
            (async () => {
                fetchInterval;
            })();
           
        } catch (error) {
            console.log(error)
        
    }}

    const handleNavigate = (path : string) => {
        router.push(`${path}`)
    }
    
   
  return (
    <div className='dark:bg-nft-black-4 bg-nft-gray-0 px-8 rounded-md  mt-4 md:px-3 sm:p-3'>


        {!loading  ?
        <>
          {correctBilling == 0 ? (
             <div className='py-6 sm:py-2'>
                   <div className='flex items-center gap-7 sm:gap-5 '>
                        <div className='w-7 h-7 rounded-full dark:bg-white bg-nft-black-2 dark:text-black text-white grid place-items-center font-semibold text-sm '>1</div>
                        <div>
                            <h4 className='text-xl font-medium md:text-lg sm:text-base'>Thực hiện chuyển khoản</h4>
                            <p className='text-sm md:text-xs sm:hidden  dark:text-gray-400 text-gray-600 mt-1 text-center'>
                                Đơn hàng sẽ được xác nhận tự động sau 3-5 phút, Nếu ngoài 2 tiếng hãy nhắn qua telegram để được hỗ trợ
                            </p>
                        </div>
                    </div>
                    <p className='text-sm md:text-xs minsm:hidden  dark:text-gray-400 text-gray-600 mt-2 line-clamp-2'> Đơn hàng sẽ được xác nhận tự động sau 3-5 phút, Nếu ngoài 2 tiếng hãy nhắn qua telegram để được hỗ trợ</p>
                    <div className='w-full h-[1px] dark:bg-nft-gray-3 bg-nft-gray-2 my-6'/>  

                    <div className='mb-10 flex justify-evenly mt-14 sm:mt-4 xl:flex-col xl:gap-10 sm:gap-5'>
                        <div className='p-6  sm:p-3 dark:bg-nft-black-1 bg-gray-200 xl:w-full w-[388px]  flex flex-col rounded-lg'>
                            <h2 className='text-xl sm:text-lg md:text-lg font-semibold text-text-light-green dark:text-dark-green '>THÔNG TIN NẠP TIỀN</h2>
                            <div className='flex sm:flex-col sm:items-start items-center gap-3 mt-7'>
                                <p className='dark:text-gray-200 text-gray-600'>Ngân hàng:</p>
                                <p className='font-semibold sm:ml-3 sm:text-sm '>VietinBank</p>
                            </div>
                            <div className='w-full h-[1px] dark:bg-nft-gray-3 bg-nft-gray-2 my-4'/>  
                            <div className='flex flex-col gap-3 sm:gap-2'>
                                <p className='dark:text-gray-200 text-gray-600'>Số tài khoản:</p>
                                <p className='ml-3 font-semibold sm:text-sm '>108880363341</p>
                            </div>
                            <div className='w-full h-[1px] dark:bg-nft-gray-3 bg-nft-gray-2 my-4'/>  
                            <div className='flex flex-col gap-3 sm:gap-2'>
                                <p className='dark:text-gray-200 text-gray-600'>Chủ tài khoản:</p>
                                <p className='ml-3 font-semibold sm:text-sm'>NGUYEN DUC ANH</p>
                            </div>
                            <div className='w-full h-[1px] dark:bg-nft-gray-3 bg-nft-gray-2 my-4'/>  
                            <div className='flex flex-col gap-3 sm:gap-2'>
                                <p className='dark:text-gray-200 text-gray-600'>Số tiền cần thanh toán:</p>
                                <p className='ml-3 font-semibold sm:text-sm'>{formatter.format(price)} VNĐ</p>
                            </div>
                            <div className='w-full h-[1px] dark:bg-nft-gray-3 bg-nft-gray-2 my-4'/>  
                            <div className='flex flex-col gap-3 sm:gap-2'>
                                <p className='dark:text-gray-200 text-gray-600'>Nội dung chuyển khoản:</p>
                                <p className='ml-3 font-semibold sm:text-sm'>{params.contentBilling}</p>
                            </div>

                            <p className='mt-14 text-sm dark:text-gray-400 text-gray-600 sm:mt-10'>Lưu ý : Nội dung chuyển khoản phải chính xác tuyệt đối, vui lòng quét mã QR hoặc copy để không sai sót, nếu bạn đã lỡ sai ndck hãy liên hệ với AD qua Telegram để được hỗ trợ</p>
                        </div>

                        <div className='flex  flex-col items-center gap-3'>
                            <h2 className='text-lg md:text-lg font-semibold text-text-light-green dark:text-dark-green'>Quét mã QR để thanh toán</h2>
                            <p className='w-3/4 sm:w-full sm:text-sm text-center'>Sử dụng App Internet Banking hoặc ứng dụng camera hỗ trợ QR code để quét mã</p>
                            <Image
                            src={`https://img.vietqr.io/image/vietinbank-108880363341-print.jpg?amount=${price}&addInfo=${params.contentBilling}&accountName="Nguyen Duc Anh"`}
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
            <div className='min-h-[300px] flex justify-center items-center flex-col gap-5'>
              
                <FontAwesomeIcon icon={faCheckCircle} style={{width:60,height:60,color:'#1ed5a7'}}  />
                <p className='text-sm text-center w-2/5 md:w-3/4 sm:w-full mt-10'>Đơn hàng của bạn đã được tiếp nhận thành công, Vui lòng kiểm tra đơn hàng trong tab lịch sử giao dịch !</p>
                <div className='flex items-center gap-3'>
                    <button onClick={() => handleNavigate("/client/interaction")} className='p-2 min-w-[150px] dark:bg-dark-green hover:opacity-90 bg-green-lightmode mt-3 text-sm dark:text-gray-700 font-semibold rounded-md'>Giao dịch mới</button>
                    <button onClick={() => handleNavigate("/client/history")} className='p-2 min-w-[130px] dark:bg-dark-green hover:opacity-90 bg-green-lightmode mt-3 text-sm dark:text-gray-700 font-semibold rounded-md'>Lịch sử GD</button>
                </div>
             </div>
          ):<></>}   
          {correctBilling == 2 ? (
            <div className='min-h-[300px] flex justify-center items-center flex-col gap-5'>
                <FontAwesomeIcon icon={faCircleXmark} style={{width:60,height:60,color:'red'}} className='dark:invert-0'  />
                <p className='text-sm text-center w-2/5 md:w-3/4 sm:w-full mt-10'>Hệ thống không tìm thấy giao dịch banking của bạn, vui lòng thử lại nếu đã chuyển khoản thành công !</p>
                <div className='flex items-center gap-3'>
                    <button onClick={() => handleNavigate("/client/interaction")} className='p-2 min-w-[150px] dark:bg-dark-green hover:opacity-90 bg-green-lightmode mt-3 text-sm dark:text-gray-700 font-semibold rounded-md'>Giao dịch mới</button>
                    <button onClick={handleChecking} className='p-2 min-w-[130px] dark:bg-dark-green hover:opacity-90 bg-green-lightmode mt-3 text-sm dark:text-gray-700 font-semibold rounded-md'>Thử lại</button>
                </div>
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