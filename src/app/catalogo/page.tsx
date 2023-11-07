import BadgeTitle from "@/components/ui/badge-title";
import { prismaClient } from "@/lib/prisma";
import { Grid2X2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function CategoriesPage() {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="flex flex-col gap-[30px] px-5 py-[30px]">
      <div>
        <BadgeTitle title="Catálogo">
          <Grid2X2 size={16} />
        </BadgeTitle>
      </div>

      <div className="grid grid-cols-2 gap-7  ">
        {categories.map((category) => {
          return (
            <Link key={category.id} href={`/catalogo/${category.slug}`}>
              <div className="flex w-full flex-col overflow-hidden rounded-lg ">
                <div className="flex h-36 w-full items-center justify-center bg-category-item-gradient">
                  <Image
                    alt={category.slug}
                    src={category.imageUrl}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-full max-h-[70%] w-full max-w-[70%]  object-contain"
                  />
                </div>
                <div className="bg-accent p-4">
                  <p className=" text-center text-sm font-bold">
                    {category.name}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CategoriesPage;
