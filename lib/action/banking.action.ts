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
        params.map(async (item) => {
            console.log("item :",item)
            await Banking.create({id:item.id,description:item.description,amount:item.amount,balance:item.cusum_balance,timeBanking:item.when}) 
        })
    } catch (error) {
        console.log(error)
    }
}