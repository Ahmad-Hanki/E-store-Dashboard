import prisma from "@/db/client";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
   
    const { userId } = auth();
    const body = await req.json();
    const { name } = body;

    if (!userId || !name) {
      return NextResponse.json({ message: "no user or name" }, { status: 402 });
    }

    if (!params.storeId) {
      return NextResponse.json({ message: "params" }, { status: 402 });
    }

    const store = await prisma.store.updateMany({
      where: {
        id: params.storeId,
        userId,
      },
      data: {
        name,
      },
    });

    return NextResponse.json({ message: "update success " }, { status: 200 });
  } catch (err) {
    console.log(err, "in settings");
    console.log(err)
    return NextResponse.json({ message: "error " }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { storeId: string } } // must be second
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ message: "no user or name" }, { status: 402 });
    }

    if (!params.storeId) {
      return NextResponse.json({ message: "params" }, { status: 402 });
    }

    const store = await prisma.store.deleteMany({
      where: {
        id: params.storeId,
        userId,
      },
    });

    return NextResponse.json({ message: "delete success " }, { status: 200 });
  } catch (err) {
    console.log(err, "in settings");
    return NextResponse.json({ message: "error " }, { status: 500 });
  }
}
