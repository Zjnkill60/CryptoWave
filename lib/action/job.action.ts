import Job from "@/database/job.model"
import { connectToDatabase } from "../mongoose"
import Banking from "@/database/banking.model"
import User from "@/database/user.model"


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

export const findAllHistory = async () => {
    try {
        connectToDatabase()
        const result = await Job.find({}).limit(5).sort({timeCreated:-1})
        .populate({
            path: "banking",
            model: Banking,
            select: "amount",
        })
        .populate({
            path: "user",
            model: User,
            select: "username",
        })
        return result
       
    }
        
    catch (error) {
        console.log(error)
    }
}