import TableHistory from "@/components/shared/TableHistory"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IUser } from "@/database/user.model"
import { findAllJobForUserHistory } from "@/lib/action/job.action"
import { getUserByClerkId } from "@/lib/action/user.action"
import { formatter } from "@/lib/utils"
import { auth } from '@clerk/nextjs'


export default async function History() {
  const {userId} = auth() as any
  const userInfo = await getUserByClerkId(userId)
  const result = await findAllJobForUserHistory(userInfo?._id) as any


  return (
    <div className="px-8 sm:px-4 max-w-[100vw]   min-h-screen">
      <h2 className=' font-semibold font-poppins md:text-xl text-2xl sm:text-lg sm:ml-1'> Lịch Sử Giao Dịch</h2>
      <ul className="ml-3 mt-8 text-sm space-y-1 ">
        <li><span className="dark:text-orange-400 text-orange-500 font-medium">- Pending</span> : Trạng thái chờ hệ thống xác nhận</li>
        <li><span className="dark:text-yellow-200 text-yellow-500 font-medium">- Running</span>  : Trạng thái hệ thống đang tiến hành</li>
        <li><span className="text-dark-green font-medium">- Finish</span>  : Trạng thái hệ thống đã hoàn tất đơn hàng của bạn</li>
      </ul>
      <TableHistory result ={result}/>
    </div>
  )
}
