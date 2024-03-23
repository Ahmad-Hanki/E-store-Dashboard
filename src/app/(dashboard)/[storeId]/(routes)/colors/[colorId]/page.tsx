import prisma from "@/db/client";
import React from "react";
import { ColorForm } from "./components/colorForm";

type ColorPageProps = {
  params: {
    colorId: string;
  };
};

const ColorPage = async ({ params: { colorId } }: ColorPageProps) => {
  const color = await prisma.color.findUnique({
    where: {
      id: colorId,
    },
  });

  return (
    <div className="flex-col flex">
      <div className="flex-1 space-y-4 p-8 pt-6 ">
        <ColorForm initialData={color} />
      </div>
    </div>
  );
};

export default ColorPage;
