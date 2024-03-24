import prisma from "@/db/client";
import { OrderColumn } from "./components/columns";

import { format } from "date-fns";
import { formatter } from "@/lib/utils";
import OrderClient from "./components/client";
type Props = {
  params: { storeId: string };
};

const OrdersPage = async ({ params: { storeId } }: Props) => {
  const orders = await prisma.order.findMany({
    where: {
      storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  const formattedOrders: OrderColumn[] = orders.map((item) => ({
    id: item.id,
    phone: item.phone,
    adress: item.adress,
    isPaid : item.isPaid,
    products: item.orderItems.map((item) => item.product.name).join(", "),
    totalPrice: formatter.format(
      item.orderItems.reduce((total, item) => {
        return total + +item.product.price;
      }, 0)
    ),
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex flex-col ">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <OrderClient data={formattedOrders} />
      </div>
    </div>
  );
};

export default OrdersPage;
