import { prismaClient } from "@/lib/prisma";
import ImageView from "./components/ImageView";
import ProductDetails from "./components/productDetails";
import calculateDiscountPrice from "@/helpers/calculateDiscountPrice";
import ProductList from "@/components/ui/product-list";
import { Product } from "@prisma/client";

async function Product({ params }: any) {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      category: true,
    },
  });

  const relatedProducts: Product[] = await prismaClient.product.findMany({
    where: {
      categoryId: product?.categoryId,
    },
  });

  return (
    <section className="mb-7">
      <ImageView imageUrls={product!.imageUrls}></ImageView>
      <ProductDetails product={calculateDiscountPrice(product!)} />
      <ProductList title="Recomendados" products={relatedProducts} />
    </section>
  );
}

export default Product;
