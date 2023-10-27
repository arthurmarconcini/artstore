import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { Grid2X2 } from "lucide-react";
import Image from "next/image";

async function CategoriesPage() {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="flex flex-col gap-[30px] px-5 py-[30px]">
      <div>
        <Badge
          variant="outline"
          className="gap-1 border-2 border-primary px-3 py-1"
        >
          <Grid2X2 size={16} />
          <p className="text-base font-bold uppercase">Catálogo</p>
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-7  ">
        {categories.map((category) => {
          return (
            <div
              key={category.id}
              className="bg-category-item-gradient flex w-full flex-col overflow-hidden rounded-lg"
            >
              <div className="flex h-full w-full items-center justify-center ">
                <Image
                  alt={category.slug}
                  src={category.imageUrl}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
                />
              </div>
              <div className="bg-accent p-4">
                <p className=" text-center text-sm font-bold">
                  {category.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoriesPage;
