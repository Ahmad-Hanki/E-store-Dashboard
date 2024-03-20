import prisma from "@/db/client";
import BillboardClient from "./components/client";
import { BillboardColumn } from "./components/columns";

import { format } from "date-fns";
type Props = {
  params: { storeId: string };
};

const BillboardsPage = async ({ params: { storeId } }: Props) => {
  const billboards = await prisma.billboard.findMany({
    where: {
      storeId,
    },
    orderBy: {
      CreatedAt: "desc",
    },
  });

  const formattedBillboard: BillboardColumn[] = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.CreatedAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex flex-col ">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={formattedBillboard} />
      </div>
    </div>
  );
};

export default BillboardsPage;
