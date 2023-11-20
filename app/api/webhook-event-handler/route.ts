import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

export  function POST(req:Request | NextRequest,res:NextApiResponse) {
    //@ts-ignore
    let error = req.body.error;
    if (error != 0) {
        //Không làm gì cả.
        return;
    }
    
    //mảng chứa danh sách các giao dịch
    //@ts-ignore
    let transactions = req.body.data;
    
    console.log(`Received ${transactions.length} transactions`);
    
    //thêm code xử lý giao dịch ở đây.
    
    res.end("OK");
}