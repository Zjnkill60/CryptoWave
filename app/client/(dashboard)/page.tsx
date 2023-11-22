import Charts from '@/components/shared/Chart'
import RadarChartPilot from '@/components/shared/RadarChartPlot'
import TableDashboard from '@/components/shared/TableDashboard'
import TableHistory from '@/components/shared/TableHistory'
import { findAllHistory } from '@/lib/action/job.action'
import React from 'react'

const dataView = [
  {
    "day": "Thứ 2",
    "quantity":"2M",
    "View": 4000,
  },
  {
    "day": "Thứ 3",
    "quantity":"4M",
    "View": 3000,
  },
  {
    "day": "Thứ 4",
    "quantity":"6M",
    "View": 2000,
  },
  {
    "day": "Thứ 5",
    "quantity":"8M",
    "View": 2780,
  },
  {
    "day": "Thứ 6",
    "quantity":"10M",
    "View": 1890,
  },
  {
    "day": "Thứ 7",
    "quantity":"12M",
    "View": 2390,
  },
  {
    "day": "Chủ Nhật",
    "quantity":"14M",
    "View": 340,
  }
]

const dataFollow = [
  {
    "day": "Thứ 2",
    "quantity":"2M",
    "Follow": 2400
  },
  {
    "day": "Thứ 3",
    "quantity":"4M",
    "Follow": 1398
  },
  {
    "day": "Thứ 4",
    "quantity":"6M",
  
    "Follow": 9800
  },
  {
    "day": "Thứ 5",
    "quantity":"8M",
   
    "Follow": 3908
  },
  {
    "day": "Thứ 6",
    "quantity":"10M",
  
    "Follow": 4800
  },
  {
    "day": "Thứ 7",
    "quantity":"12M",
   
    "Follow": 3800
  },
  {
    "day": "Chủ Nhật",
    "quantity":"14M",
   
    "Follow": 4300
  }
]
const Dashboard = async () => {
  let result = await findAllHistory()
  console.log(result)
  return (
    <section className=" px-4 gap-3 max-w-[100vw] ">
       <h2 className='font-semibold font-poppins md:text-xl text-2xl sm:text-lg'>Thống kê hệ thống </h2>

     <div className='flex gap-5 mt-10 md:flex-col sm:mt-5'>
        <div className="w-3/5 h-[320px] md:h-[280px] sm:h-[220px] md:w-full dark:bg-nft-black-4 bg-gray-100 rounded px-5 py-10 md:px-1 md:py-5 sm:px-0">
          
          <Charts data={dataView}/>
        </div>
        <div className="w-2/5 h-[320px] md:h-[280px] sm:h-[220px] md:w-full dark:bg-nft-black-4 bg-gray-100 rounded px-5 py-10 md:px-1 md:py-5 sm:px-0">
        <Charts data={dataFollow}/>
        </div>
     </div>

     <h2 className='font-semibold font-poppins md:text-xl text-2xl sm:text-lg mt-10 md:mt-7'>Moị người đang mua </h2>
     <TableDashboard result ={result}/>

  </section>
  )
}

export default Dashboard