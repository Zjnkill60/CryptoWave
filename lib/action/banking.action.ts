"use server";

import Banking from "@/database/banking.model";
import { connectToDatabase } from "../mongoose";

interface ICreateBanking {
    id: string;
    description: string;
    amount: number;
    balance: number;
    timeBanking : Date;  
}


export const createNewBillBanking = async (params : ICreateBanking[]) => {
    try {
        connectToDatabase()
        params.map(async (item) => {
            await Banking.create(item) 
        })
    } catch (error) {
        console.log(error)
    }
}