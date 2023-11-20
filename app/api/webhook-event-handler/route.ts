import { NextApiRequest, NextApiResponse } from "next";

export  function POST(req:NextApiRequest,res:NextApiResponse) {
    let error = req.body.error;
    if (error != 0) {
        //Không làm gì cả.
        return;
    }
    
    //mảng chứa danh sách các giao dịch
    let transactions = req.body.data;
    
    console.log(`Received ${transactions.length} transactions`);
    
    //thêm code xử lý giao dịch ở đây.
    
    res.end("OK");
}