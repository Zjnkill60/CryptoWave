"use server";

import Banking from "@/database/banking.model";
import { connectToDatabase } from "../mongoose";

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
            console.log(params[i].id,params[i].description)
            await Banking.create({id:params[i].id,description:params[i].description,amount:params[i].amount,balance:params[i].cusum_balance,timeBanking:params[i].when}) 
        }
    } catch (error) {
        console.log(error)
    }
}