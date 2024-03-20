"use client";

import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { SizeColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/DataTable";
import ApiList from "@/components/ui/api-list";

type Props = {
  data: SizeColumn[];
};

const SizesClient = ({ data }: Props) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      {" "}
      <div className="flex items-center justify-between">
        <Heading
          title={`Sizes (${data.length})`}
          description="manage your Sizes "
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/sizes/new`)}
        >
          <Plus className="mr-2 h-4 w-4" />
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />
      <Heading title="API" description="API calls for sizes" />
      <Separator />
      <ApiList entityName="sizes" entityIdName="sizeid" />
    </>
  );
};

export default SizesClient;
