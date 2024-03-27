import prisma from "@/db/client";

const getTotalRevenue = async (storeId: string) => {
  const paidOrders = await prisma.order.findMany({
    where: {
      storeId,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  return paidOrders.reduce((total, order) => {
    const orderTotal = order.orderItems.reduce((orderSum, item) => {
      return +orderSum + +item.product.price;
    }, 0);
    return total + +order;
  }, 0);
};

export default getTotalRevenue;
