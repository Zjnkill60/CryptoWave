import Job from "@/database/job.model"
import { connectToDatabase } from "../mongoose"
import Banking from "@/database/banking.model"


export const findAllJobForUserHistory = async (userId :string) => {
    try {
        console.log(userId)
        connectToDatabase()
        const result = await Job.find({user : userId}).populate({
            path: "banking",
            model: Banking,
            select: "amount",
          })
        return result
       
    }
        
    catch (error) {
        console.log(error)
    }
}