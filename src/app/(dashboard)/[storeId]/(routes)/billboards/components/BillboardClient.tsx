"use client";

import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

type Props = {};

const BillboardClient = ({}: Props) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      {" "}
      <div className="flex items-center justify-between">
        <Heading title="Bill Boards (0)" description="manage your bill board" />
        <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
          <Plus className="mr-2 h-4 w-4" />
        </Button>
      </div>
      ;
      <Separator />
    </>
  );
};

export default BillboardClient;
