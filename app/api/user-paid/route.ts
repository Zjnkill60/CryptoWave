import { NextResponse } from "next/server";

export  function GET (req:Request) {
    console.log(123123221313)
    return Response.json({ messsage:"hello word"})
}