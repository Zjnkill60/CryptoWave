
export  function POST(req:Request ) {
    //@ts-ignore
    let error = req.body?.error;
    console.log(error)
    if (error != 0) {
        //Không làm gì cả.
        return new Response("Error occured", {
            status: 400,
          });
    }
    
    //mảng chứa danh sách các giao dịch
    //@ts-ignore
    let transactions = req.body.data;
    
    console.log(`Received ${transactions.length} transactions`);
    
    //thêm code xử lý giao dịch ở đây.
    
    return new Response("OK", {
        status: 200,
      });
}