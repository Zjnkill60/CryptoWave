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
  import { convertAvatarClone, convertNameClone, convertQuantity, convertTaskname, convertTimeZone, formatDate, formatter } from "@/lib/utils"
  
const Tag = ({tagName}:{tagName:string}) => {
  
    if(tagName == "Pending") return <span className="dark:text-orange-400 text-orange-500 font-medium">Pending</span> 
    if(tagName == "Running") return <span className="dark:text-yellow-200 text-yellow-500 font-medium">Running</span>  
    if(tagName == "Finish") return <span className="text-dark-green font-medium">Finish</span> 
}
const TableHistory = ({result} : {result :any}) => {
  let totalPrice = 0
  result.map((item:any) => totalPrice += item.banking.amount)
  return (
    <div className="bg-gray-100 dark:bg-nft-black-4 rounded-md p-4 sm:p-2 mt-10 no-scrollbar max-w-[100vw]">
       <div className="overflow-x-auto max-w-[100vw]   no-scrollbar">
       <Table className=" whitespace-nowrap">
            <TableCaption className="sm:text-left">Lịch sử giao dịch của bạn</TableCaption>
            <TableHeader>
                <TableRow >
                <TableHead >Thể Loại</TableHead>
                <TableHead>Số Lượng</TableHead>
                <TableHead>Tên Clone</TableHead>
                <TableHead >Avatar Clone</TableHead>
                <TableHead >Ước tính</TableHead>
                <TableHead >Thời Gian </TableHead>
                <TableHead >Trạng Thái </TableHead>
                <TableHead className="text-right">Số Tiền </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {result.map((item : any) => (
                <TableRow key={item._id}>
                    <TableCell className="font-medium">{convertTaskname(item.taskName)}</TableCell>
                    <TableCell>{convertQuantity(item?.quantity,item.taskName)}</TableCell>
                    <TableCell>{convertNameClone(item.nameSelect)}</TableCell>
                    <TableCell>{convertAvatarClone(item.avatarSelect)}</TableCell>
                    <TableCell>{item.timeZone} {convertTimeZone(item.timeZone)}</TableCell>
                    <TableCell>{formatDate(item.timeCreated).toString()}</TableCell>
                    <TableCell><Tag tagName="Pending"></Tag></TableCell>
                    <TableCell className="text-right">{formatter.format(item.banking.amount)}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                <TableCell colSpan={7}>Tổng Tiền</TableCell>
                <TableCell className="text-right" >{formatter.format(totalPrice)} VNĐ</TableCell>
                </TableRow>
            </TableFooter>
     </Table>
       </div>
    </div>
  )
}

export default TableHistory