import { NextRequest  } from "next/server";

export  function POST(req:Request | NextRequest,res:Response  ) {
    //@ts-ignore
    let error = req.body.error;
    console.log(error)
    if (error != 0) {
        //Không làm gì cả.
        return;
    }
    
    //mảng chứa danh sách các giao dịch
    //@ts-ignore
    let transactions = req.body.data;
    
    console.log(`Received ${transactions.length} transactions`);
    
    //thêm code xử lý giao dịch ở đây.
    
    return Response.json({message:"OK"})
}