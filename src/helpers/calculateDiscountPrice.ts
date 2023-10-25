import { Product } from "@prisma/client";

export interface DiscountedProduct extends Product {
  finalPrice: number;
}

function calculateDiscountPrice(product: Product): DiscountedProduct {
  if (product.discountPercentage <= 0) {
    return {
      ...product,
      finalPrice: Number(product.basePrice),
    };
  }

  return {
    ...product,
    finalPrice:
      Number(product.basePrice) -
      (product.discountPercentage / 100) * Number(product.basePrice),
  };
}

export default calculateDiscountPrice;
