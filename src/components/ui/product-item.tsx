import { DiscountedProduct } from "@/helpers/calculateDiscountPrice";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDown } from "lucide-react";

interface ProductItemProps {
  product: DiscountedProduct;
}

function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="relative flex flex-col gap-4">
      <Badge className=" absolute left-2 top-2 flex gap-[2px] px-2 py-[2px]">
        <ArrowDown size={16} />
        <span className="text-end text-sm">{product.discountPercentage}%</span>
      </Badge>
      <div className="flex h-[170px] w-full items-center justify-center overflow-hidden rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          alt={product.description}
          width={0}
          height={0}
          sizes="100vh"
          className="h-auto max-h-[50%] w-auto max-w-[80%] object-contain"
        />
      </div>
      <div>
        <h1 className="w-[156px] overflow-hidden text-ellipsis whitespace-nowrap text-xs">
          {product.name}
        </h1>
        <div className="flex items-center gap-1 ">
          <p className="font-bold">
            $ {Number(product.basePrice).toFixed(2).replace(".", ",")}
          </p>
          {product.discountPercentage <= 0 ? null : (
            <span className="text-xs line-through opacity-75">
              ${product.finalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
