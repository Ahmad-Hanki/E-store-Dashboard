import prisma from "@/db/client";
import { ColorColumn } from "./components/columns";
ColorsClient
import { format } from "date-fns";
import ColorsClient from "./components/client";
type Props = {
  params: { storeId: string };
};

const ColorsPage = async ({ params: { storeId } }: Props) => {
  const colors = await prisma.color.findMany({
    where: {
      storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedColors: ColorColumn [] = colors.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex flex-col ">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorsClient data={formattedColors} />
      </div>
    </div>
  );
};

export default ColorsPage;
