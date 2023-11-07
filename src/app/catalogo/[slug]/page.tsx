import BadgeTitle from "@/components/ui/badge-title";
import ProductItem from "@/components/ui/product-item";
import { CATEGORIES_ICONS } from "@/constants/CategoryIcons";
import calculateDiscountPrice from "@/helpers/calculateDiscountPrice";
import { prismaClient } from "@/lib/prisma";
import Link from "next/link";

async function CategoryPage({ params }: any) {
  const products = await prismaClient.product.findMany({
    where: {
      category: {
        slug: params.slug,
      },
    },
  });

  return (
    <section className="flex flex-col gap-7 px-5 py-7">
      <div>
        <BadgeTitle title={params.slug}>
          {CATEGORIES_ICONS[params.slug as keyof typeof CATEGORIES_ICONS]}
        </BadgeTitle>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-7">
        {products.map((product) => {
          return (
            <Link key={product.id} href={`/produto/${product.slug}`}>
              <ProductItem product={calculateDiscountPrice(product)} />
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default CategoryPage;
