import { NextResponse } from "next/server"


export function GET(){
    return NextResponse.json({
        user:"mehak",
        email:"singlamehak@gmail.com"
    })
}

///backend is written here