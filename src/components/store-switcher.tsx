'use client'

import { Store } from "@prisma/client";
import { Popover, PopoverTrigger } from "./ui/popover";
import { useStoreModal } from "@/hooks/useStoreModel";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import { Store as StoreIcon } from "lucide-react";

type PopoverTriggerProps = React.ComponentPropsWithRef<typeof PopoverTrigger>;

interface storeSwitcherProps extends PopoverTriggerProps {
  items: Store[];
}

const StoreSwitcher = ({ className, items = [] }: storeSwitcherProps) => {
  const storeModal = useStoreModal();
  const params = useParams();

  const router = useRouter();
  const formattedItems = items.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  const currentStore = formattedItems.find(
    (item) => item.value == params.storeId
  );

  const [open, setOpen] = useState(false);

  const onStoreSelect = (store: { value: string; label: string }) => {
    setOpen(false);
    router.push(`/${store.value}`);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button>
          <StoreIcon />
        </Button>
      </PopoverTrigger>
    </Popover>
  );
};

export default StoreSwitcher;
