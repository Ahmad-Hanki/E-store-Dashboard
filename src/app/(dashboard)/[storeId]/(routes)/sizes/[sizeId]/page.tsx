import prisma from "@/db/client";
import React from "react";
import { SizeForm } from "./components/sizeForm";

type SizePageProps = {
  params: {
    sizeId: string;
  };
};

const SizePage = async ({ params: { sizeId } }: SizePageProps) => {
  const size = await prisma.size.findUnique({
    where: {
      id: sizeId,
    },
  });

  return (
    <div className="flex-col flex">
      <div className="flex-1 space-y-4 p-8 pt-6 ">
        <SizeForm initialData={size} />
      </div>
    </div>
  );
};

export default SizePage;
