import { NextResponse } from "next/server";

export default function GET (req:Request) {
    console.log(123123213)
    return NextResponse.json({ message: "OK" },{status:200});
}