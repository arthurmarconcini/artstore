import ProductItem from "@/components/ui/product-item";
import calculateDiscountPrice from "@/helpers/calculateDiscountPrice";
import { Product } from "@prisma/client";

interface ProductListProps {
  products: Product[];
  title?: string;
}

function ProductList({ products, title }: ProductListProps) {
  return (
    <section className=" flex w-full flex-col gap-3">
      <h1 className="px-5 font-bold uppercase">{title}</h1>
      <div className="flex w-full gap-4 overflow-x-auto overflow-y-hidden px-5 [&::-webkit-scrollbar]:hidden">
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              product={calculateDiscountPrice(product)}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ProductList;
