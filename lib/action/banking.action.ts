"use server";

import Banking from "@/database/banking.model";
import { connectToDatabase } from "../mongoose";
import Job from "@/database/job.model";
import { IPropsContent } from "@/components/ContentBanking";

interface ICreateBanking {
    id: string;
    description: string;
    amount: number;
    cusum_balance: number;
    when : Date;  
}



export const createNewBillBanking = async (params : ICreateBanking[]) => {
    try {
        connectToDatabase()
        for(let i = 0; i < params.length; i++) {
            await Banking.create({id:params[i].id,description:params[i].description,amount:params[i].amount,balance:params[i].cusum_balance,timeBanking:params[i].when}) 
        }
    } catch (error) {
        console.log(error)
    }
}

export const findOneBilling = async (dataTask : IPropsContent,price : number) => {
    try {
        console.log("billingContent : ",dataTask.contentBilling)
        connectToDatabase()
    
        let data = await  Banking.findOne({"description": { "$regex": dataTask?.contentBilling, "$options": "i" }, amount : price})
        console.log('data : ',data)
        if(data) {
            console.log(dataTask)
            await Job.create({...dataTask,taskName : dataTask?.packed ,user:dataTask?.user, banking:data?._id,status:"Pending" })
        }
        return data
    }
        
    catch (error) {
        console.log(error)
    }
}