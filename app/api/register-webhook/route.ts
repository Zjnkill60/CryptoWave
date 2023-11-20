import { NextResponse } from "next/server";

export  function GET (req:Request) {
    return Response.json({ messsage:"hello word "})
}