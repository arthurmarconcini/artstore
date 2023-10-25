import { prismaClient } from "@/lib/prisma";
import { Category } from "@prisma/client";
import CategoryItem from "./CategoryItem";

async function Categories() {
  const categories: Category[] = await prismaClient.category.findMany({});

  return (
    <section className="grid w-full grid-cols-2 gap-x-4 gap-y-2 px-5">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </section>
  );
}

export default Categories;
