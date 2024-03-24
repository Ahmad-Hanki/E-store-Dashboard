"use client";

import Heading from "@/components/ui/Heading";
import { Separator } from "@/components/ui/separator";
import { OrderColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/DataTable";

type Props = {
  data: OrderColumn[];
};

const OrderClient = ({ data }: Props) => {
  return (
    <>
      {" "}
      <Heading
        title={`Orders (${data.length})`}
        description="manage your Orders"
      />
      <Separator />
      <DataTable columns={columns} data={data} searchKey="products" />
    </>
  );
};

export default OrderClient;
