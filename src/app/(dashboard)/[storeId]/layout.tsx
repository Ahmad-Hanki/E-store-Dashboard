import Navbar from "@/components/Navbar";
import prisma from "@/db/client";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const DashboardLayout = async ({
  children,
  params: { storeId },
}: {
  children: ReactNode;
  params: { storeId: string };
}) => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const store = await prisma.store.findFirst({
    where: {
      id: storeId,
      userId,
    },
  });

  if (!store) redirect("/");
  return (
    <>
      <Navbar/>
      {children}
    </>
  );
};

export default DashboardLayout;
