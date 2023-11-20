
export async function POST(req:Request ) {
    const payload = await req.json()
     //@ts-ignore
    let error = payload?.error;
    console.log(error)
    if (error != 0) {
        //Không làm gì cả.
        return new Response("Error occured", {
            status: 400,
          });
    }
    
    //mảng chứa danh sách các giao dịch
    //@ts-ignore
    let transactions = payload?.data;
    console.log(transactions)
    
    console.log(`Received ${transactions.length} transactions`);
    
    //thêm code xử lý giao dịch ở đây.
    
    return new Response("OK", {
        status: 200,
      });
}