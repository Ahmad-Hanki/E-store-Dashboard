import prisma from "@/db/client";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const userId = auth();
    const body = await req.json();

    const { name } = body;
    if (!name)
    {
        console.log('name:' , name)
      return NextResponse.json({ message: "no input" }, { status: 400 });
    }
    if (!userId)
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const store = await prisma.store.create({
        data: {
            name,
            userId:userId.userId!,
        }
    })
    console.log(userId)
    return NextResponse.json({ message: "success" }, { status: 200 });

  } catch (error) {
    console.group("[[[[stores]]]]:::", error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
