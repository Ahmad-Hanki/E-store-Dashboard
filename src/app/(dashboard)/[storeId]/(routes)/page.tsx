import prisma from "@/db/client";

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboardPage = async ({ params: { storeId } }: DashboardPageProps) => {
  const store = await prisma.store.findFirst({
    where: {
      id: storeId
    },
  });
  return <div>
    Active store: {store?.name}
  </div>;
};

export default DashboardPage;
