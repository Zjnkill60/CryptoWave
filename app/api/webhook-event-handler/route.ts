import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req:NextApiRequest,res:NextApiResponse<any>) {
    let error = req.body.error
    console.log(req)
    if (error != 0) {
        //Không làm gì cả.
        console.log(error)
        return;
    }
    
    //mảng chứa danh sách các giao dịch
    let transactions = req.body.data;
    
    console.log(`Received ${transactions.length} transactions`);
    
    //thêm code xử lý giao dịch ở đây.
    
    return Response.json({ messsage:"hello word "})
}