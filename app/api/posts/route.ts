import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url)
    console.log('req => ', searchParams.get('name'))
    return NextResponse.json({message: "Hello"},  { status: 301})
}
 

export async function POST(request: Request) {
    const body = await request.json()
    return NextResponse.json({payload: body}, { status: 301})
}

//export async function HEAD(request: Request) {}
 
//export async function PUT(request: Request) {}
 
//export async function DELETE(request: Request) {}
 
//export async function PATCH(request: Request) {}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and set the appropriate Response `Allow` header depending on the other methods defined in the Route Handler.
//export async function OPTIONS(request: Request) {}