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

export const getUserByClerkId = (id : string) => {
    try {
        connectToDatabase()
        const user = User.findOne({clerkId:id})
        return user
    } catch (error) {
        console.log(error)
    }
}