"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";

interface ICreateUser {
    clerkId: string;
    name: string;
    username: string;
    email: string;
    password?: string;
    picture: string;
}


export const createNewUser = (params : ICreateUser) => {
    try {
        connectToDatabase()
        const user = User.create(params)
        return user
    } catch (error) {
        console.log(error)
    }
}