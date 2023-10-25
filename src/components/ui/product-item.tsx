import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductItemProps {
  product: Product;
}

function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex h-[170px] w-[156px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          alt={product.description}
          width={0}
          height={0}
          sizes="100vh"
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
        />
      </div>
      <div>
        <h1 className="w-[156px] overflow-hidden text-ellipsis whitespace-nowrap text-xs">
          {product.name}
        </h1>

        <p className="font-bold">
          $ {Number(product.basePrice).toFixed(2).replace(".", ",")}
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
