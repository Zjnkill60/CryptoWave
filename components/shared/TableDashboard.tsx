
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
  import {  convertQuantity, convertTaskname, formatDateDetail, formatter } from "@/lib/utils"
  

const TableDashboard = ({result} : {result :any}) => {
  let totalPrice = 0
  result.map((item:any) => totalPrice += item.banking.amount)
  return (
    <div className="bg-gray-100 dark:bg-nft-black-4 rounded-md p-4 sm:p-2 mt-10 md:mt-5 no-scrollbar max-w-[95vw]">
       <div className="overflow-x-auto max-w-[95vw]   no-scrollbar">
       <Table className=" whitespace-nowrap">
            <TableCaption className="sm:text-left mt-5">Top 5 giao dịch gần đây</TableCaption>
            <TableHeader>
                <TableRow >
                <TableHead className="w-[150px] text-left ">STT</TableHead>    
                <TableHead >Username</TableHead>
                <TableHead>Tương Tác</TableHead>
                <TableHead>Số Lượng</TableHead>
                <TableHead >Thời gian tạo</TableHead>
                <TableHead >Số tiền</TableHead>
               
                </TableRow>
            </TableHeader>
            <TableBody>
                {result.map((item : any,index:number) => (
                <TableRow key={item._id}>
                    <TableCell className="font-medium ">{index +1}</TableCell>
                    <TableCell className="font-medium">{item.user?.username}</TableCell>
                    <TableCell>{convertTaskname(item?.taskName)}</TableCell>
                    <TableCell>{convertQuantity(item?.quantity,item.taskName)}</TableCell>
                   
                    <TableCell>{formatDateDetail(item.timeCreated).toString()}</TableCell>
                    <TableCell >{formatter.format(item.banking.amount)}</TableCell>
                </TableRow>
                ))}
            </TableBody>
          
     </Table>
       </div>
    </div>
  )
}

export default TableDashboard