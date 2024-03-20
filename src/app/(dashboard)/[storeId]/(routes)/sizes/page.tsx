import prisma from "@/db/client";
import { SizeColumn } from "./components/columns";
SizesClient
import { format } from "date-fns";
import SizesClient from "./components/client";
type Props = {
  params: { storeId: string };
};

const SizePage = async ({ params: { storeId } }: Props) => {
  const sizes = await prisma.size.findMany({
    where: {
      storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedSizes: SizeColumn [] = sizes.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex flex-col ">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizesClient data={formattedSizes} />
      </div>
    </div>
  );
};

export default SizePage;
