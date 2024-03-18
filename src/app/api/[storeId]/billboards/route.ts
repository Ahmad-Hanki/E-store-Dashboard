import prisma from "@/db/client";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { label, imageUrl } = body;
    if (!label || !imageUrl) {
      return NextResponse.json({ message: "no inputsss" }, { status: 400 });
    }
    if (!userId)
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    if (!params.storeId) {
      return NextResponse.json(
        { message: "storeId is required" },
        { status: 401 }
      );
    }

    const storeByUserId = await prisma.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    const billboard = await prisma.billboard.create({
      data: {
        label,
        imageUrl,
        storeId: params.storeId,
      },
    });
    console.log(userId);
    return NextResponse.json(
      { message: "success bill board post" },
      { status: 200 }
    );
  } catch (error) {
    console.group("[[[[stores]]]]:::", error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();
    
    if (!params.storeId) {
      return NextResponse.json(
        { message: "storeId is required" },
        { status: 401 }
      );
    }

    const billboards = await prisma.billboard.findMany({
      where: {
        storeId: params.storeId,
      },
    });
    console.log(userId);
    return NextResponse.json(
      { message: "success bill board post" },
      { status: 200 }
    );
  } catch (error) {
    console.log("[[[[stores]]]]:::", error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
