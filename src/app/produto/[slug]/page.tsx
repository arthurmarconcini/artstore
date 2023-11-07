import { prismaClient } from "@/lib/prisma";
import ImageView from "./components/ImageView";
import ProductDetails from "./components/productDetails";
import calculateDiscountPrice from "@/helpers/calculateDiscountPrice";
import ProductList from "@/components/ui/product-list";

async function Product({ params }: any) {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: params.slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) {
    return null;
  }

  return (
    <section className="mb-7">
      <ImageView imageUrls={product!.imageUrls}></ImageView>
      <ProductDetails product={calculateDiscountPrice(product)} />
      <ProductList title="Recomendados" products={product.category.products} />
    </section>
  );
}

export default Product;
