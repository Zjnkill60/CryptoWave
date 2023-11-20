
export  function POST(req:Request ) {
    const content = req.json()
     //@ts-ignore
    let error = content?.error;
    console.log(error)
    if (error != 0) {
        //Không làm gì cả.
        return new Response("Error occured", {
            status: 400,
          });
    }
    
    //mảng chứa danh sách các giao dịch
    //@ts-ignore
    let transactions = content?.data;
    
    console.log(`Received ${transactions.length} transactions`);
    
    //thêm code xử lý giao dịch ở đây.
    
    return new Response("OK", {
        status: 200,
      });
}