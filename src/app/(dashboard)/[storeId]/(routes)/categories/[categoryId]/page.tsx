import prisma from "@/db/client";
import React from "react";
import { CategoryForm } from "./components/CategoryForm";

type CategoryPageProps = {
  params: {
    categoryId: string;
    storeId: string;
  };
};

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const categoryId = await prisma.category.findUnique({
    where: {
      id: params.categoryId,
    },
  });

  const billboards = await prisma.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return (
    <div className="flex-col flex">
      <div className="flex-1 space-y-4 p-8 pt-6 ">
        <CategoryForm initialData={categoryId} billboards={billboards} />
      </div>
    </div>
  );
};

export default CategoryPage;
