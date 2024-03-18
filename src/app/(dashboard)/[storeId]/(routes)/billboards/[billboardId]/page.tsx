import prisma from "@/db/client";
import React from "react";
import { BillboardForm } from "./components/billboardForm";

type BillboardIdProps = {
  params: {
    billboardId: string;
  };
};

const billboardIdPage = async ({
  params: { billboardId },
}: BillboardIdProps) => {
  const billboard = await prisma.billboard.findUnique({
    where: {
      id: billboardId,
    },
  });

  return (
    <div className="flex-col flex">
      <div className="flex-1 space-y-4 p-8 pt-6 ">
        <BillboardForm
        initialData={billboard}
        />
      </div>
    </div>
  );
};

export default billboardIdPage;
